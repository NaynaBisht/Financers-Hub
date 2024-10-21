import React, { useState, useEffect } from 'react';

const InvestmentOpportunities = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await fetch('/api/investor-dashboard');
                const data = await response.json();
                setLoans(data);
            } catch (error) {
                console.error('Error fetching loan requests:', error);
            }
        };

        fetchLoans();
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold mb-5 mt-4 bg-[#C25D39] text-center text-white p-3 rounded-lg border">Investment Opportunities</h2>
            <div className="loan-list">
                {loans.map((loan) => (
                    <div key={loan._id} className="loan-item">
                        <p>Amount: {loan.amount}</p>
                        <p>Tenure: {loan.tenure} months</p>
                        <p>Purpose: {loan.purpose}</p>
                        <button className="bg-[#C25D39] text-white p-2 rounded">Apply</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InvestmentOpportunities;
