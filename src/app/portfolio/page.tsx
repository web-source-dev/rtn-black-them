import { Metadata } from 'next';
import PortfolioHero from '@/components/Sections/PortfolioSections/PortfolioHero';
import PortfolioGrid from '@/components/Sections/PortfolioSections/PortfolioGrid';
import PortfolioProcess from '@/components/Sections/PortfolioSections/PortfolioProcess';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import TestimonialsSection from '@/components/Sections/reusableSections/TestimonialsSection';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';

export const metadata: Metadata = {
  title: 'Our Portfolio | RTN Global',
  description: 'Explore our portfolio of successful web development, design, and digital transformation projects. See how we have helped businesses achieve their digital goals.',
  keywords: [
    'web development portfolio',
    'web design projects',
    'RTN Global portfolio',
    'digital agency case studies',
    'UI/UX design examples',
    'website projects',
    'client work',
    'digital transformation examples'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/portfolio',
  },
  openGraph: {
    title: 'RTN Global Portfolio | Our Web Development & Design Projects',
    description: 'Browse our collection of successful digital projects and case studies that showcase our expertise in web development and design.',
    url: 'https://rtnglobal.co/portfolio',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Portfolio Projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Breadcrumb for portfolio page
const portfolioBreadcrumbs = [
  { name: 'Home', url: 'https://rtnglobal.co' },
  { name: 'Portfolio', url: 'https://rtnglobal.co/portfolio' },
];

export default async function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={portfolioBreadcrumbs} />
      
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
            <PortfolioHero />
            <PortfolioGrid />
            <PortfolioProcess />
            <TestimonialsSection />
            <CTASection 
              title="Ready to build your next project?"
              subtitle="Let's collaborate to create something exceptional that delivers results."
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