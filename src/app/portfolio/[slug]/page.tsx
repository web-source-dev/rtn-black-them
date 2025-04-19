import React from 'react';
import { Metadata } from 'next';
import ProjectDetailContent from '@/components/Sections/PortfolioSections/ProjectDetailSections/ProjectDetailContent';
import RelatedProjects from '@/components/Sections/PortfolioSections/ProjectDetailSections/RelatedProjects';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import GridPattern from '@/components/ui/GridPattern';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import { portfolioProjects } from '@/components/Sections/PortfolioSections/portfolioData';
import { ProjectJsonLd, BreadcrumbJsonLd } from '@/components/utils/JsonLd';

// Generate static paths for all portfolio projects
export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Define params type for this page
type PageParams = {
  slug: string;
}

// Generate metadata for each portfolio project page
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const project = portfolioProjects.find((project) => project.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  const title = `${project.title} | RTN Global Portfolio`;
  const description = project.shortDescription.length > 160 
    ? `${project.shortDescription.substring(0, 157)}...` 
    : project.shortDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://rtnglobal.co/portfolio/${project.slug}`,
      type: 'article',
      images: [
        {
          url: project.heroImage || '/images/portfolio/default-project.jpg',
          width: 1200,
          height: 630,
          alt: `${project.title} - RTN Global Portfolio`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.heroImage || '/images/portfolio/default-project.jpg'],
    },
    alternates: {
      canonical: `https://rtnglobal.co/portfolio/${project.slug}`,
    },
    keywords: [
      'portfolio',
      'case study',
      project.title.toLowerCase(),
      project.category.toLowerCase(),
      ...project.technologies?.map(tech => tech.toLowerCase()) || [],
      'RTN Global',
    ],
  };
}

export default async function ProjectDetailPage({ params }: { params: PageParams }) {
  const slug = params.slug;
  
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

  // Breadcrumb items for schema
  const breadcrumbItems = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Portfolio', url: 'https://rtnglobal.co/portfolio' },
    { name: currentProject.title, url: `https://rtnglobal.co/portfolio/${slug}` },
  ];

  return (
    <>
      {/* JSON-LD structured data */}
      <ProjectJsonLd project={currentProject} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
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
    </>
  );
} 