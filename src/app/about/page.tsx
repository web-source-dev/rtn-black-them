import React from 'react';
import AboutHeroSection from '@/components/Sections/aboutPageSections/AboutHeroSection';
import OurStorySection from '@/components/Sections/aboutPageSections/OurStorySection';
import MissionValuesSection from '@/components/Sections/aboutPageSections/MissionValuesSection';
// import TeamsSection from '@/components/Sections/reusableSections/TeamsSection';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | RTN Global',
  description: 'Learn about RTN Global, our mission, values, and the talented team behind our successful digital solutions. Founded by Muhammad Tayyab to deliver exceptional web experiences.',
  keywords: [
    'about RTN Global',
    'digital agency team',
    'Muhammad Tayyab',
    'web development company',
    'RTN Global mission',
    'RTN Global values',
    'agency history'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/about',
  },
  openGraph: {
    title: 'About RTN Global | Our Story & Team',
    description: 'Discover the story of RTN Global, our mission, values, and the talented team behind our successful digital solutions.',
    url: 'https://rtnglobal.co/about',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'The RTN Global Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Breadcrumb items for the About page
const aboutBreadcrumbs = [
  { name: 'Home', url: 'https://rtnglobal.co' },
  { name: 'About Us', url: 'https://rtnglobal.co/about' },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={aboutBreadcrumbs} />
      
      <TransitionWrapper>
        <main>
          <AboutHeroSection />
          <OurStorySection />
          <MissionValuesSection />
          {/* <TeamsSection /> */}
          <CTASection 
            title="Ready to Work Together?"
            subtitle="Have a project in mind? Let's collaborate to create something exceptional."
            primaryButtonText="Start a Project"
            primaryButtonLink="/contact"
            variant="gradient"
          />
        </main>
      </TransitionWrapper>
    </>
  );
} 