'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { getFeaturedResources, formatDate } from './resourcesData';

export default function ResourcesHero() {
  const featuredResources = getFeaturedResources(3);
  
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-0 right-1/4 w-[30%] h-[50%] bg-secondary/10 rounded-full blur-[100px] opacity-60" />
        <div className="absolute top-1/3 right-0 w-[20%] h-[30%] bg-foreground/5 rounded-full blur-[80px]" />
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_1px,transparent_1px),linear-gradient(to_bottom,#8080800A_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-xl">
                <div className="mb-6 px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium w-fit">
                  Knowledge Center
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/70">
                  Insights & Resources
                </h1>
                
                <p className="text-foreground/80 text-xl mb-8 leading-relaxed">
                  Explore our collection of articles, guides, whitepapers, and templates to help you stay informed about the latest trends and best practices.
                </p>
                                
                <div className="mt-12 pt-8 border-t border-foreground/10 hidden md:block">
                  <div className="flex flex-col">
                    <p className="text-foreground/60 text-sm mb-3">Popular Topics:</p>
                    <div className="inline-flex flex-wrap gap-2 items-center">
                      {['Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Digital Marketing'].map((topic, index) => (
                        <motion.span
                          key={topic}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                          className="px-3 py-1 bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 text-foreground/80 rounded-full text-sm transition-colors cursor-pointer"
                        >
                          {topic}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                    <div className="relative aspect-[16/9] border border-foreground/10 rounded-xl overflow-hidden shadow-xl shadow-black/20">
                      <Image
                        src={featuredResources[0].thumbnailImage || 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'}
                        alt={featuredResources[0].title}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center mb-3">
                        <span className="px-3 py-1 bg-primary/70 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center">
                          {typeIconMap[featuredResources[0].type]}
                          <span className="ml-1.5 capitalize">{featuredResources[0].type}</span>
                        </span>
                        <span className="ml-3 text-foreground/70 text-sm">
                          {formatDate(featuredResources[0].publishDate)}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {featuredResources[0].title}
                      </h3>
                      
                      <p className="text-foreground/80 line-clamp-2 mb-4">
                        {featuredResources[0].description}
                      </p>
                      
                      <div className="flex items-center">
                        <span className="text-primary font-medium text-sm flex items-center group-hover:underline">
                          Read article
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredResources.slice(1, 3).map((resource) => (
                    <motion.div 
                      key={resource.id}
                      className="relative overflow-hidden rounded-lg cursor-pointer group bg-foreground/5 border border-foreground/10 hover:border-primary/30 transition-all h-full backdrop-blur-sm"
                      whileHover={{ scale: 1.03, y: -3 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => window.location.href = `/resources/${resource.slug}`}
                    >
                      <div className="p-5">
                        <div className="flex items-center mb-3">
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full flex items-center">
                            {typeIconMap[resource.type]}
                            <span className="ml-1 capitalize">{resource.type}</span>
                          </span>
                          <span className="ml-3 text-foreground/60 text-xs">
                            {formatDate(resource.publishDate)}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                        
                        <p className="text-foreground/70 text-sm line-clamp-2 mb-3">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-background/50 border border-foreground/10">
                            {resource.author.avatar ? (
                              <Image
                                src={resource.author.avatar}
                                alt={resource.author.name}
                                width={28}
                                height={28}
                                className="rounded-full object-cover"
                              />
                            ) : (
                              <span className="flex h-full w-full items-center justify-center text-xs font-medium text-foreground/70">
                                {resource.author.name.charAt(0)}
                              </span>
                            )}
                          </div>
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
      </div>
    </section>
  );
}

// Type icons map for consistent icon display
const typeIconMap = {
  'article': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  'whitepaper': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'guide': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  'video': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  'webinar': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  'case-study': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  'ebook': (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}; 