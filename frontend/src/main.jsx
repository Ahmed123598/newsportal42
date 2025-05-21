import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Title from './components/Title';

import India from './pages/India';
import World from './pages/World';
import Business from './pages/Business';
import Sports from './pages/Sports';
import Login from './pages/Login';
import DetailedNewsbar from './pages/DetailedNewsbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import News from './components/News';
import Categories from './components/Categories';
import Addnews from './components/Addnews';
import App from './App';
import CategoryNews from './pages/CategoryNews';
import AddCategory from './components/AddCategory';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Navbar /> 
      <Title /> */}

      {/* Routes for Different Pages */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/india" element={<India />} />
        <Route path="/world" element={<World />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news/:id" element={<DetailedNewsbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/news" element={<News />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/addnews" element={<Addnews />} />
        <Route path="/addcategory" element={<AddCategory />} />
        {/* <Route path="/title" element={<Title />} /> */}
            <Route path="/news/category/:categoryId" element={<CategoryNews/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
