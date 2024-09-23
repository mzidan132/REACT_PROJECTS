"use client";
import React from "react";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">

      <div className="flex space-x-12 ml-20">
        <div className="relative group">
          <button className="text-white focus:outline-none transition-transform duration-300 hover:scale-125">
            Home 
            <span className="inline-block ml-1 text-sm"><FontAwesomeIcon icon={faChevronDown} /></span>
          </button>
        </div>

        <div className="relative group">
          <button className="text-white focus:outline-none transition-transform duration-300 hover:scale-125">
            Event
            <span className="inline-block ml-1"><FontAwesomeIcon icon={faChevronDown} /></span>
          </button>
        </div>

        <div className="relative group">
          <button className="text-white focus:outline-none transition-transform duration-300 hover:scale-125">
            Contact
            <span className="inline-block ml-1"><FontAwesomeIcon icon={faChevronDown} /></span>
          </button>
        </div>

        <div className="relative group">
          <button className="text-white focus:outline-none transition-transform duration-300 hover:scale-125">
            Blog
            <span className="inline-block ml-1"><FontAwesomeIcon icon={faChevronDown} /></span>
          </button>
        </div>
      </div>

      <div className="relative mr-20">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1 rounded-full focus:outline-none"
        />
        <span className="absolute right-3 top-1.5 text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 5a6 6 0 100 12 6 6 0 000-12z"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
};

export default Header;
