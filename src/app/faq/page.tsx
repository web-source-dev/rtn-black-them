import React from 'react';
import { Metadata } from 'next';
import FaqPage from '@/components/Sections/FaqSections/FaqPage';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | RTN Global',
  description: 'Find answers to common questions about our services, processes, and policies. Get the information you need about RTN Global.',
  keywords: [
    'RTN Global FAQ',
    'frequently asked questions',
    'web development FAQ',
    'digital agency questions',
    'services FAQ',
    'client questions'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/faq',
  },
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | RTN Global',
    description: 'Find answers to common questions about our services, processes, and policies.',
    url: 'https://rtnglobal.co/faq',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-faq.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global FAQ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function FAQ() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'FAQ', url: 'https://rtnglobal.co/faq' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TransitionWrapper>
        <FaqPage />
      </TransitionWrapper>
    </>
  );
} 