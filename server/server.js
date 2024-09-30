// server.js
import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import msmeRoutes from './routes/msmeRoutes.js'; // Add .js extension here

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Use the msmeRoutes
app.use('/api/msmes', msmeRoutes); // Ensure routes are correctly set up

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
