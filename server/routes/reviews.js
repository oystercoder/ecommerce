import express from 'express';
import bcrypt from 'bcrypt';
import Signup from '../models/SignupModel.js'; // Replace with your actual Mongoose user model
const router = express.Router();
import Review from '../models/reviews.js';
import verifyToken from '../middleware/VerifyToken.js';

import Reply from '../models/Reply.js';

router.post('/Review', async (req, res) => {
    const { rating,review } = req.body;
    if (!rating ||!review) {
        return res.status(400).json({ message: 'Please fill all the fields!' });
    }

    try {
        // Check if user already exists with the given name
        

        // Create a new user instance
        const newReview = new Review({
            rating,
            review
        });

        // Save the new user
        await newReview.save();

        // Respond with success message
        res.status(200).json({ message: 'Review stored successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/review', async (req, res) => {
    try {
      const totalReviews = await Review.countDocuments();
      res.json({ totalReviews: totalReviews });
    } catch (error) {
      console.error('Error fetching total reviews:', error);
      res.status(500).json({ message: 'Failed to fetch total reviews' });
    }
  });



export {router as reviewRouter}
router.get('/reviews', async (req, res) => {
  try {
    let sortField = 'createdAt'; // Default sort field
    let sortOrder = -1; // Default sort order (descending)

    // Determine sort field based on query parameter
    if (req.query.sortField === 'likes') {
      sortField = 'likes';
    }

    // Determine sort order based on query parameter
    if (req.query.sortOrder === 'asc') {
      sortOrder = 1; // Ascending order
    }

    // Fetch reviews from the database and sort them
    const reviews = await Review.find().sort({ [sortField]: sortOrder });

    res.json({ Reviews: reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
});
  
export {router as allreviewRouter}


router.put('/reviews/:id/like', async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    review.likes++;
    const updatedReview = await review.save();
    res.json(updatedReview);
  } catch (error) {
    console.error('Error updating review likes:', error);
    res.status(500).json({ message: 'Failed to update review likes' });
  }
});

export {router as likesRouter}



router.post('/reviews/:reviewId/replies', async (req, res) => {
  const { reviewId } = req.params;
  const { content } = req.body;

  try {
    const newReply = new Reply({ reviewId, content });
    const savedReply = await newReply.save();

    // Add the reply to the review's replies array
    const review = await Review.findById(reviewId);
    review.replies.push(savedReply._id);
    await review.save();

    res.status(201).json(savedReply);
  } catch (error) {
    console.error('Error creating reply:', error);
    res.status(500).json({ message: 'Failed to create reply' });
  }
});
export {router as replyRouter}


router.get('/reviews/:reviewId/replies', async (req, res) => {
  const { reviewId } = req.params;

  try {
    const review = await Review.findById(reviewId).populate('replies');
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review.replies);
  } catch (error) {
    console.error('Error fetching replies:', error);
    res.status(500).json({ message: 'Failed to fetch replies' });
  }
});

export {router as getreplyRouter}

