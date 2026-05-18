import { motion } from "framer-motion"
import profileImg from "../assets/profile.jpeg"

function About() {
  return (

    <section
      id="about"
      className="min-h-screen bg-zinc-950 text-white px-6 py-24 flex items-center justify-center"
    >

      <div className="max-w-6xl w-full grid md:grid-cols-[250px_1fr] gap-12 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}

          className="hidden md:flex justify-center"
        >

          <div className="relative w-56 h-56 md:w-64 md:h-64">

            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-20"></div>

            <img
              src={profileImg}
              alt="Profile"

              className="relative z-10 w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border border-white/10"
            />

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}

          
        >

          <p className="text-purple-400 mb-4 text-lg">
            About Me
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">

            Passionate About Building
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              {" "}Modern Experiences
            </span>

          </h1>

          <div className="space-y-6 text-gray-300 leading-8 text-base md:text-lg">

            <p>
              I’m a Computer Science student passionate about
              web development, cybersecurity, and creating
              smooth digital experiences with modern UI/UX.
            </p>

            <p>
              I’ve participated in multiple hackathons including
              Smart India Hackathon, EY Techathon, CyberShield,
              and Cyber Carnival 2026 where DeceptiScan became
              a Top 9 finalist among 300+ teams.
            </p>

            <p>
              Alongside hackathons and full-stack development,
              I actively contribute to open source through
              GSSoC 2026 while continuously exploring new
              technologies and creative problem-solving.
            </p>

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default About