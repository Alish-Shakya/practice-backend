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

export const readUser = async (req, res, next) => {
  try {
    let result = await User.find({});
    res.status(200).json({
      success: true,
      message: "user readed successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const singleUser = async (req, res, next) => {
  try {
  } catch (error) {}
};
