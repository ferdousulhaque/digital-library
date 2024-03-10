import dotenv from "dotenv";

dotenv.config();

export const config = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER||"",
  PASSWORD: process.env.DB_PASS,
  DB: process.env.DB_DATABASE||"",
  pool: {
    max: process.env.DB_MAX_POOL||5,
    min: process.env.DB_MIN_POOL||0,
    acquire: 30000,
    idle: 10000
  }
};

export const dialect = "postgres";