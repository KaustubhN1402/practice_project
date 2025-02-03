import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiFarmer } from "react-icons/gi";
import { MdAccountCircle, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false); 

  return (
    <>
      
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
        <div className="container flex justify-between items-center py-4 px-6">
          {/* Leftmost - Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <GiFarmer className="text-primary text-5xl" />
            <p className="text-white">AgriTech</p>
          </div>

          {/* Center - Menu Section (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-10 text-white text-lg">
              <li>
                <Link to="/" className="hover:text-primary duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Rightmost - Icons Section */}
          <div className="flex items-center gap-4">
            <button className="text-white text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition-all duration-200">
              <CiSearch />
            </button>
            <button className="text-white text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition-all duration-200">
              <MdAccountCircle />
            </button>
            <button className="hidden md:block hover:bg-primary text-white font-semibold rounded-md border-2 border-white px-6 py-2 transition-all duration-200">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <MdClose className="text-4xl text-white" />
            ) : (
              <MdMenu className="text-4xl text-white" />
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-lg py-6 transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-black text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-primary duration-200"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary duration-200"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-primary duration-200"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary duration-200"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
