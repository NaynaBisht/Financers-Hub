import React from "react";
import NavbarMSME from "../../components/NavbarMSME.js"; 

const LandingMSME = () => {  
    return (
        <div>
            <NavbarMSME />  
            <div className="text-center p-4">
                <h1 className="text-4xl font-bold text-[#2B1308]">Welcome to Financer's Hub for MSMEs</h1>
                <p className="mt-2 text-lg text-gray-700">
                    Unlock Your Business Potential
                </p>
                <h2 className="mt-4 text-2xl text-[#C25D39]">Your Partner in Growth and Financing</h2>
                <p className="mt-2 text-gray-600">
                    Where MSMEs Find Tailored Financial Solutions
                </p>
                <p className="mt-2 text-gray-600">
                    Helping Small Businesses Thrive
                </p>
            </div>
        </div>
    );
}

export default LandingMSME;
