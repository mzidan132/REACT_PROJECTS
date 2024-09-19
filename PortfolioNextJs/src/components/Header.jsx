"use client"; // Add this directive at the top

import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-md bg-opacity-60 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center font-bold">
        <a href="#home" className="text-white text-lg font-semibold">My Portfolio</a>
        <div className="hidden md:flex space-x-8">
          <a href="#introduction" className="text-gray-200 hover:text-white transition duration-300">Introduction</a>
          <a href="#skills" className="text-gray-200 hover:text-white transition duration-300">Skills</a>
          <a href="#projects" className="text-gray-200 hover:text-white transition duration-300">Projects</a>
          <a href="#education" className="text-gray-200 hover:text-white transition duration-300">Education</a>
          <a href="#contact" className="text-gray-200 hover:text-white transition duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-200 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg">
          <a href="#introduction" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-200 hover:text-white transition duration-300">Introduction</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-200 hover:text-white transition duration-300">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-200 hover:text-white transition duration-300">Projects</a>
          <a href="#education" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-200 hover:text-white transition duration-300">Education</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-gray-200 hover:text-white transition duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Header;
