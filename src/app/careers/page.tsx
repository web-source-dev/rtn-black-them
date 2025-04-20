import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import JobDetailContent from '@/components/Sections/CareersSections/JobDetailContent';
import RelatedJobPostings from '@/components/Sections/CareersSections/RelatedJobPostings';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { getJobPostingBySlug, getRelatedJobPostings } from '@/components/Sections/CareersSections/careersData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobPostingBySlug(slug);

  if (!job) {
    return {
      title: 'Job Not Found | RTN Global',
      description: 'The requested job posting could not be found.',
    };
  }

  return {
    title: `${job.title} | RTN Global Careers`,
    description: job.shortDescription,
    keywords: [
      job.title,
      job.department,
      'job opportunity',
      'career',
      'RTN Global',
      job.location,
      job.employmentType,
    ],
    alternates: { canonical: `https://rtnglobal.co/careers/${slug}` },
    openGraph: {
      title: `${job.title} | RTN Global Careers`,
      description: job.shortDescription,
      url: `https://rtnglobal.co/careers/${slug}`,
      siteName: 'RTN Global',
      images: [
        {
          url: '/images/og-job-posting.jpg',
          width: 1200,
          height: 630,
          alt: `${job.title} - RTN Global Career Opportunity`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobPostingBySlug(slug);
  if (!job) notFound();

  const relatedJobs = getRelatedJobPostings(job.id, 3);

  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Careers', url: 'https://rtnglobal.co/careers' },
    { name: job.title, url: `https://rtnglobal.co/careers/${slug}` },
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
            <JobDetailContent job={job} />
            {relatedJobs.length > 0 && <RelatedJobPostings jobs={relatedJobs} />}
            <CTASection
              title="Not the right position for you?"
              subtitle="We're always on the lookout for talented individuals. Check out our other open positions or send us your resume for future opportunities."
              primaryButtonText="View All Positions"
              secondaryButtonText="Contact Us"
              primaryButtonLink="/careers"
              secondaryButtonLink="/contact"
              variant="gradient"
            />
          </div>
        </main>
      </TransitionWrapper>
    </>
  );
}
