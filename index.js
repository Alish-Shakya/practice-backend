import express from "express";
import userRouter from "./src/Route/userRoute.js";
import connectDB from "./src/ConnectDB/connectDB.js";

import cors from "cors";
import contactRouter from "./src/Route/contactRoute.js";
import schoolRouter from "./src/Route/schoolRouter.js";

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors()); // allows all origins

connectDB();

app.use("/user", userRouter);
app.use("/school", schoolRouter);
app.use("/", contactRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
