'use client';

import React from 'react';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';
import GridPattern from '@/components/ui/GridPattern';
import Link from '@/components/ui/Link';

export default function CareerHero() {
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
              Join Our Team
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
              Build The <span className="text-white"><GlitchText text="Future" /></span> With Us
            </h1>
            
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto mb-8">
              Join our team of innovators, creators, and problem-solvers who are passionate about building exceptional digital experiences that transform businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="#open-positions" variant="default" size="lg">
                View Open Positions
              </Link>
              <Link href="#culture" variant="default" size="lg">
                Our Culture
              </Link>
            </div>
          </div>
        </RevealOnScroll>
        
        {/* Stats */}
        <RevealOnScroll delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20">
            <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-foreground/70">Team Members</div>
            </div>
            <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-foreground/70">Countries</div>
            </div>
            <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-sm text-foreground/70">Employee Rating</div>
            </div>
            <div className="p-6 rounded-lg bg-foreground/5 border border-foreground/10 text-center">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-foreground/70">Remote Workforce</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 