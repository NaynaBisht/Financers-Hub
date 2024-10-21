// msmeRoutes.js
import express from 'express';
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

// routes/msmeRoutes.js
router.get('/loan-status/:msmeId', async (req, res) => {
    const { msmeId } = req.params;
    try {
        const loanRequests = await Loan.find({ msmeId }); // Fetch loans for the specific MSME
        res.status(200).json(loanRequests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch loan status' });
    }
});

router.post('/loan-requests/:id/accept', async (req, res) => {
    const { id } = req.params;
    try {
        const loanRequest = await Loan.findByIdAndUpdate(id, { status: 'Accepted' }, { new: true });
        res.status(200).json(loanRequest);
    } catch (error) {
        res.status(500).json({ error: 'Error accepting loan request' });
    }
});

router.post('/loan-requests/:id/decline', async (req, res) => {
    const { id } = req.params;
    try {
        const loanRequest = await Loan.findByIdAndUpdate(id, { status: 'Declined' }, { new: true });
        res.status(200).json(loanRequest);
    } catch (error) {
        res.status(500).json({ error: 'Error declining loan request' });
    }
});



export default router;
