import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'

const Categories = () => {
   
   const [a,setA]= useState([])
   useEffect(()=>{
     const fetchd=async()=>{
    try {
 const api= await fetch('http://localhost:3000/categories')
const json=await api.json()
setA(json)
       
    } catch (error) {
      console.log(error);
      
    }
   
    }
    fetchd()
   },[])
  return (
    <div>
        <div className="flex h-screen">

        <Sidebar/>
        
        <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <span>User Name</span>
        <a href='/addnews'>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Category Add</button>
        </a>
      </div>
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sno</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {a.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
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

export default Categories