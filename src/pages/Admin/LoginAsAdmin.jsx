import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAsAdmin = ({ setIsAdminAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminEmail = "admin123@gmail.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      alert("Admin login successful!");
      setIsAdminAuthenticated(true); // Mark admin as authenticated
      navigate("/admin"); // Redirect to the Admin Dashboard
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-xl font-bold text-gray-800 text-center">Admin Login</h1>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Admin Email"
            className="w-full px-4 py-2 text-sm border rounded-md"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 text-sm border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAsAdmin;
