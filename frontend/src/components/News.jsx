// // components/News.jsx
// import React, { useEffect, useState } from "react";
// import { fetchNews } from "../utils/apiService";


// const News = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getNews = async () => {
//       try {
//         const newsData = await fetchNews();
//         setNews(newsData);
//       } catch (error) {
//         console.error("❌ Error fetching news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getNews();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Latest News</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : news.length === 0 ? (
//         <p>No news found.</p>
//       ) : (
//         <ul className="space-y-2">
//           {news.map((item) => (
//             <li key={item.id} className="p-4 border rounded shadow">
//               <h2 className="text-xl font-semibold">{item.title}</h2>
//               <p>{item.content}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default News;
import React from 'react'
import Sidebar from './Sidebar'
import { useState } from 'react';
import { useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
      useEffect(() => {
          const fetchNews = async () => {
              try {
                  const response = await fetch('http://localhost:3000/news');
                  if (!response.ok) {
                      throw new Error('Failed to fetch news');
                  }
                  const data = await response.json();
                  setNews(data);
              } catch (error) {
                  setError(error.message);
              } finally {
                  setLoading(false);
              }
          };
          fetchNews();
      }, []);
  
      if (loading) return <p className="text-center text-gray-500">Loading...</p>;
      if (error) return <p className="text-center text-red-500">{error}</p>;
  
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
          {news.map((item) => (
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