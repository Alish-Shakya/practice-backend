import nodemailer from "nodemailer";
import { smtp_mail, smtp_pass } from "./constant.js";

const transporterInfo = {
  host: "smpt.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: smtp_mail,
    pass: smtp_pass,
  },
};

export const sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("Mail error has occured", error.message);
  }
};
