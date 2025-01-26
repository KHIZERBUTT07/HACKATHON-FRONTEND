import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo or App Name */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          MyApp
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/signup"
            className="hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/admin"
            className="hover:text-gray-400 transition duration-200 ease-in-out"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
