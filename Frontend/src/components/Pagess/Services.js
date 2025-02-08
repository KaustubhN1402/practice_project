import React from "react"
import disease from "../../Images/disease2.jpg"
import recommend from "../../Images/recommend.jpg"
import pred2 from "../../Images/pred2.jpg"
const services = [
  {
    id: 1,
    title: "Crop Prediction",
    description: "Utilize AI and IoT to optimize crop growth and yield.",
    image: pred2,
    link: "/precision-farming",
  },
  {
    id: 2,
    title: "Crop Recommendation",
    description: "Get accurate insights into soil health and nutrient levels.",
    image: recommend,
    link: "/soil-analysis",
  },
  {
    id: 3,
    title: "Disease Prediction",
    description: "Stay updated with the latest agricultural market trends.",
    image: disease ,
    link: "/market-trends",
  },
];

const Services = () => {
  return (
    <div className="services-container bg-gray-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-black mb-8">
        Our Services
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 sm:grid-cols-1">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-700 mt-2">{service.description}</p>
            <a
              href={service.link}
              className="mt-4 block bg-primary text-white py-2 rounded-md text-center hover:bg-secondary"
            >
              Explore
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;