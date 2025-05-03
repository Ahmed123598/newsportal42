import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>


<header className="bg-sky-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between  ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img
        src="siasat-logo-white160.png"
        className="h-14"
        alt="siasat"
      />
     
    </a>

   
    <nav
    className='w-1/2'
    //  className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
     >
    <ul className="md:mx-auto  flex w-full items-center text-base justify-around">
        <li>
         <Link to="/"
            clasName=" hover:text-gray-900"
            
          >
            Home
          </Link>
        </li>
       
        <li>
          <Link to="/india"
            className=" hover:text-gray-900"
          >
            India
          </Link>
        </li>


        <li>
          <Link to="/world"
            className=" hover:text-gray-900"
          >
            World
          </Link>
        </li>


        <li>
          <Link to="/business"
            className=" hover:text-gray-900"
          >
            Business
          </Link>
        </li>


        <li>
         <Link to="/sports"
            className=" hover:text-gray-900"
          >
            Sports
          </Link>
        </li>
        <li>
          
          <Link to="/Login"
     className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
     
     Login
     
    
    </Link>
          </li>
        </ul>
          </nav>
  </div>
</header>



    </div>
  )
}

export default Navbar