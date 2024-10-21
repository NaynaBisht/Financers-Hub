import React from "react";
import NavbarMSME from "../../components/NavbarMSME.js";
import { Link } from "react-router-dom";

const LandingMSME = () => {  
    const msmeId = "1234";
    return (
        <div>
            <NavbarMSME />  

            <div className="text-center p-4">
                <h1 className="text-4xl mt-4 font-extrabold text-[#2B1308] md:text-5xl">Welcome to Financer's Hub for MSMEs</h1>
                <p className="mt-3 text-xl text-gray-700">Unlock Your Business Potential</p>

                <div className="mt-4">
                    <h3 className="text-4xl font-bold text-[#98473E]">Bridging Finance and Growth</h3>
                    <p className="mt-2 text-xl text-gray-600">Where MSMEs Find Tailored Financial Solutions</p>
                    <p className="mt-2 text-xl text-gray-600">Helping Small Businesses Thrive</p>
                </div>

                {/* Call to Action Buttons */}
                <div className="mt-4 gap-5 flex flex-col md:flex-row justify-center">
                    <Link to="/ApplyLoan" className="bg-[#98473E] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#B49082] transition duration-300">
                        Apply for a Loan
                    </Link>
                    <Link to={`/loan-status/${msmeId}`} className="bg-[#98473E] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#B49082] transition duration-300">
                        Loan Status
                    </Link>
                </div>

                {/* Introduction */}
                <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
                    Financer’s Hub is a GenAI-powered platform that connects MSMEs with lenders, investors, and government programs, providing tailored financial solutions to help small businesses grow and succeed.
                </p>

                {/* Features Section */}
                <div className="mt-4 text-center">
                    <h2 className="text-3xl font-bold text-[#2B1308]">Why Choose Us?</h2>
                    <div className="flex flex-col md:flex-row justify-center mt-6 space-x-0 md:space-x-6 flex-wrap gap-6">
                        {[
                            {
                                title: "AI-Powered Credit Scoring",
                                description: "Get faster loan approvals with our cutting-edge AI models that assess your business's unique potential."
                            },
                            {
                                title: "Trusted Lenders",
                                description: "We work with reliable financial institutions to ensure you get the best deal possible."
                            },
                            {
                                title: "OCEN Integration",
                                description: "We leverage the Open Credit Enablement Network (OCEN) for standardized data exchange, ensuring efficient loan evaluations."
                            },
                            {
                                title: "Access to Government Schemes",
                                description: "Seamless integration with government schemes helps MSMEs easily apply for financial aid and subsidies."
                            },
                            {
                                title: "Financial Literacy Tools",
                                description: "Access resources and tools to improve your financial management and creditworthiness over time."
                            },
                            {
                                title: "Holistic Credit Assessment",
                                description: "Our credit scoring model uses non-traditional data points like business performance and cash flow, ensuring a more accurate assessment."
                            },
                            {
                                title: "Inclusive Financial Solutions",
                                description: "Targeted at underserved MSMEs, especially in rural areas, to promote financial inclusion and growth."
                            },
                            {
                                title: "Improved Investor Confidence",
                                description: "AI-backed credit scoring helps lenders assess MSME risk profiles more effectively, building investor trust."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
                                <h3 className="text-2xl font-semibold text-[#98473E]">{feature.title}</h3>
                                <p className="mt-2 text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingMSME;
