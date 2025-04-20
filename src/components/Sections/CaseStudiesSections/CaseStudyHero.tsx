'use client';

import React from 'react';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';
import GridPattern from '@/components/ui/GridPattern';

export default function CaseStudyHero() {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-primary/5 rounded-full blur-[150px] opacity-80" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[120px] opacity-70" />
        <GridPattern
          dotColor="rgba(255,255,255,0.3)"
          size={40}
          dotSize={1}
          backgroundOpacity={0.03}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium">
              Our Case Studies
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
              Transforming <span className="text-white"><GlitchText text="Businesses" /></span> Through Technology
            </h1>
            
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              Explore our portfolio of strategic digital transformations and discover how we&apos;ve helped businesses achieve their objectives through innovative technology solutions.
            </p>
          </div>
        </RevealOnScroll>
        
        {/* Stats */}
        <RevealOnScroll delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20">
            <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-foreground/70">Successful Projects</div>
            </div>
            <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">65%</div>
              <div className="text-sm text-foreground/70">Avg. Conversion Boost</div>
            </div>
            <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">92%</div>
              <div className="text-sm text-foreground/70">Client Satisfaction</div>
            </div>
            <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-foreground/70">Average Rating</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 