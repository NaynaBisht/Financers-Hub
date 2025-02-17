import express from 'express';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import { spawn } from 'child_process';

// Import Routes
import msmeRoutes from './routes/msmeRoutes.js';
import investorRoutes from './routes/investorRoutes.js';

// Load environment variables
dotenv.config({});

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL Encoded Parser
app.use(cookieParser());

const cors = require('cors');
const corsOptions = {
    origin:'https://financers-hub.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials:true
}

app.use(cors(corsOptions));


// Database Connection
const connectDB = async () => {
    try {
        if (!MONGO_URI) throw new Error('MONGO_URI is not defined in environment variables.');
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(' MongoDB Connection Error:', err.message);
        process.exit(1); // Exit process on failure
    }
};
connectDB();

// Routes
app.use('/api/msmes', msmeRoutes);
app.use('/api/investors', investorRoutes);

// Root Route
app.get('/', (req, res) => {
    res.json({ success: true, message: 'API is running...' });
});

// Chatbot Route
app.post('/api/chatbot', (req, res) => {
    const userInput = req.body.input;
    if (!userInput) {
        return res.status(400).json({ success: false, message: 'User input is required' });
    }

    const pythonProcess = spawn('python3', ['utils/implement.py', userInput]);

    let output = '';
    pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Chatbot Error: ${data.toString()}`);
    });

    pythonProcess.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).json({ success: false, message: 'Chatbot execution failed' });
        }
        res.json({ success: true, result: output.trim() });
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('🚨 Server Error:', err.stack);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
