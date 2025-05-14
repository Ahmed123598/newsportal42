import Navbar from '../components/Navbar';
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'; // Fix Link import
import axios from 'axios';

export default function AdminLogin() {
  const navigate = useNavigate(); // For redirecting after login

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const sendData = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/login', data); // Fix request format
      console.log("Login Response:", res.data);
localStorage.setItem
      // Store JWT token in localStorage
      localStorage.setItem('token', res.data.token);

      // Redirect to dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error("Login Error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const onSubmit = (data) => {
    sendData(data);
    console.log("Login Data:", data);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h3 className="text-center text-xl font-semibold mb-6">LOGO</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
