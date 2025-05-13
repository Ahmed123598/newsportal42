import React from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';

function App() {
  return (
    <>
      
      <Title />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center my-6">Welcome to the News Portal</h1>
        <p className="text-center text-gray-600">
          Stay updated with the latest news from India, World, Business, and Sports.
        </p>
      </div>
    </>
  );
}

export default App;
