import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    newpassword: { type: String, required: true },
    repeatpassword: { type: String, required: true }
});

const account = mongoose.model('account', accountSchema);

export default account;
