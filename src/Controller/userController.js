import { User } from "../Model/model.js";

export const createUser = async (req, res, next) => {
  try {
    let result = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
