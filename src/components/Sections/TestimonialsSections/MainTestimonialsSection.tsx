'use client';

import React from 'react';
import TestimonialsSection from '@/components/Sections/reusableSections/TestimonialsSection';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import Divider from '@/components/ui/Divider';
import GlitchText from '@/components/ui/GlitchText';
import Badge from '@/components/ui/Badge';
import ZoomOnHover from '@/components/animations/ZoomOnHover';
import Image from 'next/image';
import Link from 'next/link';
// Extended testimonial data with additional fields for the page
const extendedTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc.',
    content: 'Working with RTN Digital Agency was a game-changer for our business. Their team not only delivered a stunning website but also provided strategic insights that helped us improve our online presence. The results speak for themselves - our conversions have increased by 40% since launch!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    category: 'Web Development',
    projectDetails: {
      title: 'E-commerce Platform Redesign',
      duration: '3 months',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '/portfolio/techstart-redesign'
    }
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    position: 'Marketing Director',
    company: 'GrowthVentures',
    content: 'I was impressed by RTN\'s attention to detail and their commitment to understanding our brand. They fixed persistent bugs that had been plaguing our site for months and implemented new features that our customers love. Their team is responsive, professional, and truly skilled.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/28.jpg',
    category: 'Bug Fixes',
    projectDetails: {
      title: 'Website Optimization & Bug Fixing',
      duration: '6 weeks',
      technologies: ['WordPress', 'PHP', 'JavaScript'],
      link: '/portfolio/growthventures-fixes'
    }
  },
  {
    id: '3',
    name: 'Emily Chen',
    position: 'Founder',
    company: 'Artisan Collective',
    content: 'As a creative business owner, I needed a website that would showcase my work beautifully. RTN delivered beyond my expectations. Their UI/UX design expertise is exceptional, and they created a site that perfectly captures my brand\'s aesthetic while being incredibly user-friendly.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    category: 'UI/UX Design',
    projectDetails: {
      title: 'Portfolio Website Design',
      duration: '2 months',
      technologies: ['Figma', 'Next.js', 'TailwindCSS'],
      link: '/portfolio/artisan-collective'
    }
  },
  {
    id: '4',
    name: 'David Wilson',
    position: 'E-commerce Manager',
    company: 'Urban Outfitters',
    content: 'We hired RTN to redesign our e-commerce platform, and the results have been phenomenal. Our site is now faster, more intuitive, and our bounce rate has decreased significantly. Their team was communicative throughout the entire process and delivered on time and within budget.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    category: 'E-commerce',
    projectDetails: {
      title: 'E-commerce Platform Optimization',
      duration: '4 months',
      technologies: ['Shopify', 'Custom JS', 'API Integration'],
      link: '/portfolio/urban-ecommerce'
    }
  },
  {
    id: '5',
    name: 'Amanda Peterson',
    position: 'Digital Marketing Specialist',
    company: 'Bright Ideas Marketing',
    content: 'The website RTN built for us has dramatically increased our lead generation. They took the time to understand our business goals and created a solution that perfectly addresses our needs. Their attention to SEO details was particularly impressive.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    category: 'Web Development',
    projectDetails: {
      title: 'Marketing Agency Website',
      duration: '10 weeks',
      technologies: ['WordPress', 'SEO Optimization', 'Custom Theme'],
      link: '/portfolio/bright-ideas'
    }
  },
  {
    id: '6',
    name: 'James Taylor',
    position: 'Operations Manager',
    company: 'Streamline Solutions',
    content: 'RTN helped us create a customer portal that has revolutionized how we interact with our clients. The interface is intuitive, and the functionality is exactly what we needed. Their project management was flawless from start to finish.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    category: 'Web Applications',
    projectDetails: {
      title: 'Custom Client Portal',
      duration: '5 months',
      technologies: ['React', 'Firebase', 'Node.js'],
      link: '/portfolio/streamline-portal'
    }
  },
  {
    id: '7',
    name: 'Jennifer Lopez',
    position: 'Small Business Owner',
    company: 'Coastal Creations',
    content: "As a small business, our budget was limited, but RTN worked with us to create a website that looks premium without the premium price tag. They were honest about what we needed and what we didn't, which I really appreciated.",
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    category: 'Web Development',
    projectDetails: {
      title: 'Small Business Website',
      duration: '6 weeks',
      technologies: ['Wix', 'Custom Design', 'SEO Setup'],
      link: '/portfolio/coastal-creations'
    }
  },
  {
    id: '8',
    name: 'Robert Chen',
    position: 'IT Director',
    company: 'Global Systems Inc.',
    content: 'The security and performance optimization RTN implemented on our site has made a tangible difference. Our page load times decreased by 67%, and their security audit prevented what could have been a serious data breach.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    category: 'Performance Optimization',
    projectDetails: {
      title: 'Enterprise Security & Performance',
      duration: '3 months',
      technologies: ['Security Audit', 'CDN Implementation', 'Server Optimization'],
      link: '/portfolio/global-systems'
    }
  }
];

export default function MainTestimonialsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] right-[10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[150px] opacity-70" />
          <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[50%] bg-secondary/5 rounded-full blur-[150px] opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Client Success Stories</Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
                Our Clients <span className="text-white"><GlitchText text="Testimonials" /></span>
              </h2>
              <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
                Don&apos;t just take our word for it - see what our clients have to say about their experiences working with our team.
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <ZoomOnHover>
                <div className="dark-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 border border-foreground/5">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-foreground/80">Happy Clients</div>
                </div>
              </ZoomOnHover>
              
              <ZoomOnHover>
                <div className="dark-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 border border-foreground/5">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-foreground/80">Satisfaction Rate</div>
                </div>
              </ZoomOnHover>
              
              <ZoomOnHover>
                <div className="dark-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 border border-foreground/5">
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <div className="text-foreground/80">Return Clients</div>
                </div>
              </ZoomOnHover>
              
              <ZoomOnHover>
                <div className="dark-card rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 border border-foreground/5">
                  <div className="text-4xl font-bold text-primary mb-2">12+</div>
                  <div className="text-foreground/80">Years Experience</div>
                </div>
              </ZoomOnHover>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      <Divider className="opacity-50" />
      
      {/* Main Testimonials Section */}
      <TestimonialsSection 
        title="What Our Clients Say"
        subtitle="Real feedback from real clients who have worked with us on various projects."
        testimonials={extendedTestimonials}
        carouselVariant="default"
        className="pb-16"
      />
      
      <Divider className="opacity-50" />
      
      {/* Video Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background/95 via-background to-background/95 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-70" />
          <div className="absolute bottom-[10%] right-[5%] w-[25%] h-[30%] bg-secondary/5 rounded-full blur-[100px] opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Video Testimonials</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">Hear Directly From Our <span className="text-white"><GlitchText text="Clients" /></span></h2>
              <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
                Watch these video testimonials to get a more personal insight into the experiences of working with our team.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealOnScroll delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-foreground/10 shadow-xl shadow-black/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black/40 z-10 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="TechStart video testimonial thumbnail"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">TechStart Inc. Success Story</h3>
                <p className="text-foreground/70">Sarah Johnson, CEO of TechStart shares how our collaboration led to a 40% increase in conversions.</p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-foreground/10 shadow-xl shadow-black/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black/40 z-10 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Artisan Collective video testimonial thumbnail"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Artisan Collective Case Study</h3>
                <p className="text-foreground/70">Emily Chen discusses how our UI/UX design expertise transformed her brand&apos;s digital presence.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      <Divider className="opacity-50" />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background/90 via-background to-background/90 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-primary/5 to-transparent opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
                Ready to Be Our Next <span className="text-white"><GlitchText text="Success Story" /></span>?
              </h2>
              <p className="text-foreground/80 text-xl max-w-3xl mx-auto mb-8">
                Contact us today to discuss your project and see how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ZoomOnHover>
                  <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
                    Get in Touch
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </ZoomOnHover>
                <ZoomOnHover>
                  <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-foreground/5 text-foreground font-medium transition-all hover:bg-foreground/10">
                    View Our Work
                  </Link>
                </ZoomOnHover>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
} 