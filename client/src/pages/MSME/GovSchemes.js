import NavbarMSME from '../../components/NavbarMSME.js';
import React, { useState } from 'react';
import axios from 'axios';

const SchemeForm = () => {
    // State to hold form data and result
    const [formData, setFormData] = useState({
        annualRevenue: '',
        ownership: '',
        sector: '',
        msmeType: '',
        workforce: '',
        location: '',
        valuation: '', // Added Valuation field
    });

    const [result, setResult] = useState('');

    // Handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make POST request to the server with form data
            const response = await axios.post('http://localhost:5000/api/schemes/recommend-scheme', formData);
            if (response.data.success) {
                setResult(`The best scheme for your enterprise is: ${response.data.scheme}`);
            } else {
                setResult('Error predicting scheme');
            }
        } catch (error) {
            console.error('Error response:', error.response ? error.response.data : error.message);
            setResult('Error predicting scheme');
        }
    };

    return (
        <div>
            <NavbarMSME />
            <h2 className="text-3xl font-bold mb-5 mt-4 bg-[#C25D39] text-center text-white p-3 rounded-lg border">Scheme Recommendation Form</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    {/* Annual Revenue Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="annualRevenue">Annual Revenue</label>
                        <input type="number" id="annualRevenue" name="annualRevenue" onChange={handleChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* Ownership Type Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="ownership">Ownership Type</label>
                        <input type="text" id="ownership" name="ownership" onChange={handleChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* Sector Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="sector">Sector</label>
                        <input type="text" id="sector" name="sector" onChange={handleChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* MSME Type Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="msmeType">MSME Type</label>
                        <input type="text" id="msmeType" name="msmeType" onChange={handleChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* Workforce Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="workforce">Workforce</label>
                        <input type="number" id="workforce" name="workforce" onChange={handleChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* Location Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="location">Location</label>
                        <input type="text" id="location" name="location" onChange={handleChange} required className="border rounded w-full p-2" />
                    </div>
                    {/* Valuation Field */}
                    <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="valuation">Valuation</label>
                        <input type="text" id="valuation" name="valuation" onChange={handleChange} required className="border rounded w-full p-2" placeholder="e.g., ₹11 lakh" />
                    </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className="bg-[#C25D39] font-bold text-lg text-white px-4 py-2 rounded-md hover:bg-[#A13A28] w-full">Get Recommendation</button>
            </form>
            {/* Display Result */}
            {result && <p className="mt-4 text-lg font-bold text-center text-[#C25D39]">{result}</p>}
        </div>
    );
};

export default SchemeForm;
