'use client';

import React, { memo } from 'react';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import Divider from '@/components/ui/Divider';
import Accordion from '@/components/ui/Accordion';
import GlitchText from '@/components/ui/GlitchText';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeaturesSection = memo(function FeaturesSection() {
  const features: Feature[] = [
    {
      id: 'responsive',
      title: 'Fully Responsive Design',
      description: 'Our websites look and perform beautifully on any device, from desktop to mobile.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'performance',
      title: 'Optimized Performance',
      description: 'Fast-loading, optimized websites that provide excellent user experience and better search rankings.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'seo',
      title: 'SEO Best Practices',
      description: 'Built-in SEO optimization to help you rank higher in search engine results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 'security',
      title: 'Enhanced Security',
      description: 'Robust security measures to protect your website and your users\' data.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 'accessibility',
      title: 'Web Accessibility',
      description: 'Inclusive designs that ensure your website is accessible to all users, including those with disabilities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      id: 'customization',
      title: 'Easy Customization',
      description: 'Flexible designs that can be easily updated and customized to meet your evolving needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  const faqItems = [
    {
      id: 'faq-1',
      question: "What makes your web development approach different?",
      answer: "We combine cutting-edge technology with beautiful design and strategic thinking. Our process is collaborative, transparent, and focused on achieving measurable results for your business."
    },
    {
      id: 'faq-2',
      question: "How long does it take to build a website?",
      answer: "Project timelines vary based on complexity, but most websites take 4-8 weeks from concept to launch. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      id: 'faq-3',
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer flexible maintenance packages to keep your site secure, updated, and performing optimally. Our support team is always available to address any issues or make updates as your business evolves."
    },
    {
      id: 'faq-4',
      question: "Can you help improve my existing website?",
      answer: "Absolutely. We offer website audits and improvement services to enhance performance, design, and functionality of your existing site. From bug fixes to complete redesigns, we can tailor our approach to your needs."
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-background">
      {/* Simplified background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.01] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Why Choose Us</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">Features That 
            <span className="relative">
            <span className="text-white ml-5"><GlitchText text="Set Us Apart" /></span>
            <span className="absolute -bottom-1 left-5 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
            </span>
             </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              We blend innovative technology with creative design to deliver websites that not only look great but perform exceptionally.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <FeatureCard key={`feature-${feature.id}`} feature={feature} index={index} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            {/* FAQ card with fixed minimum height to prevent layout shift */}
            <div className="relative dark-card rounded-2xl p-8 shadow-lg min-h-[600px]">
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.slice(4, 6).map((feature, index) => (
                    <FeatureCard 
                      key={`feature-${feature.id}`} 
                      feature={feature} 
                      index={index + 4} 
                      variant="dark"
                    />
                  ))}
                </div>
                
                <Divider className="my-8 opacity-30" />
                
                <h3 className="text-2xl font-bold mb-6 text-gradient">Frequently Asked Questions</h3>
                
                {/* FAQ accordion - animationType="height" will prevent layout shifts */}
                <div className="min-h-[240px]">
                  <Accordion 
                    items={faqItems.map((item) => ({
                      id: item.id,
                      title: item.question,
                      content: item.answer
                    }))}
                    className="bg-transparent"
                    animationType="height"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

interface FeatureCardProps {
  feature: Feature;
  index: number;
  variant?: 'light' | 'dark';
}

const FeatureCard = memo(function FeatureCard({ feature, index, variant = 'light' }: FeatureCardProps) {
  return (
    <RevealOnScroll delay={index * 0.05}>
      <div className={`p-6 rounded-xl h-full transition-all duration-200 ${variant === 'dark' ? 'bg-background/30 border border-border/10' : 'dark-card'}`}>
        <div className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center ${variant === 'dark' ? 'bg-primary/20 text-primary' : 'bg-foreground/5 text-primary'}`}>
          {feature.icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
        <p className="text-foreground/70">{feature.description}</p>
      </div>
    </RevealOnScroll>
  );
});

export default FeaturesSection; 