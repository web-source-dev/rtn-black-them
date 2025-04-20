import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import ResourceDetail from '@/components/Sections/ResourcesSections/ResourceDetail';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { getResourceBySlug, getRelatedResources } from '@/components/Sections/ResourcesSections/resourcesData';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return {
      title: 'Resource Not Found | RTN Global',
      description: 'The requested resource could not be found.',
    };
  }

  return {
    title: `${resource.title} | RTN Global Resources`,
    description: resource.description,
    keywords: [
      ...resource.categories,
      resource.type,
      'RTN Global',
      'resources',
      resource.title,
    ],
    alternates: { canonical: `https://rtnglobal.co/resources/${slug}` },
    openGraph: {
      title: `${resource.title} | RTN Global Resources`,
      description: resource.description,
      url: `https://rtnglobal.co/resources/${slug}`,
      siteName: 'RTN Global',
      images: [
        {
          url: resource.thumbnailImage?.src || '/images/og-resources.jpg',
          width: 1200,
          height: 630,
          alt: `${resource.title} - RTN Global Resource`,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: resource.publishDate,
      modifiedTime: resource.lastUpdated,
      authors: [resource.author.name],
    },
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  const relatedResources = getRelatedResources(resource);
  
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Resources', url: 'https://rtnglobal.co/resources' },
    { name: resource.title, url: `https://rtnglobal.co/resources/${slug}` },
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
            <ResourceDetail resource={resource} relatedResources={relatedResources} />
            <CTASection
              title="Explore More Resources"
              subtitle="Discover our collection of resources designed to help you succeed in today's digital landscape."
              primaryButtonText="Browse Resources"
              secondaryButtonText="Contact Us"
              primaryButtonLink="/resources"
              secondaryButtonLink="/contact"
              variant="gradient"
            />
          </div>
        </main>
      </TransitionWrapper>
    </>
  );
} 