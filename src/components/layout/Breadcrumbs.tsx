'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import { BiChevronRight } from 'react-icons/bi';



// Special title mappings for better readability
const titleMappings: Record<string, string> = {
  'services': 'Services',
  'portfolio': 'Portfolio',
  'about': 'About Us',
  'contact': 'Contact Us',
  'testimonials': 'Testimonials',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Skip rendering breadcrumbs on the homepage
  if (pathname === '/') {
    return null;
  }

  // Generate breadcrumb segments
  const segments = pathname.split('/').filter(Boolean);
  
  // Construct breadcrumb items with proper formatting
  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    
    // Handle dynamic segments (those with [slug] pattern)
    let label;
    if (segment.includes('-')) {
      // For URL slugs, convert them to readable format 
      // (replace hyphens with spaces and capitalize each word)
      label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
    } else {
      // Use predefined mappings or default formatting
      label = titleMappings[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    }
    
    return {
      href,
      label,
      isLast: index === segments.length - 1
    };
  });

  return (
    <div className="border-b border-gray-200/10 bg-background mt-4 md:mt-6">
      <nav 
        aria-label="Breadcrumb" 
        className="container mx-auto py-6 md:py-8 flex justify-center items-center"
      >
        <ol className="flex items-center flex-wrap justify-center max-w-screen-lg px-4">
          <li className="flex items-center my-1.5">
            <Link href="/" className="flex items-center hover:text-primary transition-colors text-gray-400 font-medium">
              <FaHome className="h-5 w-5 mr-2" />
              <span className="text-base md:text-lg">Home</span>
            </Link>
          </li>
          
          {breadcrumbItems.map((item) => (
            <li key={item.href} className="flex items-center my-1.5">
              <BiChevronRight className="h-6 w-6 mx-3 text-gray-500" />
              {item.isLast ? (
                <span className="font-semibold text-foreground text-base md:text-lg">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors text-gray-400 font-medium text-base md:text-lg">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
} 