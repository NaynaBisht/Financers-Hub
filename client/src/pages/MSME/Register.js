import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar.js';
import axios from 'axios'; // Import axios for making HTTP requests

const Register = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                // Handle Sign Up logic
                const response = await axios.post('http://localhost:5000/api/msmes/register', formData);
                console.log('Sign Up Response:', response.data);
                // Optionally switch to sign in after successful registration
                setIsSignUp(false);
            } else {
                // Handle Sign In logic
                const response = await axios.post('http://localhost:5000/api/msmes/login', formData);
                console.log('Sign In Response:', response.data);
                // Redirect to the LandingMSME page upon successful login
                navigate('/msme');
            }
        } catch (error) {
            console.error('Error during API call:', error.response ? error.response.data : error.message);
            // Optionally, handle errors with user feedback (e.g., show a message)
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
                    <div className="mb-4">
                        <label className="block text-sm mb-1" htmlFor="email">Email</label>
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
                        <label className="block text-sm mb-1" htmlFor="password">Password</label>
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
                    <button type="submit" className="bg-[#C25D39] text-white px-4 py-2 rounded-md hover:bg-[#A13A28] w-full">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <p className="mt-4 text-sm">
                    {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                    <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 hover:underline">
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;
