'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ServiceDetailContent from '@/components/Sections/ServicesSections/EachServiceSections/ServiceDetailContent';
import ServicesRelated from '@/components/Sections/ServicesSections/EachServiceSections/ServicesRelated';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import GridPattern from '@/components/ui/GridPattern';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import { servicesData } from '@/components/Sections/ServicesSections/EachServiceSections/servicesData';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug?.toString() || '';
  
  // Find the current service data
  const currentService = servicesData.find(service => service.id === slug);
  
  // Filter for related services (excluding current)
  const relatedServices = servicesData
    .filter(service => service.id !== slug)
    .slice(0, 3);
  
  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-foreground/80">Service not found</p>
      </div>
    );
  }

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
          <ServiceDetailContent service={currentService} />
          <ServicesRelated services={relatedServices} />
          <CTASection 
            title="Ready to transform your digital presence?"
            subtitle="Let's create something extraordinary together."
            primaryButtonText="Start Your Project"
            secondaryButtonText="Contact Us"
            primaryButtonLink="/contact"
            secondaryButtonLink="/contact"
            variant="border"
          />
        </div>
      </main>
    </TransitionWrapper>
  );
} 