import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";
import { XCircleIcon } from "@heroicons/react/24/solid"; // for alert icon

const Visualization = () => {
  const [data, setData] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState("all");
  const [crops, setCrops] = useState([]);
  const [showMessage, setShowMessage] = useState(false); // Alert message state

  useEffect(() => {
    fetch("/Data_Files/all_crops_data.csv")
      .then((response) => response.text())
      .then((csvData) => {
        let parsedData = Papa.parse(csvData, { header: true }).data;
        console.log(parsedData);

        if (parsedData && parsedData.length > 0) {
          setData(parsedData);
          setCrops(["all", ...new Set(parsedData.map((row) => row.label))]);
        } else {
          console.error("Error: CSV data is empty or malformed");
        }
      })
      .catch((error) => {
        console.error("Error fetching CSV data: ", error);
      });
  }, []);

  const filteredData = selectedCrop === "all" ? data : data.filter((row) => row.label === selectedCrop);

  const nValues = filteredData.map((row) => parseFloat(row.N) || 0);
  const pValues = filteredData.map((row) => parseFloat(row.P) || 0);
  const kValues = filteredData.map((row) => parseFloat(row.K) || 0);
  const tempValues = filteredData.map((row) => parseFloat(row.temperature) || 0);
  const humidityValues = filteredData.map((row) => parseFloat(row.humidity) || 0);

  const handleCropSelect = (event) => {
    setSelectedCrop(event.target.value);
    if (!event.target.value) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }
  };

  return (
    <div className="visualization-container bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8">Crop Data Visualization</h2>

      {/* Alert message */}
      {showMessage && (
        <div className="flex items-center justify-between bg-red-100 text-red-800 border border-red-300 px-4 py-3 rounded-md shadow-md max-w-md mx-auto mb-6">
          <div className="flex items-center">
            <XCircleIcon className="h-5 w-5 mr-2 text-red-500" />
            <span>You need to select a crop to visualize the data.</span>
          </div>
          <button onClick={() => setShowMessage(false)} className="text-red-500 hover:text-red-700">
            ✖
          </button>
        </div>
      )}

      {/* Crop selection dropdown */}
      <div className="mb-6 flex justify-center">
        <label className="mr-4 text-lg text-secondary">Select Crop:</label>
        <select
          value={selectedCrop}
          onChange={handleCropSelect}
          className="px-4 py-2 border rounded-lg bg-white shadow-md focus:ring-2 focus:ring-primary focus:outline-none text-gray-700 text-base sm:text-lg"
        >
          {crops.map((crop, index) => (
            <option key={index} value={crop}>
              {crop}
            </option>
          ))}
        </select>
      </div>

      {/* NPK Bar Chart */}
      <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
        <Plot
          data={[
            { x: filteredData.map((row) => row.label), y: nValues, type: "bar", name: "Nitrogen (N)", marker: { color: "#56B4E9" } },
            { x: filteredData.map((row) => row.label), y: pValues, type: "bar", name: "Phosphorus (P)", marker: { color: "#fb923c" } },
            { x: filteredData.map((row) => row.label), y: kValues, type: "bar", name: "Potassium (K)", marker: { color: "#eab308" } },
          ]}
          layout={{
            title: {
              text: "NPK Levels by Crop",
              font: { size: 20 },
              x: 0.5,
              xanchor: "center",
            },
            barmode: "group",
            xaxis: {
              title: "Crop",
              tickangle: -45,
              tickmode: "array",
              tickvals: filteredData.map((row) => row.label),
              ticktext: filteredData.map((row) => row.label),
              titlefont: { size: 16 },
              tickfont: { size: 12 },
            },
            yaxis: {
              title: "Concentration",
              rangemode: "tozero",
              titlefont: { size: 16 },
              tickfont: { size: 12 },
            },
            paper_bgcolor: "#f9fafb",
            plot_bgcolor: "#f9fafb",
            font: { family: "Arial, sans-serif" },
            margin: { t: 40, r: 40, b: 60, l: 40 },
            autosize: true,
          }}
        />
      </div>

      {/* Temperature vs Humidity Scatter Plot */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Plot
          data={[
            {
              x: tempValues,
              y: humidityValues,
              mode: "markers",
              marker: { size: 12, color: "#2563eb", opacity: 0.8, line: { width: 2, color: "black" } },
              name: "Temp vs Humidity",
            },
          ]}
          layout={{
            title: {
              text: "Temperature vs Humidity",
              font: { size: 20 },
              x: 0.5,
              xanchor: "center",
            },
            xaxis: {
              title: "Temperature (°C)",
              gridcolor: "#e5e7eb",
              titlefont: { size: 16 },
              tickfont: { size: 12 },
            },
            yaxis: {
              title: "Humidity (%)",
              gridcolor: "#e5e7eb",
              titlefont: { size: 16 },
              tickfont: { size: 12 },
            },
            paper_bgcolor: "#f9fafb",
            plot_bgcolor: "#f9fafb",
            font: { family: "Arial, sans-serif" },
            margin: { t: 40, r: 40, b: 60, l: 40 },
            autosize: true,
          }}
        />
      </div>
    </div>
  );
};

export default Visualization;
