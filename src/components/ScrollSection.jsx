import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ScrollSection.css'

const ScrollSection = () => {
  const sectionRef = useRef(null)

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Triggers when top of section hits bottom of viewport, ends when bottom hits top
  })

  // Parallax effects: 
  // Background moves slowly downwards
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  
  // Foreground content floats slightly upwards
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section className="scroll-section" ref={sectionRef}>
      
      {/* Parallax Background Layer */}
      <motion.div 
        className="parallax-bg"
        style={{ y: backgroundY }}
      />

      {/* Foreground Content Layer */}
      <motion.div 
        className="content-container"
        style={{ y: textY }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          THE GATE IS OPEN
        </motion.h2>
        
        <motion.p 
          className="section-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Beneath the surface of our quiet town lies a mirror world. 
          It's dark, it's cold, and it's hungry. The Demogorgon was just the beginning. 
        </motion.p>

        <motion.div 
          className="image-placeholder"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="static-noise"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ScrollSection