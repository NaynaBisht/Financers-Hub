import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage.js"; // Default Landing Page
import LandingMSME from "./pages/MSME/LandingMSME.js";
import Register from "./pages/MSME/Register.js";
import Dashboard from "./pages/MSME/Dashboard.js";
import ApplyLoan from "./pages/MSME/ApplyLoan.js";
import Profile from "./pages/MSME/Profile.js";
import GovSchemes from "./pages/MSME/GovSchemes.js";
import FinancialLiteracy from "./pages/MSME/FinancialLiteracy.js";
import LoanStatus from "./pages/MSME/LoanStatus.js";
import Support from "./pages/MSME/Support.js";
import Chatbot from "./components/Chatbot.js";

// Import Investor Pages
import LandingInvestor from "./pages/INVESTOR/LandingInvestor.js";
import RegisterInvestor from "./pages/INVESTOR/RegisterInvestor.js";
import LoanStatusInvestor from "./pages/INVESTOR/LoanStatusInvestor.js";
import ProfileInvestor from "./pages/INVESTOR/ProfileInvestor.js";
import SupportINV from "./pages/INVESTOR/SupportINV.js";
import LoanRequests from "./pages/INVESTOR/LoanRequests.js";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<FirstPage />} />

          {/* MSME Routes */}
          <Route path="/msmes/:msmeId" element={<LandingMSME />} />
          <Route path="/msmes/register" element={<Register />} />
          <Route path="/msmes/dashboard/:msmeId" element={<Dashboard />} />
          <Route path="/msmes/apply-loan/:msmeId" element={<ApplyLoan />} />
          <Route path="/msmes/profile/:msmeId" element={<Profile />} />
          <Route path="/msmes/gov-schemes" element={<GovSchemes />} />
          <Route path="/msmes/financial-literacy" element={<FinancialLiteracy />} />
          <Route path="/msmes/loan-status/:msmeId" element={<LoanStatus />} />
          <Route path="/msmes/support" element={<Support />} />

          {/* Investor Routes */}
          <Route path="/investors" element={<LandingInvestor />} />
          <Route path="/investors/register" element={<RegisterInvestor />} />
          <Route path="/investors/loan-status/:id" element={<LoanStatusInvestor />} />
          <Route path="/investors/profile" element={<ProfileInvestor />} />
          <Route path="/investors/support" element={<SupportINV />} />
          <Route path="/investors/loan-requests" element={<LoanRequests />} />
        </Routes>

        {/* Global Chatbot Component */}
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
