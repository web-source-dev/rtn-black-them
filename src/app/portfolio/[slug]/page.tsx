import React from 'react';
import { Metadata } from 'next';
import ProjectDetailContent from '@/components/Sections/PortfolioSections/ProjectDetailSections/ProjectDetailContent';
import RelatedProjects from '@/components/Sections/PortfolioSections/ProjectDetailSections/RelatedProjects';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { getProjectBySlug, getRelatedProjects, portfolioProjects } from '@/components/Sections/PortfolioSections/portfolioData';
import { BreadcrumbJsonLd, ProjectJsonLd } from '@/components/utils/JsonLd';
import { notFound } from 'next/navigation';

// Generate static paths for all projects
export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | RTN Global',
      description: 'The requested project could not be found.',
    };
  }

  // Create enhanced description with more details
  const enhancedDescription = 
    `${project.shortDescription} ${
      project.client ? `Project for ${project.client}, completed ${project.completionDate}.` : ''
    } Technologies used: ${project.technologies.join(', ')}.`;
  
  return {
    title: `${project.title} | RTN Global Portfolio`,
    description: enhancedDescription,
    keywords: [
      project.title,
      project.category,
      'RTN Global',
      'web development',
      'design',
      'case study',
      'project',
      ...project.technologies
    ],
    alternates: {
      canonical: `https://rtnglobal.co/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | RTN Global Portfolio`,
      description: enhancedDescription,
      url: `https://rtnglobal.co/portfolio/${project.slug}`,
      siteName: 'RTN Global',
      images: [
        {
          url: project.heroImage || project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | RTN Global Portfolio`,
      description: project.shortDescription,
      images: [project.heroImage || project.thumbnail],
    },
  };
}

// Main component - using a standard approach
function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  // If project not found, return 404
  if (!project) {
    notFound();
  }
  
  // Get related projects (excluding current project)
  const relatedProjects = getRelatedProjects(project.id);
  
  // Create breadcrumb path
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Portfolio', url: 'https://rtnglobal.co/portfolio' },
    { name: project.title, url: `https://rtnglobal.co/portfolio/${project.slug}` },
  ];
  
  return (
    <>
      {/* JSON-LD structured data */}
      <ProjectJsonLd project={project} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      
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
          
          {/* Project content */}
          <div className="relative z-10">
            <ProjectDetailContent project={project} />
            
            {/* Related Projects section */}
            {relatedProjects.length > 0 && (
              <RelatedProjects projects={relatedProjects} />
            )}
            
            {/* CTA Section */}
            <CTASection 
              title="Ready to build your next project?"
              subtitle="Let's discuss how we can help you achieve your business goals with our expertise."
              primaryButtonText="Start a Project"
              secondaryButtonText="Contact Us"
              primaryButtonLink="/contact"
              secondaryButtonLink="/contact"
              variant="gradient"
            />
          </div>
        </main>
      </TransitionWrapper>
    </>
  );
}

// Export as default
export default ProjectDetail;
