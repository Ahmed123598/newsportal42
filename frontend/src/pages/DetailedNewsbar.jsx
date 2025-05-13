import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';

function DetailedNewsbar() {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        const getSingleNews = async () => {
            try {
                const response = await fetch(`http://localhost:3000/news/${id}`);
                if (!response.ok) {
                    throw new Error('News not found');
                }
                const data = await response.json();
                setNews(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getSingleNews();
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div>
            <Navbar />
            <div className="p-5 font-sans">
                <div className="bg-red-900 h-48 w-full"></div>
                <div className="mt-5">
                    <p className="text-gray-500">Published: {news.created_at}</p>
                    <h1 className="text-2xl font-bold">{news.title}</h1>
                    <p className="mt-2 text-gray-700">{news.description}</p>
                    {news.image && (
                        <img className="mt-4 w-full h-64 object-cover" src={`http://localhost:3000/uploads/${news.image}`} alt="news" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default DetailedNewsbar;
