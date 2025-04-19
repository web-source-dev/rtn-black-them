'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import ZoomOnHover from '@/components/animations/ZoomOnHover';
import { portfolioProjects } from './portfolioData';
import GlitchText from '@/components/ui/GlitchText';
export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(portfolioProjects.map(project => project.category))];
    return cats;
  }, []);
  
  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioProjects;
    }
    return portfolioProjects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[150px] opacity-70" />
        <div className="absolute bottom-[20%] left-[15%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Projects</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
              Explore Our
              <span className="relative text-white ml-3">
                <GlitchText text="Portfolio" />
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
              </span>
            </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              Discover our featured projects showcasing our expertise in creating impactful digital experiences.
            </p>
          </div>
        </RevealOnScroll>
        
        {/* Category Filters */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-foreground/10 text-foreground/80 hover:bg-foreground/15'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealOnScroll>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof portfolioProjects[0] }) {
  return (
    <Link href={`/portfolio/${project.slug}`}>
      <ZoomOnHover scale={1.03}>
        <div className="dark-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
          {/* Project Thumbnail */}
          <div className="relative w-full h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50 z-10"></div>
            <div className="w-full h-full relative">
              {/* Using Next.js Image component */}
              <Image 
                src={project.thumbnail || '/images/placeholder.jpg'} 
                alt={project.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
              />
            </div>
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          
          {/* Project Info */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-foreground/70 mb-4 flex-grow">{project.shortDescription}</p>
            
            {/* Technologies */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-foreground/10 rounded-full text-foreground/70">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-foreground/10 rounded-full text-foreground/70">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
            
            {/* View Project Button */}
            <div className="flex items-center justify-between mt-auto">
              <span className="text-primary text-sm font-medium">View Project</span>
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </ZoomOnHover>
    </Link>
  );
} 