import React from 'react';
import AboutHeroSection from '@/components/Sections/aboutPageSections/AboutHeroSection';
import OurStorySection from '@/components/Sections/aboutPageSections/OurStorySection';
import MissionValuesSection from '@/components/Sections/aboutPageSections/MissionValuesSection';
import TeamsSection from '@/components/Sections/reusableSections/TeamsSection';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export const metadata = {
  title: 'About Us | RTN Global',
  description: 'Learn about our agency, our mission, values, and the talented team behind our successful digital solutions.',
};

export default function AboutPage() {
  return (
    <TransitionWrapper>
      <main>
        <AboutHeroSection />
        <OurStorySection />
        <MissionValuesSection />
        <TeamsSection />
        <CTASection 
          title="Ready to Work Together?"
          subtitle="Have a project in mind? Let's collaborate to create something exceptional."
          primaryButtonText="Start a Project"
          primaryButtonLink="/contact"
          variant="gradient"
        />
      </main>
    </TransitionWrapper>
  );
} 