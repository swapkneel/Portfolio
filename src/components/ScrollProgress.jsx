import { motion, useScroll } from "framer-motion"

function ScrollProgress() {

  const { scrollYProgress } = useScroll()

  return (

    <motion.div

      className="fixed top-0 left-0 right-0 h-1 origin-left z-[9999] bg-gradient-to-r from-purple-400 to-cyan-400"

      style={{
        scaleX: scrollYProgress,
      }}
    />

  )
}

export default ScrollProgress