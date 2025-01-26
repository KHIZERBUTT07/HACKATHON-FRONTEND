// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login"
import Signup from "./pages/User/Signup"
import { useAuth } from "./context/AuthContext";
import QrCode from "./pages/User/QrCode";
import Dashboard from "./pages/Admin/Dashboard";

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      {/* <Navbar /> */}
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          {/* Add a route for '/' */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/qr-code" element={<QrCode />} />
          {user && (
            <Route
            path="/profile"
            element={<div>Welcome {user.name}, your profile page</div>}
            />
          )}
          {/* admin */}
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
