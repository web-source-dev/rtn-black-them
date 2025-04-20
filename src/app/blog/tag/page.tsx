import React from 'react';
import { Metadata } from 'next';
import BlogTagsPage from '@/components/Sections/BlogSections/BlogTagsPage';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export const metadata: Metadata = {
  title: 'Blog Topics | Browse by Category | RTN Global',
  description: 'Browse our articles by topic to find the information you are looking for. Explore our expert insights organized by categories.',
  keywords: [
    'blog topics',
    'blog categories',
    'blog tags',
    'RTN Global blog',
    'web development articles',
    'digital agency insights',
    'technology blog'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/blog/tag',
  },
  openGraph: {
    title: 'Blog Topics | Browse by Category | RTN Global',
    description: 'Browse our articles by topic to find the information you are looking for.',
    url: 'https://rtnglobal.co/blog/tag',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-blog-tags.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Blog Topics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogTagsListPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Blog', url: 'https://rtnglobal.co/blog' },
    { name: 'Topics', url: 'https://rtnglobal.co/blog/tag' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TransitionWrapper>
        <BlogTagsPage />
      </TransitionWrapper>
    </>
  );
} 