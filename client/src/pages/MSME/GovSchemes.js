import React from 'react';
import NavbarMSME from '../../components/NavbarMSME.js';

const governmentSchemes = [
    {
        id: 1,
        name: "PMEGP (Prime Minister’s Employment Generation Programme)",
        description: "Provides financial assistance to new and existing enterprises for setting up or expanding a business.",
        eligibility: "New and existing MSMEs.",
        link: "/apply-pmegp"
    },
    {
        id: 2,
        name: "MUDRA Yojana",
        description: "Offers loans to small businesses for up to 10 lakhs to promote entrepreneurship.",
        eligibility: "Micro and small enterprises.",
        link: "/apply-mudra"
    },
    {
        id: 3,
        name: "Credit Guarantee Fund Scheme for MSMEs (CGTMSE)",
        description: "Provides collateral-free credit to MSMEs, making it easier to access financing.",
        eligibility: "All MSMEs.",
        link: "/apply-cgtmse"
    },
    {
        id: 4,
        name: "Technology Upgradation Fund Scheme (TUFS)",
        description: "Supports MSMEs in upgrading technology to improve productivity and competitiveness.",
        eligibility: "Existing MSMEs in textile and garment manufacturing.",
        link: "/apply-tufs"
    },
    {
        id: 5,
        name: "Stand-Up India Scheme",
        description: "Facilitates bank loans between 10 lakhs and 1 crore for SC/ST and women entrepreneurs.",
        eligibility: "SC/ST and women entrepreneurs.",
        link: "/apply-standup"
    }
];

const GovernmentSchemes = () => {
    return (
        <div>
            <NavbarMSME/>
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-[#2B1308] mb-6">Government Schemes for MSMEs</h1>
                <p className="mb-4 text-lg text-gray-700">
                    Explore various government schemes designed to support and promote the growth of Micro, Small, and Medium Enterprises (MSMEs).
                </p>
                <div className="space-y-6">
                    {governmentSchemes.map((scheme) => (
                        <div key={scheme.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-[#98473E]">{scheme.name}</h2>
                            <p className="mt-2 text-gray-600">{scheme.description}</p>
                            <p className="mt-2 text-gray-700"><strong>Eligibility:</strong> {scheme.eligibility}</p>
                            <a href={scheme.link} className="mt-4 inline-block bg-[#C25D39] text-white px-4 py-2 rounded-md hover:bg-[#A13A28] transition">
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GovernmentSchemes;
