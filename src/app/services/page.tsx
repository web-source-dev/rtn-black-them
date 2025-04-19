import React from 'react';
import ServicesHero from '@/components/Sections/ServicesSections/ServicesHero';
import ServicesOverview from '@/components/Sections/ServicesSections/ServicesOverview';
import ProcessSection from '@/components/Sections/ServicesSections/ProcessSection';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | RTN Global',
  description: 'Explore our comprehensive range of services including web development, web design, Wix development, bug fixes, performance optimization, and UI/UX design.',
  keywords: [
    'web development services',
    'web design services',
    'Wix development services',
    'bug fixing services',
    'performance optimization services',
    'UI/UX design services',
    'digital agency services',
    'RTN Global services'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/services',
  },
  openGraph: {
    title: 'Professional Digital Services | RTN Global',
    description: 'Discover our range of digital services designed to elevate your online presence and drive business growth.',
    url: 'https://rtnglobal.co/services',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Breadcrumb for services page
const servicesBreadcrumbs = [
  { name: 'Home', url: 'https://rtnglobal.co' },
  { name: 'Services', url: 'https://rtnglobal.co/services' },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={servicesBreadcrumbs} />
      
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
    </>
  );
} 