import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar.js';
import axios from 'axios'; 

const RegisterInvestor = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        contactInfo: '',
        email: '',
        phone: '',
        idNumber: '',
        occupation: '',
        employerName: '',
        businessAddress: '',
        position: '',
        riskTolerance: 'Conservative', // Default option
        amountToInvest: '',
        netWorthDocs: null,
        sourceOfFundsDocs: null,
        investmentExperienceDocs: null,
        termsAccepted: false,
        password: '', // Added for sign in
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();  

    // Input handling for text inputs
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

    // Form submission logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                // Handle Sign Up logic
                const formDataToSend = new FormData();
                Object.keys(formData).forEach(key => {
                    formDataToSend.append(key, formData[key]);
                });

                const response = await axios.post('http://localhost:5000/api/msmes/register', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Sign Up Response:', response.data);
                setError(null); // Reset error on success
                setFormData({ // Reset the form data
                    fullName: '',
                    dateOfBirth: '',
                    contactInfo: '',
                    email: '',
                    phone: '',
                    idNumber: '',
                    occupation: '',
                    employerName: '',
                    businessAddress: '',
                    position: '',
                    riskTolerance: 'Conservative', // Default option
                    amountToInvest: '',
                    netWorthDocs: null,
                    sourceOfFundsDocs: null,
                    investmentExperienceDocs: null,
                    termsAccepted: false,
                    password: '', // Reset password
                });
                setIsSignUp(false); // Switch to Sign In state
            } else {
                // Handle Sign In logic
                const response = await axios.post('http://localhost:5000/api/investors/register', {
                    email: formData.email,
                    password: formData.password,
                });
                console.log('Sign In Response:', response.data);
                navigate('/investor'); // Redirect to the landing page
            }
        } catch (error) {
            console.error('Error during API call:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data.message : 'An unexpected error occurred');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-5 mt-4 bg-[#C25D39] w-[20%] text-center text-white p-3 rounded-lg border">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>            
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
                    {isSignUp ? (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="fullName">Full Name</label>
                                    <input
                                        id="fullName"
                                        name="fullName" // Ensure name is set
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="dateOfBirth">Date of Birth</label>
                                    <input
                                        id="dateOfBirth"
                                        name="dateOfBirth" // Ensure name is set
                                        type="date"
                                        value={formData.dateOfBirth}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email" // Ensure name is set
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="phone">Phone Number</label>
                                    <input
                                        id="phone"
                                        name="phone" // Ensure name is set
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="idNumber">Identification Number</label>
                                    <input
                                        id="idNumber"
                                        name="idNumber" // Ensure name is set
                                        type="text"
                                        value={formData.idNumber}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="occupation">Occupation/Profession</label>
                                    <input
                                        id="occupation"
                                        name="occupation" // Ensure name is set
                                        type="text"
                                        value={formData.occupation}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="employerName">Employer Name</label>
                                    <input
                                        id="employerName"
                                        name="employerName" // Ensure name is set
                                        type="text"
                                        value={formData.employerName}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="businessAddress">Business Address</label>
                                    <input
                                        id="businessAddress"
                                        name="businessAddress" // Ensure name is set
                                        type="text"
                                        value={formData.businessAddress}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold text-lg mb-1" htmlFor="position">Position/Title</label>
                                    <input
                                        id="position"
                                        name="position" // Ensure name is set
                                        type="text"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        required
                                        className="border rounded w-full p-2"
                                    />
                                </div>
                            </div>

                            {/* Risk Tolerance */}
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="riskTolerance">Risk Tolerance</label>
                                <select
                                    id="riskTolerance"
                                    name="riskTolerance"
                                    value={formData.riskTolerance}
                                    onChange={handleInputChange}
                                    required
                                    className="border rounded w-full p-2"
                                >
                                    <option value="Conservative">Conservative</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Aggressive">Aggressive</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="amountToInvest">Amount Intended to Invest</label>
                                <input
                                    id="amountToInvest"
                                    name="amountToInvest" // Ensure name is set
                                    type="number"
                                    value={formData.amountToInvest}
                                    onChange={handleInputChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>

                            {/* File Uploads */}
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1">Upload Net Worth Document</label>
                                <input
                                    type="file"
                                    name="netWorthDocs"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1">Upload Source of Funds Document</label>
                                <input
                                    type="file"
                                    name="sourceOfFundsDocs"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1">Upload Investment Experience Document</label>
                                <input
                                    type="file"
                                    name="investmentExperienceDocs"
                                    onChange={handleFileChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>

                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    id="termsAccepted"
                                    name="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleCheckboxChange}
                                    required
                                    className="mr-2"
                                />
                                <label htmlFor="termsAccepted" className="text-lg">I accept the terms and conditions</label>
                            </div>

                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Sign Up</button>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    name="email" // Ensure name is set
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold text-lg mb-1" htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password" // Ensure name is set
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="border rounded w-full p-2"
                                />
                            </div>

                            {error && <p className="text-red-500 text-sm">{error}</p>}

                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Sign In</button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterInvestor;