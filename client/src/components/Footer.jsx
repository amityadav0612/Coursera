import React from "react";

const YourCompanyLogo = () => (
  <img src="/images/logo.jpg" alt="Coursera Logo" className="h-8 md:h-10" />
);

// Placeholder icons (in a real project, use react-icons or SVGs)
const FacebookIcon = () => (
  <svg
    className="w-5 h-5 fill-current text-gray-400 hover:text-blue-500 transition-colors"
    viewBox="0 0 24 24"
  >
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.908c0-.817.092-1.292 1.166-1.292h2.334v-5h-3.996c-3.665 0-4.004 2.193-4.004 4.148v3.052z"></path>
  </svg>
);
const TwitterIcon = () => (
  <svg
    className="w-5 h-5 fill-current text-gray-400 hover:text-blue-400 transition-colors"
    viewBox="0 0 24 24"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.89-.941-2.161-1.517-3.578-1.517-2.715 0-4.92 2.206-4.92 4.92 0 .385.045.758.128 1.115-4.09-.205-7.722-2.165-10.156-5.132-.423.72-.666 1.56-.666 2.457 0 1.705.867 3.206 2.188 4.095-.807-.025-1.568-.247-2.238-.618v.06c0 2.384 1.7 4.368 3.952 4.82-.413.111-.849.171-1.296.171-.318 0-.626-.031-.926-.089.631 1.956 2.445 3.376 4.604 3.417-1.68 1.32-3.805 2.108-6.113 2.108-.398 0-.79-.023-1.176-.069 2.176 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.507 14.01-14.01 0-.197-.004-.393-.013-.588.963-.695 1.795-1.562 2.465-2.545z"></path>
  </svg>
);
const LinkedinIcon = () => (
  <svg
    className="w-5 h-5 fill-current text-gray-400 hover:text-blue-600 transition-colors"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);
const InstagramIcon = () => (
  <svg
    className="w-5 h-5 fill-current text-gray-400 hover:text-pink-500 transition-colors"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.774 1.677 4.922 4.92.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.85-.148 3.252-1.673 4.775-4.922 4.923-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.773-1.674-4.92-4.92-.058-1.265-.069-1.645-.069-4.85 0-3.204.012-3.584.069-4.849.148-3.252 1.673-4.773 4.92-4.92zM12 4.076c-3.141 0-3.53.013-4.74.067-2.311.108-3.328 1.127-3.435 3.437-.054 1.21-.067 1.599-.067 4.74 0 3.14.013 3.53.067 4.74.107 2.311 1.125 3.328 3.435 3.435 1.21.054 1.599.067 4.74.067 3.14 0 3.53-.013 4.74-.067 2.31-.108 3.328-1.125 3.435-3.435.054-1.21.067-1.599.067-4.74 0-3.14-.013-3.53-.067-4.74-.108-2.31-1.125-3.328-3.435-3.435-1.21-.054-1.599-.067-4.74-.067zM12 6.865c-2.83 0-5.135 2.304-5.135 5.135s2.305 5.135 5.135 5.135 5.135-2.304 5.135-5.135-2.305-5.135-5.135-5.135zm0 8.375c-1.785 0-3.24-1.455-3.24-3.24s1.455-3.24 3.24-3.24 3.24 1.455 3.24 3.24-1.455 3.24-3.24 3.24zm6.807-10.975c-.75 0-1.359.609-1.359 1.358 0 .75.609 1.358 1.359 1.358.75 0 1.358-.609 1.358-1.358 0-.75-.608-1.358-1.358-1.358z"></path>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-16 mt-16 border-t border-gray-800">
      {" "}
      {/* bg-dark-background from your page, mt-16 for spacing */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <div className="flex flex-col items-start md:col-span-1">
          <div className="mb-4  flex flex-col ">
            <div className="flex">
              <YourCompanyLogo />
              <div className="text-blue-500 font-semibold mt-2.5">
                Unlock your potential
              </div>
            </div>
            <div className="mt-5 ml-2">
              <h3 className="text-lg font-semibold mb-4 ">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="#" aria-label="Twitter">
                  <TwitterIcon />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href="#" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-30 mt-3">
          <h3 className="text-lg font-semibold mb-4 ">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal & Social */}
        <div className="ml-30 mr-0">
          <h3 className="text-lg font-semibold mb-4 mt-3">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm mb-6">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8  text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} coursera . All rights reserved.</p>
      </div>
    </footer>
  );
};
