import { useEffect, useState } from "react"

function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  useEffect(() => {

  const handleScroll = () => {

    const sections = ["home", "about", "projects", "contact"]

    let currentSection = ""

    sections.forEach((section) => {

      const element = document.getElementById(section)

      if (element) {

        const rect = element.getBoundingClientRect()

        if (rect.top <= 300 && rect.bottom >= 300) {
          currentSection = section
        }

      }

    })

    if (currentSection) {
      setActiveSection(currentSection)
    }

  }

  window.addEventListener("scroll", handleScroll)

  handleScroll()

  return () => window.removeEventListener("scroll", handleScroll)

}, [])
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold">

            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                ~/swapnil
            </span>

            <span className="text-white ml-1">
                
            </span>

            </h1>
        <div className="flex gap-6 text-gray-300">

       <a
          href="#home"

          onClick={(e) => {
            e.preventDefault()

            document.querySelector("#home").scrollIntoView({
              behavior: "smooth",
            })
          }}

          className={`group cursor-pointer relative transition duration-500 ${
  activeSection === "home"
    ? "text-white scale-110"
    : "text-gray-300"
}`}
        >

          <span>
            Home
          </span>

          <span
  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 ${
    activeSection === "home"
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
></span>
        </a>
           <a
  href="#about"

  onClick={(e) => {
    e.preventDefault()

    document.querySelector("#about").scrollIntoView({
      behavior: "smooth",
    })
  }}

  className={`group cursor-pointer relative transition duration-500 ${
  activeSection === "about"
    ? "text-white scale-110"
    : "text-gray-300"
}`}
>

  <span>
    About
  </span>

  <span
  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 ${
    activeSection === "about"
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
></span>
</a>
         <a
  href="#projects"

  onClick={(e) => {
    e.preventDefault()

    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth",
    })
  }}

  className={`group cursor-pointer relative transition duration-500 ${
  activeSection === "projects"
    ? "text-white scale-110"
    : "text-gray-300"
}`}
>

  <span>
    Projects
  </span>

  <span
  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 ${
    activeSection === "projects"
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
></span>
</a>
       <a
  href="#contact"

  onClick={(e) => {
    e.preventDefault()

    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
    })
  }}

  className={`group cursor-pointer relative transition duration-500 ${
  activeSection === "contact"
    ? "text-white scale-110"
    : "text-gray-300"
}`}
>

  <span>
    Contact
  </span>

  <span
  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-500 ${
    activeSection === "contact"
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
></span>
</a>
        </div>

      </div>

    </nav>
  )
}

export default Navbar