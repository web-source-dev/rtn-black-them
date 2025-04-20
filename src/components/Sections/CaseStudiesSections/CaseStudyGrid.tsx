'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { CaseStudy } from './caseStudiesData';

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  showFilters?: boolean;
}

export default function CaseStudyGrid({ caseStudies, showFilters = true }: CaseStudyGridProps) {
  const router = useRouter();
  const [filter, setFilter] = useState<string>('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(caseStudies.map(study => study.category))];
  
  // Filter case studies based on selected category
  const filteredCaseStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Category filters */}
        {showFilters && (
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-foreground/10 text-foreground/80 hover:bg-foreground/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </RevealOnScroll>
        )}

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredCaseStudies.map((study, index) => (
            <RevealOnScroll key={study.id} delay={index * 0.1}>
              <div 
                className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 bg-foreground/5 border border-foreground/10"
                onClick={() => router.push(`/case-studies/${study.slug}`)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={study.thumbnail}
                    alt={study.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
                  <Badge className="absolute top-4 left-4 bg-primary/80 text-white border-primary/40">
                    {study.category}
                  </Badge>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {study.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">{study.client}</span>
                    <span className="text-sm text-foreground/60">{study.date}</span>
                  </div>
                  
                  {/* Results preview */}
                  <div className="mt-4 pt-4 border-t border-foreground/10">
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="text-center px-2 py-1 rounded bg-foreground/5">
                          <p className="text-primary font-bold">{result.value}</p>
                          <p className="text-xs text-foreground/60">{result.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 