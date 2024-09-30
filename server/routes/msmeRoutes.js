// routes/msmeRoutes.js
import { Router } from 'express';
import msmeController from '../controllers/msmeController.js'; // Use default export

const router = Router();

// Registration route
router.post('/register', msmeController.register);
// Login route
router.post('/login', msmeController.login);

export default router;
