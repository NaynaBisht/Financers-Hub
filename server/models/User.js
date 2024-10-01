import { Schema, model } from 'mongoose'; // Removed bcrypt

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
        required: true, // Password stored as plain text now
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

// Removed pre-save password hashing middleware
// No hashing now

const User = model('User', userSchema);
export default User;
