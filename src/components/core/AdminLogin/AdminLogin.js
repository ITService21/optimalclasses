import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function AdminLogin() {
    const apiUrl = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PROD  
    : process.env.REACT_APP_API_URL;  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    //   const response = await axios.post('http://localhost:5005/api/login', {
      const response = await axios.post(`${apiUrl}/api/login`, {
        email,
        password,
      });
      console.log("fvfdvd2",response)

      if (response?.data?.success || response?.data) {
        localStorage.setItem('isAdmin', true);
        localStorage.setItem('adminName', "S.K.S Panel");
        setMessage('Login successful!');
        toast.success("Login successful!")
        navigate("/home");
      } else {
        localStorage.setItem('isAdmin', false);
        toast.error("Login failed!")
        setMessage('Login failed!');
      }
    } catch (error) {
      localStorage.setItem('isAdmin', false);
      toast.error("Invalid credentials.")
      setMessage('Invalid credentials.');
    }
  };

  return (
    <div className="h-[60vh] md:h-screen flex items-center justify-center bg-gradient-to-b from-[#FF512F] to-[#FBB03B]">
 <div>
 <div className="bg-gradient-to-b from-[#ff694e] to-[#e6af57] p-8 rounded shadow-lg w-96 h-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#02AABD] to-[#00CDAC] hover:opacity-[0.8] text-white py-2 rounded  transition"
          >
            Login
          </button>
        </form>
        {message && <p className="text-center mt-4 text-red-500">{message}</p>}
      </div>
 </div>
    </div>
  );
}

export default AdminLogin;
