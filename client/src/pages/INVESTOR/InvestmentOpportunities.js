// src/components/InvestmentOpportunities.js
import React, { useEffect, useState } from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';
import { fetchLoanApplications } from '../../services/ocenService.js'; // Assume you create this service function

const InvestmentOpportunities = () => {
    const [loanApplications, setLoanApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchLoans = async () => {
        try {
            const response = await fetchLoanApplications();
            setLoanApplications(response.data); // Assuming your API response is in this format
        } catch (err) {
            setError(err.message || 'Failed to fetch loan applications.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLoans();
    }, []);

    return (
        <div>
            <NavbarINVESTOR />
            <div className="container mx-auto mt-8 px-4">
                <h1 className="text-3xl font-bold mb-4">Investment Opportunities</h1>
                <p>Browse through a range of MSME investment opportunities.</p>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <div className="mt-6">
                    {loanApplications.map((loan) => (
                        <div key={loan.id} className="bg-white p-4 mb-4 rounded-lg shadow">
                            <h2 className="text-xl font-bold">Loan Request</h2>
                            <p>Amount: ₹{loan.amount}</p>
                            <p>Tenure: {loan.tenure} months</p>
                            <p>Purpose: {loan.purpose}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InvestmentOpportunities;
