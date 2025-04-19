'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProjectDetailContent from '@/components/Sections/PortfolioSections/ProjectDetailSections/ProjectDetailContent';
import RelatedProjects from '@/components/Sections/PortfolioSections/ProjectDetailSections/RelatedProjects';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import GridPattern from '@/components/ui/GridPattern';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import { portfolioProjects } from '@/components/Sections/PortfolioSections/portfolioData';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug?.toString() || '';
  
  // Find the current project data
  const currentProject = portfolioProjects.find(project => project.slug === slug);
  
  // Get related projects (same category, excluding current)
  const relatedProjects = currentProject
    ? portfolioProjects
        .filter(project => project.category === currentProject.category && project.slug !== slug)
        .slice(0, 3)
    : [];
  
  // If no related projects of the same category, get any 3 different projects
  const otherProjects = relatedProjects.length === 0 && currentProject
    ? portfolioProjects
        .filter(project => project.slug !== slug)
        .slice(0, 3)
    : [];
  
  const projectsToShow = relatedProjects.length > 0 ? relatedProjects : otherProjects;
  
  if (!currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-foreground/80">Project not found</p>
      </div>
    );
  }

  return (
    <TransitionWrapper>
      <main className="min-h-screen bg-background relative">
        {/* Background grid pattern */}
        <GridPattern 
          dotColor="rgba(255,255,255,0.3)" 
          size={40} 
          dotSize={1} 
          backgroundOpacity={0.03} 
          className="fixed inset-0 z-0 pointer-events-none"
        />
        
        {/* Main content */}
        <div className="relative z-10">
          <ProjectDetailContent project={currentProject} />
          {projectsToShow.length > 0 && <RelatedProjects projects={projectsToShow} />}
          <CTASection 
            title="Ready to start your own project?"
            subtitle="Let's collaborate to create something extraordinary that drives results."
            primaryButtonText="Start a Project"
            secondaryButtonText="Contact Us"
            primaryButtonLink="/contact"
            secondaryButtonLink="/contact"
            variant="gradient"
          />
        </div>
      </main>
    </TransitionWrapper>
  );
} 