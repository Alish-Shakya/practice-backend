import express from "express";
import userRouter from "./src/Route/userRoute";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/user", userRouter);
