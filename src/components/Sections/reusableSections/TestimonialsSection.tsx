'use client';

import React, { useMemo, memo, useState, useEffect } from 'react';
import Carousel from '@/components/ui/Carousel';
import Badge from '@/components/ui/Badge';
import Divider from '@/components/ui/Divider';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';
import Image from 'next/image';

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
  rating?: number;
  category?: string;
}

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
  carouselVariant?: 'default' | 'compact' | 'grid';
}

type ArrowsStyle = 'default' | 'floating' | 'outside';

// Pre-rendered star icon to avoid repetitive SVG creation
const StarIcon = memo(() => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 text-primary" 
    viewBox="0 0 20 20" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
));
StarIcon.displayName = 'StarIcon';

// Pre-rendered quote icon to avoid repetitive SVG creation
const QuoteIcon = memo(() => (
  <svg 
    className="absolute -top-4 -left-4 h-8 w-8 text-primary/20" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11.192 16.188c0 .52-.164.96-.492 1.32-.329.36-.766.539-1.312.539-.547 0-.99-.18-1.328-.539-.328-.36-.492-.8-.492-1.32 0-.49.164-.906.492-1.25.338-.344.781-.516 1.328-.516.198 0 .388.026.57.078L12 8.25h-3.75a.75.75 0 00-.75.75v1.344c0 .844-.073 1.594-.219 2.25-.146.657-.364 1.193-.656 1.61-.292.415-.615.716-.969.905a5.41 5.41 0 01-1.125.493l.891 1.968c.667-.198 1.3-.536 1.898-1.016.599-.48 1.112-1.047 1.54-1.703.427-.656.752-1.378.976-2.165.224-.788.356-1.607.398-2.457h.211c.62 0 1.141.198 1.563.594.422.395.633.88.633 1.453v2.813c0 .49-.164.906-.492 1.25-.328.344-.766.516-1.313.516-.546 0-.989-.172-1.327-.516-.328-.344-.492-.76-.492-1.25h-1.313zm9.563 0c0 .52-.164.96-.492 1.32-.328.36-.766.539-1.313.539-.546 0-.988-.18-1.327-.539-.328-.36-.492-.8-.492-1.32 0-.49.164-.906.492-1.25.339-.344.781-.516 1.327-.516.198 0 .388.026.57.078L22.5 8.25h-3.75a.75.75 0 00-.75.75v1.344c0 .844-.073 1.594-.219 2.25-.146.657-.364 1.193-.656 1.61-.292.415-.615.716-.969.905-.354.188-.724.362-1.109.493l.891 1.968c.661-.198 1.292-.536 1.891-1.016.599-.48 1.112-1.047 1.539-1.703.428-.656.753-1.378.977-2.165.224-.788.356-1.607.398-2.457h.211c.62 0 1.141.198 1.563.594.422.395.633.88.633 1.453v2.813c0 .49-.164.906-.492 1.25-.328.344-.766.516-1.313.516-.546 0-.989-.172-1.327-.516-.328-.344-.492-.76-.492-1.25h-1.313z" />
  </svg>
));
QuoteIcon.displayName = 'QuoteIcon';

const TestimonialsSection = memo(function TestimonialsSection({
  subtitle = "Don&apos;t just take our word for it - hear from some of our satisfied clients about their experience working with us.",
  testimonials = [
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
      id: '2',
      name: 'Michael Rodriguez',
      position: 'Marketing Director',
      company: 'GrowthVentures',
      content: "I was impressed by RTN's attention to detail and their commitment to understanding our brand. They fixed persistent bugs that had been plaguing our site for months and implemented new features that our customers love. Their team is responsive, professional, and truly skilled.",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/28.jpg',
      category: 'Bug Fixes'
    },
    {
      id: '3',
      name: 'Emily Chen',
      position: 'Founder',
      company: 'Artisan Collective',
      content: "As a creative business owner, I needed a website that would showcase my work beautifully. RTN delivered beyond my expectations. Their UI/UX design expertise is exceptional, and they created a site that perfectly captures my brand's aesthetic while being incredibly user-friendly.",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      category: 'UI/UX Design'
    },
    {
      id: '4',
      name: 'David Wilson',
      position: 'E-commerce Manager',
      company: 'Urban Outfitters',
      content: 'We hired RTN to redesign our e-commerce platform, and the results have been phenomenal. Our site is now faster, more intuitive, and our bounce rate has decreased significantly. Their team was communicative throughout the entire process and delivered on time and within budget.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      category: 'E-commerce'
    },
    {
      id: '5',
      name: 'Amanda Peterson',
      position: 'Digital Marketing Specialist',
      company: 'Bright Ideas Marketing',
      content: 'The website RTN built for us has dramatically increased our lead generation. They took the time to understand our business goals and created a solution that perfectly addresses our needs. Their attention to SEO details was particularly impressive.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      category: 'Web Development'
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
    },
    {
      id: '7',
      name: 'Jennifer Lopez',
      position: 'Small Business Owner',
      company: 'Coastal Creations',
      content: "As a small business, our budget was limited, but RTN worked with us to create a website that looks premium without the premium price tag. They were honest about what we needed and what we didn't, which I really appreciated.",
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      category: 'Web Development'
    },
    {
      id: '8',
      name: 'Robert Chen',
      position: 'IT Director',
      company: 'Global Systems Inc.',
      content: 'The security and performance optimization RTN implemented on our site has made a tangible difference. Our page load times decreased by 67%, and their security audit prevented what could have been a serious data breach.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      category: 'Performance Optimization'
    }
  ],
  className = "",
  carouselVariant = 'default'
}: TestimonialsSectionProps) {
  const [defaultSlidesToShow, setDefaultSlidesToShow] = useState(2);

  // Update slidesToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDefaultSlidesToShow(width < 768 ? 1 : 2);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimized carousel settings for better performance
  const carouselSettings = useMemo(() => {
    switch(carouselVariant) {
      default:
        return {
          slidesToShow: defaultSlidesToShow,
          gap: 30,
          arrowsStyle: 'default' as ArrowsStyle,
          showDots: true,
          progressBar: false,
          autoPlay: false,
          draggable: true,
          slideClassName: 'max-w-[90vw]' // Ensure slides don't overflow on mobile
        };
    }
  }, [carouselVariant, defaultSlidesToShow]);

  // Pre-render testimonial cards for better performance
  const carouselItems = useMemo(() => {
    return testimonials.map((testimonial) => (
      <div key={`testimonial-carousel-${testimonial.id}`} className="px-2">
        <TestimonialCard testimonial={testimonial} />
      </div>
    ));
  }, [testimonials]);

  return (
    <section className={`py-16 md:py-24 bg-background ${className}`} id="testimonials-section">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">What Our
            <span className="relative">
            <span className="text-white mx-3"><GlitchText text="Clients" /></span>
            </span>
            Say
             </h2>
            <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="mt-6" id="testimonials-container">
          <Carousel
            items={carouselItems}
            interval={4000}
            loop={true}
            className="pb-10"
            {...carouselSettings}
          />
        </div>
      </div>
    </section>
  );
});

// Optimized TestimonialCard component
const TestimonialCard = memo(function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  // Pre-computing stars for rating to avoid repeated renders
  const stars = useMemo(() => {
    return Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
      <StarIcon key={`star-${testimonial.id}-${i}`} />
    ));
  }, [testimonial.id, testimonial.rating]);

  return (
    <div className="dark-card rounded-xl p-6 md:p-8 h-full flex flex-col border border-foreground/5">
      <div className="flex mb-3">
        {stars}
      </div>
      
      {testimonial.category && (
        <span className="inline-block text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mb-3">
          {testimonial.category}
        </span>
      )}
      
      <div className="relative mb-4 flex-grow">
        <QuoteIcon />
        <p className="text-foreground/80 z-10 relative line-clamp-3 md:line-clamp-4 text-sm md:text-base">
          {testimonial.content}
        </p>
      </div>
      
      <Divider className="my-3 opacity-20" />
      
      <div className="flex items-center mt-auto">
        {testimonial.image && (
          <div className="flex-shrink-0 mr-3">
            <Image
              src={testimonial.image} 
              alt={`${testimonial.name}`}
              className="h-10 w-10 rounded-full object-cover border border-primary/20"
              width={40}
              height={40}
              loading="eager" 
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjY2NjY2NjNTAiIC8+Cjwvc3ZnPg=="
            />
          </div>
        )}
        <div>
          <h4 className="font-medium text-foreground text-sm md:text-base">{testimonial.name}</h4>
          <p className="text-foreground/60 text-xs md:text-sm">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
});

export default TestimonialsSection; 