import React, { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    if (email === "test@agriplatform.com" && password === "password123") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white"
      >
        Login
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded shadow-lg w-96">
          <h2 className="text-xl font-semibold">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button onClick={handleLogin} className="w-full bg-orange-500 text-white p-2 mt-2 rounded">
            Login
          </button>
          <button onClick={() => setShowModal(false)} className="w-full text-gray-500 p-2 mt-2">
            Cancel
          </button>
        </div>
      </div>      
      )}
    </>
  );
};

export default Login;
