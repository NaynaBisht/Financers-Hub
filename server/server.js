import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import msmeRoutes from './routes/msmeRoutes.js'; 
import investorRoutes from './routes/investorRoutes.js'; 
import loanRoutes from './routes/loanRoutes.js'; 
import { exec } from 'child_process';

// Load environment variables
config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', // Update this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// MongoDB connection
connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Use the routes for MSME and Investor APIs
app.use('/api/msmes', msmeRoutes);
app.use('/api/investors', investorRoutes);


// Use the loan routes
app.use('/api', loanRoutes);

// Root route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Chatbot route
app.post('/api/chatbot', (req, res) => {
    const userInput = req.body.input;

    // Execute the Python script with the input data
    exec(`python3 utils/implement.py ${userInput}`, (error, stdout, stderr) => {
        if (error) {
            console.error('Error running Python script:', error);
            return res.status(500).send('Error running the chatbot model');
        }

        // Send back the result from the Python script to the frontend
        res.json({ result: stdout.trim() });
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
