import jwt from "jsonwebtoken";
import { secretKey } from "./src/Utils/constant.js";

let infoObj = {
  id: "1234",
};

let expInfo = {
  expiresIn: "1h",
};

let token = await jwt.sign(infoObj, secretKey, expInfo);
// console.log(token);

let token1 = token;
let verification = await jwt.verify(token1, secretKey);
console.log(verification);
