'use client';

import React from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import Marquee from '@/components/ui/Marquee';
import GridPattern from '@/components/ui/GridPattern';
import HoverCard from '@/components/ui/HoverCard';
import GlitchText from '@/components/ui/GlitchText';
import { portfolioProjects } from '@/components/Sections/PortfolioSections/portfolioData';

export default function PortfolioPreviewSection() {
  // Get first 4 portfolio projects for preview
  const previewProjects = portfolioProjects.slice(0, 4);

  const tags = [
    'Web Development', 
    'UI/UX Design', 
    'E-Commerce', 
    'Web Applications', 
    'CMS', 
    'Performance Optimization', 
    'Responsive Design', 
    'Accessibility'
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-background/95 via-background to-background/95">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px]" />
        <GridPattern 
          dotColor="rgba(138, 92, 245, 0.15)" 
          size={30} 
          dotSize={1} 
          backgroundOpacity={0.05} 
          className="absolute inset-0"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">Featured
            <span className="relative">
            <span className="text-white ml-2"><GlitchText text="Projects" /></span>
            <span className="absolute -bottom-1 left-2 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
            </span>
             </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              Take a look at some of our recent work that showcases our expertise and creative approach.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-12">
          <div className="lg:col-span-8">
            <RevealOnScroll>
              <HoverCard 
                title={previewProjects[0].title}
                description={`${previewProjects[0].category} - ${previewProjects[0].shortDescription}`}
                image={previewProjects[0].thumbnail}
                link={`/portfolio/${previewProjects[0].slug}`}
                className="h-full"
                imageClassName="aspect-video"
              />
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-4">
            <RevealOnScroll delay={0.1}>
              <HoverCard 
                title={previewProjects[1].title}
                description={`${previewProjects[1].category} - ${previewProjects[1].shortDescription}`}
                image={previewProjects[1].thumbnail}
                link={`/portfolio/${previewProjects[1].slug}`}
                className="h-full"
                imageClassName="aspect-video"
              />
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-4">
            <RevealOnScroll delay={0.2}>
              <HoverCard 
                title={previewProjects[2].title}
                description={`${previewProjects[2].category} - ${previewProjects[2].shortDescription}`}
                image={previewProjects[2].thumbnail}
                link={`/portfolio/${previewProjects[2].slug}`}
                className="h-full"
                imageClassName="aspect-video"
              />
            </RevealOnScroll>
          </div>
          <div className="lg:col-span-8">
            <RevealOnScroll delay={0.3}>
              <HoverCard 
                title={previewProjects[3].title}
                description={`${previewProjects[3].category} - ${previewProjects[3].shortDescription}`}
                image={previewProjects[3].thumbnail}
                link={`/portfolio/${previewProjects[3].slug}`}
                className="h-full"
                imageClassName="aspect-video"
              />
            </RevealOnScroll>
          </div>
        </div>
        
        <RevealOnScroll delay={0.4}>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-lg group">
              <span className="relative">
                View All Projects
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary/40 group-hover:bg-primary transition-colors"></span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
        
        <div className="mt-20">
          <RevealOnScroll>
            <Marquee
              speed={40}
              pauseOnHover={true}
              direction="right"
              className="py-4"
            >
              {tags.map((tag, index) => (
                <div 
                  key={`tag-${index}`} 
                  className="mx-4 py-2 px-6 dark-card rounded-full text-foreground/80 hover:text-primary transition-colors duration-300 border-border/30"
                >
                  {tag}
                </div>
              ))}
            </Marquee>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
} 