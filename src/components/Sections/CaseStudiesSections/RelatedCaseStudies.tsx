'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { CaseStudy } from './caseStudiesData';

interface RelatedCaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function RelatedCaseStudies({ caseStudies }: RelatedCaseStudiesProps) {
  const router = useRouter();

  if (!caseStudies.length) return null;

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            More Case Studies
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
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