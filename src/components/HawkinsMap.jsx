import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import './HawkinsMap.css'

const locations = [
  { name: 'Hawkins National Lab', x: 150, y: 100 },
  { name: 'Starcourt Mall', x: 700, y: 250 },
  { name: 'The Wheeler House', x: 300, y: 450 },
  { name: 'Lover\'s Lake', x: 800, y: 550 }
]

const HawkinsMap = () => {
  const mapRef = useRef(null)

  return (
    <section className="map-section">
      <h2 className="map-title">EXPLORE HAWKINS</h2>
      <div className="map-viewport" ref={mapRef}>
        <motion.div
          className="interactive-map"
          drag
          dragConstraints={mapRef}
          whileDrag={{ cursor: "grabbing" }}
        >
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              className="map-pin"
              style={{ left: loc.x, top: loc.y }}
              whileHover={{ scale: 1.2, zIndex: 10 }}
            >
              <div className="pin-pulse"></div>
              <p className="pin-label">{loc.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HawkinsMap