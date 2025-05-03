import React from 'react'
import Sidebar from './Sidebar'

const News = () => {
    const newsItems = [
        { sno: 1, title: "Breaking News", category: "India" },
        { sno: 2, title: "Tech Innovations", category: "World" },
        { sno: 3, title: "Business Growth", category: "Business" }
      ];
  return (
    <div>
        <div className="flex h-screen">

        <Sidebar/>
        
        <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <span>User Name</span>
       <a href='/addnews'>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Newpost</button>
        </a>
      </div>
      <h2 className="text-xl font-bold mb-4">News</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sno</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {newsItems.map((item) => (
            <tr key={item.sno}>
              <td className="py-2 px-4 border-b">{item.sno}</td>
              <td className="py-2 px-4 border-b">{item.title}</td>
              <td className="py-2 px-4 border-b">{item.category}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-red-600 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        
        
        
        
        
        </div>
        </div>
  )
}

export default News