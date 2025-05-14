import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // For redirecting to login

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('token'); // Get JWT token
                if (!token) {
                    setError("No token found. Redirecting to login...");
                    setTimeout(() => navigate('/login'), 2000);
                    return;
                }

                const response = await axios.get('http://localhost:3000/dashboard', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setUserData(response.data.user);
            } catch (error) {
                setError(error.response?.data?.message || "Failed to fetch dashboard data.");
                setTimeout(() => navigate('/login'), 2000);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [navigate]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

            {loading ? (
                <p className="text-gray-600">Loading user data...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
                    <h3 className="text-xl font-semibold mb-4">Welcome, {userData.firstName}!</h3>
                    <p>Email: {userData.email}</p>
                    <button
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                        onClick={() => {
                            localStorage.removeItem('token'); // Logout
                            navigate('/login');
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
