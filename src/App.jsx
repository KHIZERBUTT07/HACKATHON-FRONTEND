import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import LoginAsAdmin from "./pages/Admin/LoginAsAdmin";
import ReceptionistDashboard from "./pages/User/ReceptionistDashboard"; // Import Receptionist Dashboard
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/admin-login"
            element={
              <LoginAsAdmin
                setIsAdminAuthenticated={setIsAdminAuthenticated}
              />
            }
          />

          {/* Protected Admin Route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Receptionist Dashboard Route */}
          <Route
            path="/receptionist-dashboard"
            element={<ReceptionistDashboard />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
