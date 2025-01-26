// src/main.jsx (or src/index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import createRoot
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot instead of render

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
