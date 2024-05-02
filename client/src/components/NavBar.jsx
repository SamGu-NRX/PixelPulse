// components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">PixelPulse</div>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
