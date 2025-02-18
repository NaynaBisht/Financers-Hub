import React from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';

const LandingInvestor = () => {
    return (
        <div className="font-poppins bg-[#F4D2A0] min-h-screen w-full overflow-auto">
            <NavbarINVESTOR />

            {/* Welcome Section */}
            <h1 className="text-4xl font-bold mb-4 mt-4 text-center text-[#C25D39]">Welcome to the Investor Dashboard</h1>
            <p className="text-lg text-center mb-8">Discover the best investment opportunities tailored for you.</p>

            {/* Main Content Section */}
            <main className="container mx-auto mt-8 px-4">
                <div className="flex flex-wrap justify-between items-start">
                    {/* Sidebar for Search */}
                    <aside className="w-full md:w-1/3 bg-[#2B1308] bg-opacity-90 p-6 rounded-lg shadow-md mb-8 md:mb-0">
                        <h2 className="text-2xl text-white mb-4">Search Investment</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="dashboard" className="block text-white mb-2">Select Type</label>
                                <select id="dashboard" className="w-full p-2 rounded-md text-black">
                                    <option>Loan Requests</option>
                                    <option>Credit Score Reports</option>
                                    <option>Investment Decisions</option>
                                    <option>MSME Applications</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="keyword" className="block text-white mb-2">Keyword</label>
                                <input type="text" id="keyword" className="w-full p-2 rounded-md text-black" />
                            </div>
                            <button type="submit" className="w-full bg-[#A13A28] text-white py-2 rounded-md hover:bg-[#82251C]">Search</button>
                        </form>
                    </aside>

                    {/* Main Section for Banks and MSMEs */}
                    <section className="w-full md:w-2/3 pl-3 pb-3">
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                            <h1 className="text-3xl font-bold text-black mb-4">Empowering Banks to Support MSMEs</h1>
                            <p className="text-lg mb-4">FinancersHub provides a platform for banks to evaluate and manage loans, credit score reports, and investment decisions related to MSMEs.</p>
                            <div className="flex space-x-4">
                                <a href="/investors/loan-requests/${investorId}" className="bg-[#8B1308] bg-opacity-90 text-white p-4 rounded-lg shadow-lg">
                                    <h2 className="text-2xl">Loan Requests</h2>
                                    <p className="mt-2">Review MSME loan requests and approve or decline based on financial data.</p>
                                </a>
                                <a href="/investors/creditScoreReports/${investorId}" className="bg-[#6B1308] bg-opacity-90 text-white p-4 rounded-lg shadow-lg">
                                    <h2 className="text-2xl">Credit Score Reports</h2>
                                    <p className="mt-2">Access real-time credit score reports of MSMEs for informed decision-making.</p>
                                </a>
                            </div>
                        </div>

                        {/* Additional Information Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-black mb-4">Tools for Banks</h2>
                            <div className="flex space-x-4">
                                <div className="w-1/2 p-4 bg-[#F4D2A0] rounded-lg shadow-lg">
                                    <a href="/CreditRisk">
                                        <h3 className="text-xl font-bold">Credit Risk Assessment</h3>
                                        <p className="mt-2">Leverage advanced algorithms to assess the creditworthiness of MSMEs.</p>
                                    </a>
                                </div>
                                <div className="w-1/2 p-4 bg-[#F4D2A0] rounded-lg shadow-lg">
                                    <a href="/InvestmentManage">
                                        <h3 className="text-xl font-bold">Investment Management</h3>
                                        <p className="mt-2">Monitor the performance of MSMEs post-investment and manage portfolios.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default LandingInvestor;
