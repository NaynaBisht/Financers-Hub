// services/ocenService.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/ocen'; // Backend URL

// Token Verification
export const verifyToken = async (token) => {
    try {
        const response = await axios.post(`${apiUrl}/verify-token`, { authToken: token });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Error verifying token';
    }
};

// Loan Application Creation
export const createLoanApplication = async (loanDetails, token) => {
    try {
        const response = await axios.post(`${apiUrl}/create-loan`, { loanDetails, authToken: token });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Error creating loan application';
    }
};
