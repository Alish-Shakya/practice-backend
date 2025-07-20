import mongoose from "mongoose";

const webUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  isMarried: {
    type: Boolean,
    require: true,
  },
  contact: {
    type: Number,
    require: true,
  },
  isVerifyEmail: {
    type: Boolean,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
});

export default webUserSchema;
