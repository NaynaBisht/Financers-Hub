import { connect } from 'mongoose';
import { config } from 'dotenv';
import express from 'express';
import investorRoutes from '../routes/investorRoutes.js';

const app = express();
config();

app.use(express.json());

app.use('/api/investors', investorRoutes);

export default app;
