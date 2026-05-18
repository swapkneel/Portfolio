import { motion } from "framer-motion"
import { FaPython, FaDocker } from "react-icons/fa"

import {
  SiMysql,
  SiFlask,
  SiSqlite,
  SiLinux,
} from "react-icons/si"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa"

import {
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si"

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    info: "Semantic structure and responsive layouts",
  },

  {
    name: "CSS",
    icon: <FaCss3Alt />,
    info: "Modern UI styling and animations",
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
    info: "Interactive frontend development",
  },

  {
    name: "React",
    icon: <FaReact />,
    info: "Component-based UI development",
  },

  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    info: "Utility-first modern CSS framework",
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
    info: "Version control and collaboration",
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
    info: "Open-source contributions and repositories",
  },

  {
    name: "C++",
    icon: <SiCplusplus />,
    info: "Problem solving and DSA",
  },

  {
    name: "Java",
    icon: <FaJava />,
    info: "Object-oriented programming",
  },

  {
  name: "Python",
  icon: <FaPython />,
  info: "Backend development and automation",
},

{
  name: "SQL",
  icon: <SiMysql />,
  info: "Database querying and management",
},

{
  name: "Flask",
  icon: <SiFlask />,
  info: "Lightweight Python backend framework",
},

{
  name: "SQLite",
  icon: <SiSqlite />,
  info: "Lightweight relational database",
},

{
  name: "Docker",
  icon: <FaDocker />,
  info: "Containerization and deployment",
},

{
  name: "Linux",
  icon: <SiLinux />,
  info: "Development environment and system usage",
},
]

function Skills() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-24">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        <h1 className="text-5xl md:text-6xl font-bold text-center mb-20">

          My

          <span className=" bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            {" "}Skills
          </span>

        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {skills.map((skill, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              viewport={{ once: true }}

              whileHover={{
                scale: 1.05,
              }}

              className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-5 min-h-[140px] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-400/40 hover:shadow-purple-500/20 hover:shadow-2xl"
            >

           <div className="flex flex-col items-center justify-center text-center h-full">

          <div className="text-4xl mb-3 transition duration-300 group-hover:-translate-y-1">
            {skill.icon}
          </div>

          <h2 className="text-base font-semibold transition duration-300 group-hover:opacity-0">
            {skill.name}
          </h2>

          <p className="absolute bottom-6 left-4 right-4 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
            {skill.info}
          </p>

        </div>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  )
}

export default Skills