import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import AdminLayout from './components/AdminLayout';

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

import App from './App';
import CategoryNews from './pages/CategoryNews';
import AddCategory from './components/AddCategory';
import AddNews from './components/Addnews';
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
<Route path="/news" element={<News />} /> 
  {/* Admin Routes with Nested Layout */}
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="news" element={<News />} />
    <Route path="categories" element={<Categories />} />
    <Route path="addnews" element={<AddNews />} />
    <Route path="addcategory" element={<AddCategory />} />
  </Route>
        {/* <Route path="/title" element={<Title />} /> */}
            <Route path="/news/category/:categoryId" element={<CategoryNews/>} />
            {/* <Route path="/admin/news/category/:categoryId" element={<CategoryNews />} /> ✅ Fix missing route */}

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
