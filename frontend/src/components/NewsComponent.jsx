import React from 'react';

const NewsComponent = ({ news }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold">{news.title}</h2>
      <p className="text-gray-500">Category: {news.category}</p>
      <p className="mt-2 text-gray-700">{news.description}</p>
    </div>
  );
};

export default NewsComponent;
