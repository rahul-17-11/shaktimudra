import React, { useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import { Flame } from "lucide-react";
import { GiMeditation } from "react-icons/gi";

export default function Register() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value.trim() });
    setError(""); // Clear errors when user starts typing
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // 🔹 **Validation**
    if (!userData.name) {
      setError("Name is required.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
      setError("Enter a valid email.");
      return;
    }
    if (userData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (userData.password !== userData.confirmpassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const userCredential = await firebase.registerUser(
        userData.email,
        userData.password
      );

      await firebase.putData(`users/${userCredential.user.uid}`, {
        name: userData.name,
        email: userData.email,
      });

      alert("Account created successfully!");
      navigate("/dashboard");
    } catch (error) {
      setError(
        error.code === "auth/email-already-in-use"
          ? "Email is already registered. Try logging in."
          : error.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-gray-800">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center">
            <GiMeditation className="h-6 w-6 text-white" />
          </div>
          <h2 className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ShaktiMudra
          </h2>
        </div>
        <h2 className="text-xl font-semibold text-center mb-4">Create an Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
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
              value={userData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={userData.confirmpassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded-lg font-semibold text-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span
            className="text-indigo-600 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
