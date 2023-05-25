import {v2} from "cloudinary";
import { KEY, SECRET, CLOUD_NAME } from "../Config.js";

v2.config({
    api_key: KEY,
    api_secret: SECRET,
    cloud_name: CLOUD_NAME
})

export async function UploadImage(filepaht){
    return await v2.uploader.upload(filepaht, {
        folder: 'posts'
    });
}