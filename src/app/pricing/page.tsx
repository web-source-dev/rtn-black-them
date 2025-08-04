import React from 'react';
import { Metadata } from 'next';
import PricingHeroSection from '@/components/Sections/PricingSections/PricingHeroSection';
import PricingPlansSection from '@/components/Sections/PricingSections/PricingPlansSection';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import GridPattern from '@/components/ui/GridPattern';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import { FAQPageJsonLd } from '@/components/utils/JsonLd';

export const metadata: Metadata = {
  title: 'Pricing Plans | RTN Global',
  description: 'Choose from our flexible pricing plans: Basic, Core, and Pro. Get professional web development, Wix development, and maintenance services tailored to your needs.',
  keywords: [
    'pricing plans',
    'web development pricing',
    'Wix development pricing',
    'website maintenance',
    'RTN Global pricing',
    'digital agency pricing',
    'web design pricing'
  ],
  alternates: {
    canonical: 'https://rtnglobal.co/pricing',
  },
  openGraph: {
    title: 'Pricing Plans | RTN Global',
    description: 'Choose from our flexible pricing plans for professional web development and Wix development services',
    url: 'https://rtnglobal.co/pricing',
    siteName: 'RTN Global',
    images: [
      {
        url: '/images/og-pricing.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global Pricing Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Pricing FAQs
const pricingFaqs = [
  {
    question: "What are credits and how do they work?",
    answer: "Credits represent development hours for tasks like bug fixes, updates, and new features. Each plan includes a monthly credit allowance that can be used for various development tasks."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and take effect at the start of your next billing cycle."
  },
  {
    question: "What happens if I need more credits than my plan includes?",
    answer: "Additional credits can be purchased at the rates specified in each plan. We'll notify you when you're approaching your limit and help you decide if you need more credits."
  },
  {
    question: "What's included in the response time?",
    answer: "Response time refers to how quickly we'll acknowledge and begin working on your requests. Actual completion time depends on the complexity of the task and current workload."
  },
  {
    question: "Do you offer custom pricing for larger projects?",
    answer: "Yes, for enterprise clients or projects requiring extensive development, we offer custom pricing plans. Contact us to discuss your specific needs."
  }
];

export default function PricingPage() {
  return (
    <>
      <FAQPageJsonLd faqs={pricingFaqs} />
      
      <TransitionWrapper>
        <div className="min-h-screen bg-background relative">
          {/* Background grid pattern */}
          <GridPattern 
            dotColor="rgba(255,255,255,0.3)" 
            size={40} 
            dotSize={1} 
            backgroundOpacity={0.03} 
            className="fixed inset-0 z-0 pointer-events-none"
          />
          
          {/* Main content */}
          <div className="relative z-10">
            <PricingHeroSection />
            <PricingPlansSection />
            
            <CTASection 
              title="Ready to get started?"
              subtitle="Choose the plan that best fits your needs and let's build something amazing together."
              primaryButtonText="Contact Us"
              secondaryButtonText="View Our Work"
              primaryButtonLink="/contact"
              secondaryButtonLink="/portfolio"
            />
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
} 