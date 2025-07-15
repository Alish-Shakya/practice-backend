import { config } from "dotenv";

config();

export let secretKey = process.env.SECRET_KEY;

export const smtp_mail = process.env.SMTP_MAIL;
export const smtp_pass = process.env.SMTP_PASSWORD;
