import mongoose from "mongoose";
const itemsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isNew: { type: Boolean, default: false },
    discount:{type:String,required:false},
    stars: { type: Number, min: 0, max: 5, default: 0 } ,
    offerExpiresIn: { type: Date },
   
    price: { type: Number, required: true },
    discountPrice: { type: Number, default: 0 },
    reviews: [{ type: String }],
    description: { type: String },
    images: [{ type: String }],
})