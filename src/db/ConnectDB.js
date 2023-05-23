import mongoose from "mongoose";
import { Mongodb } from "../Config.js";

export async function ConnectDB(){
    try {
        const DB = await mongoose.connect(Mongodb); 
        console.log('connect to',DB.connection.name); 
    } catch (error) {
        console.error('Error connection mongodb');        
    }
}
