import React, { useState } from 'react';

const YourBrandLogo = () => (
  <img src="/images/logo.jpg" alt="Your Brand Logo" className="h-10 md:h-12 mb-8" />
);

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    setLoading(true);

   
    try {
     
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (email === 'test@example.com' && password === 'password123') {
        console.log('Simulated login successful!');
        alert('Login successful! Welcome.'); // For demonstration
        // Redirect or update app state
      } else {
        setError('Invalid email or password.');
      }

    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-4">
      <div className="bg-[#1A1A1B] p-8 md:p-10 lg:p-12 rounded-lg shadow-lg max-w-md w-full text-white">
        <div className="flex justify-center">
          <YourBrandLogo />
        </div>
        <h2 className="text-xl font-bold text-center mb-6">Welcome to coursera</h2>
        <p className="text-gray-400 text-center mb-8">Login to continue your learning journey.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1A1A1B]"
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-8">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
        <p className="text-center text-gray-400 text-sm mt-4">
          <a href="/forgot-password" className="text-blue-400 hover:underline">
            Forgot Password?
          </a>
        </p>
      </div>
    </div>
  );
};

