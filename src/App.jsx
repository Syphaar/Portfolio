// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Aos from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import Contactme from "./Components/Contactme";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Sectionone from "./Components/Sectionone";
import Services from "./Components/Services";
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react";

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    Aos.init();
  })

  return (
    <>
      <Navbar />
      <Sectionone />
      <About />
      <Services />
      <Projects />
      <Contactme />
      <ScrollToTop smooth top="120" width="39" height="20" color="black"/>
    </>
  )
}

export default App
