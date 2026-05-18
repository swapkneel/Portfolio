import { motion } from "framer-motion"

function Hero() {
  return (
    <section
    id="home"
    className="relative overflow-hidden bg-black text-white h-screen flex flex-col items-center justify-center px-6">
    <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-20 left-20"></div>

    <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 bottom-20 right-20"></div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-5xl md:text-7xl font-bold text-center mb-6"
        >

        <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 text-transparent bg-clip-text">
           Crafting Digital Experiences
        </span>

        <span className="text-white ml-2">
            
        </span>

        </motion.h1>
      <motion.p
      
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 text-gray-400 text-lg md:text-2xl mt-2 text-center max-w-2xl">
        
        Computer Science Student • Open Source Contributor • Web Developer
      </motion.p>

      <div className="relative z-10 flex gap-4 mt-10 flex-wrap justify-center">

  <button
      onClick={() => {
        document.querySelector("#projects").scrollIntoView({
          behavior: "smooth",
        })
      }}

      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
    >

      View Projects

    </button>

  <a
    href="https://github.com/swapkneel"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/swapnil-goswami-526aa6353"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition"
  >
    LinkedIn
  </a>

</div>

    </section>
  )
}

export default Hero