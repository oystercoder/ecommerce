import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
   rating:{
    type: Number,
    required: true,
    min: 1,
    max: 5
   
   },
   review:{
    type: String,
    required: true,
    
   }
});

const Signup = mongoose.model('Signup', signupSchema);

export default Signup;
