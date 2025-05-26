import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import Title from '../components/Title';
import Footer from '../components/Footer';

function DetailedNewsbar() {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        const getSingleNews = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/news/${id}`);
                if (!response.ok) {
                    throw new Error('News not found');
                }
                const data = await response.json();
                 console.log("Fetched News Item:", data);
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
            
            {/* Full-width image at the top */}
            {news.image && (
                 <img
  className="w-full h-[90vh] object-cover"
  src={
    news.image.includes("uploads")
      ? `http://localhost:3000${news.image}`
      : `http://localhost:3000/uploads/${news.image}`
  }
  onError={(e) =>
    (e.target.src =
      "https://dummyimage.com/800x400/cccccc/000000&text=Error+Loading")
  }
  alt="news"
/>
            )}

            {/* Content section after the image */}
            <div className="px-5 py-8 font-sans">
                <p className="text-gray-500">Published: {news.created_at}</p>
                <h1 className="text-3xl font-bold">{news.title}</h1>
                <p className="mt-4 text-gray-700">{news.description}</p>
            </div>

            <Footer />
        </div>
    );
}

export default DetailedNewsbar;
