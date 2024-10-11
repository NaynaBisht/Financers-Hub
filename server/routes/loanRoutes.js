const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan'); // Adjust the path as necessary

// GET /loans
router.get('/loans', async (req, res) => {
    try {
        const loans = await Loan.find();
        console.log('Fetched loans:', loans); // Log fetched loans
        res.status(200).json(loans);
    } catch (error) {
        console.error('Error fetching loans:', error); // Log error
        res.status(500).json({ message: 'Failed to fetch loans', error: error.message });
    }
});

// Export the router to use it in your server file
module.exports = router;
