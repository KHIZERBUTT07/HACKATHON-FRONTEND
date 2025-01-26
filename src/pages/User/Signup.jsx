import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const signupData = {
      name,
      cnic,
      contactDetails: { phone },
      address: { street, city, province },
      purpose,
    };

    try {
      const response = await fetch(
        "https://hackathon-backend-production-c28e.up.railway.app/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(`Signup successful! Your User ID is: ${data.userId}`);
        localStorage.setItem("userId", data.userId); // Store userId
        navigate("/login");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Signup failed, please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-xl font-bold text-gray-800 text-center">Signup</h1>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full px-4 py-1.5 text-sm border rounded-md"
            required
          />
          <input
            type="text"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
            placeholder="CNIC (12345-1234567-1)"
            className="w-full px-4 py-1.5 text-sm border rounded-md"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full px-4 py-1.5 text-sm border rounded-md"
            required
          />
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Street Address"
            className="w-full px-4 py-1.5 text-sm border rounded-md"
            required
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="w-full px-4 py-1.5 text-sm border rounded-md"
            required
          />
          <input
            type="text"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            placeholder="Province"
            className="w-full px-4 py-1.5 text-sm border rounded-md"
            required
          />
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Purpose"
            className="w-full px-4 py-1.5 text-sm border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <span
            onClick={() => {
              localStorage.removeItem("userId"); // Clear userId when navigating
              navigate("/login");
            }}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
