const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        content: {
            type: String
        },
        image: {
            type: String
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        likes: {
            type: Array,
            default: [],
        }
    },
    {timestamps: true},
)

const Post = mongoose.model("Post", postSchema );
module.exports = Post;