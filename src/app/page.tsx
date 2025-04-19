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
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import { FAQPageJsonLd } from '@/components/utils/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RTN Global | Web Development & Design Agency',
  description: 'RTN Global provides professional web development, web design, Wix development, bug fixes, performance optimization, and UI/UX design services to transform your digital presence.',
  keywords: [
    'web development', 
    'web design', 
    'Wix development', 
    'bug fixes', 
    'performance optimization', 
    'UI/UX design',
    'RTN Global',
    'digital agency',
    'professional website',
    'website design'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co',
  },
  openGraph: {
    title: 'RTN Global | Web Development & Design Agency',
    description: 'Transform your digital presence with our professional web development, design, and optimization services',
    url: 'https://rtnglobal.co',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global - Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Common FAQs for the homepage
const homeFaqs = [
  {
    question: "What services does RTN Global offer?",
    answer: "RTN Global offers a comprehensive range of digital services including web development, web design, Wix development, bug fixes, performance optimization, and UI/UX design."
  },
  {
    question: "Where is RTN Global located?",
    answer: "RTN Global is based in Albuquerque, New Mexico, USA but serves clients globally with digital services."
  },
  {
    question: "How can I get a quote for my project?",
    answer: "You can request a quote by visiting our contact page or calling us directly at +1 505 528 6780. We'll discuss your project requirements and provide a custom quote."
  },
  {
    question: "What is the typical timeline for a web development project?",
    answer: "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while complex web applications can take 2-3 months. We'll provide a specific timeline during our consultation."
  }
];

export default function Home() {
  return (
    <>
      <FAQPageJsonLd faqs={homeFaqs} />
      
      <TransitionWrapper>
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
      </TransitionWrapper>
    </>
  );
}
