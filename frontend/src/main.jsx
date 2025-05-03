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
import Dashboard from './pages/Dashboard.jsx';


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

    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
