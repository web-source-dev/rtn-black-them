'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import Link from '@/components/ui/Link';
import { getFeaturedResources } from './resourcesData';

export default function ResourcesHero() {
  const featuredResources = getFeaturedResources(3);
  
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-0 right-1/4 w-[30%] h-[50%] bg-secondary/10 rounded-full blur-[100px] opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <RevealOnScroll>
              <div className="max-w-xl">
                <div className="mb-6 px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium w-fit">
                  Knowledge Center
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/70">
                  Insights & Resources
                </h1>
                
                <p className="text-foreground/80 text-xl mb-8">
                  Explore our collection of articles, guides, whitepapers, and templates to help you stay informed about the latest trends and best practices.
                </p>
                
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link href="#articles" variant="default" size="lg">
                    Articles
                  </Link>
                  <Link href="#guides" variant="highlight" size="lg">
                    Guides
                  </Link>
                  <Link href="#whitepapers" variant="default" size="lg">
                    Whitepapers
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          <div className="lg:w-1/2">
            <RevealOnScroll delay={0.2}>
              <div className="grid grid-cols-1 gap-6">
                {featuredResources.length > 0 && (
                  <motion.div 
                    className="relative overflow-hidden rounded-xl cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.location.href = `/resources/${featuredResources[0].slug}`}
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={featuredResources[0].thumbnailImage || '/images/placeholder.jpg'}
                        alt={featuredResources[0].title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center mb-3">
                        <span className="px-3 py-1 bg-primary/80 text-white text-xs font-medium rounded-full">
                          {featuredResources[0].type}
                        </span>
                        <span className="ml-3 text-foreground/70 text-sm">
                          {featuredResources[0].publishDate}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {featuredResources[0].title}
                      </h3>
                      
                      <p className="text-foreground/80 line-clamp-2">
                        {featuredResources[0].description}
                      </p>
                    </div>
                  </motion.div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredResources.slice(1, 3).map((resource) => (
                    <motion.div 
                      key={resource.id}
                      className="relative overflow-hidden rounded-lg cursor-pointer group bg-foreground/5 border border-foreground/10 hover:border-primary/30 transition-all h-full"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => window.location.href = `/resources/${resource.slug}`}
                    >
                      <div className="p-5">
                        <div className="flex items-center mb-3">
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                            {resource.type}
                          </span>
                          <span className="ml-3 text-foreground/60 text-xs">
                            {resource.publishDate}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                        
                        <p className="text-foreground/70 text-sm line-clamp-2 mb-3">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center">
                          <Image
                            src={resource.author.avatar || '/images/placeholder.jpg'}
                            alt={resource.author.name}
                            width={28}
                            height={28}
                            className="rounded-full"
                          />
                          <span className="text-foreground/70 text-xs ml-2">
                            {resource.author.name}
                          </span>
                          <span className="ml-auto text-foreground/50 text-xs flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {resource.readTime} min read
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        
        <RevealOnScroll delay={0.3}>
          <div className="mt-12 pt-8 border-t border-foreground/10">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <p className="text-foreground/70">Browse by:</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 bg-foreground/10 hover:bg-foreground/20 text-foreground/80 rounded-full text-sm transition-colors">
                    Web Development
                  </button>
                  <button className="px-3 py-1 bg-foreground/10 hover:bg-foreground/20 text-foreground/80 rounded-full text-sm transition-colors">
                    UX Design
                  </button>
                  <button className="px-3 py-1 bg-foreground/10 hover:bg-foreground/20 text-foreground/80 rounded-full text-sm transition-colors">
                    AI
                  </button>
                  <button className="px-3 py-1 bg-foreground/10 hover:bg-foreground/20 text-foreground/80 rounded-full text-sm transition-colors">
                    Cybersecurity
                  </button>
                </div>
              </div>
              
              <Link href="/resources" variant="default" size="sm" className="flex items-center">
                View All Resources
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 