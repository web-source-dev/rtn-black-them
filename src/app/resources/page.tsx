import { Metadata } from 'next';
import ResourcesHero from '@/components/Sections/ResourcesSections/ResourcesHero';
import ResourcesGrid from '@/components/Sections/ResourcesSections/ResourcesGrid';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { getLatestResources } from '@/components/Sections/ResourcesSections/resourcesData';

export const metadata: Metadata = {
  title: 'Resources | RTN Global',
  description: 'Explore our collection of resources, articles, guides, and case studies to help you stay informed about the latest trends.',
  keywords: [
    'resources',
    'knowledge base',
    'articles',
    'guides',
    'whitepapers',
    'case studies',
    'RTN Global resources',
    'technology insights'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/resources',
  },
  openGraph: {
    title: 'Resources | RTN Global',
    description: 'Explore our knowledge center of valuable resources to help your business succeed.',
    url: 'https://rtnglobal.co/resources',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ResourcesPage() {
  const latestResources = getLatestResources(6);
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Resources', url: 'https://rtnglobal.co/resources' },
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
            <ResourcesHero />
            <ResourcesGrid 
              initialResources={latestResources}
              title="Latest Resources" 
              description="Stay up-to-date with our newest articles, guides, and insights."
            />
            <CTASection
              title="Need help with your next project?"
              subtitle="Our team of experts is ready to assist you with your digital transformation journey."
              primaryButtonText="Contact Us"
              secondaryButtonText="Our Services"
              primaryButtonLink="/contact"
              secondaryButtonLink="/services"
              variant="gradient"
            />
          </div>
        </main>
      </TransitionWrapper>
    </>
  );
} 