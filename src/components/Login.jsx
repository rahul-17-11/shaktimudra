import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import { Flame } from "lucide-react";
import { GiMeditation } from "react-icons/gi";

export default function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError(""); // Clear errors when user starts typing
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await firebase.loginUser(loginData.email, loginData.password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Try again.");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-800">
      <div className="bg-white/35 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <GiMeditation className="h-6 w-6 text-white" />
          </div>
          <h2 className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ShaktiMudra
          </h2>
        </div>
        <h2 className="text-xl font-semibold text-center mb-4">Welcome Back!</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? {" "}
          <span
            className="text-indigo-600 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
