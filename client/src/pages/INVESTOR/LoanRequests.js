// LoanRequests.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';

const LoanRequests = () => {
    const [loanRequests, setLoanRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLoanRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/msmes/loan-requests'); 

                setLoanRequests(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to load loan requests');
                setLoading(false);
            }
        };

        fetchLoanRequests();
    }, []);

    const handleResponse = async (loanId, action) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/msmes/loan-requests/${loanId}/${action}`);
            if (response.status === 200) {
                // Refresh loan requests
                setLoanRequests(loanRequests.filter(loan => loan._id !== loanId));
            }
        } catch (error) {
            console.error('Error updating loan request:', error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <NavbarINVESTOR />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Loan Requests</h1>
                {loanRequests.length === 0 ? (
                    <p>No loan requests available at the moment.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {loanRequests.map((loan) => (
                            <div key={loan._id} className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Loan Request from MSME ID: {loan.msmeId}</h2>
                                <p><strong>Amount Requested:</strong> {loan.amount}</p>
                                <p><strong>Tenure:</strong> {loan.tenure} months</p>
                                <p><strong>Purpose:</strong> {loan.purpose}</p>
                                <p><strong>Status:</strong> {loan.status}</p>
                                <div className="flex space-x-4 mt-4">
                                    <button 
                                        onClick={() => handleResponse(loan._id, 'accept')} 
                                        className="bg-green-500 text-white p-2 rounded"
                                    >
                                        Accept
                                    </button>
                                    <button 
                                        onClick={() => handleResponse(loan._id, 'decline')} 
                                        className="bg-red-500 text-white p-2 rounded"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoanRequests;
