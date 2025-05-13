import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Home from './pages/Home';
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Navbar /> 
      <Title /> */}

      {/* Routes for Different Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
