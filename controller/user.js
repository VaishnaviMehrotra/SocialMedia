const User = require("../models/user");

module.exports = {
    async getAllUser(req, res) {
        try {
            const user = await User.find({},{password:0});
            res.status(201).send(user);
        }
        catch (err) {
            res.status(500).send("Internal Server Error");
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.deleteOne({ _id: req.params.id });
            res.status(201).send("User deleted Successfully");
        }
        catch (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
    },
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.id },
                {
                    $set: { ...req.body },
                },
                {
                    new: true,
                    projection: {
                        password: 0,
                    },
                });
            console.log(user);
            res.status(201).send(user);
        }
        catch (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
    },
    async followUser(req,res){
        try{
            const user=await User.findById(req.params.id);
            const newUser=await User.findById(req.body._id);
            if(!user.followers.includes(req.body._id)){
                await user.updateOne({$push:{following:req.body._id}});
                await newUser.updateOne({$push:{followers:req.params.id}});
                res.status(200).send("followed");
            }
            else{
                res.status(500).send("you already follow");
            }
        }
        catch(err){
            res.status(500).send("Internal Server Error");
        }
    },
    async unfollowUser(req,res){
        try{
            const user=await User.findById(req.params.id);
            const newUser=await User.findById(req.body._id);
            if(user.followers.includes(req.body._id)){
                await user.updateOne({$pull:{following:req.body._id}});
                await newUser.updateOne({$pull:{followers:req.params.id}});
                res.status(200).json("unfollow");
            }
            else{
                res.status(500).json("you already unfollow");
            }
        }
        catch(err){
            res.status(500).send("Internal Server Error");
        }
    },
}