import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import portfolioImg from "../assets/projects/portfolio.png"
import taskImg from "../assets/projects/taskmanager.png"
import deceptiScanImg from "../assets/projects/deceptiscan.png"

const projects = [

  {
    title: "Deceptiscan",

     tag: "Top 9 Finalist",

    image: deceptiScanImg,

    description:
      "Interactive cybersecurity training platform that simulates real-world phishing attacks with gamified scoring and real-time feedback.",

      details:
  "DeceptiScan is an interactive cybersecurity platform designed to train users against phishing and social engineering attacks through realistic simulations, gamified scoring, and instant feedback.",

  features: [
    "Realistic phishing simulation",
    "Gamified scoring system",
    "Leaderboard functionality",
    "User dashboard analytics",
    "Authentication system",
  ],

      tech: [
      "Flask",
      "Python",
      "SQLite",
      "Tailwind",
      "JavaScript",
      "Docker",
    ],

    github: "https://github.com/swapkneel/DeceptiScan",
    live: "#",
  },

 {
  title: "Portfolio",

  image: portfolioImg,

  description:
    "Modern animated portfolio website built using React, Tailwind, and Framer Motion.",
     
    details:
    "A modern developer portfolio designed with smooth animations, interactive UI elements, responsive layouts, and cinematic transitions to showcase projects and achievements.",

  features: [
    "Smooth scrolling animations",
    "Interactive skill cards",
    "Project showcase modals",
    "Responsive modern UI",
    "Custom loading screen",
  ],

  tech: ["React", "Tailwind", "Framer Motion"],

  github: "https://github.com/swapkneel/Portfolio",
  live: "https://portfolio-two-drab-32.vercel.app/",
},

 {
  title: "TaskFlow",

  image: taskImg,

  description:
    "Fullstack task manager built with Node.js, Express, MySQL and Vanilla JS. Includes authentication, filters, priorities, due dates and animated UI.",

      details:
    "TaskFlow is a modern task management application focused on improving productivity through clean UI, task organization, and responsive user interactions. It allows users to manage workflows efficiently with an intuitive interface.",

  features: [
    "Task creation and management",
    "Responsive dashboard UI",
    "Interactive task tracking",
    "Clean productivity-focused design",
    "Smooth user experience",
  ],

  tech: ["Node.js", "Express", "MySQL", "Vanilla JS"],

  github: "https://github.com/swapkneel/Taskflow-Fullstack",
  live: "#",
},
  

]

function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

 


  return (

    <section 
    id="projects"
    className="min-h-screen bg-zinc-950 text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >

          Featured
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            {" "}Projects
          </span>

        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div

            onClick={() => setSelectedProject(project)}

              key={index}

              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -10,
              }}

              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-purple-400 transition-all duration-500 cursor-pointer"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>

              <div className="relative z-10">
                <div className="overflow-hidden rounded-2xl mb-6">

                    <img
                      src={project.image}
                      alt={project.title}

                      className="w-full h-52 object-cover rounded-2xl group-hover:scale-110 transition duration-500"
                          />

                        </div>
                        {project.tag && (

                        <div className="mb-4">

                          <span className="px-4 py-2 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/20">
                            {project.tag}
                          </span>

                        </div>

                      )}

                <h2 className="text-3xl font-bold mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/10 text-sm"
                    >

                      {item}

                    </span>

                  ))}

                </div>

                <div className="flex gap-4">

                 <a
                      href={project.github}

                      onClick={(e) => e.stopPropagation()}

                      target="_blank"
                      rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
                  >

                    GitHub

                  </a>

                 <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowModal(true)
                }}

                  className="px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
                >

                  Live Demo

                </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
      <AnimatePresence>

  {showModal && (

    <motion.div

      initial={{ opacity: 0 }}
      
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
    >
      

      <motion.div

        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}

        transition={{ duration: 0.3 }}

        className="bg-zinc-900 border border-white/10 rounded-3xl max-w-3xl w-full p-8 max-h-[90vh] overflow-y-auto"
      >

        <h2 className="text-3xl font-bold mb-4">

           Coming Soon!

        </h2>

        <p className="text-gray-400 leading-7 mb-8">

          This project is currently under deployment.
          The live demo will be available soon.

        </p>

        <button

          onClick={() => setShowModal(false)}

          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >

          Close

        </button>

        

      </motion.div>
      

    </motion.div>

  )}

</AnimatePresence>

    <AnimatePresence>

  {selectedProject && (

    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

     className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
    >

      <motion.div

        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}

        transition={{ duration: 0.3 }}

        className="bg-zinc-900 border border-white/10 rounded-3xl max-w-3xl w-full p-8 max-h-[90vh] overflow-y-auto"
      >

        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full h-64 object-cover rounded-2xl mb-8"
        />

        <div className="flex items-center gap-4 mb-4">

          <h1 className="text-4xl font-bold">
            {selectedProject.title}
          </h1>

          {selectedProject.tag && (

            <span className="px-4 py-2 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/20">
              {selectedProject.tag}
            </span>

          )}

        </div>

        <p className="text-gray-400 leading-8 mb-8">

          {selectedProject.details}

        </p>

        <div className="mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Features
          </h2>

          <ul className="space-y-3 text-gray-400">

            {selectedProject.features.map((feature, index) => (

              <li key={index}>
                • {feature}
              </li>

            ))}

          </ul>

        </div>

        <div className="flex flex-wrap gap-3 mb-8">

          {selectedProject.tech.map((item, index) => (

            <span
              key={index}
              className="px-4 py-2 rounded-full bg-white/10 text-sm"
            >

              {item}

            </span>

          ))}

        </div>

        <div className="flex gap-4 flex-wrap">

          <a
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >

            GitHub

          </a>

          <button
            onClick={() => setSelectedProject(null)}
            className="border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition"
          >

            Close

          </button>

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>
    </section>


  )
}

export default Projects