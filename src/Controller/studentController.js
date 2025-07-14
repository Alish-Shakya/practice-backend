import { School } from "../Model/model.js";

export const createSchool = async (req, res, next) => {
  try {
    let result = await School.create(req.body);
    res.status(201).json({
      success: true,
      message: "school created succcessfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
