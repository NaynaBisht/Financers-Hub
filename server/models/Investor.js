// models/Investor.js
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const investorSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    idNumber: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    employerName: {
        type: String,
        required: true,
    },
    businessAddress: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    riskTolerance: {
        type: String,
        required: true,
    },
    amountToInvest: {
        type: Number,
        required: true,
    },
    termsAccepted: {
        type: Boolean,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    documents: {
        netWorthDocs: {
            type: String,
            required: true,
        },
        sourceOfFundsDocs: {
            type: String,
            required: true,
        },
        investmentExperienceDocs: {
            type: String,
            required: true,
        },
    },
}
//, { timestamps: true }
);

const Investor = mongoose.model('Investor', investorSchema);

export default Investor;
