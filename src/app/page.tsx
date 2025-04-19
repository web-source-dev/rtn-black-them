'use client';

import React from 'react';
import HeroSection from '@/components/Sections/homePageSections/HeroSection';
import ServicesSection from '@/components/Sections/homePageSections/ServicesSection';
import FeaturesSection from '@/components/Sections/homePageSections/FeaturesSection';
import PortfolioPreviewSection from '@/components/Sections/homePageSections/PortfolioPreviewSection';
import TestimonialsSection from '@/components/Sections/reusableSections/TestimonialsSection';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import ContactSection from '@/components/Sections/reusableSections/ContactSection';
import GridPattern from '@/components/ui/GridPattern';
import BigSectionText from '@/components/Sections/reusableSections/bigSectionText';
export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
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
        <HeroSection />
        <ServicesSection />
        
        <PortfolioPreviewSection />
        <BigSectionText />
        
        <FeaturesSection />
        
        <TestimonialsSection />
        
        <CTASection 
          title="Ready to transform your digital presence?"
          subtitle="Let's create something extraordinary together."
          primaryButtonText="Start Your Project"
          secondaryButtonText="Learn More"
          primaryButtonLink="/contact"
          secondaryButtonLink="/about"
          variant="border"
        />
        
        <ContactSection />
      </div>
    </div>
  );
}
