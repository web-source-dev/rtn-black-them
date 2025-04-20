'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { getActiveJobPostings } from './careersData';
import { FiArrowRight, FiMapPin, FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function CareersListing() {
  const router = useRouter();
  const jobs = getActiveJobPostings();
  const [filter, setFilter] = useState<string>('All');
  
  // Get unique departments
  const departments = ['All', ...new Set(jobs.map(job => job.department))];
  
  // Filter jobs based on selected department
  const filteredJobs = filter === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === filter);
    
  // Group jobs by department for display
  const groupedJobs = filteredJobs.reduce((acc, job) => {
    if (!acc[job.department]) {
      acc[job.department] = [];
    }
    acc[job.department].push(job);
    return acc;
  }, {} as Record<string, typeof jobs>);

  return (
    <section id="open-positions" className="py-24 relative">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Open Positions</h2>
            <p className="text-foreground/80 text-lg">
              Join our team of talented professionals dedicated to creating exceptional digital experiences. Browse our current openings below.
            </p>
          </div>
        </RevealOnScroll>

        {/* Department filters */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((department, index) => (
              <button
                key={index}
                onClick={() => setFilter(department)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === department
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-foreground/10 text-foreground/80 hover:bg-foreground/20'
                }`}
              >
                {department}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Jobs Listing */}
        <div className="space-y-12">
          {Object.entries(groupedJobs).map(([department, departmentJobs], departmentIndex) => (
            <RevealOnScroll key={department} delay={departmentIndex * 0.1}>
              <div>
                {filter === 'All' && (
                  <h3 className="text-2xl font-bold text-white mb-6 border-b border-foreground/10 pb-2">
                    {department}
                  </h3>
                )}
                
                <div className="grid grid-cols-1 gap-4">
                  {departmentJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      className="bg-foreground/[0.03] backdrop-blur-sm border border-foreground/10 rounded-xl p-6 cursor-pointer hover:border-primary/30 transition-all duration-300"
                      onClick={() => router.push(`/careers/${job.slug}`)}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                            {job.title}
                          </h4>
                          
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
                            <div className="flex items-center">
                              <FiCalendar className="mr-1" />
                              <span>Posted: {job.postedDate}</span>
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
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        {filteredJobs.length === 0 && (
          <RevealOnScroll>
            <div className="bg-foreground/[0.03] backdrop-blur-sm border border-foreground/10 rounded-xl p-8 text-center my-12">
              <h4 className="text-xl font-bold text-white mb-2">No positions found</h4>
              <p className="text-foreground/80">
                We don&apos;t have any open positions in this department at the moment. Please check back later or browse other departments.
              </p>
            </div>
          </RevealOnScroll>
        )}
        
        {/* Don't see a fit section */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-20 p-8 rounded-xl bg-foreground/5 border border-foreground/10 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Don&apos;t see a role that matches your skills?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to RTN Global.
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Submit Your Resume
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 