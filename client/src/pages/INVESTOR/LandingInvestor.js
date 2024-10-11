import React from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';

const LandingInvestor = () => {
    return (
        <div>
            <NavbarINVESTOR />

            <h1 className="text-4xl font-bold mb-4 mt-4 text-center text-[#C25D39]">Welcome to the Investor Dashboard</h1>
            <p className="text-lg text-center mb-8">Discover the best investment opportunities tailored for you.</p>

            <div className="flex flex-col md:flex-row gap-3 m-3 justify-around mb-12">
                {/* Investment Opportunities Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 mb-6 md:mb-0">
                    <h2 className="text-2xl font-semibold text-[#C25D39] mb-2">Investment Opportunities</h2>
                    <p className="text-gray-600">Browse through a range of MSME investment opportunities and grow your portfolio with us.</p>
                    <button className="mt-4 bg-[#C25D39] text-white font-bold py-2 px-4 rounded hover:bg-[#A13A28] transition duration-300">
                        Explore Opportunities
                    </button>
                </div>

                {/* Portfolio Tracking Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 mb-6 md:mb-0">
                    <h2 className="text-2xl font-semibold text-[#C25D39] mb-2">Track Your Portfolio</h2>
                    <p className="text-gray-600">Stay informed about your investments and monitor your portfolio's performance in real time.</p>
                    <button className="mt-4 bg-[#C25D39] text-white font-bold py-2 px-4 rounded hover:bg-[#A13A28] transition duration-300">
                        View Portfolio
                    </button>
                </div>

                {/* Support Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
                    <h2 className="text-2xl font-semibold text-[#C25D39] mb-2">Need Assistance?</h2>
                    <p className="text-gray-600">Our team is here to help you with any queries or support you may need.</p>
                    <button className="mt-4 bg-[#C25D39] text-white font-bold py-2 px-4 rounded hover:bg-[#A13A28] transition duration-300">
                        Contact Support
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="text-center mt-12">
                <p className="text-gray-500">&copy; {new Date().getFullYear()} Financers Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingInvestor;
