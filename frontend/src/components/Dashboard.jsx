import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const stats = [
    { label: 'Total News', value: 60 },
    { label: 'Total Categories', value: 4 },
    { label: 'India News', value: 10 },
    { label: 'World News', value: 10 },
    { label: 'business news', value: 10 },
    { label: 'sports news', value: 10 },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-white p-10">
        <h1 className="text-lg font-medium mb-8">Welcome: <span className="font-semibold">UserName, or Full Name</span></h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-200 p-6 rounded text-center shadow">
              <div className="text-md font-medium capitalize">{stat.label}</div>
              <div className="text-2xl font-bold mt-2">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;