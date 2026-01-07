import React from 'react'

import Header from './component/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Skill from './Pages/Skill';
import "./index.css";

const App = () => {
  return (
    <>
      <Header /> 
      <Home />
      <About />
      <Skill />
    </>
  )
}

export default App