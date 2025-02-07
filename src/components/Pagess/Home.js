// import React from "react";

// const Home = () => {
//   return (
//     <div className="text-center py-10">
      
//       <p className="mt-4 text-lg">Homepage completed</p>
//     </div>
//   );
// };

// export default Home;
import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/home-page-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> {/* Ensure this stays behind */}
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold">Transforming Agriculture with AI & IoT</h1>
          <p className="mt-4 text-lg md:text-xl">Leverage AI and satellite data for increasing the yield of your produce!</p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </section>

      
      {/* About Section */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-semibold">What We Do</h2>
        <p className="mt-4 text-lg text-gray-700">We help farmers and agribusinesses make data-driven decisions with AI-powered insights, satellite imaging, and real-time analytics.</p>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center">Our Features</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="/images/feature-ai.png" alt="AI Insights" className="mx-auto w-16 h-16" />
            <h3 className="mt-4 text-xl font-medium">AI-Powered Insights</h3>
            <p className="mt-2 text-gray-600">Get predictive analytics for better yield and farm management.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="/images/feature-satellite.jpg" alt="Satellite Data" className="mx-auto w-16 h-16" />
            <h3 className="mt-4 text-xl font-medium">Satellite Data Integration</h3>
            <p className="mt-2 text-gray-600">Leverage real-time satellite images for smarter decisions.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <img src="/images/feature-rt-monitoring.jpg" alt="Real-time Monitoring" className="mx-auto w-16 h-16" />
            <h3 className="mt-4 text-xl font-medium">Real-Time Monitoring</h3>
            <p className="mt-2 text-gray-600">Track farm conditions with IoT sensor integrations.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 text-center bg-orange-500 text-white">
        <h2 className="text-3xl font-semibold">Start Your Smart Farming Journey</h2>
        <p className="mt-4 text-lg">Join our platform today and revolutionize your agricultural practices.</p>
        <button className="mt-6 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">Join Now</button>
      </section>
    </div>
  );
};

export default Home;