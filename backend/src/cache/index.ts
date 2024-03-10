import { config } from "@config/redis";
import { Tedis, TedisPool } from "tedis";

export default new Tedis({
  port: 6379,
  host: config.host,
});