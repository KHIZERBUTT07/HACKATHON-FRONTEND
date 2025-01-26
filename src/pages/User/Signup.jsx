import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [purpose, setPurpose] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(""); // Clear any previous result message

    const signupData = {
      name,
      cnic,
      contactDetails: { phone },
      address: { street, city },
      purpose,
    };

    try {
      console.log("Sending signup data to the server:", signupData);

      const response = await fetch(
        "https://hackathon-backend-cqxr.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);

        // Store userId in localStorage for Login page autofill
        localStorage.setItem("userId", data.userId);
        setResult("Signup successful! Redirecting to login page...");

        // Navigate to login page immediately
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        setResult(errorData.message || "Signup failed, please try again.");
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-[#0D6Db7] to-[#8DC63f] flex items-center justify-center px-2">
      <div className="w-full max-w-md h-[85vh] bg-white shadow-xl rounded-lg overflow-y-auto">
        <div className="w-full p-2">
          <div className="text-center">
            <h1 className="text-lg font-bold text-gray-800">Sign Up</h1>
            <p className="mt-1 text-xs text-gray-600">Complete the form below to create an account.</p>
          </div>
          <form className="mt-3 space-y-2" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                placeholder="CNIC (12345-1234567-1)"
                className="w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Street Address"
                className="w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="Purpose"
                className="w-full px-2 py-1 text-sm border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              {loading ? "Submitting..." : "Sign Up"}
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-600 text-center">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
          </p>
          {result && <p className="mt-3 text-center text-green-500 text-sm">{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
