import React from 'react'
import Navbar from '../components/Navbar'

function DetailedNewsbar() {
  return (
    <div>

<Navbar/>
<div className="p-5 font-sans">
      <div className="bg-red-900 h-48 w-full"></div>
      <div className="mt-5">
        <p className="text-gray-500">Time: ago</p>
        <h1 className="text-2xl font-bold">
          Title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
        </h1>
        <p className="mt-2 text-gray-700">
          Descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        </p>
      </div>
    </div>
    </div>
  )
}

export default DetailedNewsbar