import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Fetch news articles from the backend
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("http://localhost:3000/news");
                if (!response.ok) {
                    throw new Error("Failed to fetch news");
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

    const handleDelete = async (id) => {
    try {
        const token = localStorage.getItem("token"); // ✅ Retrieve JWT token
        if (!token) {
            throw new Error("Unauthorized: No token found");
        }

        const response = await fetch(`http://localhost:3000/news/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}` // ✅ Include token
            }
        });

        if (!response.ok) {
            throw new Error("Failed to delete news");
        }

        setNews(news.filter((item) => item.id !== id)); // ✅ Remove item from UI
    } catch (error) {
        console.error("❌ Error deleting news:", error);
    }
};


    // ✅ Handle EDIT news article
    const handleEdit = async (id, currentTitle) => {
        const updatedTitle = prompt("Enter new title:", currentTitle);
        if (!updatedTitle) return;

        try {
            const response = await fetch(`http://localhost:3000/news/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: updatedTitle }),
            });

            if (!response.ok) {
                throw new Error("Failed to edit news");
            }

            setNews(news.map((item) => (item.id === id ? { ...item, title: updatedTitle } : item))); // ✅ Update UI
        } catch (error) {
            console.error("❌ Error editing news:", error);
        }
    };

    // ✅ Display loading state
    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div>
            <div className="flex h-screen">
                <Sidebar />
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span>User Name</span>
                        <a href="/addnews">
                            <button className="bg-red-600 text-white px-4 py-2 rounded">New Post</button>
                        </a>
                    </div>
                    <h2 className="text-xl font-bold mb-4">News</h2>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">SNo</th>
                                <th className="py-2 px-4 border-b">Title</th>
                                <th className="py-2 px-4 border-b">Category</th>
                                <th className="py-2 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
  {news.map((item, index) => (
    <tr key={item.id}>
      <td className="py-2 px-4 border-b">{index + 1}</td>
      <td className="py-2 px-4 border-b">{item.title}</td>
      <td className="py-2 px-4 border-b">{item.category}</td>
      <td className="py-2 px-4 border-b">
        <button 
          className="bg-red-600 text-white px-2 py-1 rounded mr-2"
          onClick={() => handleEdit(item.id, item.title)}
        >
          Edit
        </button>
        <button 
          className="bg-red-600 text-white px-2 py-1 rounded"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default News;
