import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CategoryNewsCard from '../components/CategoryNewsCard';

function India() {
  const [news, setNews] = useState([]);

  // Fetch news data when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/news') // Replace with actual API URL
      .then(response => response.json())
      .then(data => setNews(data)) // Assuming API returns an array of articles
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center my-6">India News</h1>
        
        {/* Grid layout for three columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <CategoryNewsCard 
              key={index} 
              title={article.title} 
              description={article.description} 
              id={article.id} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default India;
