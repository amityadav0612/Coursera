import React from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(60vh-60px)] bg-gradient-to-br from-black to-black text-white p-4 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 leading-tight">
        <span className="text-blue-500">Unlock Your Potential </span>,{" "}
        <span className="text-gray-300"></span>
        <br />
        <span className="text-gray-300">Start Learning Today.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
        A beginner-friendly platform for mastering programming skills.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/signup")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Explore Courses
        </button>
      </div>
    </div>
  );
};
