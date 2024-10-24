import React from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from './pages/FirstPage.js'; // Import the new FirstPage component
import LandingMSME from "./pages/MSME/LandingMSME.js"; 
import Register from "./pages/MSME/Register.js"; 
import Dashboard from './pages/MSME/Dashboard.js';
import ApplyLoan from './pages/MSME/ApplyLoan.js';
import Profile from "./pages/MSME/Profile.js";
import GovSchemes from "./pages/MSME/GovSchemes.js";
import FinancialLiteracy from "./pages/MSME/FinancialLiteracy.js";
import LoanStatus from "./pages/MSME/LoanStatus.js";
import Support from "./pages/MSME/Support.js";
import Chatbot from "./components/Chatbot.js"

// Import investor pages
import LandingInvestor from "./pages/INVESTOR/LandingInvestor.js";
import RegisterInvestor from './pages/INVESTOR/RegisterInvestor.js';
import LoanStatusInvestor from './pages/INVESTOR/LoanStatusInvestor.js';
import ProfileInvestor from './pages/INVESTOR/ProfileInvestor.js';
import Supportinv from "./pages/INVESTOR/SupportINV.js";
import LoanRequests from './pages/INVESTOR/LoanRequests.js';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>

                   <Route path="/" element={<FirstPage />} />  {/* Set FirstPage as the default route */}
                   
                   {/* MSME Routes */}
                   <Route path="/msme/Register" element={<Register />} />  
                    <Route path="/msme" element={<LandingMSME />} />  
                    <Route path="/Dashboard" element={<Dashboard />} />  
                    <Route path="/ApplyLoan" element={<ApplyLoan />} />  
                    <Route path="/Profile" element={<Profile />} />  
                    <Route path="/GovSchemes" element={<GovSchemes />} />  
                    <Route path="/FinancialLiteracy" element={<FinancialLiteracy />} />  
                    <Route path="/LoanStatus" element={<LoanStatus />} />  
                    <Route path="/Support" element={<Support />} />


                   {/* INVESTOR Routes */}
                    <Route path="/LandingInvestor" element={<LandingInvestor />} /> 
                    <Route path="/investor/register" element={<RegisterInvestor />} /> 
                    <Route path="/loanstatus" element={<LoanStatusInvestor />} />  
                    <Route path="/ProfileInvestor" element={<ProfileInvestor />} />
                    <Route path="/supportinv" element={<Supportinv />} />
                    <Route path="/LoanRequests" element={<LoanRequests />} />

                </Routes>
                <Chatbot/>
            </div>
        </Router>
    );
}

export default App;