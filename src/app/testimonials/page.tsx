import React from 'react';
import MainTestimonialsSection from '@/components/Sections/TestimonialsSections/MainTestimonialsSection';
import { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';

export const metadata: Metadata = {
  title: 'Testimonials | RTN Global',
  description: 'Read what our clients have to say about working with RTN Global. Real feedback from real projects showcasing our commitment to excellence in web development and design.',
  keywords: [
    'RTN Global reviews',
    'RTN Global testimonials',
    'web development reviews',
    'web design testimonials',
    'digital agency feedback',
    'client testimonials',
    'customer reviews',
    'web development success stories'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | RTN Global',
    description: 'Discover what our clients have to say about working with RTN Global. Read testimonials from businesses we\'ve helped transform with our web development and design services.',
    url: 'https://rtnglobal.co/testimonials',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-testimonials.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Testimonials'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Breadcrumb for testimonials page
const testimonialsBreadcrumbs = [
  { name: 'Home', url: 'https://rtnglobal.co' },
  { name: 'Testimonials', url: 'https://rtnglobal.co/testimonials' },
];

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={testimonialsBreadcrumbs} />
      <MainTestimonialsSection />
    </>
  );
}
