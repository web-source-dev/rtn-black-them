import React from 'react';
import { Metadata } from 'next';
import DisclaimerPage from '@/components/Sections/DisclaimerSections/DisclaimerPage';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export const metadata: Metadata = {
  title: 'Disclaimer | RTN Global',
  description: 'Important information about the use of our website and services. Learn about the terms and conditions of using RTN Global services.',
  keywords: [
    'RTN Global disclaimer',
    'terms and conditions',
    'website disclaimer',
    'legal information',
    'service terms'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | RTN Global',
    description: 'Important information about the use of our website and services.',
    url: 'https://rtnglobal.co/disclaimer',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-legal.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Disclaimer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Disclaimer() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Disclaimer', url: 'https://rtnglobal.co/disclaimer' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TransitionWrapper>
        <DisclaimerPage />
      </TransitionWrapper>
    </>
  );
} 