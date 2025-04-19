'use client'

import Link from 'next/link'
import RevealOnScroll from '@/components/animations/RevealOnScroll'
import Badge from '@/components/ui/Badge'
import GlowButton from '@/components/ui/GlowButton'
import Image from 'next/image'
import GlitchText from '@/components/ui/GlitchText'
import MagneticButton from '@/components/ui/MagneticButton'

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
  return (
    <section className="relative pt-20 sm:pt-24 md:pt-32 pb-32 md:pb-44 overflow-hidden bg-gradient-to-br from-background via-background to-background text-white">
      {/* Radial gradient circles for visual interest */}
      <div className="absolute top-[10%] left-[10%] w-[20%] h-[20%] rounded-full opacity-50 bg-gradient-to-br from-primary to-accent blur-[80px]"></div>
      <div className="absolute bottom-[20%] right-[20%] w-[20%] h-[20%] rounded-full opacity-30 bg-gradient-to-br from-primary to-secondary blur-[80px]"></div>
      
      {/* Background faded large text */}
      <h1 className="absolute z-0 inset-0 flex opacity-20 justify-center items-center text-[18vw] md:text-[14vw] font-extrabold text-white/5 tracking-tight pointer-events-none select-none">
        <span className="relative text-white/5">
          <GlitchText text="RTN GLOBAL" className='text-white/5' />
        </span>
      </h1>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl text-center">
        <RevealOnScroll>
          <Badge className="mb-4 md:mb-6 mx-auto bg-primary/20 text-primary border-primary/30 py-2 px-6">
            {badgeText}
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-white via-primary/90 to-secondary bg-clip-text text-transparent">
            {title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 text-foreground/80 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex justify-center gap-4">
            <Link href={secondaryButtonLink}>
              <MagneticButton variant='default' className="rounded-full ml-4 py-3 cursor-pointer px-8 text-base md:text-lg bg-primary border-background">
                {secondaryButtonText}
              </MagneticButton>
            </Link>
            <Link href={primaryButtonLink}>
              <GlowButton variant='outline' className="rounded-full cursor-pointer py-3 px-8 text-base md:text-lg">
                {primaryButtonText}
              </GlowButton>
            </Link>
          </div>
        </RevealOnScroll>
      </div>

      {/* Refined mobile experience with subtle background texture */}
      <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

      {/* Floating cards around the hero - positioned to match the image layout */}
      <div className="hidden md:block absolute top-[15%] left-[5%] w-52 h-36 bg-gradient-to-br from-[#28193f] to-[#1b0e2a] rounded-xl overflow-hidden shadow-lg transform -rotate-3">
        <Image 
          src="https://cdn.prod.website-files.com/6620a2675e3acea2378415a0/66dee7a09283bd4a5db221ed_About%20Us%201%205.webp" 
          alt="Digital Services" 
          fill
          className="object-cover"
        />
      </div>

      <div className="hidden md:block absolute top-[20%] right-[5%] w-60 h-40 bg-gradient-to-br from-[#1b0e2a] to-[#28193f] rounded-xl overflow-hidden shadow-lg transform rotate-2">
        <Image 
          src="https://cdn.prod.website-files.com/6620a2675e3acea2378415a0/66fa84dc346bb3a6126ec5da_imgpsh_fullsize_anim%20(1).avif" 
          alt="Mobile Interfaces" 
          fill
          className="object-cover"
        />
        <div className="absolute top-0 right-0 p-2">
          <div className="flex gap-1">
            <span className="inline-block w-3 h-3 bg-white/20 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-white/20 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-primary rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-[15%] left-[7%] w-48 h-40 bg-gradient-to-br from-[#28193f] to-[#1b0e2a] rounded-xl overflow-hidden shadow-lg transform rotate-6">
        <Image 
          src="https://cdn.prod.website-files.com/6620a2675e3acea2378415a0/66dee7a09283bd4a5db22214_Service%201%201.webp" 
          alt="Project Analytics" 
          fill
          className="object-cover"
        />
      </div>

      <div className="hidden md:block absolute bottom-[20%] right-[8%] w-52 h-48 bg-gradient-to-br from-[#1b0e2a] to-[#28193f] rounded-xl overflow-hidden shadow-lg transform -rotate-3">
        <Image 
          src="https://cdn.prod.website-files.com/6620a2675e3acea2378415a0/66dee7a09283bd4a5db221d7_About%20Us%203%204.webp" 
          alt="Digital World" 
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
