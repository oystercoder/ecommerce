// middleware/verifyToken.js

import jwt from 'jsonwebtoken';

 const verifyToken=(req,res,next)=>{
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






export default verifyToken;

