const express=require("express");
const router=express.Router();
const authMiddleware=require("../config/auth");
const UserController=require("../controller/user");

router.get("/",authMiddleware,UserController.getAllUser);
router.delete("/:id",authMiddleware,UserController.deleteUser);
router.put("/:id",authMiddleware,UserController.updateUser);
router.put("/:id/follow",authMiddleware,UserController.followUser);
router.put("/:id/unfollow",authMiddleware,UserController.unfollowUser);

module.exports=router;