// routes/msmeRoutes.js
import express from 'express';
import Loan from '../models/Loan.js';

const router = express.Router();


// POST route for MSMEs to submit loan requests
router.post('/apply-loan', async (req, res) => {
    const { amount, tenure, purpose, msmeId } = req.body;
    try {
        const newLoan = new Loan({ amount, tenure, purpose, msmeId, status: 'Pending' });
        await newLoan.save();
        res.status(200).json({ message: 'Loan application submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to apply for loan' });
    }
});

router.get('/investor-dashboard', async (req, res) => {
    try {
        const loanRequests = await Loan.find(); // Fetch all loan requests
        res.status(200).json(loanRequests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch loan requests' });
    }
});
export default router; // Use ES6 export
