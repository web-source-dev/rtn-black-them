'use client';

import React from 'react';
import TestimonialsSection from '@/components/Sections/reusableSections/TestimonialsSection';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import Badge from '@/components/ui/Badge';
import GlitchText from '@/components/ui/GlitchText';
import ZoomOnHover from '@/components/animations/ZoomOnHover';

// Shorter version of testimonials for featured sections
const featuredTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc.',
    content: 'Working with RTN Digital Agency was a game-changer for our business. Their team not only delivered a stunning website but also provided strategic insights that helped us improve our online presence. The results speak for themselves - our conversions have increased by 40% since launch!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    category: 'Web Development'
  },
  {
    id: '3',
    name: 'Emily Chen',
    position: 'Founder',
    company: 'Artisan Collective',
    content: 'As a creative business owner, I needed a website that would showcase my work beautifully. RTN delivered beyond my expectations. Their UI/UX design expertise is exceptional, and they created a site that perfectly captures my brand\'s aesthetic while being incredibly user-friendly.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    category: 'UI/UX Design'
  },
  {
    id: '6',
    name: 'James Taylor',
    position: 'Operations Manager',
    company: 'Streamline Solutions',
    content: 'RTN helped us create a customer portal that has revolutionized how we interact with our clients. The interface is intuitive, and the functionality is exactly what we needed. Their project management was flawless from start to finish.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    category: 'Web Applications'
  }
];

interface FeaturedTestimonialsSectionProps {
  className?: string;
  variant?: 'default' | 'compact' | 'minimal';
  showTitle?: boolean;
}

export default function FeaturedTestimonialsSection({
  className = '',
  variant = 'default',
  showTitle = true,
}: FeaturedTestimonialsSectionProps) {
  const getCarouselVariant = () => {
    switch(variant) {
      case 'compact':
        return 'compact';
      case 'minimal':
        return 'default';
      default:
        return 'default';
    }
  };

  const title = variant === 'minimal' ? undefined : "What Our Clients Say";
  const subtitle = variant === 'minimal' ? undefined : "Hear from some of our satisfied clients about their experience working with us.";

  return (
    <section className={`py-20 ${variant === 'minimal' ? 'py-16' : 'py-24'} relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[30%] bg-secondary/5 rounded-full blur-[100px] opacity-70" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <RevealOnScroll>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
                Trusted by <span className="text-white"><GlitchText text="Industry Leaders" /></span>
              </h2>
              <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
                Don&apos;t just take our word for it - see what our clients have to say about their experiences.
              </p>
            </div>
          </RevealOnScroll>
        )}
        
        <TestimonialsSection 
          title={title}
          subtitle={subtitle}
          testimonials={featuredTestimonials}
          carouselVariant={getCarouselVariant()}
          className="pb-4"
        />
        
        <RevealOnScroll delay={0.2}>
          <div className="flex justify-center mt-8">
            <ZoomOnHover>
              <a 
                href="/testimonials" 
                className="group flex items-center text-primary font-medium hover:text-primary/90 transition-all"
              >
                View All Testimonials
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </ZoomOnHover>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 