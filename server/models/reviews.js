import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
   rating:{
    type: Number,
    required: true,
    min: 1,
    max: 5
   
   },
   review:{
    type: String,
    required: true,

   },
   likes:{
      type: Number,
      default: 0,
      required:false
   },
   replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
      }
    ]

});

const Review = mongoose.model('Review',reviewSchema);

export default Review;
