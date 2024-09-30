import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarMSME = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#2B1308] bg-opacity-90 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
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

        <ul className={`hidden md:flex space-x-8 text-white`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/apply-loan">Apply for Loan</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/financial-literacy">Financial Literacy</Link></li>
          <li><Link to="/government-schemes">Government Schemes</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>

        <div className="hidden md:block">
          <a href="register.html" className="bg-[#C25D39] text-white px-4 py-2 rounded-md hover:bg-[#A13A28]">Register</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-[#2B1308] bg-opacity-90 text-white">
            <li><Link to="/" className="block px-4 py-2">Home</Link></li>
            <li><Link to="/apply-loan" className="block px-4 py-2">Apply for Loan</Link></li>
            <li><Link to="/dashboard" className="block px-4 py-2">Dashboard</Link></li>
            <li><Link to="/financial-literacy" className="block px-4 py-2">Financial Literacy</Link></li>
            <li><Link to="/government-schemes" className="block px-4 py-2">Government Schemes</Link></li>
            <li><Link to="/support" className="block px-4 py-2">Support</Link></li>
            <li><Link to="/profile" className="block px-4 py-2">Profile</Link></li>
            <li><Link to="register.html" className="block px-4 py-2 bg-[#C25D39] text-white rounded-md hover:bg-[#A13A28]">Register</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarMSME;
