import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiFarmer } from "react-icons/gi";
import { MdAccountCircle, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = React.useState(false); // Toggle state for mobile menu

  return (
    <>
      <nav className="w-full bg-white shadow-md">
        <div className="container flex justify-between items-center py-4">
          {/* Leftmost - Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
          <GiFarmer />
            <p>Agri</p>
            <p className="text-secondary">Tech</p>
          </div>

          {/* Center - Menu Section (visible on desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-12 text-black text-lg">
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
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <MdAccountCircle />
            </button>
            <button className="hidden md:block hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200">
              Login
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="md:hidden bg-white shadow-md w-full py-4">
            <ul className="flex flex-col items-center gap-6 text-black">
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
        )}
      </nav>
    </>
  );
};

export default Navbar;
