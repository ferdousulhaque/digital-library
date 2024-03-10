import 'module-alias/register';
import App from "./bootstrap/Application";

process.on("uncaughtException", (e : Error) => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", (e : Error) => {
    console.log(e);
    process.exit(1);
});

process.on('SIGINT', function onSigint() {
    process.exit(1);
});
  
process.on('SIGTERM', function onSigterm() {
    process.exit(1);
});

App.boot().startServer()