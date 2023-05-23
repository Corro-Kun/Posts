import Post from "../models/Post.js";

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
        const {title, description} = req.body;

        const newPost = new Post({title, description});

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