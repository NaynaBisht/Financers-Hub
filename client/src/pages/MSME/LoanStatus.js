// LoanStatus.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoanStatus = ({ msmeId }) => {
    const [loanRequests, setLoanRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLoanStatus = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/msmes/loan-status/${msmeId}`);
                setLoanRequests(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to load loan status');
                setLoading(false);
            }
        };

        fetchLoanStatus();
    }, [msmeId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Loan Status</h1>
            {loanRequests.length === 0 ? (
                <p>No loan requests found for this MSME.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {loanRequests.map((loan) => (
                        <div key={loan._id} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Loan Request ID: {loan._id}</h2>
                            <p><strong>Amount Requested:</strong> {loan.amount}</p>
                            <p><strong>Tenure:</strong> {loan.tenure} months</p>
                            <p><strong>Purpose:</strong> {loan.purpose}</p>
                            <p><strong>Status:</strong> {loan.status}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LoanStatus;
