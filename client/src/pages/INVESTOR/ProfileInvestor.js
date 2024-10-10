import React, { useState, useEffect } from 'react';
import NavbarINVESTOR from '../../components/NavbarINVESTOR.js';
import axios from 'axios'; // Import axios for API requests

const ProfileInvestor = () => {
    // Investor-specific data
    const [investorData, setInvestorData] = useState({
            fullName: '',
            dateOfBirth: '',
            email: '',
            phone: '',
            idNumber: '',
            occupation: '',
            employerName: '',
            businessAddress: '',
            position: '',
            riskTolerance: '',
            amountToInvest: '',
            netWorthDocs: null,
            sourceOfFundsDocs: null,
            investmentExperienceDocs: null,
            termsAccepted: false,
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchInvestorData = async () => {
            try {
                const response = await axios.get('/api/investors/profile'); // Adjust the endpoint as per your backend route
                setInvestorData(response.data); // Update investorData with fetched data
            } catch (error) {
                console.error('Error fetching investor data:', error);
            }
        };

        fetchInvestorData(); // Call the function to fetch data
    }, []);

    if (!investorData) {
        return <div>Loading...</div>;  // Show loading indicator while fetching
    }

    // Handle input change for text fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInvestorData({ ...investorData, [name]: value });
    };

    // Handle file uploads for document fields
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setInvestorData({ ...investorData, [name]: files[0] });
    };

    // Toggle between edit mode and view mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('/api/investors/profile', investorData); // Adjust the endpoint for updating investor data
            console.log("Profile Updated:", investorData);
            toggleEdit(); // Switch back to view mode after submission
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div>
            <NavbarINVESTOR />
            <div className="flex mt-7 items-center justify-center p-6">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl">
                    <h1 className="text-3xl font-bold mb-10 bg-[#C25D39] text-center text-white py-3 rounded-lg">
                        {isEditing ? 'Edit Investor Profile' : 'Investor Profile'}
                    </h1>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                        <label className="block font-bold text-lg mb-1" htmlFor="fullName">Full Name</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={investorData.fullName}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                value={investorData.dateOfBirth}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={investorData.email}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={investorData.phone}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="idNumber">Identification Number</label>
                            <input
                                id="idNumber"
                                name="idNumber"
                                type="text"
                                value={investorData.idNumber}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="occupation">Occupation/Profession</label>
                            <input
                                id="occupation"
                                name="occupation"
                                type="text"
                                value={investorData.occupation}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="employerName">Employer Name</label>
                            <input
                                id="employerName"
                                name="employerName"
                                type="text"
                                value={investorData.employerName}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="businessAddress">Business Address</label>
                            <input
                                id="businessAddress"
                                name="businessAddress"
                                type="text"
                                value={investorData.businessAddress}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                    </div>

                    {/* Document upload fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="networthDoc">Net Worth Document</label>
                            <input
                                type="file"
                                id="networthDoc"
                                name="networthDoc"
                                onChange={handleFileChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="sourceoffundsDoc">Source of Funds Document</label>
                            <input
                                type="file"
                                id="sourceoffundsDoc"
                                name="sourceoffundsDoc"
                                onChange={handleFileChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="investexpDoc">Investment Experience Document</label>
                            <input
                                type="file"
                                id="investexpDoc"
                                name="investexpDoc"
                                onChange={handleFileChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                    
                    
                    </div>
      

                    {/* Action Buttons */}
                    <div className="flex justify-between mt-6">
                        {isEditing ? (
                            <button
                                type="submit"
                                className="bg-[#98473E] text-white py-2 px-6 rounded-lg hover:bg-[#B49082] transition">
                                Save Changes
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="bg-[#C25D39] text-white py-2 px-6 rounded-lg hover:bg-[#A13A28] transition"
                                onClick={toggleEdit}>
                                Edit Profile
                            </button>
                        )}
                        {isEditing && (
                            <button
                                type="button"
                                className="bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition"
                                onClick={toggleEdit}>
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileInvestor;
