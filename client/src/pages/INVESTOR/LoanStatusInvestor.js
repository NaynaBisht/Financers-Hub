import React from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';


const LoanStatusInvestor = () => {
    return (
        <div>
            <NavbarINVESTOR/>
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-bold mb-4">Loan Status</h1>
            <p>Track the status of loans you've invested in.</p>
            {/* Loan status content */}
        </div>
        </div>
    );
};

export default LoanStatusInvestor;
