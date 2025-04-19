'use client';

import React, { useState } from 'react';
import Carousel from '@/components/ui/Carousel';
import Badge from '@/components/ui/Badge';
import Divider from '@/components/ui/Divider';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import ZoomOnHover from '@/components/animations/ZoomOnHover';
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

export default function TestimonialsSection({
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isGridView, setIsGridView] = useState(carouselVariant === 'grid');
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialPerPage = 9;

  const categories = ['All', ...new Set(testimonials.map(t => t.category).filter(Boolean) as string[])];
  
  const filteredTestimonials = activeCategory && activeCategory !== 'All'
    ? testimonials.filter(t => t.category === activeCategory)
    : testimonials;

  // Calculate pagination
  const indexOfLastTestimonial = currentPage * testimonialPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialPerPage;
  const currentTestimonials = filteredTestimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  const totalPages = Math.ceil(filteredTestimonials.length / testimonialPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of testimonials section with smooth behavior
    document.getElementById('testimonials-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getCarouselSettings = () => {
    switch(carouselVariant) {
      case 'compact':
        return {
          slidesToShow: 1,
          arrowsStyle: 'floating' as ArrowsStyle,
          progressBar: true,
          showDots: false,
          fadeMode: true,
          gap: 20,
          autoPlay: true
        };
      case 'grid':
        return {
          slidesToShow: 3,
          gap: 24,
          arrowsStyle: 'outside' as ArrowsStyle,
          showDots: true,
          progressBar: false,
          autoPlay: false
        };
      default:
        return {
          slidesToShow: 2,
          gap: 30,
          arrowsStyle: 'default' as ArrowsStyle,
          showDots: true,
          progressBar: false,
          autoPlay: true,
          draggable: true
        };
    }
  };

  return (
    <section className={`py-28 bg-gradient-to-b from-background/95 via-background to-background/95 relative ${className}`} id="testimonials-section">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[30%] bg-secondary/5 rounded-full blur-[100px] opacity-70" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">What Our
            <span className="relative">
            <span className="text-white mx-3"><GlitchText text="Clients" /></span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
            </span>
            Say
             </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {categories.length > 1 && (
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-10 opacity-0" role="tablist" aria-label="Filter testimonials by category">
              {categories.map((category) => (
                <button
                  key={`category-${category}`}
                  onClick={() => {
                    setActiveCategory(category === 'All' ? null : (category || null));
                    setCurrentPage(1); // Reset to first page when changing category
                  }}
                  className={`py-2 px-4 rounded-full transition-all ${
                    (category === 'All' && !activeCategory) || activeCategory === category
                      ? 'bg-primary text-white shadow-md shadow-primary/30 scale-105'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:scale-105'
                  }`}
                  role="tab"
                  aria-selected={(category === 'All' && !activeCategory) || activeCategory === category}
                  aria-controls="testimonials-grid"
                >
                  {category}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        )}

        {testimonials.length > 4 && (
          <RevealOnScroll delay={0.2}>
            <div className="flex justify-center space-x-2 mb-8">
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 rounded-l-md transition-all ${!isGridView ? 'bg-primary text-white shadow-md' : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'}`}
                aria-label="Carousel view"
                aria-pressed={!isGridView}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M8 5a1 1 0 011 1v1h2V6a1 1 0 012 0v1h1a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h1V6a1 1 0 011-1z" />
                </svg>
              </button>
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 rounded-r-md transition-all ${isGridView ? 'bg-primary text-white shadow-md' : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'}`}
                aria-label="Grid view"
                aria-pressed={isGridView}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </RevealOnScroll>
        )}
        
        <div className="mt-6" id="testimonials-grid">
          {isGridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
              {currentTestimonials.map((testimonial, index) => (
                <RevealOnScroll key={`testimonial-grid-${testimonial.id}`} delay={index * 0.05}>
                  <TestimonialCard testimonial={testimonial} />
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            <Carousel
              items={filteredTestimonials.map((testimonial) => (
                <div key={`testimonial-carousel-${testimonial.id}`} className="px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
              interval={6000}
              loop={true}
              className="pb-14"
              {...getCarouselSettings()}
            />
          )}
        </div>

        {isGridView && filteredTestimonials.length > testimonialPerPage && (
          <div className="flex justify-center mt-10">
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {/* Previous page button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === 1 ? 'bg-foreground/5 text-foreground/40 cursor-not-allowed' : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                }`}
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Page numbers */}
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                
                // Show first page, last page, current page, and pages around current page
                if (
                  pageNumber === 1 || 
                  pageNumber === totalPages || 
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={`page-${pageNumber}`}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`w-10 h-10 rounded-full transition-all ${
                        pageNumber === currentPage ? 'bg-primary text-white shadow-md scale-110' : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:scale-105'
                      }`}
                      aria-label={`Page ${pageNumber}`}
                      aria-current={pageNumber === currentPage ? 'page' : undefined}
                    >
                      {pageNumber}
                    </button>
                  );
                }
                
                // Show ellipsis for gaps
                if (
                  (pageNumber === 2 && currentPage > 3) || 
                  (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return (
                    <span key={`ellipsis-${pageNumber}`} className="px-1 text-foreground/50">...</span>
                  );
                }
                
                return null;
              })}
              
              {/* Next page button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === totalPages ? 'bg-foreground/5 text-foreground/40 cursor-not-allowed' : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                }`}
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <ZoomOnHover scale={1.03}>
      <div className="dark-card rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5">
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
            <svg 
              key={`star-${testimonial.id}-${i}`}
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-primary" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="sr-only">{testimonial.rating} out of 5 stars</span>
        </div>
        
        {testimonial.category && (
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mb-4">
            {testimonial.category}
          </span>
        )}
        
        <div className="relative mb-6 flex-grow">
          <svg 
            className="absolute -top-4 -left-4 h-8 w-8 text-primary/20" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M11.192 16.188c0 .52-.164.96-.492 1.32-.329.36-.766.539-1.312.539-.547 0-.99-.18-1.328-.539-.328-.36-.492-.8-.492-1.32 0-.49.164-.906.492-1.25.338-.344.781-.516 1.328-.516.198 0 .388.026.57.078L12 8.25h-3.75a.75.75 0 00-.75.75v1.344c0 .844-.073 1.594-.219 2.25-.146.657-.364 1.193-.656 1.61-.292.415-.615.716-.969.905a5.41 5.41 0 01-1.125.493l.891 1.968c.667-.198 1.3-.536 1.898-1.016.599-.48 1.112-1.047 1.54-1.703.427-.656.752-1.378.976-2.165.224-.788.356-1.607.398-2.457h.211c.62 0 1.141.198 1.563.594.422.395.633.88.633 1.453v2.813c0 .49-.164.906-.492 1.25-.328.344-.766.516-1.313.516-.546 0-.989-.172-1.327-.516-.328-.344-.492-.76-.492-1.25h-1.313zm9.563 0c0 .52-.164.96-.492 1.32-.328.36-.766.539-1.313.539-.546 0-.988-.18-1.327-.539-.328-.36-.492-.8-.492-1.32 0-.49.164-.906.492-1.25.339-.344.781-.516 1.327-.516.198 0 .388.026.57.078L22.5 8.25h-3.75a.75.75 0 00-.75.75v1.344c0 .844-.073 1.594-.219 2.25-.146.657-.364 1.193-.656 1.61-.292.415-.615.716-.969.905-.354.188-.724.362-1.109.493l.891 1.968c.661-.198 1.292-.536 1.891-1.016.599-.48 1.112-1.047 1.539-1.703.428-.656.753-1.378.977-2.165.224-.788.356-1.607.398-2.457h.211c.62 0 1.141.198 1.563.594.422.395.633.88.633 1.453v2.813c0 .49-.164.906-.492 1.25-.328.344-.766.516-1.313.516-.546 0-.989-.172-1.327-.516-.328-.344-.492-.76-.492-1.25h-1.313z" />
          </svg>
          <p className="text-foreground/80 z-10 relative line-clamp-4 md:line-clamp-6">{testimonial.content}</p>
        </div>
        
        <Divider className="my-4 opacity-30" />
        
        <div className="flex items-center mt-auto">
          {testimonial.image && (
            <div className="flex-shrink-0 mr-4">
              <Image
                src={testimonial.image} 
                alt={`${testimonial.name}`}
                className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
                width={48}
                height={48}
              />
            </div>
          )}
          <div>
            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
            <p className="text-foreground/60 text-sm">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </ZoomOnHover>
  );
} 