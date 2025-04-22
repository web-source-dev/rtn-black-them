
import type { Metadata } from 'next';

import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import CareerHero from '@/components/Sections/CareersSections/CareerHero';
import CareersListing from '@/components/Sections/CareersSections/CareersListing';
import CareerBenefits from '@/components/Sections/CareersSections/CareerBenefits';
export const metadata: Metadata = {
  title: 'Careers | RTN Global',
  description: 'Join our team and make a difference. Explore career opportunities at RTN Global.',
  keywords: ['careers', 'jobs', 'opportunities', 'employment', 'RTN Global', 'hiring'],
  alternates: { canonical: 'https://rtnglobal.co/careers' },
  openGraph: {
    title: 'Careers | RTN Global',
    description: 'Join our team and make a difference. Explore career opportunities at RTN Global.',
    url: 'https://rtnglobal.co/careers',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-careers.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Careers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function CareersPage() {

  return (
    <TransitionWrapper>
      <main className="min-h-screen bg-background relative">
        <GridPattern
          dotColor="rgba(255,255,255,0.3)"
          size={40}
          dotSize={1}
          backgroundOpacity={0.03}
          className="fixed inset-0 z-0 pointer-events-none"
        />
        <div className="relative z-10">
          <CareerHero />
          <CareersListing />
          <CareerBenefits />
          <CTASection
            title="Ready to join our team?"
            subtitle="We're always looking for talented individuals to help us grow. If you don't see a position that matches your skills, send us your resume anyway."
            primaryButtonText="Contact Us"
            secondaryButtonText="About Our Company"
            primaryButtonLink="/contact"
            secondaryButtonLink="/about"
            variant="gradient"
          />
        </div>
      </main>
    </TransitionWrapper>
  );
}
