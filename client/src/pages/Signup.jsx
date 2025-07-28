import React from "react";
import { useState } from "react";

const YourBrandLogo = () => (
  <img
    src="/images/logo.jpg"
    alt="Your Brand Logo"
    className="h-10 md:h-12 mb-8"
  />
);

export const Signup = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/v1/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({ firstname: "", lastname: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="bg-gray-950 p-8 border-2 border-gray-900  md:p-10 lg:p-12 rounded-2xl shadow-lg max-w-md w-full text-gray-300">
        <div className="flex justify-center"></div>
        <div className="flex gap-6 ml-8">
          <h2 className="text-xl font-bold text-center mt-3 ">Welcome to</h2>
          <span>
            <YourBrandLogo />
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              First Name
            </label>
            <input
              name="firstname"
              onChange={handleChange}
              required
              value={form.firstname}
              type="text"
              id="firstName"
              className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Last Name
            </label>
            <input
              name="lastname"
              onChange={handleChange}
              required
              value={form.lastname}
              type="text"
              id="lastname"
              className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              name="email"
              onChange={handleChange}
              required
              value={form.email}
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              required
              value={form.password}
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1A1A1B]"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
