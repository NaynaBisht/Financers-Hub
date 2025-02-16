import Investor from '../models/Investor.js'; // Assuming you have a separate model for investors
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Loan from '../models/Loan.js';
import Msme from '../models/Msme.js';


// Function to register a new investor
export const registerInvestor = async (req, res) => {
    const { 
        fullName, 
        email, 
        password, 
        dateOfBirth,  // Added dateOfBirth to the destructuring
        phone, 
        idNumber, 
        occupation, 
        employerName, 
        businessAddress, 
        position, 
        riskTolerance, 
        amountToInvest, 
        termsAccepted 
    } = req.body;

    // Destructure the uploaded files, ensuring each file field is optional
    const netWorthDocs = req.files.netWorthDocs ? req.files.netWorthDocs[0].filename : null;
    const sourceOfFundsDocs = req.files.sourceOfFundsDocs ? req.files.sourceOfFundsDocs[0].filename : null;
    const investmentExperienceDocs = req.files.investmentExperienceDocs ? req.files.investmentExperienceDocs[0].filename : null;

    try {
        // Check if the investor already exists
        const existingInvestor = await Investor.findOne({ email });
        if (existingInvestor) {
            return res.status(400).json({ message: 'Investor already exists!' });
        }

        // Validate dateOfBirth and other required fields
        if (!dateOfBirth) {
            return res.status(400).json({ message: 'Date of birth is required!' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create paths to save the files (Assuming you want to save in a public directory)
        const netWorthDocsPath = netWorthDocs ? `/uploadInv/${netWorthDocs}` : null;
        const sourceOfFundsDocsPath = sourceOfFundsDocs ? `/uploadInv/${sourceOfFundsDocs}` : null;
        const investmentExperienceDocsPath = investmentExperienceDocs ? `/uploads/${investmentExperienceDocs}` : null;

        // Create new investor with hashed password
        const newInvestor = new Investor({
            fullName,
            dateOfBirth,   // Ensure that dateOfBirth is correctly saved
            phone,
            email,
            idNumber,
            occupation,
            employerName,
            businessAddress,
            position,
            riskTolerance,
            amountToInvest,
            termsAccepted,
            password: hashedPassword, // Store hashed password
            documents: {
                netWorthDocs: netWorthDocsPath,
                sourceOfFundsDocs: sourceOfFundsDocsPath,
                investmentExperienceDocs: investmentExperienceDocsPath,
            },
        });

        // Save the new investor to the database
        const savedInvestor = await newInvestor.save();
        res.status(201).json({ message: 'Investor registered successfully!' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Investor registration failed!' });
    }
};

// Function to log in an existing investor
export const loginInvestor = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the investor by email
        const investor = await Investor.findOne({ email });
        if (!investor) {
            return res.status(404).json({ message: 'Investor not found!' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, investor.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        const token = jwt.sign(
            { id: investor._id, role: "investor" },  
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        
        res.status(200).json({
            message: 'Login successful!',
            investorId: investor._id,
            token: token  // Include the token in the response
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed!' });
    }
};

export const getLoanRequests = async (req, res) => {
    try {
        const loanRequests = await Loan.find();
        res.status(200).json({ success: true, message: "Loan requests fetched successfully", data: loanRequests });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch loan requests", error: error.message });
    }
};

export const acceptLoanRequest = async (req, res) => {
    try {
        const { loanId } = req.params;  // Loan ID from URL params
        const { investorId } = req.body; // Investor ID from request body

        // Find loan by ID
        const loan = await Loan.findById(loanId);
        if (!loan) return res.status(404).json({ message: "Loan request not found!" });

        // Check if loan is already accepted or declined
        if (loan.status !== "Pending") {
            return res.status(400).json({ message: `Loan is already ${loan.status}` });
        }

        // Update loan status to "Accepted"
        loan.status = "Accepted";
        loan.investorId = investorId; // Associate investor with loan
        await loan.save();

        res.status(200).json({ message: "Loan request accepted successfully!", loan });
    } catch (error) {
        console.error("Error accepting loan:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Decline Loan Request
export const declineLoanRequest = async (req, res) => {
    try {
        const { loanId } = req.params;
        const { investorId } = req.body;

        const loan = await Loan.findById(loanId);
        if (!loan) return res.status(404).json({ message: "Loan request not found!" });

        if (loan.status !== "Pending") {
            return res.status(400).json({ message: `Loan is already ${loan.status}` });
        }

        loan.status = "Declined";
        loan.investorId = investorId; // Associate investor with loan
        await loan.save();

        res.status(200).json({ message: "Loan request declined successfully!", loan });
    } catch (error) {
        console.error("Error declining loan:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
