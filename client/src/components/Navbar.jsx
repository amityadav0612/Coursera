import React from 'react';

export const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between bg-black p-4 text-white border-b-2 border-gray-900">
      <div className="flex items-center mx-20">
        <img
          src="./images/logo.jpg" 
          alt="coursera Logo"
          className="w-10 h-10 rounded-full mr-3 hover:cursor-pointer" 
        />
        <span className="text-xl font-bold text-blue-500 hover:cursor-pointer">Coursera</span>
      </div>
      <div className="flex items-center mr-20">
        <button
          className="mr-4 p-1 text-white hover:text-gray-400 focus:outline-none"
          aria-label="Toggle theme"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 hover:cursor-pointer" 
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-md font-semibold hover:opacity-80 transition-colors mr-2 cursor-pointer">
          Login
        </button>
        <button className="px-4 py-2 rounded-md font-bold text-white bg-blue-600 hover:opacity-80 transition-opacity cursor-pointer">
          Join now
        </button>
      </div>
    </nav>
  );
};


