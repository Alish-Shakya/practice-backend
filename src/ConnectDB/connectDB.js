import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/backend-test");
};

export default connectDB;
