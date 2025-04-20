'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';
import { CaseStudy } from './caseStudiesData';
import MagneticGradientCard from '@/components/ui/MagneticGradientCard';
import Link from '@/components/ui/Link';

interface CaseStudyDetailContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyDetailContent({ caseStudy }: CaseStudyDetailContentProps) {
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
              <Badge className="mb-6 bg-primary/70 text-foreground border-primary">{caseStudy.category}</Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
                {caseStudy.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="relative">
                  <span className="text-white"><GlitchText text={caseStudy.title.split(' ').slice(-1)[0]} /></span>
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                </span>
              </h1>
              
              <p className="text-foreground/80 text-xl md:text-2xl mb-8">
                {caseStudy.shortDescription}
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <div className="text-sm text-foreground/60">Client</div>
                  <div className="text-xl font-medium text-white">{caseStudy.client}</div>
                </div>
                <div className="w-px h-12 bg-foreground/10 hidden md:block"></div>
                <div className="flex flex-col items-center">
                  <div className="text-sm text-foreground/60">Completion Date</div>
                  <div className="text-xl font-medium text-white">{caseStudy.date}</div>
                </div>
                <div className="w-px h-12 bg-foreground/10 hidden md:block"></div>
                <div className="flex flex-col items-center">
                  <div className="text-sm text-foreground/60">Industry</div>
                  <div className="text-xl font-medium text-white">{caseStudy.category}</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Case Study Showcase Image */}
      <section className="pb-20 relative">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-20 mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10"></div>
              <Image 
                src={caseStudy.heroImage || caseStudy.thumbnail} 
                alt={caseStudy.title} 
                width={1920} 
                height={1080} 
                className="w-full object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quick Info and Overview Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Quick Info Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <RevealOnScroll>
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-xl p-6 bg-foreground/5 border border-foreground/10">
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-foreground/10 pb-2">Project Highlights</h3>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <div>
                            <span className="text-primary font-semibold">{result.value}</span>
                            <span className="text-foreground/70 text-sm block">{result.title}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="rounded-xl p-6 bg-foreground/5 border border-foreground/10">
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-foreground/10 pb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-sm bg-foreground/10 border border-foreground/20 rounded-full text-foreground/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {caseStudy.cta && (
                    <div className="rounded-xl p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                      <h3 className="text-lg font-bold text-white mb-2">{caseStudy.cta.title}</h3>
                      <p className="text-foreground/80 text-sm mb-4">
                        {caseStudy.cta.description}
                      </p>
                      <Link 
                        href={caseStudy.cta.buttonLink}
                        variant="default"
                        size="sm"
                        className="w-full justify-center"
                      >
                        {caseStudy.cta.buttonText}
                      </Link>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <RevealOnScroll>
                <div className="prose prose-lg prose-invert mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Overview</h2>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {caseStudy.overview}
                  </p>
                </div>
              </RevealOnScroll>

              {/* Challenge, Approach & Solution */}
              <div className="space-y-16">
                {/* Challenge */}
                <RevealOnScroll>
                  <div className="bg-foreground/5 rounded-xl p-8 border border-foreground/10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-red-500/20 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">The Challenge</h2>
                    </div>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>
                </RevealOnScroll>

                {/* Approach */}
                <RevealOnScroll>
                  <div className="bg-foreground/5 rounded-xl p-8 border border-foreground/10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-blue-500/20 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 3a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 000 2h10a1 1 0 100-2H3zm0 4a1 1 0 100 2h10a1 1 0 100-2H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">Our Approach</h2>
                    </div>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {caseStudy.approach}
                    </p>
                  </div>
                </RevealOnScroll>

                {/* Solution */}
                <RevealOnScroll>
                  <div className="bg-foreground/5 rounded-xl p-8 border border-foreground/10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-green-500/20 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">The Solution</h2>
                    </div>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section with Visualization */}
      <section className="py-16 relative bg-foreground/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Measurable Results</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} 
                    className="text-center p-6 rounded-lg bg-gradient-to-br from-foreground/10 to-transparent border border-foreground/10 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{result.value}</div>
                    <div className="text-sm text-foreground/70">{result.title}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Detailed Sections with Visual Improvements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {caseStudy.sections.map((section, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <div className={`mb-20 ${index < caseStudy.sections.length - 1 ? 'pb-20 border-b border-foreground/10' : ''}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">{section.title}</h3>
                      <p className="text-foreground/80 text-lg leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                    {section.image && (
                      <div className={`${index % 2 === 1 ? 'md:order-1' : ''} flex items-center justify-center`}>
                        <div className="rounded-lg overflow-hidden shadow-lg border border-foreground/10 hover:border-primary/30 transition-all duration-300 group">
                          <Image 
                            src={section.image} 
                            alt={section.title} 
                            width={600} 
                            height={400} 
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with Enhanced Design */}
      {caseStudy.testimonial && (
        <section className="py-16 bg-foreground/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="relative p-10 rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/10 backdrop-blur-sm shadow-xl">
                  <div className="absolute top-8 left-8 text-5xl text-primary/20 -z-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl text-foreground/90 italic mb-8 pl-6 leading-relaxed">
                      {caseStudy.testimonial.quote}
                    </p>
                    <div className="flex items-center border-t border-foreground/10 pt-6">
                      {caseStudy.testimonial.avatar && (
                        <div className="mr-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                            <Image 
                              src={caseStudy.testimonial.avatar} 
                              alt={caseStudy.testimonial.author} 
                              width={64} 
                              height={64} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-white text-lg">{caseStudy.testimonial.author}</div>
                        <div className="text-foreground/70">
                          {caseStudy.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      )}

      {/* Next Steps with Enhanced Visual Design */}
      {caseStudy.nextSteps && (
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <MagneticGradientCard className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Next Steps</h2>
                  <p className="text-foreground/80 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                    {caseStudy.nextSteps}
                  </p>
                </MagneticGradientCard>
              </RevealOnScroll>
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 