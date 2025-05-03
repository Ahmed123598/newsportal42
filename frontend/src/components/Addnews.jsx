import React from 'react'
import Sidebar from './Sidebar'

const Addnews = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add a new News</h2>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter news title"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="w-full h-40 border border-gray-300 rounded-md p-2 resize-none focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter news description"
          ></textarea>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Image upload</label>
            <input
              type="file"
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
            />
          </div>

          <div className="flex-1">
            <label className="block font-semibold mb-1">Select Category</label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500">
              <option>Select</option>
              <option>Politics</option>
              <option>Sports</option>
              <option>Entertainment</option>
              <option>Technology</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Create
        </button>
      </form>
    </div>
    </div>
  )
}

export default Addnews