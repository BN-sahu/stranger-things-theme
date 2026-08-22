import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import './CharacterGrid.css'

const characters = [
  { name: 'Eleven', role: 'The Mage', image: '/images/eleven.webp' },
  { name: 'Mike Wheeler', role: 'The Paladin', image: '/images/mike.webp' },
  { name: 'Dustin Henderson', role: 'The Bard', image: '/images/dustin.webp' },
  { name: 'Lucas Sinclair', role: 'The Ranger', image: '/images/lucas.webp' },
  { name: 'Will Byers', role: 'The Cleric', image: '/images/will1.webp' },
  { name: 'Max Mayfield', role: 'The Zoomer', image: '/images/max.webp' }
]

// 3D Tilt Component
const TiltCard = ({ char }) => {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  // Maps mouse position to a rotation angle (max 20 degrees)
  const rotateX = useTransform(y, [0, 1], [20, -20])
  const rotateY = useTransform(x, [0, 1], [-20, 20])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div 
      className="character-card"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="card-image-container">
        <img src={char.image} alt={char.name} className="character-image" />
      </div>
      <div className="card-content">
        <h3>{char.name}</h3>
        <p>{char.role}</p>
      </div>
    </motion.div>
  )
}

const CharacterGrid = () => {
  return (
    <section className="character-section">
      <motion.h2 
        className="grid-title"
        initial={{ opacity: 0, z: -100 }}
        whileInView={{ opacity: 1, z: 0 }}
      >
        THE HAWKINS PARTY
      </motion.h2>
      
      <div className="grid-container">
        {characters.map((char, idx) => (
          <TiltCard key={idx} char={char} />
        ))}
      </div>
    </section>
  )
}

export default CharacterGrid