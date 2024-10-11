import React, { useState } from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';

const Supportinv = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., API call)
        console.log('Support Request Submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (

        <div>
            <NavbarINVESTOR/>
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold text-[#2B1308] mb-6">Support</h1>
                <p className="mb-4 text-lg text-gray-700">
                    If you have any questions or need assistance, please fill out the form below, and our support team will get back to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border rounded-md"
                            rows="4"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#C25D39] text-white py-2 px-4 rounded-md hover:bg-[#A13A28] transition"
                    >
                        Submit
                    </button>
                </form>
                {/* FAQs Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-[#2B1308] mb-4">Frequently Asked Questions</h2>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h3 className="font-semibold text-lg">1. How can I apply for a loan?</h3>
                        <p className="mt-1 text-gray-600">You can apply for a loan by visiting our Apply for Loan page and filling out the required information.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
                        <h3 className="font-semibold text-lg">2. What documents are required for loan application?</h3>
                        <p className="mt-1 text-gray-600">You will need to provide your business registration, financial statements, and identification documents.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
                        <h3 className="font-semibold text-lg">3. How long does it take to process a loan application?</h3>
                        <p className="mt-1 text-gray-600">The processing time varies, but we aim to provide a response within 5-7 business days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Supportinv;
