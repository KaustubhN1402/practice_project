// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Pagess/Home"
// import About from "./components/Pagess/About";
// import Services from "./components/Pagess/Services";
// import Contact from "./components/Pagess/Contact";

// const App = () => {
//   return (
//     <Router>
//       <div className="overflow-x-hidden">
//         <Navbar />

//         <div className="container mx-auto mt-10">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pagess/Home";
import About from "./components/Pagess/About";
import Services from "./components/Pagess/Services";
import Contact from "./components/Pagess/Contact";
import Login from "./components/Pagess/Login";
import Dashboard from "./components/Pagess/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />

        <div className="container mx-auto mt-10">
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              </>
            ) : (
              <Route path="/" element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

