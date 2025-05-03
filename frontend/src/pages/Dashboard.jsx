import React, { useState } from 'react';
import NewsComponent from '../components/NewsComponent';

const Dashboard = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsData = [
    { id: 1, title: 'Breaking News', category: 'India', description: 'Latest updates on current events in India.' },
    { id: 2, title: 'Global Headlines', category: 'World', description: 'Major world events and stories.' },
    { id: 3, title: 'Business Insights', category: 'Business', description: 'Market trends and finance updates.' }
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold">Welcome to the Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-5">
        {newsData.map(news => (
          <div
            key={news.id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedNews(news)}
          >
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="text-gray-500">{news.category}</p>
          </div>
        ))}
      </div>

      {/* Conditionally Render NewsComponent */}
      {selectedNews && <NewsComponent news={selectedNews} />}
    </div>
  );
};

export default Dashboard;
