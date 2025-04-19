import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailContent from '@/components/Sections/ServicesSections/EachServiceSections/ServiceDetailContent';
import ServicesRelated from '@/components/Sections/ServicesSections/EachServiceSections/ServicesRelated';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { servicesData } from '@/components/Sections/ServicesSections/EachServiceSections/servicesData';

// Helper function to get service by ID
async function getServiceById(id: string) {
  return servicesData.find(s => s.id === id);
}

// Generate metadata for each service
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  const service = await getServiceById(id);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
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
      ...(service.technologies || [])
    ],
    alternates: {
      canonical: `https://rtnglobal.co/services/${id}`,
    },
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

export default async function ServicePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const service = await getServiceById(id);
  
  if (!service) {
    notFound();
  }
  
  // Get related services (excluding current service)
  const relatedServices = servicesData
    .filter(s => s.id !== service.id)
    .slice(0, 3);
  
  // Breadcrumb for the service page
  const serviceBreadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Services', url: 'https://rtnglobal.co/services' },
    { name: service.title, url: `https://rtnglobal.co/services/${id}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={serviceBreadcrumbs} />
      
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