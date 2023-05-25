import express, { json } from "express";
import RoutePost from "./routes/post.routes.js";
import cors from "cors";
import morgan from "morgan";
import {ConnectDB} from "./db/ConnectDB.js";
import { PORT } from "./Config.js";
import fileupload from "express-fileupload"

const app = express();

ConnectDB();

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

app.use(json());

app.use(RoutePost);

app.use(cors());

app.use(morgan('dev'));

app.listen(PORT);

console.log('Server in runnig port', PORT);