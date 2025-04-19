'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function RtnGlobalScroll() {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['center end', 'center start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 10])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const blur = useTransform(scrollYProgress, [0, 1], ['0px', '20px'])

  return (
    <div className="h-[100vh] bg-neutral-950 sticky top-0 overflow-hidden">
      {/* Particle effect (stars) */}
      <div className="absolute inset-0 z-0 bg-stars" />

      {/* Sticky Scroll Section */}
      <section
        ref={targetRef}
        className="h-screen sticky top-0 flex items-center justify-center z-10"
      >
        <motion.h1
          style={{ scale, rotate, opacity, filter: blur }}
          className="text-white font-extrabold text-6xl md:text-8xl tracking-tight"
        >
          RTN GLOBAL
        </motion.h1>
      </section>
    </div>
  )
}
