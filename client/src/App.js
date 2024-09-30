import React from "react";
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingMSME from "./pages/MSME/LandingMSME.js"; 
import Register from "./pages/MSME/Register.js"; // Ensure the correct path

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Register />} />  {/* Main page for registration */}
                    <Route path="/msme" element={<LandingMSME />} />  {/* Landing page after sign in */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
