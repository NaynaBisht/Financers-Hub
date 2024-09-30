import { Router } from 'express';
import msmeController from '../controllers/msmeController.js'; // Use default export
import upload from '../middleware/upload.js'; // Import the Multer middleware for file uploads

const router = Router();

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

export default router;
