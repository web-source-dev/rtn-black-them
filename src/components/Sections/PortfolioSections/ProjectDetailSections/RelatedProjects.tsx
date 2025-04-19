'use client';

import React from 'react';
import { PortfolioProject } from '../portfolioData';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import HoverCard from '@/components/ui/HoverCard';
interface RelatedProjectsProps {
  projects: PortfolioProject[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects.length) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[30%] h-[40%] bg-primary/5 rounded-full blur-[150px] opacity-70" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[30%] bg-secondary/5 rounded-full blur-[120px] opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
              Related Projects
            </h2>
            <p className="text-lg mt-4 text-foreground/70 max-w-3xl mx-auto">
              Explore more of our work similar to this project
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 0.1}>
                <HoverCard 
                    title={project.title}
                    description={project.shortDescription}
                    image={project.thumbnail || 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'}
                    link={project.slug}
                    className="w-full h-full"
                />
                    
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 