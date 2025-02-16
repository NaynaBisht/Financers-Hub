
// routes/investorRoutes.js
import { Router } from 'express';
import uploadInv from '../middleware/uploadInv.js'; // Correct path for the middleware
import { registerInvestor, loginInvestor, getLoanRequests, declineLoanRequest, acceptLoanRequest } from '../controllers/investorController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();

router.post(
    '/register',
    uploadInv.fields([  // Now calling `.fields()` on uploadInv
        { name: 'netWorthDocs', maxCount: 1 },
        { name: 'sourceOfFundsDocs', maxCount: 1 },
        { name: 'investmentExperienceDocs', maxCount: 1 }
    ]),
    registerInvestor // Use registerInvestor directly
);

// Login route (no file uploads)
router.post('/login', loginInvestor); // Use loginInvestor directly

router.get('/loan-requests', authMiddleware, getLoanRequests);

router.put('/accept-loan/:loanId', authMiddleware, acceptLoanRequest);
router.put('/decline-loan/:loanId', authMiddleware, declineLoanRequest);

export default router;

