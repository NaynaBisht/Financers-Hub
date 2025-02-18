// controllers/msmeController.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Msme from '../models/Msme.js';
import Loan from '../models/Loan.js';

// Register MSME
export const register = async (req, res) => {
    const { companyName, industryType, location, phone, email, password, annualRevenue } = req.body;
    try {
        const existingUser = await Msme.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists!' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const documents = {
            profitAndLoss: req.files?.profitAndLoss?.[0]?.filename || null,
            balanceSheet: req.files?.balanceSheet?.[0]?.filename || null,
            assetsAndLiabilities: req.files?.assetsAndLiabilities?.[0]?.filename || null,
            taxReturn: req.files?.taxReturn?.[0]?.filename || null,
            businessRegDoc: req.files?.businessRegDoc?.[0]?.filename || null,
            collateralDocs: req.files?.collateralDocs?.[0]?.filename || null,
        };

        const newUser = new Msme({ companyName, industryType, location, phone, email, password: hashedPassword, annualRevenue, documents });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!', msmeId: newUser._id });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'User registration failed!' });
    }
};

// Login MSME
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ success: false, message: 'Email and password are required' });

        const msmeUser = await Msme.findOne({ email });
        if (!msmeUser) return res.status(404).json({ success: false, message: 'MSME not found' });

        const isMatch = await bcrypt.compare(password, msmeUser.password);
        if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid credentials' });

        const token = jwt.sign({ id: msmeUser._id, role: "msme" }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({ success: true, token, msmeId: msmeUser._id });
    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// Get MSME ID
export const getMsmeId = async (req, res) => {
    try {
        const { userId } = req.query;
        if (!userId) return res.status(400).json({ success: false, message: "User ID is required" });

        const msme = await Msme.findOne({ userId });
        if (!msme) return res.status(404).json({ success: false, message: "MSME ID not found" });

        res.json({ success: true, msmeId: msme._id });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// Apply for Loan
export const applyLoan = async (req, res) => {
    try {
        const { msmeId } = req.params; // Get msmeId from URL params
        const { amount, tenure, purpose } = req.body;

        if (!amount || !tenure || !purpose) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const newLoan = new Loan({ amount, tenure, purpose, status: 'Pending', msmeId });
        await newLoan.save();
        res.status(201).json({ success: true, message: "Loan application submitted", data: newLoan });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};

// Get User Loans
export const getUserLoans = async (req, res) => {
    try {
        const loans = await Loan.find({ msmeId: req.params.msmeId });
        res.json({ success: true, message: "User loans fetched", data: loans });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};
