import User from '../models/User.js';
import bcrypt from 'bcryptjs';

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

        // Create paths to save the files (Assuming you want to save in a public directory)
        const profitAndLossPath = profitAndLoss ? `/uploads/${profitAndLoss}` : null;
        const balanceSheetPath = balanceSheet ? `/uploads/${balanceSheet}` : null;
        const assetsAndLiabilitiesPath = assetsAndLiabilities ? `/uploads/${assetsAndLiabilities}` : null;
        const taxReturnPath = taxReturn ? `/uploads/${taxReturn}` : null;
        const businessRegDocPath = businessRegDoc ? `/uploads/${businessRegDoc}` : null;
        const collateralDocsPath = collateralDocs ? `/uploads/${collateralDocs}` : null;

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); 
        console.log('Hashed Password:', hashedPassword); // Log the hashed password during registration

        // Create new user
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
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Registration error:', error); // Log the error for debugging
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

        console.log('Password from database:', user.password);
        console.log('Entered Password:', password);
        // Compare entered password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match result:', isMatch); // Log the result of the password comparison
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        // If credentials are valid, return success response
        res.status(200).json({ message: 'Login successful!', userId: user._id });
    } catch (error) {
        console.error('Login error:', error); // Log the error for debugging
        res.status(500).json({ error: 'Login failed!' });
    }
    
    console.log('User fetched from database:', User);
};


export default { register, login };
