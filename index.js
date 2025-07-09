import express from "express";
import userRouter from "./src/Route/userRoute.js";
import connectDB from "./src/ConnectDB/connectDB.js";

const app = express();
const port = 4000;

app.use(express.json());

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/user", userRouter);
