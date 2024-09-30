import React from 'react';
import NavbarMSME from "../../components/NavbarMSME.js";

const FinancialLiteracy = () => {
    const resources = [
        {
            title: "Understanding Financial Statements",
            description: "Learn how to read and interpret balance sheets, income statements, and cash flow statements.",
            link: "/resources/financial-statements"
        },
        {
            title: "Basics of Budgeting",
            description: "Discover how to create a budget that helps manage your business expenses and savings effectively.",
            link: "/resources/budgeting"
        },
        {
            title: "Managing Cash Flow",
            description: "Understand the importance of cash flow management and strategies to maintain a healthy cash flow.",
            link: "/resources/cash-flow"
        },
        {
            title: "Accessing Credit",
            description: "Learn about different types of credit available for MSMEs and how to improve your creditworthiness.",
            link: "/resources/accessing-credit"
        },
        {
            title: "Investment Basics",
            description: "Get insights into investment options and how to make informed decisions for your business growth.",
            link: "/resources/investment-basics"
        }
    ];

    return (
        <div>
            <NavbarMSME/>
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-[#2B1308] mb-6">Financial Literacy Resources</h1>
                <p className="mb-4 text-lg text-gray-700">
                    Empower your business with knowledge! Explore our resources designed to improve your financial literacy and management skills.
                </p>
                <div className="space-y-6">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-[#98473E]">{resource.title}</h2>
                            <p className="mt-2 text-gray-600">{resource.description}</p>
                            <a href={resource.link} className="mt-4 inline-block bg-[#C25D39] text-white px-4 py-2 rounded-md hover:bg-[#A13A28] transition">
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FinancialLiteracy;
