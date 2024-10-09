import React from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';


const ProfileInvestor = () => {
    return (
        <div><NavbarINVESTOR/>
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-bold mb-4">Investor Profile</h1>
            <p>Manage your personal information and investment preferences here.</p>
            {/* Profile content */}
        </div>
        </div>
    );
};

export default ProfileInvestor;
