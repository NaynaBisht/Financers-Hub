import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarMSME from '../../components/NavbarMSME.js';

const ApplyLoan = () => {
    const navigate = useNavigate();

    const [loanData, setLoanData] = useState({
        loanType: '',
        amount: '',
        businessPlan: null,
        financialStatement: null,
        additionalDocs: null
    });
    const [error, setError] = useState(null);

    // Handle text inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoanData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle file uploads
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setLoanData((prevData) => ({
            ...prevData,
            [name]: files[0],
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('loanType', loanData.loanType);
            formData.append('amount', loanData.amount);
            formData.append('businessPlan', loanData.businessPlan);
            formData.append('financialStatement', loanData.financialStatement);
            formData.append('additionalDocs', loanData.additionalDocs);
    
            const response = await axios.post('http://localhost:5000/api/loans/apply', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            if (response.data.success) {
                navigate('/dashboard'); // Redirect on success
            }
        } catch (error) {
            console.error('Error during loan application:', error.response ? error.response.data : error.message);
            setError('Failed to apply for loan. Please try again.');
        }
    };
    

    return (
        <div>
            <NavbarMSME />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-[#2B1308] mb-6">Apply for a Loan</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    {/* Loan Type */}
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Loan Type</label>
                        <select
                            name="loanType"
                            value={loanData.loanType}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Select Loan Type</option>
                            <option value="working capital">Working Capital</option>
                            <option value="business expansion">Business Expansion</option>
                            <option value="equipment financing">Equipment Financing</option>
                        </select>
                    </div>

                    {/* Loan Amount */}
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Loan Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={loanData.amount}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Business Plan Upload */}
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Business Plan</label>
                        <input
                            type="file"
                            name="businessPlan"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Financial Statement Upload */}
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Financial Statement</label>
                        <input
                            type="file"
                            name="financialStatement"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Additional Documents */}
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Additional Documents</label>
                        <input
                            type="file"
                            name="additionalDocs"
                            onChange={handleFileChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500">{error}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-[#98473E] text-white px-4 py-2 rounded-md hover:bg-[#B49082] transition"
                    >
                        Apply for Loan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplyLoan;
