// import express from 'express'
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import { signupModel } from '../models/SignupModel.js';

// const router=express.Router();
// router.post('/signup',async(req,res)=>{
//     const {name,phone,email,password}=req.body
//     //usermodel.users.insertOne({username:"soumy",password:"1emen"})
    
   
//     //const user=await usermodel.findOne({username})
   
//         const user = await signupModel.findOne({name});

//         if (user) {
//             // console.log(user); // User found
//              return res.status(401).json({message:"user already exists"});
//             //return res.json({message:"user exists"})
           
//         } 
//         if (phone) {
//             // console.log(user); // User found
//              return res.status(401).json({message:"user exists with the given phone number"});
//             //return res.json({message:"user exists"})
           
//         } 
//         if (email) {
//             // console.log(user); // User found
//              return res.status(401).json({message:"email already exists in the database"});
//             //return res.json({message:"user exists"})
           
//         } 
            
//             const newpassword=await bcrypt.hash(password,10);
//             const newuser=new Model({name:name,phone:phone,email:email,password:newpassword})
//             await newuser.save()
//             res.status(200).json({ message: 'user stored succesufully' });
        
    
    
//  console.log(user)
//     res.json(user);
// })
// export {router as userRouter}
// router.post('/signin',async(req,res)=>{
//     const {username,password}=req.body
//     const user = await userModel.findOne({username});
//     if(!user)
//         {
//             return res.status(401).json({message:"enter valid credentials"})

//         }
//         const isMatch=await bcrypt.compare(password,user.password)
//         if(!isMatch)
//         {
//             return res.status(401).json({message:"enter valid credentials"})
//         }
//         const token=jwt.sign({id:user._id},"secret")
//         res.status(200).json({token,userID:user._id,message:"login success"})


// })




// export const verifyToken=(req,res,next)=>{
//     const token=req.headers.authorization;
//     if(token){
//         jwt.verify(token,"secret",(err)=>{
//         if(err)return res.status(403).json({message:"invalid token"})
//         next()
        
        
//     })
// }
//     else{
//         return res.status(401).json({message:"no token provided"})
//     }
    
// }



import express from 'express';
import bcrypt from 'bcrypt';
import Signup from '../models/SignupModel.js'; // Replace with your actual Mongoose user model
const router = express.Router();
import Account from '../models/update.js'

router.post('/signup', async (req, res) => {
    const { name, phone, email, password } = req.body;
    console.log(phone)
    if (!name || !phone || !email || !password) {
        return res.status(400).json({ message: 'Please fill all the fields!' });
    }

    try {
        // Check if user already exists with the given name
        let user = await Signup.findOne({ name });
        if (user) {
            return res.status(401).json({ message: "User already exists with this name" });
        }

        // Check if user already exists with the given phone number
        user = await Signup.findOne({ phone });
        if (user) {
            return res.status(401).json({ message: "User already exists with this phone number" });
        }

        // Check if user already exists with the given email
        user = await Signup.findOne({ email });
        if (user) {
            return res.status(401).json({ message: "User already exists with this email" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new Signup({
            name,
            phone,
            email,
            password: hashedPassword
        });

        // Save the new user
        await newUser.save();

        // Respond with success message
        res.status(200).json({ message: 'User stored successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export {router as userRouter}

// routes/account.js


// PATCH /account/password - Update user password
router.patch('/signup', async (req, res) => {
    const { name,phone,email, newpassword, repeatpassword } = req.body;
    console.log(phone)
    if(!name||!phone||!email||!newpassword||!repeatpassword)
        {
            return res.status(400).json({ message: "All fields are required" });
            
        }

    
    try {
        // Validate that newpassword and repeatpassword match
        if (newpassword !== repeatpassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Find user by email
        let user = await Signup.findOne({ email });
        let  phoney = await Signup.findOne({ phone });

        if (!user) {
            return res.status(404).json({ message: 'User not found ,Register first' });
        }
        if (!phoney) {
            return res.status(404).json({ message: 'User not found ,Register first' });
        }

        // Hash the new password
         const hashedPassword = await bcrypt.hash(newpassword, 10);

        // Update user's password
        user.password =hashedPassword // Assuming you're updating the 'newpassword' field
        await user.save();

        // Respond with success message
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export {router as updateRouter};

