// models/User.js
import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs'; // Import bcrypt as a default export

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Hash password before saving to the database
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10); // Use bcrypt here
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = model('User', userSchema);
export default User;
