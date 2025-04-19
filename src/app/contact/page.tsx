import React from 'react';
import MainContactSection from '@/components/Sections/ContactSections/MainContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | RTN Digital Agency',
  description: 'Get in touch with RTN Digital Agency. We\'re here to answer your questions and help bring your digital vision to life.',
  openGraph: {
    title: 'Contact RTN Digital Agency',
    description: 'Reach out to our team for web development, design, and digital transformation services. Let\'s start a conversation about your project.',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Digital Agency Contact'
      }
    ]
  }
};

export default function ContactPage() {
  return <MainContactSection />;
} 