import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import India from './pages/India.jsx';
import World from './pages/World.jsx';
import Buisness from './pages/Business.jsx';
import Sports from './pages/Sports.jsx';
import Login from './pages/Login.jsx';
import Business from './pages/Business.jsx';
import DetailedNewsbar from './pages/DetailedNewsbar.jsx';

import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import News from './components/News.jsx';
import Categories from './components/Categories.jsx';
import Addnews from './components/Addnews.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/india" element={<India />} />
      <Route path="/world" element={<World/>} />
      <Route path="/business" element={<Business/>} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dnb" element={<DetailedNewsbar />} />
      
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/side" element={<Sidebar/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/addnews" element={<Addnews/>} />

    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
