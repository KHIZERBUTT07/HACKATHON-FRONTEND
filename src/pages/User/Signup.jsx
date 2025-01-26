import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState(""); // New state for CNIC
  const [phone, setPhone] = useState(""); // New state for Phone number
  const [street, setStreet] = useState(""); // New state for Street
  const [city, setCity] = useState(""); // New state for City
  const [province, setProvince] = useState(""); // New state for Province
  const [purpose, setPurpose] = useState(""); // New state for Purpose
  const [result, setResult] = useState(""); // State for result message
  const [loading, setLoading] = useState(false); // Loading state
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state to true when submitting
    setLoading(true);

    // Prepare the signup data
    const signupData = {
      name,
      cnic,
      contactDetails: { phone },
      address: { street, city, province },
      purpose,
    };

    try {
      // Step 1: Send the signup data to the backend (without image)
      const response = await fetch(
        "https://hackathon-backend-production-c28e.up.railway.app/api/auth/register",
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
        login(data); // Assuming the backend returns user info

        // Capture the userId from the response
        const userId = data.userId;

        // Step 2: Show the alert message and result
        setResult("Signup successful! Please check your Gmail for the user ID.");

        // Call the Web3Forms API after successful signup
        await handleContactFormSubmission(userId);

        // Optionally navigate to login page after a delay
        setTimeout(() => navigate("/login"), 3000);
      } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        setResult(errorData.message || "Signup failed, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred. Please try again.");
    } finally {
      // Set loading state to false after processing is done
      setLoading(false);
    }
  };

  // Web3Form submission function with userId
  const handleContactFormSubmission = async (userId) => {
    const formData = new FormData();
    formData.append("access_key", "7cffbe21-3f5d-40d8-af04-4dale483b51d");
    formData.append("name", name);
    formData.append("userId", userId); // Append the userId here
    formData.append(
      "message",
      "User has signed up successfully. Please check Gmail for user ID."
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      console.log("Contact form submitted successfully.");
    } else {
      console.error("Error submitting contact form:", data);
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
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Please Complete The Form
            </h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                  />
                  <input
                    type="text"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="CNIC (12345-1234567-1)"
                    required
                  />
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    placeholder="Street Address"
                    required
                  />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    required
                  />
                  <input
                    type="text"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    placeholder="Province"
                    required
                  />
                  <input
                    type="text"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    placeholder="Purpose"
                    required
                  />
                  <button type="submit" className="mt-6">
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
                    <span className="ml-3">Submit</span>
                  </button>
                </div>
              </form>
              <p className="mt-6 text-xs text-gray-600 text-center">
                Already have an account?
                <Link to="/login" className="ml-2">
                  Login here
                </Link>
              </p>
              <p className="mt-6 text-green-600 text-center">{result}</p>{" "}
              {/* Display result */}
              {loading && (
                <div className="mt-4 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
                  <p>Submitting...</p>
                </div>
              )}
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

export default Signup;
