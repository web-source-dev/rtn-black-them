import React from 'react';
import { Metadata } from 'next';
import CookiesPolicyPage from '@/components/Sections/CookiesPolicySections/CookiesPolicyPage';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export const metadata: Metadata = {
  title: 'Cookies Policy | RTN Global',
  description: 'Information about how we use cookies and your privacy on our website. Learn about data collection practices at RTN Global.',
  keywords: [
    'cookies policy',
    'RTN Global cookies',
    'website cookies',
    'data privacy',
    'cookie usage',
    'privacy information'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/cookies-policy',
  },
  openGraph: {
    title: 'Cookies Policy | RTN Global',
    description: 'Information about how we use cookies and your privacy on our website.',
    url: 'https://rtnglobal.co/cookies-policy',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-legal.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Cookies Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function CookiesPolicy() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Cookies Policy', url: 'https://rtnglobal.co/cookies-policy' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TransitionWrapper>
        <CookiesPolicyPage />
      </TransitionWrapper>
    </>
  );
} 