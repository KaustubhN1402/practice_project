// import React from "react";
// import { CiSearch } from "react-icons/ci";
// import { GiFarmer } from "react-icons/gi";
// import { MdAccountCircle, MdMenu } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = React.useState(false); // Toggle state for mobile menu

//   return (
//     <>
//       <nav className="w-full bg-white shadow-md">
//         <div className="container flex justify-between items-center py-4">
//           {/* Leftmost - Logo Section */}
//           <div className="text-2xl flex items-center gap-2 font-bold">
//           <GiFarmer />
//             <p>Agri</p>
//             <p className="text-secondary">Tech</p>
//           </div>

//           {/* Center - Menu Section (visible on desktop) */}
//           <div className="hidden md:flex flex-1 justify-center">
//             <ul className="flex items-center gap-12 text-black text-lg">
//               <li>
//                 <Link to="/" className="hover:text-primary duration-200">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="hover:text-primary duration-200">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="hover:text-primary duration-200"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-primary duration-200">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Rightmost - Icons Section */}
//           <div className="flex items-center gap-4">
//             <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
//               <CiSearch />
//             </button>
//             <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
//               <MdAccountCircle />
//             </button>
//             <button className="hidden md:block hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200">
//               Login
//             </button>
//           </div>

//           {/* Mobile Menu Button (Hamburger Icon) */}
//           <div className="md:hidden" onClick={() => setOpen(!open)}>
//             <MdMenu className="text-4xl" />
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {open && (
//           <div className="md:hidden bg-white shadow-md w-full py-4">
//             <ul className="flex flex-col items-center gap-6 text-black">
//               <li>
//                 <Link
//                   to="/"
//                   className="hover:text-primary duration-200"
//                   onClick={() => setOpen(false)}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="hover:text-primary duration-200"
//                   onClick={() => setOpen(false)}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/services"
//                   className="hover:text-primary duration-200"
//                   onClick={() => setOpen(false)}
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className="hover:text-primary duration-200"
//                   onClick={() => setOpen(false)}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiFarmer } from "react-icons/gi";
import { MdAccountCircle, MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false); // Toggle state for mobile menu
  const [showLoginModal, setShowLoginModal] = useState(false); // Login modal state
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false); // Logout user
      navigate("/"); // Redirect to home
    } else {
      setShowLoginModal(true); // Show login modal
    }
  };

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
              <li><Link to="/" className="hover:text-primary duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary duration-200">About</Link></li>
              <li><Link to="/services" className="hover:text-primary duration-200">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary duration-200">Contact</Link></li>
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
            <button 
              onClick={handleAuth} 
              className="hidden md:block hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200">
              {isLoggedIn ? "Logout" : "Login"}
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
              <li><Link to="/" className="hover:text-primary duration-200" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="hover:text-primary duration-200" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link to="/services" className="hover:text-primary duration-200" onClick={() => setOpen(false)}>Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary duration-200" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <p className="text-gray-600 mb-4">Enter your credentials to continue.</p>
            <button 
              onClick={() => { setIsLoggedIn(true); setShowLoginModal(false); }} 
              className="bg-blue-500 text-white w-full py-2 rounded-md">
              Mock Login
            </button>
            <button 
              onClick={() => setShowLoginModal(false)} 
              className="mt-4 w-full bg-gray-300 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

