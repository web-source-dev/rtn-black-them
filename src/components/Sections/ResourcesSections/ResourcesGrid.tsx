'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { ResourceCard } from './ResourceCard';
import { 
  Resource, 
  ResourceType, 
  ResourceCategory, 
  getResourcesByType, 
  getResourcesByCategory, 
  resources as allResources
} from './resourcesData';

interface ResourcesGridProps {
  initialResources?: Resource[];
  showFilters?: boolean;
  title?: string;
  description?: string;
}

export default function ResourcesGrid({ 
  initialResources,
  title = "All Resources", 
  description = "Browse our latest articles, guides, and resources to help you stay informed."
}: ResourcesGridProps) {
  const [resources, setResources] = useState<Resource[]>(initialResources || allResources);
  const [activeTypeFilter, setActiveTypeFilter] = useState<ResourceType | 'all'>('all');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<ResourceCategory | 'all'>('all');
  const [isLoading, setIsLoading] = useState(false);
  
  // Get unique resource types from the available resources

  // Apply filters when they change
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading state for smoother transitions
    const timer = setTimeout(() => {
      let filtered = initialResources || allResources;
      
      // Apply type filter
      if (activeTypeFilter !== 'all') {
        filtered = getResourcesByType(activeTypeFilter);
      }
      
      // Apply category filter
      if (activeCategoryFilter !== 'all') {
        if (activeTypeFilter === 'all') {
          filtered = getResourcesByCategory(activeCategoryFilter);
        } else {
          // If both filters are active, find the intersection
          filtered = filtered.filter(r => r.categories.includes(activeCategoryFilter));
        }
      }
      
      setResources(filtered);
      setIsLoading(false);
    }, 400);
    
    return () => clearTimeout(timer);
  }, [activeTypeFilter, activeCategoryFilter, initialResources]);


  // Filter counter

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 w-[30%] h-[30%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[25%] h-[25%] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-2/3 left-1/4 w-[20%] h-[20%] bg-foreground/5 rounded-full blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-white to-white/80">{title}</h2>
            <p className="text-foreground/80 text-lg">{description}</p>
          </div>
        </RevealOnScroll>
        
        {isLoading ? (
          <div className="min-h-[300px] flex justify-center items-center">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-foreground/10 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-t-4 border-primary animate-spin rounded-full"></div>
            </div>
          </div>
        ) : resources.length === 0 ? (
          <RevealOnScroll>
            <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-10 text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-foreground/10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No resources found</h3>
              <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                We couldn&apos;t find any resources matching your current filter selections. Try adjusting your filters to see more content.
              </p>
              <button
                onClick={() => {
                  setActiveTypeFilter('all');
                  setActiveCategoryFilter('all');
                }}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset Filters
              </button>
            </div>
          </RevealOnScroll>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${activeTypeFilter}-${activeCategoryFilter}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {resources.map((resource, index) => (
                  <RevealOnScroll key={resource.id} delay={index * 0.05}>
                    <ResourceCard resource={resource} variant="default" />
                  </RevealOnScroll>
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
} 