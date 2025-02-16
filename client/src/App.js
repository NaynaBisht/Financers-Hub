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
          <Route path="/msme" element={<LandingMSME />} />
          <Route path="/msme/register" element={<Register />} />
          <Route path="/msme/dashboard" element={<Dashboard />} />
          <Route path="/msme/apply-loan" element={<ApplyLoan />} />
          <Route path="/msme/profile" element={<Profile />} />
          <Route path="/msme/gov-schemes" element={<GovSchemes />} />
          <Route path="/msme/financial-literacy" element={<FinancialLiteracy />} />
          <Route path="/msme/loan-status/:msmeId" element={<LoanStatus />} />
          <Route path="/msme/support" element={<Support />} />

          {/* Investor Routes */}
          <Route path="/investor" element={<LandingInvestor />} />
          <Route path="/investor/register" element={<RegisterInvestor />} />
          <Route path="/investor/loan-status/:id" element={<LoanStatusInvestor />} />
          <Route path="/investor/profile" element={<ProfileInvestor />} />
          <Route path="/investor/support" element={<SupportINV />} />
          <Route path="/investor/loan-requests" element={<LoanRequests />} />
        </Routes>

        {/* Global Chatbot Component */}
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
