import React, { useState } from 'react';
import NavbarMSME from '../../components/NavbarMSME.js';

const ApplyLoan = () => {
    const [loanData, setLoanData] = useState({
        amount: '',
        purpose: '',
        collateral: '',
        // Other fields as needed
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoanData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle loan application submission logic here
        console.log('Loan application submitted:', loanData);
    };

    return (
        <div>
            <NavbarMSME/>
            <div className="container mx-auto mt-6">
                <h1 className="text-3xl font-bold mb-6">Apply for a Loan</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Loan Amount</label>
                        <input
                            type="number"
                            name="amount"
                            value={loanData.amount}
                            onChange={handleInputChange}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm mb-1">Purpose of the Loan</label>
                        <input
                            type="text"
                            name="purpose"
                            value={loanData.purpose}
                            onChange={handleInputChange}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-[#C25D39] text-white px-4 py-2 rounded hover:bg-[#A13A28]">
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplyLoan;
