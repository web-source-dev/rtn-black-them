import React from 'react';
import MainTestimonialsSection from '@/components/Sections/TestimonialsSections/MainTestimonialsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | RTN Digital Agency',
  description: 'Read what our clients have to say about working with RTN Digital Agency. Real feedback from real projects showcasing our commitment to excellence.',
  openGraph: {
    title: 'Client Testimonials | RTN Digital Agency',
    description: 'Discover what our clients have to say about working with RTN Digital Agency. Read testimonials from businesses we\'ve helped transform.',
    images: [
      {
        url: '/og-testimonials.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Digital Agency Testimonials'
      }
    ]
  }
};

export default function TestimonialsPage() {
  return <MainTestimonialsSection />;
}
