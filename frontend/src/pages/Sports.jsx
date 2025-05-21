import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Footer from '../components/Footer';

function Sports() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:3000/news/sports');
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
        <Navbar />
        <div className="mt-5 mb-10 px-4 sm:px-10">
            <h1 className="text-3xl font-bold text-center">Sports News</h1>
            {news.length > 0 ? (
                <div className="grid grid-cols-1  gap-8 items-center">
                    {news.map((article) => (
                        <div key={article.id} className="flex flex-row items-center rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            {/* Image on the Left */}
                            <img className="w-1/2 h-auto object-cover" src={`http://localhost:3000${article.image}`} alt="News" />
                            
                            {/* Text on the Right */}
                            <div className="w-1/2 p-4">
                                <h2 className="text-lg font-bold">{article.title}</h2>
                                <p className="text-gray-600">
                                    {article.description ? article.description.substring(0, 100) + "..." : "No description available"}
                                </p>
                                <Link to={`/news/${article.id}`} className="text-blue-500 mt-2 inline-block">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No news available.</p>
            )}
        </div>
        <Footer/>
    </div>
);

}

export default Sports;
