import mongoose from "mongoose";
 const userSchema=new mongoose.Schema(
 {
    
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true

    },
    

    


 });
 export const SigninModel=mongoose.model("Signin",userSchema)