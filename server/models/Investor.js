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
    contactInfo: {
        type: String,
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
        enum: ['Conservative', 'Moderate', 'Aggressive'],
        default: 'Conservative',
        required: true,
    },
    amountToInvest: {
        type: Number,
        required: true,
    },
    documents: {
        netWorthDocs: {
            type: String, // File path or URL
            required: true,
        },
        sourceOfFundsDocs: {
            type: String, // File path or URL
            required: true,
        },
        investmentExperienceDocs: {
            type: String, // File path or URL
            required: true,
        },
    },
    termsAccepted: {
        type: Boolean,
        required: true,
    },
    password: {
        type: String,
        required: true, // Storing password as plain text now
    },
    // loans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }], // Add this line to the investorSchema

});

const Investor = model('Investor', investorSchema);
export default Investor;
