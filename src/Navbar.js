import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Assuming you have a separate CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Job Portal</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-auth">
                <Link to="/login" className="btn btn-login">Login</Link>
                <Link to="/signup" className="btn btn-signup">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
