import NavbarMSME from '../../components/NavbarMSME.js';
import React from 'react';

const GovSchemes = () => {
    // Dummy data for government schemes related to MSME
    const schemes = [
        {
            name: "PM Mudra Yojana",
            description: "Provides loans to small and medium enterprises for their business expansion."
        },
        {
            name: "MSME Development Act",
            description: "Supports the development of MSMEs through various initiatives and schemes."
        },
        {
            name: "Startup India",
            description: "Promotes entrepreneurship and provides support for startups in India."
        },
        {
            name: "Stand-Up India",
            description: "Aims to facilitate bank loans for Scheduled Caste (SC) and Scheduled Tribe (ST) entrepreneurs."
        },
        {
            name: "Credit Guarantee Fund Scheme",
            description: "Provides credit guarantees to banks for MSME loans, reducing risk for lenders."
        },
        {
            name: "Technology Development and Modernization",
            description: "Supports technology upgrades and modernization for MSMEs to enhance productivity."
        },
        {
            name: "Market Development Assistance",
            description: "Provides financial assistance for marketing MSME products to promote exports."
        },
    ];

    return (
        <div>
            <NavbarMSME />
            <h2 className="text-3xl font-bold mb-5 mt-4 bg-[#C25D39] text-center text-white p-3 rounded-lg border">Government Schemes for MSME</h2>
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
                {/* List of schemes */}
                <ul className="list-disc pl-5">
                    {schemes.map((scheme, index) => (
                        <li key={index} className="mb-2">
                            <h3 className="font-bold">{scheme.name}</h3>
                            <p>{scheme.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GovSchemes;
