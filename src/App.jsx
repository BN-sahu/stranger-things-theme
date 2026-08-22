import React from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'

import CustomCursor from './components/CustomCursor'
import DustParticles from './components/DustParticles'
import Hero from './components/Hero'
import ScrollSection from './components/ScrollSection'
import CharacterGrid from './components/CharacterGrid'
import HawkinsMap from './components/HawkinsMap'

function App() {
  return (
    <AnimatePresence mode="wait">
      <CustomCursor />
      
      {/* The drifting 3D spores overlay */}
      <DustParticles /> 
      
      <main className="app-container">
        <Hero />
        <ScrollSection />
        <CharacterGrid />
        <HawkinsMap />
      </main>
    </AnimatePresence>
  )
}

export default App