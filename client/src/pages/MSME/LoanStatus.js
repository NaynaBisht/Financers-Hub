import React, { useState } from 'react';
import NavbarMSME from "../../components/NavbarMSME.js";

// Sample loan data for demonstration purposes
const loanData = [
    {
        id: 1,
        loanType: "Business Expansion Loan",
        amount: "₹5,00,000",
        status: "Approved",
        applicationDate: "2024-08-01",
        disbursalDate: "2024-08-10"
    },
    {
        id: 2,
        loanType: "Equipment Financing",
        amount: "₹2,00,000",
        status: "Pending",
        applicationDate: "2024-08-15",
        disbursalDate: null
    },
    {
        id: 3,
        loanType: "Working Capital Loan",
        amount: "₹3,00,000",
        status: "Rejected",
        applicationDate: "2024-08-20",
        disbursalDate: null
    }
];

const LoanStatus = () => {
    const [loans] = useState(loanData); // In real scenarios, fetch this data from an API

    return (
        <div>
            <NavbarMSME />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-[#2B1308] mb-6">Loan Status</h1>
                <p className="mb-4 text-lg text-gray-700">
                    Check the status of your loan applications below:
                </p>
                <div className="space-y-6">
                    {loans.map((loan) => (
                        <div key={loan.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-[#98473E]">{loan.loanType}</h2>
                            <p className="mt-2 text-gray-600"><strong>Loan Amount:</strong> {loan.amount}</p>
                            <p className="mt-2 text-gray-600"><strong>Status:</strong> {loan.status}</p>
                            <p className="mt-2 text-gray-600"><strong>Application Date:</strong> {loan.applicationDate}</p>
                            {loan.status === "Approved" && (
                                <p className="mt-2 text-gray-600"><strong>Disbursal Date:</strong> {loan.disbursalDate}</p>
                            )}
                            {loan.status === "Pending" && (
                                <p className="mt-2 text-gray-600">Your application is currently being processed.</p>
                            )}
                            {loan.status === "Rejected" && (
                                <p className="mt-2 text-gray-600">Unfortunately, your application was rejected. Please contact support for more information.</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoanStatus;
