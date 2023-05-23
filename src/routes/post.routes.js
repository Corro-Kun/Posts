import {Router} from "express";
import {GetPosts, PostPosts, PutPosts, DeletePosts, GetIdPosts} from "../controllers/posts.controller.js"

const RoutePost = Router();

RoutePost.get('/posts', GetPosts);

RoutePost.post('/posts', PostPosts);

RoutePost.put('/posts/:id', PutPosts);

RoutePost.delete('/posts:id', DeletePosts);

RoutePost.get('/posts/:id', GetIdPosts);

export default RoutePost