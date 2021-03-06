const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        city:{
            type:String,
        },
        followers:{
            type:Array,
            default:[],
        },
        following:{
            type:Array,
            default:[],
        },
        bio:{
            type:String,
        },
        img:{
            type:String,
        },
        isVerified:{
            type:Boolean,
            default:false,
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;