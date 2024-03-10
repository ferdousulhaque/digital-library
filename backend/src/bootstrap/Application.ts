import express, {Express} from "express";
import http from "http";
import router from "@routes/index";
import config from "@config/config";
import Database from "../db";

class Application {
    private readonly app: Express;

    constructor() {
        this.app = express();
    }

    public boot(): Application {
        this.bootRoutes();
        this.connectDatabase();
        this.onBootComplete();

        return this;
    }

    public startServer(): Express {
        const server = http.createServer(this.app);
        server.listen(config.port,  config.host, () =>
            console.log(`Server is running at http://${config.host}:${config.port}`)
        );
        return this.app;
    }

    private connectDatabase(): void {
        const db = new Database();
        db.sequelize?.sync();
    }

    private bootRoutes(): void {
        this.app.use('/', router)
    }

    private onBootComplete(): void {

    }

}

export default new Application();