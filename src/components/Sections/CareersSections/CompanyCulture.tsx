'use client';

import React from 'react';
import Image from 'next/image';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import MagneticGradientCard from '@/components/ui/MagneticGradientCard';

// Company values data
const companyValues = [
  {
    icon: '/images/icons/creativity.svg',
    title: 'Innovation',
    description: 'We embrace new ideas, technologies, and approaches to solve complex problems and create exceptional solutions.'
  },
  {
    icon: '/images/icons/team.svg',
    title: 'Collaboration',
    description: 'We believe in the power of diverse teams working together to achieve outcomes greater than the sum of individual efforts.'
  },
  {
    icon: '/images/icons/growth.svg',
    title: 'Growth',
    description: "We\'re dedicated to continuous improvement, both for our team members and for the results we deliver to clients."
  },
  {
    icon: '/images/icons/transparency.svg',
    title: 'Transparency',
    description: 'We build trust through open communication, sharing knowledge, and being accountable for our work and decisions.'
  },
  {
    icon: '/images/icons/balance.svg',
    title: 'Balance',
    description: 'We understand the importance of balancing professional achievements with personal well-being and fulfillment.'
  },
  {
    icon: '/images/icons/impact.svg',
    title: 'Impact',
    description: 'We measure our success by the meaningful difference our work makes for our clients, users, and the broader community.'
  }
];

export default function CompanyCulture() {
  return (
    <section id="culture" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Culture & Values</h2>
            <p className="text-foreground/80 text-lg">
              At RTN Global, we foster a culture that encourages creativity, growth, and well-being. Our values shape how we work together and the solutions we create.
            </p>
          </div>
        </RevealOnScroll>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {companyValues.map((value, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="bg-foreground/[0.03] backdrop-blur-sm border border-foreground/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                <div className="p-3 bg-foreground/10 rounded-lg w-fit mb-4">
                  <Image src={value.icon} alt={value.title} width={28} height={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Team Photo & Quote */}
        <RevealOnScroll>
          <div className="bg-foreground/[0.03] backdrop-blur-sm border border-foreground/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="RTN Global Team" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">Life at RTN Global</h3>
                <p className="text-foreground/80 mb-6 italic text-lg">
                  &quot;We&apos;ve built a workplace where brilliant minds collaborate to solve challenging problems, where ideas are valued regardless of hierarchy, and where we celebrate successes together while learning from failures.&quot;
                </p>
                <div className="flex items-center">
                  <Image 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Jennifer Watson" 
                    width={56} 
                    height={56} 
                    className="rounded-full border-2 border-primary"
                  />
                  <div className="ml-4">
                    <p className="text-white font-medium">Jennifer Watson</p>
                    <p className="text-foreground/60 text-sm">Chief People Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Testimonial */}
        <div className="mt-20">
          <RevealOnScroll>
            <MagneticGradientCard className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-square relative max-w-[250px] mx-auto">
                    <Image 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Michael Chen" 
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <blockquote className="text-xl text-foreground/90 italic mb-6">
                    &quot;Working at RTN Global has been the highlight of my career. I&apos;m constantly challenged to grow and learn new skills, while being surrounded by incredibly smart and supportive colleagues. The balance of autonomy and collaboration is perfect.&quot;
                  </blockquote>
                  <div>
                    <p className="text-white font-medium">Michael Chen</p>
                    <p className="text-foreground/60">Senior Developer, 3 years at RTN Global</p>
                  </div>
                </div>
              </div>
            </MagneticGradientCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
} 