import React from "react";
const Navbar = () => {
    return (
        <nav className="bg-[#2B1308] bg-opacity-90 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center space-x-4">
                    <img src="/images/logo.png " alt="FinancersHub Logo" className="w-12 h-12" />
                    <h1 className="text-3xl text-white font-bold">FinancersHub</h1>
                </div>
                <ul className="flex space-x-8 text-white">
                    <li className="text-lg"><a href="#home">Home</a></li>
                    <li className="text-lg"><a href="#msmes">About Us</a></li>
                    <li className="text-lg"><a href="#services">Our Services</a></li>
                    <li className="text-lg"><a href="#contact">Contact Us</a></li>
                </ul>
                {/* <div>
                    <a href="register.html" className="bg-[#C25D39] text-white px-4 py-2 rounded-md hover:bg-[#A13A28]">Register</a>
                </div> */}
            </div>
        </nav>
    );
}

export default Navbar;
