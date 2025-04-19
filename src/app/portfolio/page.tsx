'use client';

import React from 'react';
import PortfolioHero from '@/components/Sections/PortfolioSections/PortfolioHero';
import PortfolioGrid from '@/components/Sections/PortfolioSections/PortfolioGrid';
import PortfolioProcess from '@/components/Sections/PortfolioSections/PortfolioProcess';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import TestimonialsSection from '@/components/Sections/reusableSections/TestimonialsSection';
export default function PortfolioPage() {
    
  return (
    <TransitionWrapper>
      <main className="min-h-screen bg-background relative">
        {/* Background grid pattern */}
        <GridPattern 
          dotColor="rgba(255,255,255,0.3)" 
          size={40} 
          dotSize={1} 
          backgroundOpacity={0.03} 
          className="fixed inset-0 z-0 pointer-events-none"
        />
        
        {/* Main content */}
        <div className="relative z-10">
          <PortfolioHero />
          <PortfolioGrid />
          <PortfolioProcess />
          <TestimonialsSection />
          <CTASection 
            title="Ready to build your next project?"
            subtitle="Let's collaborate to create something exceptional that delivers results."
            primaryButtonText="Start a Project"
            secondaryButtonText="Contact Us"
            primaryButtonLink="/contact"
            secondaryButtonLink="/contact"
            variant="gradient"
          />
        </div>
      </main>
    </TransitionWrapper>
  );
} 