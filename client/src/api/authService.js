// services/authservice.js
import axios from 'axios';

// Replace with your OCEN auth server URL
const AUTH_SERVER_URL = 'http://localhost:8085'; // or your production URL

// Token Verification
export const verifyToken = async (authToken) => {
    try {
        const response = await axios.post(`${AUTH_SERVER_URL}/common/verify-token`, {
            token: authToken,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error verifying token: ' + error.message);
    }
};

// Loan Application Creation
export const createLoanApplication = async (loanDetails, authToken) => {
    try {
        const response = await axios.post(`${AUTH_SERVER_URL}/loan-agent/trigger/loanApplicationRequest`, {
            loanDetails,
            token: authToken,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error creating loan application: ' + error.message);
    }
};
