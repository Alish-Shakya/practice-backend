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
