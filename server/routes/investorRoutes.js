
// routes/investorRoutes.js
import { Router } from 'express';
import uploadInv from '../middleware/uploadInv.js'; // Correct path for the middleware
import { registerInvestor, loginInvestor } from '../controllers/investorController.js';

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

export default router;

