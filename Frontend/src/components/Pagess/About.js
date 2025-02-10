import React from "react";
import { FaGlobe, FaUsers, FaLightbulb, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      {/* Header Section */}
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-extrabold text-primary">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Empowering agriculture with AI-driven insights. We help farmers make informed decisions for better yield and sustainability.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <FaLightbulb className="text-primary text-4xl mx-auto" />
          <h2 className="text-2xl font-bold text-center mt-4">Our Mission</h2>
          <p className="text-gray-700 text-center mt-2">
            To revolutionize modern farming through AI and data-driven technology, ensuring efficient and sustainable agriculture.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <FaGlobe className="text-primary text-4xl mx-auto" />
          <h2 className="text-2xl font-bold text-center mt-4">Our Vision</h2>
          <p className="text-gray-700 text-center mt-2">
            A world where every farmer has access to intelligent tools for maximizing productivity and profitability.
          </p>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="mt-12 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-primary">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUsers className="text-primary text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Smart Crop Advisory</h3>
            <p className="text-gray-700 mt-2">AI-based recommendations to help farmers choose the best crops for their land.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaLightbulb className="text-primary text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Data-Driven Insights</h3>
            <p className="text-gray-700 mt-2">Providing real-time agricultural insights for optimized productivity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaGlobe className="text-primary text-4xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Sustainable Farming</h3>
            <p className="text-gray-700 mt-2">Leveraging technology to promote eco-friendly and efficient farming practices.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
        <p className="text-gray-700 mt-2">Have questions? Want to collaborate? Reach out to us!</p>
        <p className="text-lg font-semibold text-primary mt-2">
          <FaEnvelope className="inline mr-2" />
          contact@yourcompany.com
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
