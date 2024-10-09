import React from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';

const InvestmentOpportunities = () => {
    return (
        <div>            
            <NavbarINVESTOR/>
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-bold mb-4">Investment Opportunities</h1>
            <p>Browse through a range of MSME investment opportunities.</p>
            {/* Investment listings */}
        </div>
        </div>

    );
};

export default InvestmentOpportunities;
