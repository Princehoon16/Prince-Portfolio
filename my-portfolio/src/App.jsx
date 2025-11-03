// import React from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/Layout/Footer'


// import { Navbar } from "./components";
// import { Hero } from "./components";
// import { Footer } from './components';
// import { About } from './components'
// import { Skill } from './components'

function App() {
  return (
    <div  className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
