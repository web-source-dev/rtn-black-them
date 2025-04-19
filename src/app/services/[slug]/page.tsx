import React from 'react';
import { Metadata } from 'next';
import ServiceDetailContent from '@/components/Sections/ServicesSections/EachServiceSections/ServiceDetailContent';
import ServicesRelated from '@/components/Sections/ServicesSections/EachServiceSections/ServicesRelated';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import GridPattern from '@/components/ui/GridPattern';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import { servicesData } from '@/components/Sections/ServicesSections/EachServiceSections/servicesData';
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/utils/JsonLd';

// Generate static paths for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData.find((service) => service.id === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  const title = `${service.title} Services | RTN Global`;
  const description = service.fullDescription.length > 160 
    ? `${service.fullDescription.substring(0, 157)}...` 
    : service.fullDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://rtnglobal.co/services/${service.id}`,
      type: 'article',
      images: [
        {
          url: service.heroImage || '/images/services/default-service.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} Services - RTN Global`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.heroImage || '/images/services/default-service.jpg'],
    },
    alternates: {
      canonical: `https://rtnglobal.co/services/${service.id}`,
    },
    keywords: [
      service.title.toLowerCase(),
      ...service.features.map(feature => feature.toLowerCase()),
      'RTN Global',
      'digital agency',
    ],
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  
  // Find the current service data
  const currentService = servicesData.find(service => service.id === slug);
  
  // Filter for related services (excluding current)
  const relatedServices = servicesData
    .filter(service => service.id !== slug)
    .slice(0, 3);
  
  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-foreground/80">Service not found</p>
      </div>
    );
  }

  // Breadcrumb items for schema
  const breadcrumbItems = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Services', url: 'https://rtnglobal.co/services' },
    { name: currentService.title, url: `https://rtnglobal.co/services/${slug}` },
  ];

  return (
    <>
      {/* JSON-LD structured data */}
      <ServiceJsonLd service={currentService} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      {currentService.faqs && <FAQPageJsonLd faqs={currentService.faqs} />}
      
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
            <ServiceDetailContent service={currentService} />
            <ServicesRelated services={relatedServices} />
            <CTASection 
              title="Ready to transform your digital presence?"
              subtitle="Let's create something extraordinary together."
              primaryButtonText="Start Your Project"
              secondaryButtonText="Contact Us"
              primaryButtonLink="/contact"
              secondaryButtonLink="/contact"
              variant="border"
            />
          </div>
        </main>
      </TransitionWrapper>
    </>
  );
} 