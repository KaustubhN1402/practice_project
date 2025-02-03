import React, { useState } from "react";
//import { GiFarmer } from "react-icons/gi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // We have just logged the form data, implement backend integration later.
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container bg-gray-100 py-20">
      {/* Contact Header */}
      <section className="contact-header text-center px-4">
        <h1 className="text-4xl font-bold text-primary">
          Get in Touch with Agri Tech
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Have questions or want to learn more about our Agri Tech solutions?
          Reach out to us!
        </p>
      </section>

      {/* Contact Details */}
      <section className="contact-details mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
          <div className="contact-item bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600">ad.naik@gmail.com</p>
          </div>
          <div className="contact-item bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600">+91 989 064 0373</p>
          </div>
          <div className="contact-item bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-600">Pune Institute of Computer Technology, Pune</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form mt-20 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 mt-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              rows="5"
              placeholder="Your message here"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-md mt-4 hover:bg-secondary"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
