'use client'

import { motion, } from 'framer-motion'

export default function RtnGlobalScroll() {
  return (
    <div className="h-[100vh] bg-neutral-950 overflow-hidden">

      {/* Sticky Scroll Section */}
      <section
        className="h-screen sticky top-0 flex items-center justify-center z-10"
      >
        <motion.h2
          className="text-white font-extrabold text-6xl md:text-8xl tracking-tight"
        >
          RTN GLOBAL
        </motion.h2>
      </section>
    </div>
  )
}
