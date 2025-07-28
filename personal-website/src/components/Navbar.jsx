import React from "react";
// import { Link } from 'react-router-dom';
// import '../index.css'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-slate-900/80 text-white backdrop-blur-sm border-b border-slate-700">
            <div className="navbar-left">
                <Link to="/" className="text-2xl font-bold text-shite hover:text-red-500 transition-colors">Uche</Link>
            </div>
            <div className="navbar-center">
                <ul className="flex items-center gap-6 text-lg">
                    <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
                    {/* We'll add an About Me section later */}
                    <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
                    <li><a href="#projects" className="hover:text-red-500 transition-colors">Projects</a></li>
                    <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;