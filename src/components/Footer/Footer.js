import React from "react";
import { GiFarmer } from "react-icons/gi"; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6">
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and About Section */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <GiFarmer className="text-primary text-7xl " />
            <h2 className="text-2xl font-semibold">Agri Tech</h2>
          </div>
          <p className="mt-2 text-gray-400">
            Innovative agricultural solutions for a sustainable future.
          </p>
        </div>

        {/* Navigation Links in 2x2 Grid */}
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-cols-2 gap-8 text-lg">
            <Link to="/" className="hover:text-primary transition duration-300">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="hover:text-primary transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
          <p className="text-gray-400">Pune Institute of Computer Technology</p>
          <p className="text-gray-400">Email: ad.naik@gmail.com</p>
          <p className="text-gray-400">Phone: +91 989 064 0373</p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end gap-4 mt-3">
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-2xl transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-2xl transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-2xl transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary text-2xl transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-3">
        &copy; {new Date().getFullYear()} Agri Tech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
