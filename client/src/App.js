import React from "react";
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingMSME from "./pages/MSME/LandingMSME.js"; 
import Register from "./pages/MSME/Register.js"; 
import Dashboard from './pages/MSME/Dashboard.js';
import ApplyLoan from './pages/MSME/ApplyLoan.js';
import Profile from "./pages/MSME/Profile.js";
import GovSchemes from "./pages/MSME/GovSchemes.js";
import FinancialLiteracy from "./pages/MSME/FinancialLiteracy.js";
import LoanStatus from "./pages/MSME/LoanStatus.js";
import Support from "./pages/MSME/Support.js";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Register />} />  
                    <Route path="/msme" element={<LandingMSME />} />  
                    <Route path="/Dashboard" element={<Dashboard />} />  
                    <Route path="/ApplyLoan" element={<ApplyLoan />} />  
                    <Route path="/Profile" element={<Profile />} />  
                    <Route path="/GovSchemes" element={<GovSchemes />} />  
                    <Route path="/FinancialLiteracy" element={<FinancialLiteracy />} />  
                    <Route path="/LoanStatus" element={<LoanStatus />} />  
                    <Route path="/Support" element={<Support />} />  
                </Routes>
            </div>
        </Router>
    );
}

export default App;
