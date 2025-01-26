import React, { useState, useEffect } from "react";
import { fetchBeneficiaries, registerBeneficiary } from "../../utils/api";

const ReceptionistDashboard = () => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [purpose, setPurpose] = useState("");
  const [token, setToken] = useState("");
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    const loadBeneficiaries = async () => {
      const data = await fetchBeneficiaries();
      setBeneficiaries(data);
    };
    loadBeneficiaries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const generatedToken = `TOKEN-${Math.floor(Math.random() * 100000)}`;
    const newBeneficiary = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      cnic,
      phone,
      address,
      purpose,
      token: generatedToken,
    };

    await registerBeneficiary(newBeneficiary);
    setBeneficiaries((prev) => [...prev, newBeneficiary]);
    setToken(generatedToken);

    setName("");
    setCnic("");
    setPhone("");
    setAddress("");
    setPurpose("");

    alert(`Beneficiary registered successfully! Token: ${generatedToken}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Receptionist Dashboard
      </h1>

      {/* Registration Form */}
      <form
        className="bg-white shadow-md rounded-lg p-6 mb-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-4">Register a Beneficiary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="CNIC (12345-1234567-1)"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Purpose of Visit"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      {/* Beneficiary List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Registered Beneficiaries</h2>
        {beneficiaries.length === 0 ? (
          <p>No beneficiaries registered yet.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Name</th>
                <th className="p-2">CNIC</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Purpose</th>
                <th className="p-2">Token</th>
              </tr>
            </thead>
            <tbody>
              {beneficiaries.map((beneficiary) => (
                <tr key={beneficiary.id} className="border-t">
                  <td className="p-2">{beneficiary.name}</td>
                  <td className="p-2">{beneficiary.cnic}</td>
                  <td className="p-2">{beneficiary.phone}</td>
                  <td className="p-2">{beneficiary.purpose}</td>
                  <td className="p-2 font-bold text-blue-600">
                    {beneficiary.token}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
