import User from '../models/User.js';
import bcrypt from 'bcryptjs';  // Import bcrypt for password hashing

// Register new user with file uploads
const register = async (req, res) => {
    const { companyName, industryType, location, phone, email, password, annualRevenue } = req.body;

    // Destructure the uploaded files, ensuring each file field is optional
    const profitAndLoss = req.files.profitAndLoss ? req.files.profitAndLoss[0].filename : null;
    const balanceSheet = req.files.balanceSheet ? req.files.balanceSheet[0].filename : null;
    const assetsAndLiabilities = req.files.assetsAndLiabilities ? req.files.assetsAndLiabilities[0].filename : null;
    const taxReturn = req.files.taxReturn ? req.files.taxReturn[0].filename : null;
    const businessRegDoc = req.files.businessRegDoc ? req.files.businessRegDoc[0].filename : null;
    const collateralDocs = req.files.collateralDocs ? req.files.collateralDocs[0].filename : null;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists!' });
        }

        // Hash the password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create paths to save the files (Assuming you want to save in a public directory)
        const profitAndLossPath = profitAndLoss ? `/uploads/${profitAndLoss}` : null;
        const balanceSheetPath = balanceSheet ? `/uploads/${balanceSheet}` : null;
        const assetsAndLiabilitiesPath = assetsAndLiabilities ? `/uploads/${assetsAndLiabilities}` : null;
        const taxReturnPath = taxReturn ? `/uploads/${taxReturn}` : null;
        const businessRegDocPath = businessRegDoc ? `/uploads/${businessRegDoc}` : null;
        const collateralDocsPath = collateralDocs ? `/uploads/${collateralDocs}` : null;

        // Create new user with hashed password
        const newUser = new User({
            companyName,
            industryType,
            location,
            phone,
            email,
            password: hashedPassword, // Store hashed password
            annualRevenue,
            documents: {
                profitAndLoss: profitAndLossPath,
                balanceSheet: balanceSheetPath,
                assetsAndLiabilities: assetsAndLiabilitiesPath,
                taxReturn: taxReturnPath,
                businessRegDoc: businessRegDocPath,
                collateralDocs: collateralDocsPath,
            },
        });

        // Save user
        const savedUser = await newUser.save();

        // Return the new user's ID
        res.status(201).json({ message: 'User registered successfully!', userId: savedUser._id });
    } catch (error) {
        console.error('Registration error:', error); 
        res.status(500).json({ error: 'User registration failed!' });
    }
};

// Login user
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        console.log('User fetched from database:', user);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Compare the entered password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password comparison result:', isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        // Return success response with the user ID
        res.status(200).json({ message: 'Login successful!', userId: user._id });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed!' });
    }
};

const getUserProfile = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Send user data back to the frontend (exclude password)
        res.status(200).json({
            companyName: user.companyName,
            industryType: user.industryType,
            location: user.location,
            phone: user.phone,
            email: user.email,
            annualRevenue: user.annualRevenue,
            documents: user.documents,
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: 'Failed to fetch user profile!' });
    }
};


export default { register, login, getUserProfile };
