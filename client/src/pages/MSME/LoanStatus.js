import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarMSME from "../../components/NavbarMSME.js";

const LoanStatus = () => {
  const { msmeId } = useParams();
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define fetchLoanStatus outside of useEffect
  const fetchLoanStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized: No token found!");
        setLoading(false);
        return;
      }

      if (!msmeId || typeof msmeId !== "string") {
        setError("Invalid MSME ID!");
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/msmes/all-loans/${msmeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("API Full Response:", response);
      console.log("API Response Data:", response.data);
      console.log("API Data Type:", typeof response.data.data);
      console.log("API Data:", response.data.data);

      // Ensure the response is always an array
      const data = response.data.data;
      setLoans(Array.isArray(data) ? data : data ? [data] : []);
    } catch (error) {
      console.error("Error fetching loan status:", error);
      if (error.response) {
        setError(`Server Error: ${error.response.data.message || "Unknown error"}`);
      } else if (error.request) {
        setError("No response from the server. Please try again.");
      } else {
        setError(`Request Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Call fetchLoanStatus inside useEffect
  useEffect(() => {
    console.log("MSME ID:", msmeId);
    fetchLoanStatus();
  }, [msmeId]);

  // Refresh function
  const refreshLoanStatus = () => {
    setLoading(true);
    setError(null);
    fetchLoanStatus(); // Now fetchLoanStatus is accessible
  };

  return (
    <div>
      <NavbarMSME />
      <h2 className="text-3xl font-bold mb-5 mt-4 bg-[#C25D39] text-center text-white p-3 rounded-lg border">
        Loan Status
      </h2>
      <div className="p-6 max-w-5xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-300 text-lg animate-pulse">
            Loading...
          </p>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-400 font-semibold">{error}</p>
            <button
              onClick={refreshLoanStatus}
              className="mt-4 px-4 py-2 bg-[#C25D39] text-white rounded-lg hover:bg-[#8B3C20]"
            >
              Refresh
            </button>
          </div>
        ) : loans.length > 0 ? (
          <div className="grid gap-6">
            {loans.map((loan) => (
              <div
                key={loan._id}
                className="p-6 bg-white shadow-lg rounded-xl border border-[#8B3C20]"
              >
                <p className="text-lg font-semibold text-[#2B1308]">
                  <span className="text-gray-600">Amount:</span> $
                  {loan.amount || "N/A"}
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Tenure:</span>{" "}
                  {loan.tenure ? `${loan.tenure} months` : "N/A"}
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Status:</span>{" "}
                  {loan.status || "N/A"}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Applied At:{" "}
                  {loan.createdAt
                    ? new Date(loan.createdAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">
            No loans found for this MSME.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoanStatus;