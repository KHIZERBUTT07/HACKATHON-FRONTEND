import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <div className="navbar">
        {!user ? (
          <div>
            <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
          </div>
        ) : (
          <div>
            <img
              src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`}
              alt="Avatar"
              style={{ width: 40, height: 40, borderRadius: '50%' }}
            />
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
