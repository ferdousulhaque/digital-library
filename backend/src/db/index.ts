import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "@config/database";
import Book from "../models/book";

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize(
        config.DB,
        config.USER,
        config.PASSWORD,
        {
            host: config.HOST,
            dialect: dialect,
            pool: {
                max: 5,
                min: 0,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            },
            models: [Book]
        }
    );

    

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the Database:", err);
      });
  }
}

export default Database;