import dotenv from "dotenv";

dotenv.config();

export const config = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT||6379,
  pass: process.env.REDIS_PASSWORD,
  db: process.env.REDIS_DB,
};