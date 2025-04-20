import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

// Define interfaces for our schema types
interface ServiceProps {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage?: string;
  benefits?: {
    title: string;
    description: string;
  }[];
  features: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  technologies?: string[];
  process?: {
    title: string;
    description: string;
  }[];
  caseStudies?: {
    title: string;
    description: string;
    image?: string;
    link?: string;
  }[];
  [key: string]: unknown; // Allow for additional properties
}

interface ProjectProps {
  title: string;
  shortDescription: string;
  heroImage: string;
  completionDate: string;
  technologies: string[];
  category: string;
  slug: string;
  [key: string]: unknown; // Allow for additional properties
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization schema
export function OrganizationJsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RTN Global',
    url: 'https://rtnglobal.co',
    logo: 'https://rtnglobal.co/images/logo.png',
    sameAs: [
      'https://www.instagram.com/rtnglobalofficial/',
      'https://www.threads.net/@rtnglobalofficial/',
      'https://www.tiktok.com/@rtnglobalofficial',
      'https://web.facebook.com/people/RTN-Global/61573828870610/',
      'https://www.youtube.com/@RTNGlobal',
      'https://www.linkedin.com/in/rtnglobalofficial/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1 505 528 6780',
      contactType: 'customer service',
      email: 'info@rtnglobal.site',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1209 MOUNTAIN ROAD PLNE, STE R',
      addressLocality: 'ALBUQUERQUE',
      addressRegion: 'NM',
      postalCode: '87110',
      addressCountry: 'US'
    },
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Muhammad Tayyab'
    }
  };

  return <JsonLd data={organizationData} />;
}

// Local Business schema
export function LocalBusinessJsonLd() {
  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'WebDesign',
    name: 'RTN Global',
    image: 'https://rtnglobal.co/images/office.jpg',
    '@id': 'https://rtnglobal.co',
    url: 'https://rtnglobal.co',
    telephone: '+1 505 528 6780',
    email: 'info@rtnglobal.site',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1209 MOUNTAIN ROAD PLNE, STE R',
      addressLocality: 'ALBUQUERQUE',
      addressRegion: 'NM',
      postalCode: '87110',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.0844,
      longitude: -106.6504
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    priceRange: '$$',
    paymentAccepted: 'Credit Card, PayPal',
    sameAs: [
      'https://www.instagram.com/rtnglobalofficial/',
      'https://www.threads.net/@rtnglobalofficial/',
      'https://www.tiktok.com/@rtnglobalofficial',
      'https://web.facebook.com/people/RTN-Global/61573828870610/',
      'https://www.youtube.com/@RTNGlobal',
      'https://www.linkedin.com/in/rtnglobalofficial/'
    ]
  };

  return <JsonLd data={localBusinessData} />;
}

// Website schema
export function WebsiteJsonLd() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RTN Global',
    url: 'https://rtnglobal.co',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rtnglobal.co/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'RTN Global',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rtnglobal.co/images/logo.png'
      }
    }
  };

  return <JsonLd data={websiteData} />;
}

// Service schema
export function ServiceJsonLd({ service }: { service: ServiceProps }) {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'Organization',
      name: 'RTN Global',
      url: 'https://rtnglobal.co'
    },
    areaServed: 'Global',
    serviceType: service.title,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `https://rtnglobal.co/services/${service.id}`
    }
  };

  return <JsonLd data={serviceData} />;
}

// Project/Portfolio schema
export function ProjectJsonLd({ project }: { project: ProjectProps }) {
  const projectData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.shortDescription,
    image: project.heroImage,
    creator: {
      '@type': 'Organization',
      name: 'RTN Global',
      url: 'https://rtnglobal.co'
    },
    datePublished: project.completionDate,
    keywords: project.technologies.join(', '),
    url: `https://rtnglobal.co/case-studies/${project.slug}`
  };

  return <JsonLd data={projectData} />;
}

// Breadcrumb schema
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return <JsonLd data={breadcrumbList} />;
}

// FAQPage schema
export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const faqPageData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return <JsonLd data={faqPageData} />;
}

// Article schema for blog posts
export function ArticleJsonLd({ 
  title, 
  description, 
  publishDate, 
  modifiedDate, 
  authorName, 
  imageUrl, 
  url 
}: { 
  title: string; 
  description: string; 
  publishDate: string; 
  modifiedDate?: string; 
  authorName: string; 
  imageUrl: string; 
  url: string; 
}) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Person',
      name: authorName
    },
    publisher: {
      '@type': 'Organization',
      name: 'RTN Global',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rtnglobal.co/images/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  return <JsonLd data={articleData} />;
} 