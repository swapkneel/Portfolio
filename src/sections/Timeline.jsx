import { motion } from "framer-motion"

const timelineData = [

  {
    title: "Started Exploring Hackathons",
    year: "2025",
    description:
      "Participated in multiple hackathons and collaborative problem-solving events including CyberShield and Health Hackathon.",
  },

  {
    title: "Smart India Hackathon 2025",
    year: "2025",
    description:
      "Led a team in SIH 2025, reaching the Top 60 teams in college selection rounds before the supervisor evaluation stage.",
  },

  {
    title: "EY Techathon 6.0",
    year: "2025",
    description:
      "Led a team and advanced to Round 2 of EY Techathon 6.0, focusing on innovative technology-driven solutions.",
  },

  {
    title: "Cyber Carnival 2026 Finalist",
    year: "2026",
    description:
      "DeceptiScan became a Top 9 finalist out of 300+ teams in Cyber Carnival 2026 for its interactive cybersecurity training platform.",
  },

  {
    title: "GirlScript Summer of Code 2026",
    year: "2026",
    description:
      "Selected as a contributor for GSSoC 2026 and actively contributing to open-source projects and collaborative development.",
  },

]

function Timeline() {
  return (

    <section className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-5xl mx-auto">

        <motion.h1

          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

          className="text-5xl md:text-6xl font-bold text-center mb-24"
        >

          My
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            {" "}Journey
          </span>

        </motion.h1>

        <div className="relative border-l border-white/10 ml-4">

          {timelineData.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}

              viewport={{ once: true }}

              className="mb-16 ml-10 relative"
            >

              <div className="absolute -left-[52px] top-2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"></div>

              <p className="text-sm text-purple-400 mb-2">
                {item.year}
              </p>

              <h2 className="text-3xl font-bold mb-4">
                {item.title}
              </h2>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Timeline