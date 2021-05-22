import express from "express";
import { getPosts, createPost } from "../controllers/postsControllers.js";

const router = express.Router();

// localhost:5000/api/posts
router.get("/", getPosts);
router.post("/", createPost);

export default router;
