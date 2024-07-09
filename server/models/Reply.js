import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
  reviewId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Reply = mongoose.model('Reply', replySchema);

export default Reply;
