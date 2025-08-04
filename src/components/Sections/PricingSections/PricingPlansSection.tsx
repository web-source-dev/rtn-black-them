'use client';

import React, { useState } from 'react';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import AmbientLightEffect from '@/components/animations/AmbientLightEffect';
import GlowButton from '@/components/ui/GlowButton';
import MagneticButton from '@/components/ui/MagneticButton';
import { Check, X } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  period: string;
  credits: number;
  openTasks: number;
  websites: number;
  responseTime: string;
  reports: string;
  support: string;
  additionalCredits: number;
  features: string[];
  notIncluded: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    description: 'Ideal for one website with moderate development needs.',
    price: 195,
    period: 'MONTH',
    credits: 5,
    openTasks: 1,
    websites: 1,
    responseTime: '72 hours',
    reports: 'Bi-weekly performance reports',
    support: 'Email support',
    additionalCredits: 75,
    features: [
      '5 credits per month',
      '1 open task',
      'Supports 1 website',
      '72 hours response time',
      'Bi-weekly performance reports',
      'Email support'
    ],
    notIncluded: [
      'Asana collaboration',
      'Priority support'
    ]
  },
  {
    name: 'Core',
    description: 'Perfect for faster development and regular updates for one site.',
    price: 350,
    period: 'MONTH',
    credits: 8,
    openTasks: 2,
    websites: 1,
    responseTime: '48 hours',
    reports: 'Bi-weekly performance reports',
    support: 'Email support',
    additionalCredits: 70,
    features: [
      '8 credits per month',
      '2 open tasks',
      'Supports 1 website',
      '48 hours response time',
      'Bi-weekly performance reports',
      'Email support'
    ],
    notIncluded: [
      'Asana collaboration',
      'Priority support'
    ]
  },
  {
    name: 'Pro',
    description: 'Best for top-priority support across up to two websites.',
    price: 520,
    period: 'MONTH',
    credits: 12,
    openTasks: 3,
    websites: 2,
    responseTime: '24 hour',
    reports: 'Weekly performance reports',
    support: 'Email support + Asana collaboration',
    additionalCredits: 60,
    features: [
      '12 credits per month',
      '3 open tasks',
      'Supports up to 2 websites',
      '24 hour response time',
      'Weekly performance reports',
      'Email support + Asana collaboration'
    ],
    notIncluded: [],
    popular: true
  }
];

export default function PricingPlansSection() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-secondary/10 blur-3xl opacity-50" />
      </div>
      
      <AmbientLightEffect color="rgba(138, 92, 245, 0.1)" size={600} blur={100}>
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative group ${
                    plan.popular 
                      ? 'lg:scale-105 z-10' 
                      : 'lg:scale-95'
                  } transition-all duration-500 ease-out`}
                  onMouseEnter={() => setHoveredPlan(plan.name)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Plan card */}
                  <div className={`
                    relative h-full p-8 rounded-2xl border transition-all duration-500 ease-out
                    ${plan.popular 
                      ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30 shadow-2xl shadow-primary/20' 
                      : 'bg-background/50 border-border/50 hover:border-primary/30 hover:bg-background/80'
                    }
                    ${hoveredPlan === plan.name ? 'transform scale-105 shadow-xl' : ''}
                  `}>
                    {/* Card background glow */}
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl opacity-50" />
                    )}
                    
                    <div className="relative z-10">
                      {/* Plan header */}
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-foreground/70 text-sm mb-6">
                          {plan.description}
                        </p>
                        
                        {/* Price */}
                        <div className="mb-6">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                            <span className="text-foreground/60 ml-2">/{plan.period}</span>
                          </div>
                        </div>
                        
                        {/* Additional credits info */}
                        <p className="text-xs text-foreground/60 mb-6">
                          Additional credits at ${plan.additionalCredits}/credit
                        </p>
                      </div>
                      
                      {/* Features list */}
                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80 text-sm">{feature}</span>
                          </div>
                        ))}
                        
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                            <X className="w-5 h-5 text-foreground/40 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/40 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="text-center">
                        <GlowButton 
                          onClick={() => window.location.href = '/contact'}
                          className="w-full"
                        >
                          Get Started
                        </GlowButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional info */}
            <div className="mt-16 text-center">
              <RevealOnScroll>
                <div className="max-w-2xl mx-auto space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Need a custom plan?
                  </h3>
                  <p className="text-foreground/70">
                    For enterprise clients or projects requiring extensive development, we offer custom pricing plans tailored to your specific needs.
                  </p>
                  <MagneticButton 
                    onClick={() => window.location.href = '/contact'}
                    className="dark-card border-primary/20 hover:border-primary/40 hover:bg-background/80 py-3 px-8 rounded-full"
                  >
                    Contact Us for Custom Pricing
                  </MagneticButton>
                </div>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>
        </div>
      </AmbientLightEffect>
    </section>
  );
} 