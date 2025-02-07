import React from "react";

const Dashboard = ({ setIsLoggedIn }) => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Sensor Data</h1>
      <p>🚜 Soil Moisture: 78%</p>
      <p>🌡️ Temperature: 25°C</p>
      <p>💧 Humidity: 60%</p>
      <button
        onClick={() => setIsLoggedIn(false)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
