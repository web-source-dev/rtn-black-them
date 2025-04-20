'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { JobPosting } from './careersData';
import { FiArrowRight, FiMapPin, FiBriefcase } from 'react-icons/fi';

interface RelatedJobPostingsProps {
  jobs: JobPosting[];
}

export default function RelatedJobPostings({ jobs }: RelatedJobPostingsProps) {
  const router = useRouter();

  if (!jobs.length) return null;

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            More Open Positions
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <RevealOnScroll key={job.id} delay={index * 0.1}>
              <div 
                className="bg-foreground/[0.03] backdrop-blur-sm border border-foreground/10 rounded-xl p-6 cursor-pointer hover:border-primary/30 transition-all duration-300"
                onClick={() => router.push(`/careers/${job.slug}`)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-4">
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        <span>{job.location}</span>
                        <Badge className="ml-2 bg-foreground/10 text-foreground/80 border-foreground/20">
                          {job.locationType}
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        <FiBriefcase className="mr-1" />
                        <span>{job.employmentType}</span>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 line-clamp-2">
                      {job.shortDescription}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-primary font-medium whitespace-nowrap">
                    <span>View Details</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 