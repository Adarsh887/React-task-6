import './App.css';
import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;