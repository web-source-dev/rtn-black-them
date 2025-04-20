import React from 'react';
import { Metadata } from 'next';
import SupportPage from '@/components/Sections/SupportSections/SupportPage';
import { BreadcrumbJsonLd, WebsiteJsonLd, OrganizationJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export const metadata: Metadata = {
  title: 'Support | Customer Service | RTN Global',
  description: 'Get help and support for our products and services. Our dedicated team is ready to assist you with any questions or issues.',
  keywords: [
    'RTN Global support',
    'customer service',
    'technical support',
    'client assistance',
    'help desk',
    'product support',
    'service issues'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/support',
  },
  openGraph: {
    title: 'Support | Customer Service | RTN Global',
    description: 'Get help and support for our products and services. Connect with our expert team for assistance.',
    url: 'https://rtnglobal.co/support',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-support.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Support',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support | RTN Global',
    description: 'Get help and support for our products and services.',
    images: ['/images/og-support.jpg'],
    creator: '@rtnglobal',
    site: '@rtnglobal',
  },
};

export default function Support() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Support', url: 'https://rtnglobal.co/support' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <WebsiteJsonLd />
      <OrganizationJsonLd />
      <TransitionWrapper>
        <SupportPage />
      </TransitionWrapper>
    </>
  );
}