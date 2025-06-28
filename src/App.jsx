import React from 'react'
import About from './components/About'
import './App.css'
import Links from './components/Links'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from "./components/Certifications";
import HireMe from "./components/HireMe";

function App() {
  return (
    <div>
      <About />
      <Links />
      <Projects/>
      <Experience/>
      <Skills/>
      <Education/>
      <Certifications/>
      <HireMe/>
    </div>
  );
}


export default App;
