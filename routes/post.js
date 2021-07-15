const express = require('express');
const router = express.Router();
const authMiddleware = require("../config/auth");
const postController = require("../controller/post");

router.post("/", authMiddleware, postController.addPost);
router.get("/", authMiddleware, postController.getAllPost);
router.get("/:postId", authMiddleware, postController.getParticularPost);
router.put("/:postId", authMiddleware, postController.editPost);
router.delete("/:postId", authMiddleware, postController.deletePost);
router.put("/likes/:id" , authMiddleware, postController.likePost);

module.exports = router;

