import React from "react";
import NavbarMSME from "../../components/NavbarMSME.js";

const LandingMSME = () => {  
    return (
        <div>
            <NavbarMSME />  
            <div className="text-center p-4">
                <h1 className="text-4xl mt-14 font-extrabold text-[#2B1308]">Welcome to Financer's Hub for MSMEs</h1>
                <p className="mt-3 text-xl text-gray-700">Unlock Your Business Potential</p>

                <div className="mt-6">
                    <h3 className="text-4xl font-bold text-[#98473E]">Bridging Finance and Growth</h3>
                    <p className="mt-2 text-xl text-gray-600">Where MSMEs Find Tailored Financial Solutions</p>
                    <p className="mt-2 text-xl text-gray-600">Helping Small Businesses Thrive</p>
                </div>

                {/* Call to Action Button */}
                <a href="/apply-loan" className="mt-6 inline-block bg-[#98473E] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#B49082] transition duration-300">
                    Apply for a Loan
                </a>

                {/* Introduction */}
                <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
                    Financer’s Hub is a GenAI-powered platform that connects MSMEs with lenders, investors, and government programs, providing tailored financial solutions to help small businesses grow and succeed.
                </p>

                {/* Features Section */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-bold text-[#2B1308]">Why Choose Us?</h2>
                    <div className="flex justify-center mt-6 space-x-6 flex-wrap gap-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold text-[#98473E]">AI-Powered Credit Scoring</h3>
                            <p className="mt-2 text-gray-700">
                                Get faster loan approvals with our cutting-edge AI models that assess your business's unique potential.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold text-[#98473E]">Trusted Lenders</h3>
                            <p className="mt-2 text-gray-700">
                                We work with reliable financial institutions to ensure you get the best deal possible.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold text-[#98473E]">OCEN Integration</h3>
                            <p className="mt-2 text-gray-700">
                                We leverage the Open Credit Enablement Network (OCEN) for standardized data exchange, ensuring efficient loan evaluations.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold text-[#98473E]">Access to Government Schemes</h3>
                            <p className="mt-2 text-gray-700">
                                Seamless integration with government schemes helps MSMEs easily apply for financial aid and subsidies.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold text-[#98473E]">Financial Literacy Tools</h3>
                            <p className="mt-2 text-gray-700">
                                Access resources and tools to improve your financial management and creditworthiness over time.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold text-[#98473E]">Holistic Credit Assessment</h3>
                            <p className="mt-2 text-gray-700">
                                Our credit scoring model uses non-traditional data points like business performance and cash flow, ensuring a more accurate assessment.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold text-[#98473E]">Inclusive Financial Solutions</h3>
                            <p className="mt-2 text-gray-700">
                                Targeted at underserved MSMEs, especially in rural areas, to promote financial inclusion and growth.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                            <h3 className="text-2xl font-semibold text-[#98473E]">Improved Investor Confidence</h3>
                            <p className="mt-2 text-gray-700">
                                AI-backed credit scoring helps lenders assess MSME risk profiles more effectively, building investor trust.
                            </p>
                        </div>
                    </div>
</div>

            </div>

        </div>
    );
}

export default LandingMSME;
