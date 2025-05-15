import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function India() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:3000/news/india');
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
            <div className="container mx-auto px-4 mt-6">
                <h1 className="text-3xl font-bold text-center">India News</h1>
                {news.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {news.map((article) => (
                            <div key={article.id} className="border p-4 rounded-lg shadow-md">
                                <img className="w-full h-40 object-cover" src={`http://localhost:3000${article.image}`} alt="News" />
                                <h2 className="text-lg font-bold mt-2">{article.title}</h2>
                               <p className="text-gray-600">
  {article.description ? article.description.substring(0, 100) + "..." : "No description available"}
</p>

                                <Link to={`/news/${article.id}`} className="text-blue-500 mt-2 inline-block">Read More</Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No news available.</p>
                )}
            </div>
        </div>
    );
}

export default India;
