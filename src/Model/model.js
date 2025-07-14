import mongoose from "mongoose";
import userSchema from "../Schema/userSchema.js";
import contactSchema from "../Schema/contactSchema.js";
import schoolSchema from "../Schema/schoolSchema.js";

export const User = mongoose.model("User", userSchema);

export const Contact = mongoose.model("Contact", contactSchema);

export const School = mongoose.model("School", schoolSchema);
