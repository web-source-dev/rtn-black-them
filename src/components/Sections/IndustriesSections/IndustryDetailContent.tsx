'use client';

import React from 'react';
import Image from 'next/image';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';
import Badge from '@/components/ui/Badge';
import Link from '@/components/ui/Link';
import MagneticGradientCard from '@/components/ui/MagneticGradientCard';
import { Industry } from './industriesData';

interface IndustryDetailContentProps {
  industry: Industry;
}

export default function IndustryDetailContent({ industry }: IndustryDetailContentProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-primary/5 rounded-full blur-[150px] opacity-80" />
          <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[120px] opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/70 text-foreground border-primary">Industry Solutions</Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
                {industry.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="relative">
                  <span className="text-white">
                    <GlitchText text={industry.title.split(' ').length > 1 ? industry.title.split(' ').slice(-1)[0] : industry.title} />
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                </span>
              </h1>
              
              <p className="text-foreground/80 text-xl md:text-2xl mb-8">
                {industry.shortDescription}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Industry Showcase Image */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-20 mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
              <Image 
                src={industry.thumbnail} 
                alt={industry.title} 
                width={1920} 
                height={1080} 
                className="w-full object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <RevealOnScroll>
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-xl p-6 bg-foreground/5 border border-foreground/10">
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-foreground/10 pb-2">Key Statistics</h3>
                    <ul className="space-y-4">
                      {industry.stats.map((stat, idx) => (
                        <li key={idx} className="flex flex-col">
                          <span className="text-primary font-bold text-xl mb-1">{stat.value}</span>
                          <span className="text-white text-sm">{stat.title}</span>
                          <span className="text-foreground/70 text-xs">{stat.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="rounded-xl p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                    <h3 className="text-lg font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-foreground/80 text-sm mb-4">
                      Our {industry.title} experts are ready to help you navigate the challenges of your industry.
                    </p>
                    <Link 
                      href="/contact"
                      variant="default"
                      size="sm"
                      className="w-full justify-center"
                    >
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <RevealOnScroll>
                <div className="prose prose-lg prose-invert mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Overview</h2>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </RevealOnScroll>

              {/* Challenges Section */}
              <RevealOnScroll>
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Industry Challenges</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industry.challenges.map((challenge, index) => (
                      <div 
                        key={index} 
                        className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-start mb-3">
                          <div className="p-2 rounded-md bg-red-500/20 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <span className="text-foreground/80">{challenge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Solutions Section */}
              <RevealOnScroll>
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Our Solutions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industry.solutions.map((solution, index) => (
                      <div 
                        key={index} 
                        className="bg-foreground/5 border border-foreground/10 rounded-lg p-6 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-start mb-3">
                          <div className="p-2 rounded-md bg-green-500/20 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground/80">{solution}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Key Services */}
              <RevealOnScroll>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Our Key Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {industry.keyServices.map((service, index) => (
                      <MagneticGradientCard 
                        key={index}
                        className="p-6 h-full flex flex-col"
                      >
                        <div className="p-3 bg-foreground/10 rounded-lg w-fit mb-4">
                          <Image 
                            src={service.icon} 
                            alt={service.title} 
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-foreground/70 text-sm">{service.description}</p>
                      </MagneticGradientCard>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 