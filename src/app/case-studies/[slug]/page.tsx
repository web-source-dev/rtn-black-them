import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import CaseStudyDetailContent from '@/components/Sections/CaseStudiesSections/CaseStudyDetailContent';
import RelatedCaseStudies from '@/components/Sections/CaseStudiesSections/RelatedCaseStudies';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd, ProjectJsonLd } from '@/components/utils/JsonLd';
import { getCaseStudyBySlug, getRelatedCaseStudies } from '@/components/Sections/CaseStudiesSections/caseStudiesData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | RTN Global',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: `${caseStudy.title} | RTN Global Case Study`,
    description: caseStudy.shortDescription,
    keywords: [
      caseStudy.title,
      caseStudy.category,
      'case study',
      'success story',
      'RTN Global case study',
      ...caseStudy.technologies,
    ],
    alternates: { canonical: `https://rtnglobal.co/case-studies/${slug}` },
    openGraph: {
      title: `${caseStudy.title} | RTN Global Case Study`,
      description: caseStudy.shortDescription,
      url: `https://rtnglobal.co/case-studies/${slug}`,
      siteName: 'RTN Global',
      images: [
        {
          url: caseStudy.heroImage || caseStudy.thumbnail,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} - RTN Global Case Study`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} | RTN Global Case Study`,
      description: caseStudy.shortDescription,
      images: [caseStudy.heroImage || caseStudy.thumbnail],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const relatedCaseStudies = getRelatedCaseStudies(caseStudy.id, 3);
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Case Studies', url: 'https://rtnglobal.co/case-studies' },
    { name: caseStudy.title, url: `https://rtnglobal.co/case-studies/${slug}` },
  ];

  // Current date in ISO format for fallback completion date
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ProjectJsonLd 
        project={{
          title: caseStudy.title,
          shortDescription: caseStudy.shortDescription,
          heroImage: caseStudy.heroImage || caseStudy.thumbnail,
          completionDate: currentDate, // Using current date as fallback
          technologies: caseStudy.technologies,
          category: caseStudy.category, 
          slug: slug
        }} 
      />
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
            <CaseStudyDetailContent caseStudy={caseStudy} />
            {relatedCaseStudies.length > 0 && <RelatedCaseStudies caseStudies={relatedCaseStudies} />}
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
