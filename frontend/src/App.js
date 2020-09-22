/* Dependencies */
import React from "react";

/* Components */
import partners from './Components/data/slides.js';
import Navbar from "./Components/Navbar";
import ServicesSection from './Components/Sections/Services'
import AboutSection from './Components/Sections/About';
import PhilantrophySection from "./Components/Sections/Philantrophy";


/* CSS */
import "./App.css";
import './css/sections/Philantrophy.css';
import './css/foundation/assets/css/foundation.css';
import '../src/css/navbar.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ServicesSection />
      <AboutSection />
      <PhilantrophySection dark={false} properties={partners} />
    </div>
  );
}

export default App; 