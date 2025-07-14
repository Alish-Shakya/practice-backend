import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  staffName: {
    type: String,
    require: true,
  },
  studentName: {
    type: String,
    require: true,
  },
  class: {
    type: Number,
    require: true,
  },
});

export default schoolSchema;
