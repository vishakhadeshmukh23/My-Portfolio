import React from 'react'

import Header from './component/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import Contect from './Pages/Contect';
import Footer from './component/Footer';

import "./index.css";

const App = () => {
  return (
    <>
      <Header /> 
      <Home />
      <About />
      <Education />
      <Skill />
      <Project />
      <Contect />
      <Footer />
    </>
  )
}

export default App