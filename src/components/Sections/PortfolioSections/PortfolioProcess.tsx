'use client';

import React from 'react';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function PortfolioProcess() {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, target audience, and project requirements through comprehensive research and collaborative workshops.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Design & Prototyping',
      description: 'Our designers create visually stunning concepts and interactive prototypes that align with your brand and provide intuitive user experiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Development & Implementation',
      description: 'Our developers bring the designs to life using modern technologies and best practices, ensuring a clean, efficient, and scalable codebase.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Testing & Quality Assurance',
      description: 'We conduct thorough testing across devices, browsers, and use cases to ensure a flawless, bug-free experience for your users.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Launch & Optimization',
      description: 'We carefully deploy your project and monitor performance, making data-driven optimizations to ensure it achieves your business objectives.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Ongoing Support & Growth',
      description: 'We provide continued support and enhancements to ensure your digital solution evolves with your business and stays ahead of the competition.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-background/80 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[20%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[30%] right-[10%] w-[25%] h-[30%] bg-secondary/5 rounded-full blur-[100px] opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Approach</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
            How We Build 
              <span className="relative text-white mx-4">
                <GlitchText text="Successful" />
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
              </span>
              Projects
            </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              Our proven development process ensures we deliver exceptional results that meet your business objectives.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.id} delay={index * 0.1}>
              <div className="dark-card rounded-xl p-6 h-full transition-all hover:border-primary/30 hover:shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="w-12 h-12 mr-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={0.6}>
          <div className="text-center mt-16">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-glow transition-all"
            >
              Start Your Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 