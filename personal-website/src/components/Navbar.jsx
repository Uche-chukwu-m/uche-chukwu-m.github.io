import React from "react";
import { Link } from 'react-router-dom';
// import '../index.css'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="navbar-left">
                <Link to="/" className="logo">Uche</Link>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;