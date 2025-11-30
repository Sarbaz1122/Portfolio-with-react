import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skill';
import Services from './Components/Services';
import Opensource from './Components/Opensource';
import Contact from './Components/Contact';
import Foter from './Components/Foter';

function App() {
  return (
    <>
    <div className="h-full bg-blue-100" >
      <Navbar />
        <About />
        <Skills />
        <Services />
        <Opensource />
        <Contact />
        <Foter/>
    </div>
    </>
  );
}

export default App;
