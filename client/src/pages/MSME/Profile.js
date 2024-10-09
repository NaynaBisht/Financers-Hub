import React, { useState, useEffect } from 'react';
import NavbarMSME from '../../components/NavbarMSME.js';
import axios from 'axios'; // Import axios for API requests

const Profile = () => {
    // Sample user data for demonstration
    const [userData, setUserData] = useState({
        companyName: "Doe Manufacturing",
        industryType: "Manufacturing",
        location: "123 Business Street, City, State",
        phone: "9876543210",
        email: "john.doe@email.com",
        annualRevenue: "500000",
        profitAndLoss: null,
        balanceSheet: null,
        assetsAndLiabilities: null,
        taxReturn: null,
        businessRegDoc: null,
        collateralDocs: null,
    });

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/users/profile'); // Adjust the endpoint as per your backend route
                setUserData(response.data); // Update userData with fetched data
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData(); // Call the function to fetch data
    }, []);

    if (!userData) {
        return <div>Loading...</div>;  // Show loading indicator while fetching
    }

    // Handle input change for text fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Handle file uploads for document fields
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setUserData({ ...userData, [name]: files[0] });
    };

    // Toggle between edit mode and view mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('/api/users/profile', userData); // Adjust the endpoint for updating user data
            console.log("Profile Updated:", userData);
            toggleEdit(); // Switch back to view mode after submission
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div>
            <NavbarMSME />
            <div className="flex mt-7 items-center justify-center p-6">

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl">

                    <h1 className="text-3xl font-bold mb-10 bg-[#C25D39] text-center text-white py-3 rounded-lg">
                        {isEditing ? 'Edit Profile' : 'Your Profile'}
                    </h1>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="companyName">Name of Company</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={userData.companyName}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="industryType">Type of Industry</label>
                            <input
                                type="text"
                                id="industryType"
                                name="industryType"
                                value={userData.industryType}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={userData.location}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={userData.phone}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="annualRevenue">Annual Revenue</label>
                            <input
                                type="number"
                                id="annualRevenue"
                                name="annualRevenue"
                                value={userData.annualRevenue}
                                onChange={handleInputChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                    </div>

                    {/* Document upload fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="profitAndLoss">Profit and Loss Statement</label>
                            <input
                                type="file"
                                id="profitAndLoss"
                                name="profitAndLoss"
                                onChange={handleFileChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="balanceSheet">Balance Sheet</label>
                            <input
                                type="file"
                                id="balanceSheet"
                                name="balanceSheet"
                                onChange={handleFileChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="assetsAndLiabilities">Assets and Liabilities</label>
                            <input
                                type="file"
                                id="assetsAndLiabilities"
                                name="assetsAndLiabilities"
                                onChange={handleFileChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="taxReturn">Tax Return</label>
                            <input
                                type="file"
                                id="taxReturn"
                                name="taxReturn"
                                onChange={handleFileChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="businessRegDoc">Business Registration Document</label>
                            <input
                                type="file"
                                id="businessRegDoc"
                                name="businessRegDoc"
                                onChange={handleFileChange}
                                className="border rounded w-full p-2"
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-bold text-lg mb-1" htmlFor="collateralDocs">Collateral Documents</label>
                            <input
                                type="file"
                                id="collateralDocs"
                                name="collateralDocs"
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

export default Profile;
