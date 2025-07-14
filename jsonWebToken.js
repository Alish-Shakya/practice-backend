import jwt from "jsonwebtoken";
import { secretKey } from "./src/Utils/constant.js";

// let infoObj = {
//   id: "1234",
// };

// let expInfo = {
//   expiresIn: "1h",
// };

// let token = await jwt.sign(infoObj, secretKey, expInfo);
// console.log(token);

// let token1 = token;
// let verification = await jwt.verify(token1, secretKey);
// console.log(verification);

let info = {
  id: "5678",
};

let exp = {
  expiresIn: "1h",
};

let tok = await jwt.sign(info, secretKey, exp);
console.log(tok);

let tok1 = tok;
let verify = await jwt.verify(tok1, secretKey);
console.log(verify);
