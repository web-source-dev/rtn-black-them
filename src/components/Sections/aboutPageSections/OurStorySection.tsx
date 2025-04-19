'use client';

import React, { useState, useRef } from 'react';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { motion } from 'framer-motion';
import GlowButton from '@/components/ui/GlowButton';
import MagneticButton from '@/components/ui/MagneticButton';
import GlitchText from '@/components/ui/GlitchText';
import Image from 'next/image';
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface OurStorySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  timelineEvents?: TimelineEvent[];
  className?: string;
}

// Image with custom cursor component
const ImageWithCustomCursor = ({ src, alt }: { src: string, alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPosition({ x, y });
    }
  };

  return (
    <div 
      className="aspect-[16/9] overflow-hidden rounded-xl shadow-md relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsClicking(true)}
      onMouseUp={() => setIsClicking(false)}
      ref={containerRef}
      style={{ cursor: 'none' }}
    >
      <Image 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        height={500}
                        width={500}
      />
      {isHovering && (
        <motion.div 
          className="absolute pointer-events-none z-10"
          style={{ 
            left: cursorPosition.x,
            top: cursorPosition.y,
            pointerEvents: 'none'
          }}
          animate={{
            x: -25,
            y: -25,
            scale: isClicking ? 0.9 : 1
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 300
          }}
        >
          <div className={`w-[50px] h-[50px] rounded-full border-2 ${isClicking ? 'border-primary border-[3px]' : 'border-white'} flex items-center justify-center backdrop-blur-sm`}>
            <div className={`w-[12px] h-[12px] ${isClicking ? 'bg-primary' : 'bg-white'} rounded-full`}></div>
          </div>
        </motion.div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default function OurStorySection({
  subtitle = "The RTN Digital Story",
  description = "From humble beginnings to a thriving agency, our journey has been defined by innovation, perseverance, and a relentless focus on delivering exceptional value to our clients.",
  timelineEvents = [
    {
      year: "2015",
      title: "Foundation",
      description: "RTN Digital was founded with a vision to bridge the gap between technology and business needs. Starting with just 3 team members in a small office, we began our journey focusing on web development projects for local businesses.",
      image: "https://cdn.prod.website-files.com/6620a2675e3acea2378415a0/66e50eb59ec2cf5375b08b36_Creto%20Home%20Banner%20Image-p-500.webp"
    },
    {
      year: "2017",
      title: "Expansion",
      description: "After delivering several successful projects, we expanded our team to 10 members and moved to a larger office. We broadened our service offerings to include UI/UX design and digital marketing.",
      image: "https://cdn.prod.website-files.com/6620a2675e3acea2378415a0/66d7edf9816a45386deab6e2_About%20Two%20Banner-p-800.avif"
    },
    {
      year: "2019",
      title: "Recognition",
      description: "Our commitment to quality earned us industry recognition with awards for web design excellence and digital innovation. We secured partnerships with major technology providers and expanded our client base internationally.",
      image: "https://cdn.prod.website-files.com/66c729ae93811082511b85b8/66d53db4435f3588b0f611cd_Portfolio%20Small%204-p-800.webp"
    },
    {
      year: "2021",
      title: "Innovation Hub",
      description: "We established our Innovation Hub, dedicated to exploring emerging technologies like AI, AR/VR, and blockchain. This initiative helps us stay at the cutting edge and bring innovative solutions to our clients.",
      image: "https://cdn.prod.website-files.com/66c729ae93811082511b85b8/66d53da598f4b8d21f0eee29_Portfolio%20Small%203-p-800.webp"
    },
    {
      year: "2023",
      title: "Global Presence",
      description: "With a team of over 30 professionals and offices in multiple cities, we've established a global presence, serving clients across diverse industries and continuing to push the boundaries of digital excellence.",
      image: "https://cdn.prod.website-files.com/66c729ae93811082511b85b8/66d53d7ce6a5e1e2b889f366_Portfolio%20Small%201-p-800.webp"
    }
  ],
  className = "",
}: OurStorySectionProps) {
  return (
    <section id="our-story" className={`py-24 bg-background relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[40%] right-[10%] w-[25%] h-[30%] bg-primary/5 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[30%] left-[5%] w-[20%] h-[25%] bg-secondary/5 rounded-full blur-[100px] opacity-60" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our History</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
              Our 
              <span className="relative">
                <span className="text-white mx-3">
                <GlitchText 
                  text='Journey'
                  className="bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent"
                />
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                </span>
              </h2>
            <p className="text-2xl font-semibold mb-4 text-foreground/90">{subtitle}</p>
            <p className="text-foreground/70 text-lg">{description}</p>
          </div>
        </RevealOnScroll>
        
        {/* Timeline - New Modern Design */}
        <div className="relative mt-24">
          {/* Timeline center line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/40 via-primary/60 to-secondary/40 max-md:hidden"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={`timeline-${index}`} className="mb-28 last:mb-0">
              <RevealOnScroll delay={index * 0.1}>
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-6 md:gap-8 lg:gap-16`}>
                  {/* Content Side */}
                  <div className="md:w-1/2 relative">
                    {/* Year Badge - Mobile Version */}
                    <div className="absolute -top-12 left-0 md:hidden">
                      <div className="inline-flex items-center justify-center px-4 py-1 bg-gradient-to-r from-primary/20 to-primary/30 rounded-full backdrop-blur-sm border border-primary/30">
                        <span className="text-primary font-semibold">{event.year}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="relative p-6 md:p-8 rounded-2xl bg-foreground/[0.03] border border-foreground/10 backdrop-blur-sm shadow-xl shadow-black/5 hover:shadow-primary/5 hover:border-foreground/20 transition-all duration-500">
                      {/* Year Badge - Desktop Version */}
                      <div className={`absolute top-6 ${index % 2 === 0 ? 'right-full' : 'left-full'} hidden md:block`}>
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/20 to-primary/30 rounded-full backdrop-blur-sm border border-primary/30">
                          <span className="text-primary font-semibold whitespace-nowrap">{event.year}</span>
                        </div>
                      </div>
                      
                      {/* Timeline Connector */}
                      <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block`}></div>
                      
                      <h3 className="text-2xl md:text-2xl font-bold mb-3">{event.title}</h3>
                      <p className="text-foreground/70">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className="md:w-1/2 mt-6 md:mt-0">
                    {event.image ? (
                      <div className="transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
                        <ImageWithCustomCursor 
                          src={event.image} 
                          alt={`${event.title} - ${event.year}`}
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/9] overflow-hidden rounded-xl bg-foreground/10 flex items-center justify-center border border-foreground/10">
                        <span className="text-foreground/30">Image not available</span>
                      </div>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>
        
        {/* Current status */}
        <RevealOnScroll>
          <div className="mt-28 text-center">
            <Badge className="mb-4 bg-gradient-to-r from-primary/30 to-secondary/30 text-white border-none">Today</Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Where We Are Now</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Today, RTN Digital stands as a beacon of innovation and excellence in the digital space. With a team of passionate experts and a portfolio of successful projects, we continue to push boundaries and create impactful digital experiences.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <GlowButton 
                onClick={() => window.location.href = '/portfolio'}
                className="py-3 px-6 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/90 font-medium transition-colors"
              >
                View Our Work
              </GlowButton>
              <MagneticButton
                onClick={() => window.location.href = '/team'}
                className="py-3 px-6 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/90 font-medium transition-colors"
              >
                Meet Our Team
              </MagneticButton>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 