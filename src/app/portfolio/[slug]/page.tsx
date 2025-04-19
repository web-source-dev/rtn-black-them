import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetailContent from '@/components/Sections/PortfolioSections/ProjectDetailSections/ProjectDetailContent';
import RelatedProjects from '@/components/Sections/PortfolioSections/ProjectDetailSections/RelatedProjects';
import CTASection from '@/components/Sections/reusableSections/CTASection';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import GridPattern from '@/components/ui/GridPattern';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import { getProjectBySlug, getRelatedProjects } from '@/components/Sections/PortfolioSections/portfolioData';

// Helper function to get project by slug
async function getProjectData(slug: string) {
  return getProjectBySlug(slug);
}

// Helper function to get related projects
async function getRelatedProjectsData(projectId: string, limit: number = 2) {
  return getRelatedProjects(projectId, limit);
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const project = await getProjectData(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }

  return {
    title: `${project.title} | RTN Global Portfolio`,
    description: project.shortDescription,
    keywords: [
      project.title,
      project.category,
      'case study',
      'project details',
      'RTN Global portfolio',
      ...project.technologies
    ],
    alternates: {
      canonical: `https://rtnglobal.co/portfolio/${slug}`,
    },
    openGraph: {
      title: `${project.title} | RTN Global Case Study`,
      description: project.shortDescription,
      url: `https://rtnglobal.co/portfolio/${slug}`,
      siteName: 'RTN Global',
      images: [
        {
          url: project.heroImage || project.thumbnail,
          width: 1200,
          height: 630,
          alt: `${project.title} - RTN Global Case Study`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = await getProjectData(slug);
  
  if (!project) {
    notFound();
  }
  
  const relatedProjects = await getRelatedProjectsData(project.id, 2);
  
  // Breadcrumb for the project page
  const projectBreadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Portfolio', url: 'https://rtnglobal.co/portfolio' },
    { name: project.title, url: `https://rtnglobal.co/portfolio/${slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={projectBreadcrumbs} />
      
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
            <ProjectDetailContent project={project} />
            <RelatedProjects projects={relatedProjects} />
            <CTASection 
              title="Ready to start your own project?"
              subtitle="Let's collaborate to create something exceptional that delivers results."
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