'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Accordion from '@/components/ui/Accordion';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { ServiceDetail } from './servicesData';

interface ServiceDetailContentProps {
  service: ServiceDetail;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  // Helper function to render the icon based on the icon name
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
      case 'grid':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
      case 'check-circle':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'pen-tool':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        );
      case 'layout':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        );
      case 'zap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-primary/5 rounded-full blur-[150px] opacity-80" />
          <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[120px] opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">{service.title}</Badge>
              
              <div className="flex justify-center mb-6">
                {renderIcon(service.icon)}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
                {service.title}
              </h1>
              
              <p className="text-foreground/80 text-xl md:text-2xl mb-10">
                {service.shortDescription}
              </p>
              
              {service.heroImage && (
                <div className="mt-12 max-w-4xl mx-auto">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className="w-full h-64 md:h-120 object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <div className="prose prose-lg prose-invert mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Overview</h2>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>
            </RevealOnScroll>

            {/* Benefits Section */}
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Key Benefits</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="dark-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-foreground/70">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Features Section */}
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">What&apos;s Included</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-2">
                    <span className="text-primary mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Process Section (if available) */}
            {service.process && (
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Our Process</h2>
                
                <div className="mb-16">
                  {service.process.map((step, index) => (
                    <div key={index} className="relative mb-8 last:mb-0">
                      {index < service.process!.length - 1 && (
                        <div className="absolute left-[39px] top-[60px] bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-primary/10 h-[calc(100%-60px)]"></div>
                      )}
                      <div className="flex">
                        <div className="mr-8 flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="pt-4">
                          <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                          <p className="text-foreground/80">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            {/* Technologies Section (if available) */}
            {service.technologies && (
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Technologies We Use</h2>
                
                <div className="flex flex-wrap gap-3 mb-16">
                  {service.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-full text-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            {/* FAQs Section */}
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Frequently Asked Questions</h2>
              
              <Accordion 
                type="single" 
                collapsible 
                className="mb-16"
                items={service.faqs.map((faq, index) => ({
                  id: `faq-${index}`,
                  title: faq.question,
                  content: <p className="text-foreground/80">{faq.answer}</p>
                }))}
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
} 