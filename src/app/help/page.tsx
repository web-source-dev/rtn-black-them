import React from 'react';
import { Metadata } from 'next';
import HelpPage from '@/components/Sections/HelpSections/HelpPage';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export const metadata: Metadata = {
  title: 'Help Center | RTN Global',
  description: 'Find helpful resources, guides, and answers to your questions. Get the support you need from RTN Global experts.',
  keywords: [
    'RTN Global help',
    'customer support',
    'help center',
    'digital agency support',
    'technical help',
    'service support',
    'website assistance'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/help',
  },
  openGraph: {
    title: 'Help Center | RTN Global',
    description: 'Find helpful resources, guides, and answers to your questions.',
    url: 'https://rtnglobal.co/help',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-help.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Help Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Help() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Help Center', url: 'https://rtnglobal.co/help' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TransitionWrapper>
        <HelpPage />
      </TransitionWrapper>
    </>
  );
} 