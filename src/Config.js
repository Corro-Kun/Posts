import {config} from "dotenv";

config();

export const Mongodb = process.env.MONGODB_URL

export const PORT = process.env.PORT;