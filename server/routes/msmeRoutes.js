// routes/msmeRoutes.js
import express from 'express';
import {
    register,
    login,
    getUserLoans,
    applyLoan,
    getMsmeId
} from '../controllers/msmeController.js';
import upload from '../middleware/upload.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// MSME registration
router.post('/register', upload.fields([
    { name: 'profitAndLoss', maxCount: 1 },
    { name: 'balanceSheet', maxCount: 1 },
    { name: 'assetsAndLiabilities', maxCount: 1 },
    { name: 'taxReturn', maxCount: 1 },
    { name: 'businessRegDoc', maxCount: 1 },
    { name: 'collateralDocs', maxCount: 1 },
]), register);

// MSME login
router.post('/login', login);

// Get MSME ID
router.get('/user/msme-id', getMsmeId);

// Fetch all loans for a specific MSME
router.get('/all-loans/:msmeId', authMiddleware, getUserLoans);

// MSMEs apply for a loan
router.post('/apply', authMiddleware, applyLoan);

export default router;