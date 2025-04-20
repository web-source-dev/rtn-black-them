import React from 'react';
import { Metadata } from 'next';
import BlogListPage from '@/components/Sections/BlogSections/BlogListPage';
import { BreadcrumbJsonLd, WebsiteJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export const metadata: Metadata = {
  title: 'Blog | Insights and Articles | RTN Global',
  description: 'Explore our latest articles, insights, and guides on design, development, and digital strategy from the experts at RTN Global.',
  keywords: [
    'RTN Global blog',
    'digital insights',
    'web development articles',
    'design guides',
    'digital transformation',
    'technology blog',
    'business insights'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/blog',
  },
  openGraph: {
    title: 'Blog | Insights and Articles | RTN Global',
    description: 'Explore our latest articles, insights, and guides on design, development, and digital strategy.',
    url: 'https://rtnglobal.co/blog',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-blog-main.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Blog', url: 'https://rtnglobal.co/blog' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <WebsiteJsonLd />
      <TransitionWrapper>
        <BlogListPage />
      </TransitionWrapper>
    </>
  );
} 