import React from 'react';
import MainContactSection from '@/components/Sections/ContactSections/MainContactSection';
import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Us | RTN Global',
  description: 'Get in touch with RTN Global. We\'re here to answer your questions and help bring your digital vision to life. Reach out for web development, design, and digital services.',
  keywords: [
    'contact RTN Global',
    'hire web developer',
    'hire web designer',
    'digital agency contact',
    'web development quote',
    'website design inquiry',
    'Albuquerque web agency',
    'web development services'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/contact',
  },
  openGraph: {
    title: 'Contact RTN Global | Get in Touch',
    description: 'Reach out to our team for web development, design, and digital transformation services. Let\'s start a conversation about your project.',
    url: 'https://rtnglobal.co/contact',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Contact'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Breadcrumb for contact page
const contactBreadcrumbs = [
  { name: 'Home', url: 'https://rtnglobal.co' },
  { name: 'Contact Us', url: 'https://rtnglobal.co/contact' },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={contactBreadcrumbs} />
      <MainContactSection />
    </>
  );
} 