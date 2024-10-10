import axios from 'axios'; // ES module import

// Sample OCEN integration functions

// Signature & Token Verification
export const verifyToken = async (req, res) => {
    try {
        const { authToken } = req.body; // assuming token comes from the client

        // Replace with the OCEN token verification URL
        const response = await axios.post('https://ocen-auth-url', {
            token: authToken
        });

        if (response.data.verified) {
            return res.status(200).json({ message: 'Token verified' });
        } else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error verifying token', error });
    }
};

// Async Loan Application Request
export const createLoanApplication = async (req, res) => {
    try {
        const { loanDetails, authToken } = req.body;

        const loanResponse = await axios.post('https://ocen-loan-url', {
            loanDetails,
            token: authToken
        });

        if (loanResponse.data.success) {
            return res.status(200).json({ message: 'Loan application created successfully', data: loanResponse.data });
        } else {
            return res.status(400).json({ message: 'Loan application failed', error: loanResponse.data.error });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error creating loan application', error });
    }
};
