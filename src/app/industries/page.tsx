import { Metadata } from 'next';
import IndustryHero from '@/components/Sections/IndustriesSections/IndustryHero';
import IndustriesGrid from '@/components/Sections/IndustriesSections/IndustriesGrid';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';

export const metadata: Metadata = {
  title: 'Industries | RTN Global',
  description: 'Explore our industry-specific solutions tailored to address the unique challenges of different business sectors.',
  keywords: [
    'industry solutions',
    'sector-specific technology',
    'business technology solutions',
    'RTN Global industries',
    'digital transformation',
    'industry expertise',
    'technology consulting'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/industries',
  },
  openGraph: {
    title: 'Industries | RTN Global',
    description: 'Discover our tailored technology solutions for your industry-specific challenges.',
    url: 'https://rtnglobal.co/industries',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Industries',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function IndustriesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Industries', url: 'https://rtnglobal.co/industries' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
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
            <IndustryHero />
            <IndustriesGrid />
            <CTASection
              title="Need a tailored solution for your industry?"
              subtitle="Our team of experts can help you navigate the unique challenges of your sector with custom technology solutions."
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