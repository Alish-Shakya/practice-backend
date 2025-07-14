import mongoose from "mongoose";
import userSchema from "../Schema/userSchema.js";
import contactSchema from "../Schema/contactSchema.js";

export const User = mongoose.model("User", userSchema);

export const Contact = mongoose.model("Contact", contactSchema);
