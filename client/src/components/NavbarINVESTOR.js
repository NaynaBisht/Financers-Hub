import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarINVESTOR = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#2B1308] bg-opacity-90 py-4 px-3 shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-2">

        <div className="flex items-center space-x-4">
          <img src="/images/logo.png" alt="FinancersHub Logo" className="w-12 h-12" />
          <h1 className="text-3xl text-white font-bold">FinancersHub</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <ul className={`hidden md:flex space-x-7 text-white`}>
          <li><Link to="/LandingInvestor">Home</Link></li>
          <li><Link to="/supportinv">Support</Link></li>
          <li><Link to="/ProfileInvestor">Profile</Link></li>
        </ul>

        <div className="hidden md:block">
          <a href="/" className="bg-[#C25D39] text-white px-4 py-2 rounded-md hover:bg-[#A13A28]">Sign Out</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-[#2B1308] bg-opacity-90 text-white">
            <li><Link to="/" className="block px-4 py-2">Home</Link></li>
            <li><Link to="/FinancialLiteracy" className="block px-4 py-2">Financial Literacy</Link></li>
            <li><Link to="/GovSchemes" className="block px-4 py-2">Government Schemes</Link></li>
            <li><Link to="/Support" className="block px-4 py-2">Support</Link></li>
            <li><Link to="/Profile" className="block px-4 py-2">Profile</Link></li>
            <li><Link to="register.html" className="block px-4 py-2 bg-[#C25D39] text-white rounded-md hover:bg-[#A13A28]">Sign Out</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarINVESTOR;
