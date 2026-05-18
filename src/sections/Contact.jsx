import { motion } from "framer-motion"

function Contact() {
  return (
    <section 
    id="contact"
    className="min-h-screen bg-zinc-950 text-white px-6 py-24 flex items-center justify-center">

      <div className="max-w-4xl w-full text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >

          Let’s

          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            {" "}Connect
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-12"
        >

          I’m always open to discussing projects,
          open source, internships, collaborations,
          or simply connecting with fellow developers.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 justify-center"
        >

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=swapnilkumarmeerut@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >

            Get In Touch

          </a>

          

        </motion.div>

      </div>

    </section>
  )
}

export default Contact