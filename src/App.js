import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

// Import your page components
import Home from './pages/Home.js';
import About from './pages/About';
import Academics from './pages/Academics';
import Philosophy from './pages/Philosophy';
import SchoolModels from './pages/SchoolModels';
import CampusFacilities from './pages/CampusFacilities';
import Methodology from './pages/Methodology';
import Contact from './pages/Contact';
import FinnishEducation from './pages/FinnishEducation';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/school-models" element={<SchoolModels />} />
        <Route path="/campus-facilities" element={<CampusFacilities />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/finnish-education" element={<FinnishEducation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
