import React from "react";

const Index = () => {
    return (
        <main className="container mx-auto mt-8 px-4">
            <div className="flex flex-wrap justify-between items-start">

                <aside className="w-full md:w-1/3 bg-[#2B1308] bg-opacity-90 p-6 rounded-lg shadow-md mb-8 md:mb-0">
                    <h2 className="text-2xl text-white mb-4">Search Investment </h2>
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

                <section className="w-full md:w-2/3 pl-3 pb-3">
                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h1 className="text-3xl font-bold text-black mb-4">Empowering Banks to Support MSMEs</h1>
                        <p className="text-lg mb-4">FinancersHub provides a platform for banks to evaluate and manage loans, credit score reports, and investment decisions related to MSMEs.</p>
                        <div className="flex space-x-4">
                            <a href="loanRequests.html" className="bg-[#8B1308] bg-opacity-90 text-white p-4 rounded-lg shadow-lg">
                                <h2 className="text-2xl">Loan Requests</h2>
                                <p className="mt-2">Review MSME loan requests and approve or decline based on financial data.</p>
                            </a>
                            <a href="creditScoreReports.html" className="bg-[#6B1308] bg-opacity-90 text-white p-4 rounded-lg shadow-lg">
                                <h2 className="text-2xl">Credit Score Reports</h2>
                                <p className="mt-2">Access real-time credit score reports of MSMEs for informed decision-making.</p>
                            </a>
                            <a href="investmentOpportunities.html" className="bg-[#4B1308] bg-opacity-90 text-white p-4 rounded-lg shadow-lg">
                                <h2 className="text-2xl">Investment Opportunities</h2>
                                <p className="mt-2">Evaluate MSME investment opportunities based on detailed financial reports.</p>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-black mb-4">Tools for Banks</h2>
                        <div className="flex space-x-4">
                            <div className="w-1/2 p-4 bg-[#F4D2A0] rounded-lg shadow-lg">
                                <a href="CreditRisk.html">
                                    <h3 className="text-xl font-bold">Credit Risk Assessment</h3>
                                    <p className="mt-2">Leverage advanced algorithms to assess the creditworthiness of MSMEs.</p>
                                </a>
                            </div>
                            <div className="w-1/2 p-4 bg-[#F4D2A0] rounded-lg shadow-lg">
                                <a href="InvestmentManage.html">
                                    <h3 className="text-xl font-bold">Investment Management</h3>
                                    <p className="mt-2">Monitor the performance of MSMEs post-investment and manage portfolios.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Index;
