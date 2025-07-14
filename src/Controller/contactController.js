import { Contact } from "../Model/model.js";

export const createContact = async (req, res) => {
  try {
    const result = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: "Contact message saved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
