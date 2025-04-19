'use client';

import React from 'react';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';

export default function PortfolioHero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-primary/5 rounded-full blur-[150px] opacity-80" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[120px] opacity-70" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Work</Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
              Discover Our <span className="relative text-white"><GlitchText text="Portfolio" /><span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span></span>
            </h1>
            
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto mb-10">
              Explore our collection of successful projects that showcase our expertise in digital solutions.
              From web development to UI/UX design, see how we help businesses transform their digital presence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#portfolio" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-glow transition-all"
              >
                View Projects
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 rounded-full border border-foreground/20 hover:border-primary/40 text-foreground/90 font-medium transition-all"
              >
                Discuss Your Project
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 