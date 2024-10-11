// import Investor from '../models/Investor.js'; // Assuming you have a separate model for investors
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';


// // Function to register a new investor
// const registerInvestor = async (req, res) => {
//     const { fullName, email, password } = req.body;
//     // Destructure the uploaded files, ensuring each file field is optional
//     const netWorthDocs = req.files.netWorthDocs ? req.files.netWorthDocs[0].filename : null;
//     const sourceOfFundsDocs = req.files.sourceOfFundsDocs ? req.files.sourceOfFundsDocs[0].filename : null;
//     const investmentExperienceDocs = req.files.investmentExperienceDocs ? req.files.investmentExperienceDocs[0].filename : null;
    
    
//     try {
//         // Check if the investor already exists
//         const existingInvestor = await Investor.findOne({ email });
//         if (existingInvestor) {
//             return res.status(400).json({ message: 'Investor already exists!' });
//         }

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create paths to save the files (Assuming you want to save in a public directory)
//         const netWorthDocsPath = netWorthDocs ? `/uploadInv/${netWorthDocs}` : null;
//         const sourceOfFundsDocsPath = sourceOfFundsDocs ? `/uploadInv/${sourceOfFundsDocs}` : null;
//         const investmentExperienceDocsPath = investmentExperienceDocs ? `/uploads/${investmentExperienceDocs}` : null;
        
//         // Create new investor with hashed password
//         const newInvestor = new Investor({
//             fullName,
//             dateOfBirth,
//             phone,
//             email,
//             idNumber,
//             occupation,
//             employerName,
//             businessAddress,
//             position,
//             riskTolerance,
//             amountToInvest,
//             termsAccepted,
//             password: hashedPassword, // Store hashed password
//             documents: {
//                 netWorthDocs: netWorthDocsPath,
//                 sourceOfFundsDocs: sourceOfFundsDocsPath,
//                 investmentExperienceDocs: investmentExperienceDocsPath,
//             },
//         });


//         // Save the new investor to the database
//         const savedInvestor = await newInvestor.save();
//         res.status(201).json({ message: 'Investor registered successfully!' });
//     } catch (error) {
//         console.error('Registration error:', error);
//         res.status(500).json({ error: 'Investor registration failed!' });
//     }
// };

// // Function to log in an existing investor
// const loginInvestor = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Find the investor by email
//         const investor = await Investor.findOne({ email });
//         if (!investor) {
//             return res.status(404).json({ message: 'Investor not found!' });
//         }

//         // Check if the password matches
//         const isMatch = await bcrypt.compare(password, investor.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials!' });
//         }

//         // Return success response with the investor ID
//         res.status(200).json({ message: 'Login successful!', investorId: investor._id });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ error: 'Login failed!' });
//     }
// };

// // Export the functions as named exports
// export { registerInvestor, loginInvestor };
import Investor from '../models/Investor.js'; // Assuming you have a separate model for investors
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Function to register a new investor
const registerInvestor = async (req, res) => {
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
const loginInvestor = async (req, res) => {
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

        // Return success response with the investor ID
        res.status(200).json({ message: 'Login successful!', investorId: investor._id });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed!' });
    }
};

// Export the functions as named exports
export { registerInvestor, loginInvestor };
