'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import Divider from '@/components/ui/Divider';

interface Step {
  number: number;
  title: string;
  description: string;
}

export default function ProcessSection() {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We start with a detailed discussion to understand your business goals, requirements, and vision for your digital presence.',
    },
    {
      number: 2,
      title: 'Strategic Planning',
      description: 'Our team develops a comprehensive strategy and proposal tailored to your specific needs and objectives.',
    },
    {
      number: 3,
      title: 'Design & Development',
      description: 'We create designs and begin development with regular feedback cycles to ensure alignment with your vision.',
    },
    {
      number: 4,
      title: 'Testing & Refinement',
      description: 'Rigorous testing across devices and platforms ensures everything works perfectly before launch.',
    },
    {
      number: 5,
      title: 'Launch & Support',
      description: 'After successful launch, we provide ongoing support and maintenance to keep your digital assets performing optimally.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] left-[10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[150px] opacity-60" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
              How We Work
            </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              Our streamlined process ensures efficient delivery of high-quality digital solutions.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.number} delay={index * 0.1}>
              <div className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-[39px] top-[72px] bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-primary/10 h-[calc(100%-72px)]"></div>
                )}
                <div className="flex mb-12 relative">
                  <div className="mr-8 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold relative z-10">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={0.5}>
          <div className="mt-16 text-center">
            <Divider className="mb-12" />
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to start your project?</h3>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Our experienced team is ready to help you transform your digital presence with our comprehensive services.
            </p>
            
            <div className="mb-8 max-w-2xl mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
                alt="Team Collaboration"
                width={800}
                height={400}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <a 
              href="/contact" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-glow transition-all"
            >
              Get in Touch
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 