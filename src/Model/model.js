import mongoose from "mongoose";
import userSchema from "../Schema/userSchema.js";
import contactSchema from "../Schema/contactSchema.js";
import schoolSchema from "../Schema/schoolSchema.js";
import webUserSchema from "../Schema/webUserSchema.js";

export const User = mongoose.model("User", userSchema);

export const Contact = mongoose.model("Contact", contactSchema);

export const School = mongoose.model("School", schoolSchema);

export const WebUser = mongoose.model("WebUser", webUserSchema);
