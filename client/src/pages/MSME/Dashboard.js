import React from 'react';
import NavbarMSME from '../../components/NavbarMSME.js';

const Dashboard = () => {
    return (
        <div>
            <NavbarMSME/>
            <div className="container mx-auto mt-6">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-bold mb-4">Loan Summary</h2>
                        
                    </div>
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-bold mb-4">Financial Health</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
