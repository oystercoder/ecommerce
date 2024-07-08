import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type:String, required: true },
    date: { type: String},
    content: { type: String, required: true },
    images: [{ type: String, required: true }],
});

const blog = mongoose.model('blogs', blogSchema);

export default blog;