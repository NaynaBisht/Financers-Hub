import React from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';


const LandingInvestor = () => {
    return (
        <div className="container mx-auto mt-8 px-4">
            <NavbarINVESTOR/>

            <h1 className="text-3xl font-bold mb-4">Welcome to the Investor Dashboard</h1>
            <p className="text-lg">Here, investors can find various investment opportunities and track their portfolio performance.</p>
            {/* Additional content for investors */}
        </div>
    );
};

export default LandingInvestor;
