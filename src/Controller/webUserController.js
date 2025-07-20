import bcrypt from "bcrypt";
import { secretKey } from "../Utils/constant.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../Utils/sendEmail.js";
import { WebUser } from "../Model/model.js";

export const register = async (req, res, nest) => {
  try {
    let data = req.body;
    let password = data.password;

    let hashedPassword = await bcrypt.hash(password, 10);

    data = {
      ...data,
      password: hashedPassword,
      isVerifiedEmail: false,
      role: "user",
    };

    let result = await WebUser.create(data);
    let infoObj = {
      _id: result._id,
    };

    let expiryInfo = {
      expiresIn: "1h",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    await sendEmail({
      to: data.email,
      subject: "Account registration",
      html: `
          <h1> Your account has been registered succefully </h1>
          <p>Click this link to verify this email </p>
          <a href = "htpp://localhost:4000/webuser/verify-email?token=${token}">
                    http://localhost:4000/webuser/verify-email?token=${token}
          </a>
      `,
    });

    res.status(201).json({
      success: true,
      message: "web User registered successfully",
      result: result,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    // console.log(tokenString);
    let tokenArray = tokenString.split(" ");
    // console.log(tokenArray);
    let token = tokenArray[1];
    // console.log(token);

    let user = await jwt.verify(token, secretKey);

    let result = await WebUser.findByIdAndUpdate(
      user._id,
      { isVerifiedEmail: true },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "user verified successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let user = await WebUser.findOne({ email: email });

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.isVerifyEmail) {
      throw new Error(" user not verified");
    }

    let isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid Credentials");
    }

    let infoObj = {
      _id: user._id,
    };

    let expiryInfo = {
      expiresIn: "365d",
    };

    let token = await jwt.sign(infoObj, secretKey, expiryInfo);

    res.status(200).json({
      success: true,
      message: "user login successfully",
      result: user,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
