// src/components/ApplyLoan.js
import React, { useState } from 'react';
import NavbarMSME from '../../components/NavbarMSME.js';
import { verifyToken, createLoanApplication } from '../../services/ocenService.js';

const ApplyLoan = () => {
    const [loanDetails, setLoanDetails] = useState({ amount: '', tenure: '', purpose: '' });
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setLoanDetails({ ...loanDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const verifyResponse = await verifyToken(token);
            if (verifyResponse.message === 'Token verified') {
                const loanResponse = await createLoanApplication(loanDetails, token);
                setMessage(loanResponse.message);
            } else {
                setMessage('Token verification failed');
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <NavbarMSME />
            <h2 className="text-3xl font-bold mb-5 mt-4 bg-[#C25D39] text-center text-white p-3 rounded-lg border">Apply for Loan</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    {/* Amount Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="amount">Amount</label>
                        <input type="number" id="amount" name="amount" value={loanDetails.amount} onChange={handleInputChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* Tenure Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="tenure">Tenure</label>
                        <input type="number" id="tenure" name="tenure" value={loanDetails.tenure} onChange={handleInputChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* Purpose Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="purpose">Purpose</label>
                        <input type="text" id="purpose" name="purpose" value={loanDetails.purpose} onChange={handleInputChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* Token Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="token">Token</label>
                        <input type="text" id="token" value={token} onChange={(e) => setToken(e.target.value)} required className="border rounded w-full p-2" />
                    </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className="bg-[#C25D39] font-bold text-lg text-white px-4 py-2 rounded-md hover:bg-[#A13A28] w-full">Submit Loan Application</button>
            </form>
            {/* Display Result */}
            {message && <p className="mt-4 text-lg font-bold text-center text-[#C25D39]">{message}</p>}
        </div>
    );
};

export default ApplyLoan;
