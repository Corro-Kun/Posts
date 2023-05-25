import {config} from "dotenv";

config();

export const Mongodb = process.env.MONGODB_URL;

export const PORT = process.env.PORT;

export const KEY = process.env.KEY;

export const SECRET = process.env.SECRET;

export const CLOUD_NAME = process.env.CLOUD_NAME;