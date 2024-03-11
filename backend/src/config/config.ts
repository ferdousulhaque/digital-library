import dotenv from "dotenv";

dotenv.config();

const config = {
    serviceName: process.env.SERVICENAME || '',
    port: Number(process.env.API_PORT) || 8081,
    host: process.env.HOST || 'localhost',
    loggerLevel: 'debug',
    timezone: 'Asia/Dhaka',
}

export = config;