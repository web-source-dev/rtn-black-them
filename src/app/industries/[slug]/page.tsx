import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import IndustryDetailContent from '@/components/Sections/IndustriesSections/IndustryDetailContent';
import RelatedIndustries from '@/components/Sections/IndustriesSections/RelatedIndustries';
import RelatedCaseStudies from '@/components/Sections/CaseStudiesSections/RelatedCaseStudies';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { getIndustryBySlug, getRelatedIndustries, getCaseStudiesForIndustry } from '@/components/Sections/IndustriesSections/industriesData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Industry Not Found | RTN Global',
      description: 'The requested industry could not be found.',
    };
  }

  return {
    title: `${industry.title} Solutions | RTN Global`,
    description: industry.shortDescription,
    keywords: [
      industry.title,
      'industry solutions',
      'digital transformation',
      'technology solutions',
      'RTN Global',
    ],
    alternates: { canonical: `https://rtnglobal.co/industries/${slug}` },
    openGraph: {
      title: `${industry.title} Solutions | RTN Global`,
      description: industry.shortDescription,
      url: `https://rtnglobal.co/industries/${slug}`,
      siteName: 'RTN Global',
      images: [
        {
          url: industry.thumbnail,
          width: 1200,
          height: 630,
          alt: `${industry.title} Industry Solutions - RTN Global`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedIndustries = getRelatedIndustries(industry.id, 3);
  const relatedCaseStudies = getCaseStudiesForIndustry(industry.id);
  
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Industries', url: 'https://rtnglobal.co/industries' },
    { name: industry.title, url: `https://rtnglobal.co/industries/${slug}` },
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
            <IndustryDetailContent industry={industry} />
            {relatedIndustries.length > 0 && <RelatedIndustries industries={relatedIndustries} />}
            {relatedCaseStudies.length > 0 && <RelatedCaseStudies caseStudies={relatedCaseStudies} />}
            <CTASection
              title={`Ready to transform your ${industry.title.toLowerCase()} business?`}
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
