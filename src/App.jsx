import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import LoginAsAdmin from "./pages/Admin/LoginAsAdmin";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Routes>
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
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
