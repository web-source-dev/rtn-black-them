import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search | RTN Global',
  description: 'Search across our website for content, services, case studies, and more.',
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 