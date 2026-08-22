import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import './DustParticles.css'

const DustParticles = () => {
  // Generate 60 random particles
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1.5, // Random size between 1.5px and 5.5px
      xStart: Math.random() * 100,   // Random horizontal start (0 to 100vw)
      xEnd: Math.random() * 100,     // Random horizontal end (0 to 100vw)
      yStart: 110,                   // Start slightly below the screen
      yEnd: -10,                     // End slightly above the screen
      duration: Math.random() * 20 + 15, // Random float duration (15s to 35s)
      delay: Math.random() * 10,     // Random start delay
    }))
  }, [])

  return (
    <div className="dust-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="dust-particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.xStart}vw`,
          }}
          initial={{ y: `${p.yStart}vh`, x: 0, opacity: 0 }}
          animate={{
            y: `${p.yEnd}vh`,
            x: `${p.xEnd - p.xStart}vw`,
            opacity: [0, 0.8, 0.8, 0], // Fade in, hold, fade out
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default DustParticles