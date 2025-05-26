import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token"); 

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/api/news/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNewsData(response.data || {});
      } catch (error) {
        setError("❌ Failed to fetch data. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {loading ? (
        <p className="text-gray-600">⏳ Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded shadow-md">
          {[
            { title: "📰 Total News", key: "totalNews", path: "/admin/news" },
            { title: " India News", key: "indiaNews", path: "/india" },
            { title: "🌎 World News", key: "worldNews", path: "/world" },
            { title: "⚽ Sports News", key: "sportsNews", path: "/sports" },
            { title: "💰 Business News", key: "businessNews", path: "/business" },
          ].map(({ title, key, path }) => (
            <div 
              key={key} 
              className="bg-blue-100 p-4 rounded text-center cursor-pointer hover:bg-blue-200 transition"
              onClick={() => navigate(path)}
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-lg font-bold">{newsData[key] || 0}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
