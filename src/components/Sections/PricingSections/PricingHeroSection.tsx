'use client';

import React from 'react';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import AmbientLightEffect from '@/components/animations/AmbientLightEffect';
import GlitchTitle from '@/components/ui/GlitchTitle';

export default function PricingHeroSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-20 h-20 rounded-full bg-primary/20 blur-3xl opacity-70" />
        <div className="absolute bottom-1/4 right-0 w-32 h-32 rounded-full bg-secondary/20 blur-3xl opacity-70" />
      </div>
      
      <AmbientLightEffect color="rgba(138, 92, 245, 0.15)" size={400} blur={80}>
        <div className="container mx-auto px-4">
          <RevealOnScroll className="text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <GlitchTitle title="Our Maintenance Plans" />
              <p className="text-foreground/80 text-xl mx-auto max-w-3xl leading-relaxed">
              A dedicated team to design, build, upgrade, and maintain a custom solution tailored specifically for your business.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                <div className="flex items-center space-x-2 text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Flexible monthly plans</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/70">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm">No long-term contracts</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/70">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </AmbientLightEffect>
      
    </section>
  );
} 