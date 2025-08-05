'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import Badge from '@/components/ui/Badge'
import GlowButton from '@/components/ui/GlowButton'
import Image from 'next/image'
import GlitchText from '@/components/ui/GlitchText'
import MagneticButton from '@/components/ui/MagneticButton'
import { motion } from 'framer-motion'
import TrustPilotWidget from '@/components/utils/TrustPilotWidget'

interface HeroProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  badgeText?: string
}

export default function HeroSection({
  title = "We Build, Design & Fix Your Digital Presence",
  subtitle = "From custom-coded websites to stunning Wix designs and expert-level bug fixes — we turn your digital vision into reality.",
  primaryButtonText = "Get a Free Quote",
  primaryButtonLink = "/contact",
  secondaryButtonText = 'Explore Our Services',
  secondaryButtonLink = '/services',
  badgeText = "Creative Web Solutions for Modern Brands",
}: HeroProps) {
  // Particle animation reference
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', setCanvasDimensions)
    setCanvasDimensions()
    
    // Particle properties
    const particlesArray: Particle[] = []
    const numberOfParticles = 100
    
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `rgba(255, 255, 255, 0.21)`
      }
      
      update() {
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }
      
      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }
    
    // Create particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }
    
    init()
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      
      // Connect particles with lines
      connectParticles()
      
      requestAnimationFrame(animate)
    }
    
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            if (!ctx) return
            ctx.strokeStyle = `rgba(255, 255, 255, 0.42)`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions)
    }
  }, [])


  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-background text-white">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-70"
      />
      
      {/* Main content */}
      <div className="relative z-20 container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[80vh] items-center">
          {/* Left side content */}
          <div className="flex flex-col justify-center order-1 lg:order-1 mt-8 lg:mt-0">
            <RevealOnScroll>
              <Badge className="mb-6 inline-flex bg-primary/20 text-primary border-primary/30 py-2 px-6">
                {badgeText}
              </Badge>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-primary/90 to-secondary bg-clip-text text-transparent">
                  {title.split(' ').slice(0, 3).join(' ')}
                </span>
                <span className="block bg-gradient-to-r from-secondary via-primary to-white bg-clip-text text-transparent">
                  {title.split(' ').slice(3).join(' ')}
                </span>
              </h2>

              <p className="text-lg mb-8 text-foreground/80 max-w-xl">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href={primaryButtonLink}>
                  <GlowButton className="rounded-full cursor-pointer py-3 px-8 text-base md:text-lg w-full sm:w-auto">
                    {primaryButtonText}
                  </GlowButton>
                </Link>
                <Link href={secondaryButtonLink}>
                  <MagneticButton variant='default' className="rounded-full py-3 cursor-pointer px-8 text-base md:text-lg bg-primary/20 hover:bg-primary/30 border-background w-full sm:w-auto">
                    {secondaryButtonText}
                  </MagneticButton>
                </Link>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Right side 3D cards showcase */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] hidden md:block order-2 lg:order-2 perspective transform -translate-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-full w-full preserve-3d"
            >
              {/* Main featured card */}
              <motion.div 
                initial={{ rotateY: 10, rotateX: -15 }}
                animate={{ rotateY: 5, rotateX: -5 }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] h-[380px] md:h-[420px] rounded-xl overflow-hidden z-30"
              >
                <Image 
                  src="https://cdn.prod.website-files.com/6620a2675e3acea2378415a0/66dee7a09283bd4a5db221ed_About%20Us%201%205.webp" 
                  alt="Digital Services" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Web Design</h3>
                  <p className="text-white/80 text-sm">Beautiful responsive interfaces</p>
                </div>
              </motion.div>
              
              {/* Background card 1 */}
              <motion.div 
                initial={{ rotateY: -5, rotateX: 10, x: '-80%', y: '-30%' }}
                animate={{ rotateY: 5, rotateX: 5, x: '-85%', y: '-25%' }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 w-[250px] h-[320px] rounded-xl overflow-hidden hidden md:block shadow-lg z-10"
              >
                <Image 
                  src="https://cdn.prod.website-files.com/6620a2675e3acea2378415a0/66fa84dc346bb3a6126ec5da_imgpsh_fullsize_anim%20(1).avif"
                  alt="Mobile Interfaces" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-white text-xl font-bold mb-1">Mobile Apps</h3>
                  <p className="text-white/80 text-xs">Cross-platform solutions</p>
                </div>
              </motion.div>
              
            </motion.div>
          </div>
        </div>
      </div>
        {/* Floating brand name */}
        <div className="absolute bottom-10 left-10 z-100000 opacity-100 hidden md:block">
      
        <TrustPilotWidget className="max-w-[350px]" />
      </div>
      {/* Floating brand name */}
      <div className="absolute bottom-10 right-20 z-10 opacity-30 hidden md:block">
        <GlitchText text="RTN GLOBAL" className='text-6xl font-extrabold text-white/20' />
      </div>
    </section>
  )
}
