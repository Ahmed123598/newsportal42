import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-sky-900">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="siasat-logo-white160.png" className="h-14" alt="siasat" />
        </a>

        <nav className="w-1/2">
          <ul className="md:mx-auto flex w-full items-center text-base justify-around">
            <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link to="/india" className="hover:text-gray-900">India</Link></li>
            <li><Link to="/world" className="hover:text-gray-900">World</Link></li>
            <li><Link to="/business" className="hover:text-gray-900">Business</Link></li>
            <li><Link to="/sports" className="hover:text-gray-900">Sports</Link></li>
            <li><Link to="/login" className="bg-gray-100 border-0 py-1 px-3 rounded hover:bg-gray-200">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
