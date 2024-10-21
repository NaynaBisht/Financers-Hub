import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    tenure: { type: Number, required: true },
    purpose: { type: String, required: true },
    msmeId: { type: String, required: true },
    status: { type: String, default: 'Pending' },
}, { timestamps: true });

const Loan = mongoose.model('Loan', LoanSchema);
export default Loan;
