import { connect } from 'mongoose';
import { config } from 'dotenv';
import express from 'express';
import msmeRoutes from '../routes/msmeRoutes.js';

const app = express();
config();

app.use(express.json());

app.use('/api/msmes', msmeRoutes);

export default app;
