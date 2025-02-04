import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiFarmer } from "react-icons/gi";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"; // Firebase imports

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // For handling errors
  const [user, setUser] = useState(null); // For tracking logged-in user
  const navigate = useNavigate(); // To navigate after successful login

  const auth = getAuth();

  // Checking if the user is already logged in (when component mounts)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // If the user is logged in, store the user data
      } else {
        setUser(null); // If the user is logged out, reset the user data
      }
    });
    return unsubscribe; // Clean up subscription on unmount
  }, [auth]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password); // Login using Firebase
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
      setError("Invalid email or password. Please try again."); // Show error message
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase logout
      navigate("/login"); // Redirect to login page after logout
    } catch (err) {
      console.error("Error signing out: ", err); // Handle any errors
    }
  };

  return (
    <div className="contact-container bg-gray-100 py-20 h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo Section */}
        <div className="text-2xl flex justify-center items-center gap-2 font-bold mb-6">
          <GiFarmer className="text-primary text-5xl" />
          <p className="text-black text-4xl">AgriTech</p>
        </div>

        {/* Error Handling */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 mb-4">
            <p>{error}</p>
          </div>
        )}

        {/* Login Form */}
        {!user ? (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary mt-2"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-lg font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary mt-2"
                required
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-700 text-sm">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-primary text-sm">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold rounded-md px-6 py-2 transition-all duration-200 hover:bg-opacity-90"
            >
              Login
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">You are already logged in as {user.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-primary text-white font-semibold rounded-md px-6 py-2 transition-all duration-200 hover:bg-opacity-90"
            >
              Logout
            </button>
          </div>
        )}

        {!user && (
          <div className="mt-4 text-center text-gray-700">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
