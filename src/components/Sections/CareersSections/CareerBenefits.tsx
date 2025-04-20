'use client';

import React from 'react';
import Image from 'next/image';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

// Benefits data
const benefits = [
  {
    icon: '/images/icons/health.svg',
    title: 'Comprehensive Healthcare',
    description: 'We offer top-tier health, dental, and vision insurance plans to keep you and your family healthy.'
  },
  {
    icon: '/images/icons/money.svg',
    title: 'Competitive Compensation',
    description: 'Enjoy competitive salary and equity packages that recognize your skills and contributions.'
  },
  {
    icon: '/images/icons/laptop.svg',
    title: 'Remote Work Flexibility',
    description: 'Work from anywhere with our flexible remote work policy and home office stipend.'
  },
  {
    icon: '/images/icons/calendar.svg',
    title: 'Flexible Time Off',
    description: 'Our unlimited PTO policy encourages you to take the time you need to rest and recharge.'
  },
  {
    icon: '/images/icons/growth.svg',
    title: 'Professional Development',
    description: 'Grow your skills with our dedicated budget for conferences, courses, and learning resources.'
  },
  {
    icon: '/images/icons/baby.svg',
    title: 'Parental Leave',
    description: 'We provide generous paid leave for all new parents, regardless of gender.'
  },
  {
    icon: '/images/icons/retirement.svg',
    title: 'Retirement Planning',
    description: 'Prepare for your future with our 401(k) matching program and financial wellness resources.'
  },
  {
    icon: '/images/icons/team.svg',
    title: 'Team Building',
    description: 'Connect with colleagues through regular team events, retreats, and collaborative projects.'
  }
];

export default function CareerBenefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/4 w-[30%] h-[40%] bg-primary/5 rounded-full blur-[150px] opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Benefits & Perks</h2>
            <p className="text-foreground/80 text-lg">
              We believe in taking care of our team members with comprehensive benefits that support your health, wealth, and happiness.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <RevealOnScroll key={index} delay={index * 0.05}>
              <div className="bg-foreground/[0.03] backdrop-blur-sm border border-foreground/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Image src={benefit.icon} alt={benefit.title} width={28} height={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-foreground/70 text-sm">{benefit.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        {/* Additional benefits highlight */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">More Than Just Work</h3>
                <p className="text-foreground/80 mb-6">
                  At RTN Global, we understand that a fulfilling career is about more than just the work itself. It&apos;s about being part of a supportive community, having opportunities to grow, and maintaining a healthy work-life balance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mt-1 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-foreground/80">Regular social events and team-building activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mt-1 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-foreground/80">Annual company retreats in exciting locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mt-1 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-foreground/80">Mental health resources and wellness programs</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                  alt="Team gathering" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 