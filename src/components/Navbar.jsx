import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 py-2 shadow-lg relative font-inter">
      <div className="container mx-auto flex justify-between items-center px-3">
        {/* Logo Only */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div
              className="bg-black flex justify-center items-center rounded-[20px] p-2"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-30 w-30 object-contain"
              />
            </div>
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 text-lg items-center">
          <a
            href="/"
            className="bg-white text-blue-600 px-4 py-2 rounded-[20px] font-semibold hover:bg-gray-100 hover:text-blue-700 transition duration-200 ease-in-out"
          >
            Home
          </a>
          <a
            href="/signup"
            className="bg-white text-blue-600 px-4 py-2 rounded-[20px] font-semibold hover:bg-gray-100 hover:text-blue-700 transition duration-200 ease-in-out"
          >
            Signup
          </a>
          <a
            href="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-[20px] font-semibold hover:bg-gray-100 hover:text-blue-700 transition duration-200 ease-in-out"
          >
            Login
          </a>
          <a
            href="/admin-login"
            className="bg-white text-blue-600 px-4 py-2 rounded-[20px] font-semibold hover:bg-gray-100 hover:text-blue-700 transition duration-200 ease-in-out"
          >
            Admin
          </a>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-700 to-blue-500 md:hidden">
            <div className="flex flex-col space-y-2 p-4">
              <a
                href="/"
                className="bg-white text-blue-600 px-4 py-2 rounded-[20px] font-semibold hover:bg-gray-100 hover:text-blue-700 transition duration-200 ease-in-out text-center"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="/signup"
                className="bg-white text-blue-600 px-4 py-2 rounded-[20px] font-semibold hover:bg-gray-100 hover:text-blue-700 transition duration-200 ease-in-out text-center"
                onClick={toggleMenu}
              >
                Signup
              </a>
              <a
                href="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded-[20px] font-semibold hover:bg-gray-100 hover:text-blue-700 transition duration-200 ease-in-out text-center"
                onClick={toggleMenu}
              >
                Login
              </a>
              <a
                href="/admin-login"
                className="bg-white text-blue-600 px-4 py-2 rounded-[20px] font-semibold hover:bg-gray-100 hover:text-blue-700 transition duration-200 ease-in-out text-center"
                onClick={toggleMenu}
              >
                Admin
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
