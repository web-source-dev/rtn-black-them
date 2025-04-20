'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';
import MagneticGradientCard from '@/components/ui/MagneticGradientCard';
import { JobPosting } from './careersData';
import { FiMapPin, FiBriefcase, FiDollarSign, FiCalendar } from 'react-icons/fi';

interface JobDetailContentProps {
  job: JobPosting;
}

export default function JobDetailContent({ job }: JobDetailContentProps) {
  const router = useRouter();
  
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
              <Badge className="mb-6 bg-primary/70 text-foreground border-primary">{job.department}</Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-foreground/90">
                <span className="text-white"><GlitchText text={job.title} /></span>
              </h1>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8 text-foreground/80">
                <div className="flex items-center">
                  <FiMapPin className="mr-2" />
                  <span>{job.location}</span>
                  <Badge className="ml-2 bg-foreground/10 text-foreground/80 border-foreground/20">
                    {job.locationType}
                  </Badge>
                </div>
                <div className="flex items-center">
                  <FiBriefcase className="mr-2" />
                  <span>{job.employmentType}</span>
                </div>
                {job.salary && (
                  <div className="flex items-center">
                    <FiDollarSign className="mr-2" />
                    <span>{job.salary}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  <span>Posted: {job.postedDate}</span>
                </div>
              </div>
              
              <p className="text-foreground/80 text-xl md:text-2xl mb-8">
                {job.shortDescription}
              </p>

              <button 
                onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                Apply for this Position
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <RevealOnScroll>
                <div className="sticky top-24 space-y-8">
                  <div className="rounded-xl p-6 bg-foreground/5 border border-foreground/10">
                    <h3 className="text-lg font-bold text-white mb-4 border-b border-foreground/10 pb-2">Job Overview</h3>
                    <ul className="space-y-4">
                      <li>
                        <span className="text-foreground/60 text-sm block mb-1">Department</span>
                        <span className="text-white">{job.department}</span>
                      </li>
                      <li>
                        <span className="text-foreground/60 text-sm block mb-1">Location</span>
                        <span className="text-white">{job.location} ({job.locationType})</span>
                      </li>
                      <li>
                        <span className="text-foreground/60 text-sm block mb-1">Employment Type</span>
                        <span className="text-white">{job.employmentType}</span>
                      </li>
                      {job.salary && (
                        <li>
                          <span className="text-foreground/60 text-sm block mb-1">Salary Range</span>
                          <span className="text-white">{job.salary}</span>
                        </li>
                      )}
                      <li>
                        <span className="text-foreground/60 text-sm block mb-1">Posted Date</span>
                        <span className="text-white">{job.postedDate}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-xl p-6 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                    <h3 className="text-lg font-bold text-white mb-4">Share This Job</h3>
                    <p className="text-foreground/80 text-sm mb-4">
                      Know someone who would be perfect for this role? Share this job posting with them.
                    </p>
                    <div className="flex gap-3">
                      <button className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                        </svg>
                      </button>
                      <button className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <RevealOnScroll>
                <div className="prose prose-lg prose-invert mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Job Description</h2>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </RevealOnScroll>

              {/* Key Responsibilities */}
              <RevealOnScroll>
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Key Responsibilities</h2>
                  <ul className="space-y-4">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-foreground/80">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Requirements */}
              <RevealOnScroll>
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Requirements</h2>
                  <ul className="space-y-4">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-foreground/80">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>

              {/* Preferred Skills */}
              {job.preferredSkills && job.preferredSkills.length > 0 && (
                <RevealOnScroll>
                  <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Preferred Skills</h2>
                    <ul className="space-y-4">
                      {job.preferredSkills.map((skill, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-secondary mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-foreground/80">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              )}

              {/* Benefits */}
              <RevealOnScroll>
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Benefits & Perks</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start bg-foreground/5 border border-foreground/10 rounded-lg p-4">
                        <span className="text-primary mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Application Process */}
              <div id="apply-now">
                <RevealOnScroll>
                  <MagneticGradientCard className="p-8 md:p-12 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">How to Apply</h2>
                    <p className="text-foreground/80 mb-8">
                      {job.applicationProcess}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => router.push('/contact?subject=Application%20for%20' + encodeURIComponent(job.title))}
                        className="px-8 py-3 bg-white text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
                      >
                        Apply Now
                      </button>
                      <button 
                        onClick={() => router.push('/careers')}
                        className="px-8 py-3 bg-foreground/10 text-white rounded-full font-medium hover:bg-foreground/20 transition-colors"
                      >
                        View All Positions
                      </button>
                    </div>
                  </MagneticGradientCard>
                </RevealOnScroll>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 