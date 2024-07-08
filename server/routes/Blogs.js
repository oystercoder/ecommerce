import express from 'express';
import Blog from '../models/blogModel.js'; // Adjust the path as per your project structure

const router = express.Router();

// Route: POST /blogs
// Create a new blog entry
router.post('/blog', async (req, res) => {
    try {
        const { title, author, date, content, image } = req.body;

        // Create a new blog instance
        const newBlog = new Blog({
            title,
            author,
            date,
            content,
            image
        });

        // Save the new blog entry to the database
        const createBlog = await newBlog.save();

        res.status(201).json(createBlog); // Return the saved blog entry as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export {router as blogRouter};

router.get('/blog', async (req, res) => {
    try {
        const blogs = await Blog.find(); // Fetch all blogs from the database
        res.json(blogs); // Send JSON response with all blogs
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
export {router as allblogRoute};

 export const verifyToken=(req,res,next)=>{
            const token=req.headers.authorization;
            if(token){
                jwt.verify(token,"secret",(err)=>{
                if(err)return res.status(403).json({message:"invalid token"})
                next()
                
                
            })
        }
            else{
                return res.status(401).json({message:"no token provided"})
            }
            
        }