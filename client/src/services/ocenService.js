// services/ocenService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ocen'; // Backend URL

// Token Verification
export const createLoanApplication = async (loanDetails) => {
    try {
        const response = await axios.post(`${API_URL}/loans`, loanDetails);
        return response.data; // Assuming the response contains a success message
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to create loan application.');
    }
};
// src/services/ocenService.js
// Add this function to the existing code in your service file
export const fetchLoanApplications = async () => {
    try {
        const response = await axios.get(`${API_URL}/loans`); // Make sure this endpoint exists on your server
        return response.data; // Assuming the response contains the loan applications array
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to fetch loan applications.');
    }
};
