import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pagess/Home"
import About from "./components/Pagess/About";
import Services from "./components/Pagess/Services";
import Contact from "./components/Pagess/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pagess/Login";
import Signup from "./components/Pagess/Signup";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />

        <div className="container mx-auto mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer/>
        
      </div>
    </Router>
  );
};

export default App;
