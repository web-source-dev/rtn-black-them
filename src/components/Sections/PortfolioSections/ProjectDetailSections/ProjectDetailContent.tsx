'use client';

import React from 'react';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { PortfolioProject } from '../portfolioData';
import Image from 'next/image';
import GlitchText from '@/components/ui/GlitchText';
interface ProjectDetailContentProps {
  project: PortfolioProject;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-primary/5 rounded-full blur-[150px] opacity-80" />
          <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[120px] opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/70 text-foreground border-primary">{project.category}</Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
  {project.title.split(' ').slice(0, -1).join(' ')}{' '}
  <span className="relative">
    <span className="text-white"><GlitchText text={project.title.split(' ').slice(-1)[0]} /></span>
    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
  </span>
</h1>
              
              <p className="text-foreground/80 text-xl md:text-2xl mb-8">
                {project.shortDescription}
              </p>

              {project.client && (
                <div className="flex flex-col items-center justify-center gap-2 mt-8">
                  <div className="text-sm text-foreground/60">Client</div>
                  <div className="text-xl font-medium text-white">{project.client}</div>
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Project Showcase Image */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-20 mx-auto max-w-5xl">
             <Image src={project.heroImage || project.thumbnail || 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'} alt={project.title} width={1000} height={1000} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Project Overview */}
            <RevealOnScroll>
              <div className="prose prose-lg prose-invert mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Project Overview</h2>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  {project.overview}
                </p>
              </div>
            </RevealOnScroll>

            {/* Project Images */}
            {project.images && project.images.length > 0 && (
              <RevealOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                  {project.images.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                      <Image src={image} alt={project.title} width={1000} height={1000} />
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            {/* Technologies */}
            <RevealOnScroll>
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-full text-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <RevealOnScroll>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Challenges</h2>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-foreground/90">{challenge.challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Solutions</h2>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-foreground/90">{challenge.solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            </div>

            {/* Results */}
            <RevealOnScroll>
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <div key={index} className="dark-card rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-foreground/70 mb-2">{result}</div>
                      <div className="text-primary text-sm">Results</div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Testimonial */}
            {project.testimonial && (
              <RevealOnScroll>
                <div className="mb-16">
                  <div className="dark-card rounded-xl p-8 relative">
                    <div className="absolute top-6 left-6 text-5xl text-primary/20 -z-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <p className="text-xl text-foreground/90 italic mb-6">
                        {project.testimonial.quote}
                      </p>
                      <div className="flex items-center">
                        <div>
                          <div className="font-bold text-white">{project.testimonial.author}</div>
                          <div className="text-foreground/70 text-sm">
                            {project.testimonial.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* Project Link */}
            {project.projectLink && (
              <RevealOnScroll>
                <div className="text-center mb-16">
                  <a 
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-glow transition-all"
                  >
                    Visit Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </RevealOnScroll>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 