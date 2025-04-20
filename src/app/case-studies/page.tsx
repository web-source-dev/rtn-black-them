import { Metadata } from 'next';
import CaseStudyHero from '@/components/Sections/CaseStudiesSections/CaseStudyHero';
import CaseStudyGrid from '@/components/Sections/CaseStudiesSections/CaseStudyGrid';
import CaseStudyExpertise from '@/components/Sections/CaseStudiesSections/CaseStudyExpertise';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { caseStudies } from '@/components/Sections/CaseStudiesSections/caseStudiesData';

export const metadata: Metadata = {
  title: 'Case Studies | RTN Global',
  description: 'Explore how we have helped businesses achieve their digital goals through strategic technology solutions and innovative approaches.',
  keywords: [
    'case studies',
    'success stories',
    'digital transformation',
    'RTN Global case studies',
    'web development projects',
    'design case studies',
    'business transformation',
    'technology solutions'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/case-studies',
  },
  openGraph: {
    title: 'Case Studies | RTN Global',
    description: 'Discover how we help businesses solve complex challenges through innovative digital solutions.',
    url: 'https://rtnglobal.co/case-studies',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-case-studies.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Case Studies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Case Studies', url: 'https://rtnglobal.co/case-studies' },
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
            <CaseStudyHero />
            <CaseStudyGrid caseStudies={caseStudies} />
            <CaseStudyExpertise />
            <CTASection
              title="Ready to transform your business?"
              subtitle="Let's collaborate to create solutions that drive real results for your organization."
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