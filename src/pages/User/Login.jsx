import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [cnic, setCnic] = useState(""); // State for CNIC
  const [userId, setUserId] = useState(""); // State for User ID
  const { login } = useAuth();
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { cnic, userId }; // Send CNIC and User ID to the backend

    try {
      const response = await fetch(
        "https://hackathon-backend-production-c28e.up.railway.app/api/auth/login", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        // Store the user object directly from the response
        login(data.user); // Changed this line to use data.user
        navigate("/qr-code");
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 p-6 sm:p-12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="Logo"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Login to Your Account</h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input
                    className=""
                    type="text"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="CNIC (12345-1234567-1)"
                    required
                  />
                  <input
                    className=""
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="User ID"
                    required
                  />
                  <button
                    type="submit"
                    className=""
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>
                </div>
              </form>
              <p className="mt-6 text-xs text-gray-600 text-center">
                Don't have an account?
                <Link
                  to="/signup"
                  className="ml-2"
                >
                  Signup here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
