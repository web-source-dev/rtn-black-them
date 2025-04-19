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
    <div className="border-b border-gray-800">
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-3 text-sm text-gray-400">
        <ol className="flex items-center flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="flex items-center hover:text-primary transition-colors">
              <FaHome className="h-4 w-4 mr-1" />
              <span>Home</span>
            </Link>
          </li>
          
          {breadcrumbItems.map((item) => (
            <li key={item.href} className="flex items-center">
              <BiChevronRight className="h-4 w-4 mx-2" />
              {item.isLast ? (
                <span className="font-medium text-foreground">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
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