import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
         localStorage.clear();
         toast.success("Logout Successful!")
         navigate("/home")
    } catch (error) {
        toast.error("Logout Failed!")
    }
  };

  return (
    <div className="h-[60vh] md:h-screen flex items-center justify-center bg-gradient-to-b from-[#6FD6FF] to-[#BFF098]">
      <div>
        <div className="bg-[#ff6f21] p-8 rounded shadow-[20px] w-96 h-[200px]">
          <h2 className="text-2xl font-bold mb-4 text-center font-cinzel">Admin Logout Button</h2>
          <form onSubmit={handleLogout} className="space-y-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-b from-[#662D8C] to-[#ED1E79] hover:opacity-[0.8] text-white py-2 rounded  transition"
            >
              Admin Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
