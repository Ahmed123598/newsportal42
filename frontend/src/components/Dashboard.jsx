import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

export default function Dashboard() {
    const [newsData, setNewsData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem("token"); 
                if (!token) {
                    setError("❌ No token found. Redirecting...");
                    setTimeout(() => navigate("/login"), 2000);
                    return;
                }

                const response = await axios.get("http://localhost:3000/news/dashboard", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setNewsData(response.data || {});
            } catch (error) {
                setError(error.response?.data?.message || "Failed to fetch dashboard data.");
                setTimeout(() => navigate("/login"), 2000);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [navigate]);

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="p-4 w-full">
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

                {loading ? (
                    <p className="text-gray-600">⏳ Loading data...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded shadow-md">
                        {/* Clickable Cards */}
                        {[
                            { title: "📰 Total News", key: "totalNews", path: "/news" },
                            { title: "🇮🇳 India News", key: "indiaNews", path: "/news/category/4" },
                            { title: "🌎 World News", key: "worldNews", path: "/news/category/3" },
                            { title: "⚽ Sports News", key: "sportsNews", path: "/news/category/1" },
                            { title: "💰 Business News", key: "businessNews", path: "/news/category/2" },
                        ].map(({ title, key, path }) => (
                            <div 
                                key={key} 
                                className="bg-blue-100 p-4 rounded text-center cursor-pointer hover:bg-blue-200 transition"
                                onClick={() => navigate(path)}
                            >
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-lg font-bold">{newsData[key]}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
