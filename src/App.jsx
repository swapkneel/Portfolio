import { useEffect } from "react"
import Lenis from "lenis"

import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Cursor from "./components/Cursor"
import Timeline from "./sections/Timeline"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import Loader from "./components/Loader"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

function App() {

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  }, [])

  const [loading, setLoading] = useState(true)

useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false)
  }, 2500)

  return () => clearTimeout(timer)

}, [])

  return (
    <>
      <AnimatePresence>

    {loading && <Loader />}

  </AnimatePresence>
  
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Cursor />
      <Timeline />
      <Contact />
      <Footer />
    </>
  )
}

export default App