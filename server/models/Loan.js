import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true, // Make amount required
    },
    investorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Investor',
        required: true, // Make investorId required
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'], // Define possible statuses
        default: 'pending', // Default status
    },
});

// Exporting the Loan model
const Loan = mongoose.model('Loan', loanSchema);
export default Loan;
