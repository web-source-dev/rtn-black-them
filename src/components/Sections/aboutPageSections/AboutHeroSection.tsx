'use client';

import React from 'react';
import Badge from '@/components/ui/Badge';
import GlitchText from '@/components/ui/GlitchText';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import BlobMorph from '@/components/animations/BlobMorph';
import { motion } from 'framer-motion';
import Image from 'next/image';
interface AboutHeroSectionProps {
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  className?: string;
}

export default function AboutHeroSection({
  subtitle = "We Create Digital Experiences That Matter",
  description = "Founded in 2015, RTN Global has grown from a small startup to a leading digital agency. Our mission is to help businesses succeed in the digital age through innovative solutions and strategic thinking.",
  imageUrl = "https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp",
  className = "",
}: AboutHeroSectionProps) {
  return (
    <section className={`py-24 md:py-32 bg-background relative overflow-hidden ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 -translate-y-1/2">
          <BlobMorph 
            size={300} 
            className="text-primary/10 rotate-45" 
          />
        </div>
        <div className="absolute -left-30 -bottom-30">
          <BlobMorph 
            size={400} 
            className="text-secondary/10 -rotate-12" 
          />
        </div>
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <RevealOnScroll>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm">Est. 2015</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About
                <span className="relative">
                <span className="text-white mx-3">
                <GlitchText 
                  text='RTN Global'
                  className="bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent"
                />
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                </span>
              </h1>
              <p className="text-2xl font-semibold mb-6 text-foreground/90">{subtitle}</p>
              <p className="text-foreground/70 text-lg mb-8 max-w-2xl">{description}</p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#our-story" 
                  className="py-3 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Story
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="/contact" 
                  className="py-3 px-6 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/90 font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-foreground/5">
                  <div className="text-3xl font-bold text-primary mb-1">8+</div>
                  <div className="text-sm text-foreground/70">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-foreground/5">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-foreground/70">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-foreground/5">
                  <div className="text-3xl font-bold text-primary mb-1">35+</div>
                  <div className="text-sm text-foreground/70">Team Members</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Image */}
          <RevealOnScroll delay={0.2} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-lg opacity-30 -z-10"></div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl shadow-primary/5">
                <Image 
                  src={imageUrl} 
                  alt="Our team at RTN Digital" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-background py-3 px-6 rounded-full shadow-lg border border-foreground/10 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={`avatar-${i}`}
                      className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
                    >
                      <Image 
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i * 10 + 15}.jpg`} 
                        alt="Team member"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <span className="font-medium text-sm">Passionate Team</span>
              </motion.div>

              {/* Tech stack floating element */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-background py-3 px-6 rounded-full shadow-lg border border-foreground/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Modern Tech Stack</span>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
} 