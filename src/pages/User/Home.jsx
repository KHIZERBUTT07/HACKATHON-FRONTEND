import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
            Welcome to the Beneficiary Management App
          </h1>
          <p className="text-xl mb-10 font-medium text-gray-600">
            Streamline your workflows with a system designed to manage beneficiaries, departments, and operations efficiently.
          </p>
          {/* Call-to-Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link
              to="/signup"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-300 text-center"
            >
              Register as Beneficiary
            </Link>
            <Link
              to="/login"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-300 text-center"
            >
              Login as Beneficiary
            </Link>
            <Link
              to="/admin-login"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-300 text-center"
            >
              Admin Login
            </Link>
            <Link
              to="/receptionist-dashboard"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-300 text-center"
            >
              Login as Receptionist
            </Link>
            <Link
              to="/department-dashboard"
              className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-300 text-center"
            >
              Login as Department
            </Link>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4">
          <img
            src="/saylani1.jpeg"
            alt="Saylani Welfare 1"
            className="rounded-lg shadow-lg w-full h-[300px] object-cover"
          />
          <img
            src="/saylani2.jpeg"
            alt="Saylani Welfare 2"
            className="rounded-lg shadow-lg w-full h-[300px] object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
