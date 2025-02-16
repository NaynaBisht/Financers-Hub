// ApplyLoan.js
import React, { useState } from 'react';
import NavbarMSME from '../../components/NavbarMSME.js';
import { useEffect } from 'react';


const ApplyLoan = () => {
    const [loanDetails, setLoanDetails] = useState({ amount: '', tenure: '', purpose: '', msmeId: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const storedMsmeId = localStorage.getItem("msmeId"); // Get from localStorage
        if (storedMsmeId) {
            setLoanDetails(prev => ({ ...prev, msmeId: storedMsmeId })); // Set MSME ID dynamically
        }
    }, []);

    const handleInputChange = (e) => {
        setLoanDetails({ ...loanDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token"); // Retrieve the authentication token
            const storedMsmeId = localStorage.getItem("msmeId");
    
            if (!token) {
                setMessage("Unauthorized: Please log in again.");
                return;
            }
    
            if (!storedMsmeId) {
                setMessage("MSME ID is missing. Please refresh and try again.");
                return;
            }
    
            const requestBody = {
                amount: Number(loanDetails.amount), // Convert to number
                tenure: Number(loanDetails.tenure),
                purpose: loanDetails.purpose.trim(), // Trim spaces
                msmeId: storedMsmeId // Set MSME ID
            };
    
            // Validate fields before sending request
            if (!requestBody.amount || !requestBody.tenure || !requestBody.purpose) {
                setMessage("All fields are required!");
                return;
            }
    
            const response = await fetch('http://localhost:5000/api/msmes/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Ensure token is sent
                },
                body: JSON.stringify(requestBody), // Send the correctly formatted request body
            });
    
            const result = await response.json();
    
            if (response.ok) {
                setMessage('Loan application submitted successfully!');
                setLoanDetails({ amount: '', tenure: '', purpose: '', msmeId: storedMsmeId });
            } else {
                setMessage(result.message || 'Error submitting loan application.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        }
    };
    
    

    return (
        <div>
            <NavbarMSME />
            <h2 className="text-3xl font-bold mb-5 mt-4 bg-[#C25D39] text-center text-white p-3 rounded-lg border">
                Apply for Loan
            </h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={loanDetails.amount}
                            onChange={handleInputChange}
                            required
                            className="border rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="tenure">Tenure</label>
                        <input
                            type="number"
                            id="tenure"
                            name="tenure"
                            value={loanDetails.tenure}
                            onChange={handleInputChange}
                            required
                            className="border rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="purpose">Purpose</label>
                        <input
                            type="text"
                            id="purpose"
                            name="purpose"
                            value={loanDetails.purpose}
                            onChange={handleInputChange}
                            required
                            className="border rounded w-full p-2"
                        />
                    </div>
                </div>
                <button type="submit" className="bg-[#C25D39] font-bold text-lg text-white px-4 py-2 rounded-md hover:bg-[#A13A28] w-full">
                    Submit Loan Application
                </button>
            </form>
            {message && <p className="mt-4 text-lg font-bold text-center text-[#C25D39]">{message}</p>}
        </div>
    );
};

export default ApplyLoan;
