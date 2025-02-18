import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar.js';
import axios from 'axios'; 

const Register = () => {

    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        companyName: '',
        industryType: '',
        location: '',
        phone: '',
        email: '',
        password: '',
        annualRevenue: '',
        profitAndLoss: null,
        balanceSheet: null,
        assetsAndLiabilities: null,
        taxReturn: null,
        businessRegDoc: null,
        collateralDocs: null,
        termsAccepted: false,
    });
    const [error, setError] = useState(null); // Error state for API calls
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files[0],  // Assuming single file uploads
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                // Handle Sign Up logic
                const formDataToSend = new FormData();
                Object.keys(formData).forEach((key) => {
                    formDataToSend.append(key, formData[key]);
                });
    
                const response = await axios.post("https://financers-hub-server.vercel.app/api/msmes/register", formDataToSend, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
    
                console.log("Sign Up Response:", response.data);
                setError(null); // Reset error on success
    
                if (response.data.msmeId && response.data.token) {
                    localStorage.setItem("msmeId", response.data.msmeId);
                    localStorage.setItem("token", response.data.token); // Store token
                }
    
                setIsSignUp(false); // Switch to Sign In state
            } else {
                // Handle Sign In logic
                const response = await axios.post("https://financers-hub-server.vercel.app/api/msmes/login", {
                    email: formData.email,
                    password: formData.password,
                });
                // https://financers-hub-server.vercel.app
    
                console.log("Sign In Response:", response.data);
    
                if (response.data.msmeId && response.data.token) {
                    localStorage.setItem("msmeId", response.data.msmeId);
                    localStorage.setItem("token", response.data.token); // Store token
                    navigate(`/msmes/${response.data.msmeId}`)
                }
            }
        } catch (error) {
            console.error("Error during API call:", error);
            setError(error.response?.data?.message || "Something went wrong. Please try again.");
        }
    };
    
    

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-5 mt-4 bg-[#C25D39] w-[40%] text-center text-white p-3 rounded-lg border">{isSignUp ? 'Sign Up  As MSME' : 'Sign In As MSME'}</h1>

                {error && <div className="text-red-500">{error}</div>}

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
                    {isSignUp ? (
                        <>
                            {/* Two-column layout for sign-up fields */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="companyName">Name of Company</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="industryType">Type of Industry</label>
                                    <input
                                        type="text"
                                        id="industryType"
                                        name="industryType"
                                        value={formData.industryType}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="location">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                            </div>

                            {/* Document upload fields */}
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="annualRevenue">Annual Revenue</label>
                                <input
                                    type="number"
                                    id="annualRevenue"
                                    name="annualRevenue"
                                    value={formData.annualRevenue}
                                    onChange={handleInputChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="profitAndLoss">Profit and Loss Statement</label>
                                <input
                                    type="file"
                                    id="profitAndLoss"
                                    name="profitAndLoss"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="balanceSheet">Balance Sheet</label>
                                <input
                                    type="file"
                                    id="balanceSheet"
                                    name="balanceSheet"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="assetsAndLiabilities">Assets and Liabilities</label>
                                <input
                                    type="file"
                                    id="assetsAndLiabilities"
                                    name="assetsAndLiabilities"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="taxReturn">Tax Return</label>
                                <input
                                    type="file"
                                    id="taxReturn"
                                    name="taxReturn"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="businessRegDoc">Business Registration Document</label>
                                <input
                                    type="file"
                                    id="businessRegDoc"
                                    name="businessRegDoc"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="collateralDocs">Collateral Documents</label>
                                <input
                                    type="file"
                                    id="collateralDocs"
                                    name="collateralDocs"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>

                            {/* Terms and Conditions */}
                            <div className="mb-4">
                                <label className="block text-sm">
                                    <input
                                        type="checkbox"
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={handleCheckboxChange}
                                        required
                                    />{' '}
                                    I accept the terms and conditions.
                                </label>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Sign In Fields */}
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                        </>
                    )}
                    <button type="submit" className="bg-[#C25D39] font-bold text-lg text-white px-4 py-2 rounded-md hover:bg-[#A13A28] w-full">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <p className="mt-4 text-sm mb-8">
                    {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                    <button onClick={() => setIsSignUp(!isSignUp)} className=" hover:underline">
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
