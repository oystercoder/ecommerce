import express from 'express';
import bcrypt from 'bcrypt';
 import jwt from 'jsonwebtoken'
import {SigninModel} from '../models/userModel.js';
import Signup from '../models/SignupModel.js' // Replace with your actual Mongoose user model
const router = express.Router();



router.post('/signin',async(req,res)=>{
        const {email,password}=req.body
        const user = await Signup.findOne({ email });
        if(!user)
            {
                // return res.json(user)
              
                 return res.status(401).json({message:"enter valid credentials"})
                 
    
            }
            const isMatch=await bcrypt.compare(password,user.password)
            if(!isMatch)
            {
                return res.status(401).json({message:"enter valid password"})
            }
            const token=jwt.sign({id:user._id},"secret")
            console.log(token)
            res.status(200).json({token,userID:user._id,message:"login success"})
    
    
    })
    export {router as signinRouter}

//  export const verifyToken=(req,res,next)=>{
//             const token=req.headers.authorization;
//             if(token){
//                 jwt.verify(token,"secret",(err)=>{
//                 if(err)return res.status(403).json({message:"invalid token"})
//                 next()
                
                
//             })
//         }
//             else{
//                 return res.status(401).json({message:"no token provided"})
//             }
            
//         }
        