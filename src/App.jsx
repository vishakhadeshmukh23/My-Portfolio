import React from 'react'

import Header from './component/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import "./index.css";

const App = () => {
  return (
    <>
      <Header /> 
      <Home />
      <About />
      <Skill />
      <Project />
    </>
  )
}

export default App