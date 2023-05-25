import Post from "../models/Post.js";
import { UploadImage } from "../libs/clodinary.js";

export const GetPosts = async (req, res) =>{
    try {
        const posts = await Post.find();
        res.send(posts); 
    } catch (error) {
        res.send('error 500');       
    }
}

export const PostPosts = async (req, res) =>{
    try {

        let image;

        const {title, description} = req.body;

        if (req.files.image){
            const respon = await UploadImage(req.files.image.tempFilePath);
            image = {
                url: respon.secure_url,
                public_id: respon.public_id
            }
        }

        const newPost = new Post({title, description, image});
        
        await newPost.save();

        return res.json(newPost);
    } catch (error) {
        res.send('error 500'); 
    }
}

export const PutPosts = async (req, res) =>{
    try {
        const data = await Post.findByIdAndUpdate(req.params.id, req.body);
        res.send(data);
    } catch (error) {
        res.send('error 500');        
    }
}

export const DeletePosts = async (req, res) =>{
    try {
        const data = await Post.findByIdAndDelete(req.params.id);      
        if (!data) return res.sendStatus(404);
        res.send(data);
    } catch (error) {
        res.send('error 500');
    }
}

export const GetIdPosts = async (req, res) =>{
    try {
        const data = await Post.findById(req.params.id);
        if(!data) return res.sendStatus(404);
        res.send(data);
    } catch (error) {
        req.send('error 500');        
    }
}