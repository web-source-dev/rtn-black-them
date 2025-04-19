import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import ServiceDetailContent from '@/components/Sections/ServicesSections/EachServiceSections/ServiceDetailContent';
import ServicesRelated from '@/components/Sections/ServicesSections/EachServiceSections/ServicesRelated';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { servicesData } from '@/components/Sections/ServicesSections/EachServiceSections/servicesData';

// 🎯 params is a Promise<{ id: string }>
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return {
      title: 'Service Not Found | RTN Global',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} | RTN Global Services`,
    description: service.shortDescription,
    keywords: [
      service.title,
      'digital services',
      'web services',
      'RTN Global services',
      ...(service.technologies || []),
    ],
    alternates: { canonical: `https://rtnglobal.co/services/${id}` },
    openGraph: {
      title: `${service.title} | RTN Global Services`,
      description: service.shortDescription,
      url: `https://rtnglobal.co/services/${id}`,
      siteName: 'RTN Global',
      images: [
        {
          url: service.heroImage || '/images/og-services.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} - RTN Global Services`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function ServicePage({
  params,
}: {
  // 🎯 Also a Promise<{ id: string }>
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesData.find(s => s.id === id);
  if (!service) notFound();

  const relatedServices = servicesData.filter(s => s.id !== id).slice(0, 3);
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Services', url: 'https://rtnglobal.co/services' },
    { name: service.title, url: `https://rtnglobal.co/services/${id}` },
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
            <ServiceDetailContent service={service} />
            <ServicesRelated services={relatedServices} />
            <CTASection
              title="Ready to get started?"
              subtitle="Let's discuss how our services can help your business grow."
              primaryButtonText="Get a Quote"
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
