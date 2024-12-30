// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          The Constitution Play
        </Link>
        <div className="nav-buttons">
          {/* <Link to="/get-started" className="btn-primary">
            Get Started
          </Link>
          <Link to="/sign-up" className="btn-secondary">
            Sign Up
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;