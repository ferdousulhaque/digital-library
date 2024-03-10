import path from 'path'
import dotenv from "dotenv";

dotenv.config();

export default {
    file: {
        errorEventName: 'info',
        logDirectory: path.resolve('log'), // NOTE: folder must exist and be writable...
        fileNamePattern: '<DATE>.log',
        dateFormat: 'YYYY.MM.DD'
    }
};