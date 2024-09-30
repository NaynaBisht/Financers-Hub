import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

const userSchema = new Schema({
    companyName: {
        type: String,
        required: true,
    },
    industryType: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    annualRevenue: {
        type: Number,
        required: true,
    },
    documents: {  // Grouping document fields
        profitAndLoss: {
            type: String, // Storing the file path or URL
            required: true,
        },
        balanceSheet: {
            type: String, // Storing the file path or URL
            required: true,
        },
        assetsAndLiabilities: {
            type: String, // Storing the file path or URL
            required: true,
        },
        taxReturn: {
            type: String, // Storing the file path or URL
            required: true,
        },
        businessRegDoc: {
            type: String, // Storing the file path or URL
            required: true,
        },
        collateralDocs: {
            type: String, // Storing the file path or URL
            required: true,
        },
    },
});

// Hash password before saving to the database
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10); // Generate salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
});

const User = model('User', userSchema);
export default User;
