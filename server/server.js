// server.js
import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import msmeRoutes from './routes/msmeRoutes.js'; // Ensure this file exists
import investorRoutes from './routes/investorRoutes.js'; // Ensure this file exists

// Load environment variables
config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', // Update this to your frontend URL
    credentials: true,
}));

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// MongoDB connection
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Use the routes for MSME and Investor APIs
app.use('/api/msmes', msmeRoutes); // Ensure routes are correctly set up
app.use('/api/investors', investorRoutes); // Ensure routes are correctly set up

// Root route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).send('Something went wrong!'); // Send a generic error response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});