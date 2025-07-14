import express from "express";
import userRouter from "./src/Route/userRoute.js";
import connectDB from "./src/ConnectDB/connectDB.js";

import cors from "cors";
import contactRouter from "./src/Route/contactRoute.js";

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors()); // allows all origins

connectDB();

app.use("/user", userRouter);
app.use("/", contactRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
