import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/news.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-600">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <div className="flex title-font font-medium items-center text-amber-50 mb-4 md:mb-0">
               <img src={logo} alt="news" className="h-14" />
              </div>
              <span className="self-center text-2xl font-Roboto whitespace-nowrap">
                 
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#CECECE] sm:mb-0">
              <li>
                <Link to="/app" className="hover:underline me-4 md:me-6">
                  App
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/licensing" className="hover:underline me-4 md:me-6">
                  Licensing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-[#CECECE] sm:text-center">
            © 2025{' '}
            <Link to="/" className="hover:underline">
              This News
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
