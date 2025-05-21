import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/news.png";
const Navbar = () => {
  const token=localStorage.getItem('token')
  return (
    <header className="bg-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-[#CECECE] mb-4 md:mb-0">
          <img src={logo} alt="News logo" className="h-14" />

        </a>

        <nav className="w-1/2">
          <ul className="md:mx-auto flex w-full items-center text-base justify-around">
            <li><Link to="/" className=" text-[#CECECE]">Home</Link></li>
            <li><Link to="/india" className="text-[#CECECE]">India</Link></li>
            <li><Link to="/world" className="text-[#CECECE]">World</Link></li>
            <li><Link to="/business" className="text-[#CECECE]">Business</Link></li>
            <li><Link to="/sports" className="text-[#CECECE]">Sports</Link></li>
           {token? <li><Link to="/login" className="bg-gray-100 border-0 py-1 px-3 rounded hover:bg-[#CECECE]">Login</Link></li>: <li><Link to="/dashboard" className="bg-gray-100 border-0 py-1 px-3 rounded hover:bg-[#CECECE]">Dashboard</Link></li>}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
