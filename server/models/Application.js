import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
    loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
    investorId: { type: String, required: true },
    terms: { type: String, required: true },
}, { timestamps: true });

const Application = mongoose.model('Application', ApplicationSchema);
export default Application;
