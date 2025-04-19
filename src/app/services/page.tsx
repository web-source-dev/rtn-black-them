'use client';

import React from 'react';
import ServicesHero from '@/components/Sections/ServicesSections/ServicesHero';
import ServicesOverview from '@/components/Sections/ServicesSections/ServicesOverview';
import ProcessSection from '@/components/Sections/ServicesSections/ProcessSection';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';

export default function ServicesPage() {
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
          <ServicesHero />
          <ServicesOverview />
          <ProcessSection />
          <CTASection 
            title="Ready to elevate your digital presence?"
            subtitle="Let's discuss how our services can address your specific needs."
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