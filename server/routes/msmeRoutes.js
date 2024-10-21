// msmeRoutes.js
import express from 'express';
import Application from '../models/Application.js'; 
import msmeController from '../controllers/msmeController.js'; 
import Loan from '../models/Loan.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// MSME registration route with file uploads for documents
router.post(
    '/register',
    upload.fields([
        { name: 'profitAndLoss', maxCount: 1 },
        { name: 'balanceSheet', maxCount: 1 },
        { name: 'assetsAndLiabilities', maxCount: 1 },
        { name: 'taxReturn', maxCount: 1 },
        { name: 'businessRegDoc', maxCount: 1 },
        { name: 'collateralDocs', maxCount: 1 },
    ]),
    msmeController.register
);

// Login route (no file uploads)
router.post('/login', msmeController.login);

// Existing POST route for applying for loans
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

// **GET route to fetch loan requests**
router.get('/loan-requests', async (req, res) => {
    try {
        const loanRequests = await Loan.find(); // Fetch all loan requests from the Loan model
        res.status(200).json(loanRequests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch loan requests' });
    }
});


export default router;
