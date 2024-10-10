import { Router } from 'express';
import Loan from '../models/Loan.js'; 
import Investor from '../models/Investor.js'; 

const router = Router();

router.post('/ApplyLoan', async (req, res) => {
    const { amount, investorId } = req.body;

    // Validate incoming data
    if (!amount || !investorId) {
        return res.status(400).json({ success: false, message: 'Amount and investor ID are required' });
    }

    try {
        // Check if the investor exists
        const investor = await Investor.findById(investorId);
        if (!investor) {
            return res.status(404).json({ success: false, message: 'Investor not found' });
        }

        // Create a new loan instance
        const loan = new Loan({
            amount: amount,
            investorId: investorId,
            status: 'pending'
        });

        // Save the loan to the database
        await loan.save();

        // Update the investor document to associate the loan
        await Investor.findByIdAndUpdate(investorId, {
            $push: { loans: loan._id } // Assuming `loans` is an array in the Investor schema
        });

        res.status(200).json({ success: true, message: 'Loan applied successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error applying loan' });
    }
});

export default router;
