import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/users.js';
import { signinRouter } from './routes/Signin.js';
import { blogRouter } from './routes/Blogs.js';
import { allreviewRouter, reviewRouter } from './routes/reviews.js';
// import { updateRouter } from './routes/Update.js';
// import {userRouter} from './routes/users.js'
// import {recipesRouter} from './routes/recipes.js'
const app=express();
app.use(express.json())
app.use(cors())
//   app.use('/signin',userRouter)
  app.use('/auth',userRouter)
  app.use('/auth',signinRouter)

  app.use('/',blogRouter)
  app.use('/',reviewRouter)
  app.use('/',allreviewRouter)

  

// app.use('/recipes',recipesRouter)

// mongoose.connect("mongodb+srv://sushma:SrichapreSus192002@recipes.w21uyah.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes")
mongoose.connect("mongodb+srv://sushmasriya1jobs:SrichapreSus@cluster0.78poc.mongodb.net/")

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to the database');
});

// Check for connection errors
mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});





app.listen(3050, () => {
    console.log('Server is running on port 3050');
});