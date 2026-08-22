import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <motion.div
      className="upside-down-cursor"
      animate={{ x: mousePosition.x - 15, y: mousePosition.y - 15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25, mass: 0.2 }}
    />
  )
}

export default CustomCursor