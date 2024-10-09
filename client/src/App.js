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

// Import investor pages
import LandingInvestor from "./pages/INVESTOR/LandingInvestor.js";
import RegisterInvestor from './pages/INVESTOR/RegisterInvestor.js';
import DashboardInvestor from './pages/INVESTOR/DashboardInvestor.js';
import InvestmentOpportunities from './pages/INVESTOR/InvestmentOpportunities.js';
import LoanStatusInvestor from './pages/INVESTOR/LoanStatusInvestor.js';
import ProfileInvestor from './pages/INVESTOR/ProfileInvestor.js';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>

                   <Route path="/" element={<FirstPage />} />  {/* Set FirstPage as the default route */}
                   
                   {/* MSME Routes */}
                    <Route path="/msme" element={<LandingMSME />} />
                    <Route path="/msme/register" element={<Register />} />  {/* MSME Registration */}
                    <Route path="/msme/dashboard" element={<Dashboard />} />  
                    <Route path="/msme/applyloan" element={<ApplyLoan />} />  
                    <Route path="/msme/profile" element={<Profile />} />  
                    <Route path="/msme/govschemes" element={<GovSchemes />} />  
                    <Route path="/msme/financialliteracy" element={<FinancialLiteracy />} />  
                    <Route path="/msme/loanstatus" element={<LoanStatus />} />  
                    <Route path="/msme/support" element={<Support />} />  

                   {/* INVESTOR Routes */}
                    <Route path="/investor" element={<LandingInvestor />} />
                    <Route path="/investor/register" element={<RegisterInvestor />} />  {/* Investor Registration */}
                    <Route path="/investor/dashboard" element={<DashboardInvestor />} />  
                    <Route path="/investor/investmentopportunities" element={<InvestmentOpportunities />} />  
                    <Route path="/investor/loanstatus" element={<LoanStatusInvestor />} />  
                    <Route path="/investor/profile" element={<ProfileInvestor />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
