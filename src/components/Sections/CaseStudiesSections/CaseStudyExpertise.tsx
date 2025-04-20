'use client';

import React from 'react';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import MagneticGradientCard from '@/components/ui/MagneticGradientCard';
import Link from '@/components/ui/Link';

// Define expertise areas
const expertiseAreas = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Web Development',
    description: 'Custom solutions from simple websites to complex web applications that drive business growth.',
    count: 14,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
      </svg>
    ),
    title: 'UX/UI Design',
    description: 'Intuitive and engaging digital experiences that connect with your users and drive conversions.',
    count: 10,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
      </svg>
    ),
    title: 'E-Commerce',
    description: 'Custom shopping experiences with seamless payment processing and inventory management.',
    count: 8,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 7H7v6h6V7z" />
        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    count: 6,
  },
];

export default function CaseStudyExpertise() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-[30%] h-[40%] bg-primary/5 rounded-full blur-[150px] opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Areas of Expertise</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              We specialize in delivering exceptional digital solutions across various industry verticals and technology domains.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="rounded-xl p-6 bg-foreground/5 border border-foreground/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="p-3 bg-foreground/10 rounded-lg w-fit mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-foreground/70 mb-4 flex-grow">{area.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-foreground/60">{area.count} Case Studies</span>
                  <Link href={`/case-studies?category=${area.title}`} variant="highlight" size="sm">
                    View Cases
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={0.2}>
          <MagneticGradientCard className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Tailored Solution for Your Business?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Our team of experts can help you develop a custom strategy to address your unique business challenges.
            </p>
            <Link href="/contact" variant="default" size="lg">
              Schedule a Free Consultation
            </Link>
          </MagneticGradientCard>
        </RevealOnScroll>
      </div>
    </section>
  );
} 