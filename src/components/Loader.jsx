import { motion } from "framer-motion"

function Loader() {
  return (

    <motion.div

      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      transition={{ duration: 0.8 }}

      className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
    >

      <div className="text-center">

        <motion.h1

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{
            duration: 0.8,
          }}

          className="text-5xl md:text-7xl font-bold"
        >

          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
            ~/swapnil
          </span>

        </motion.h1>

        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{
            delay: 0.5,
            duration: 0.8,
          }}

          className="text-gray-400 mt-6 tracking-[0.3em] uppercase text-sm"
        >

          Loading Experience...

        </motion.p>

      </div>

    </motion.div>

  )
}

export default Loader