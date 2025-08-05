'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import ZoomOnHover from '@/components/animations/ZoomOnHover';
import { ServiceDetail } from './servicesData';

interface ServicesRelatedProps {
  services: ServiceDetail[];
}

export default function ServicesRelated({ services }: ServicesRelatedProps) {
  // Helper function to render service icon
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'grid':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
      case 'check-circle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'pen-tool':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        );
      case 'layout':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        );
      case 'zap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] right-[15%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-[150px] opacity-60" />
        <div className="absolute bottom-[20%] left-[10%] w-[20%] h-[30%] bg-secondary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Explore More</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
              Related Services
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Discover other ways we can help elevate your digital presence
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 0.1}>
              <Link href={`/services/${service.id}`}>
                <ZoomOnHover scale={1.03}>
                  <div className="dark-card rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
                    <div className="mb-4 flex items-center">
                      <div className="bg-foreground/5 w-12 h-12 rounded-full flex items-center justify-center relative">
                        {renderIcon(service.icon)}
                      </div>
                      <h3 className="text-xl font-bold ml-3 text-white">{service.title}</h3>
                    </div>
                    
                    {service.heroImage && (
                      <div className="mb-4 relative overflow-hidden rounded-lg">
                        <Image
                          src={service.heroImage}
                          alt={service.title}
                          width={400}
                          height={300}
                          className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    <p className="text-foreground/70 mb-4 flex-grow">{service.shortDescription}</p>
                    
                    <div className="mt-4 text-primary text-sm font-medium flex items-center">
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </ZoomOnHover>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={0.3}>
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium group">
              <span className="relative">
                View All Services
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary/40 group-hover:bg-primary transition-colors"></span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 