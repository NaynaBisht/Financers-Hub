import express from 'express';

import { verifyToken, createLoanApplication } from '../controllers/ocenController.js';

const router = express.Router();

// OCEN token verification route
router.post('/verify-token', verifyToken);

// OCEN create loan application route
router.post('/create-loan', createLoanApplication);

export default router;

