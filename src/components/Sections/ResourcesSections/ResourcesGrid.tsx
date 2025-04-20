'use client';

import React, { useState, useEffect } from 'react';
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
  showFilters = true,
  title = "All Resources", 
  description = "Browse our latest articles, guides, and resources to help you stay informed."
}: ResourcesGridProps) {
  const [resources, setResources] = useState<Resource[]>(initialResources || allResources);
  const [activeTypeFilter, setActiveTypeFilter] = useState<ResourceType | 'all'>('all');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<ResourceCategory | 'all'>('all');
  
  // Get unique resource types from the available resources
  const types: ('all' | ResourceType)[] = ['all', ...new Set(allResources.map(resource => resource.type))];
  
  // Get unique categories from the available resources
  const categories: ('all' | ResourceCategory)[] = ['all', ...new Set(allResources.flatMap(resource => resource.categories))];

  // Apply filters when they change
  useEffect(() => {
    let filtered = initialResources || allResources;
    
    // Apply type filter
    if (activeTypeFilter !== 'all') {
      filtered = getResourcesByType(activeTypeFilter);
    }
    
    // Apply category filter
    if (activeCategoryFilter !== 'all') {
      // If type filter is active, filter from that subset, otherwise filter from all
      filtered = getResourcesByCategory(activeCategoryFilter);
      
      // If both filters are active, we need to find the intersection
      if (activeTypeFilter !== 'all') {
        filtered = filtered.filter(r => r.type === activeTypeFilter);
      }
    }
    
    setResources(filtered);
  }, [activeTypeFilter, activeCategoryFilter, initialResources]);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
            <p className="text-foreground/80 text-lg">{description}</p>
          </div>
        </RevealOnScroll>
        
        {showFilters && (
          <RevealOnScroll delay={0.1}>
            <div className="mb-12">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Resource Type Filters */}
                <div className="flex flex-col">
                  <h3 className="text-sm uppercase text-foreground/60 mb-3">Resource Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveTypeFilter(type)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeTypeFilter === type
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-foreground/10 text-foreground/80 hover:bg-foreground/20'
                        }`}
                      >
                        {type === 'all' ? 'All Types' : type}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-col">
                  <h3 className="text-sm uppercase text-foreground/60 mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategoryFilter(category)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                          activeCategoryFilter === category
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'bg-foreground/10 text-foreground/80 hover:bg-foreground/20'
                        }`}
                      >
                        {category === 'all' ? 'All Categories' : category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        )}
        
        {resources.length === 0 ? (
          <RevealOnScroll>
            <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">No resources found</h3>
              <p className="text-foreground/70">
                Try changing your filter selections to find resources.
              </p>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <RevealOnScroll key={resource.id} delay={index * 0.05}>
                <ResourceCard resource={resource} variant="default" />
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 