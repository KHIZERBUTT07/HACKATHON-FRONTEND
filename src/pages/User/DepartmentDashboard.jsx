import React, { useState } from "react";
import { fetchBeneficiaries } from "../../utils/api";

const DepartmentDashboard = () => {
  const [token, setToken] = useState("");
  const [beneficiary, setBeneficiary] = useState(null);

  const handleSearch = async () => {
    try {
      const beneficiaries = await fetchBeneficiaries(); // Fetch predefined beneficiaries
      const foundBeneficiary = beneficiaries.find(
        (b) => b.token === token.trim() // Match token
      );

      if (foundBeneficiary) {
        setBeneficiary(foundBeneficiary);
      } else {
        alert("No beneficiary found for this token.");
        setBeneficiary(null);
      }
    } catch (error) {
      console.error("Error fetching beneficiaries:", error);
      alert("An error occurred while searching for the token.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Department Dashboard</h1>

      {/* Token Search */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Search Beneficiary by Token</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter Token"
            className="px-4 py-2 border rounded-md w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Beneficiary Details */}
      {beneficiary && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Beneficiary Details</h2>
          <p>
            <strong>Name:</strong> {beneficiary.name}
          </p>
          <p>
            <strong>CNIC:</strong> {beneficiary.cnic}
          </p>
          <p>
            <strong>Phone:</strong> {beneficiary.phone}
          </p>
          <p>
            <strong>Address:</strong> {beneficiary.address}
          </p>
          <p>
            <strong>Purpose:</strong> {beneficiary.purpose}
          </p>
          <p>
            <strong>Token:</strong> {beneficiary.token}
          </p>
          <p>
            <strong>Status:</strong> {beneficiary.status}
          </p>
        </div>
      )}
    </div>
  );
};

export default DepartmentDashboard;
