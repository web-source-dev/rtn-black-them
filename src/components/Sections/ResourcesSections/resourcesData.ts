import { StaticImageData } from 'next/image';
;

export type ResourceType = 
  | 'article'
  | 'whitepaper'
  | 'guide'
  | 'video'
  | 'webinar'
  | 'case-study'
  | 'ebook';

export type ResourceCategory =
  | 'technology'
  | 'healthcare'
  | 'finance'
  | 'leadership'
  | 'innovation'
  | 'sustainability'
  | 'marketing'
  | 'operations';

export interface Author {
  name: string;
  title: string;
  avatar?: StaticImageData;
  bio?: string;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  type: ResourceType;
  categories: ResourceCategory[];
  description: string;
  publishDate: string; // ISO date string
  lastUpdated?: string; // ISO date string
  featured: boolean;
  coverImage?: StaticImageData;
  thumbnailImage?: StaticImageData;
  content?: string; // Full content or summary
  author: Author;
  readTime?: number; // in minutes
  downloadUrl?: string;
  relatedResourceIds?: string[];
}

// Sample authors
export const authors: Author[] = [
  {
    name: 'Sarah Johnson',
    title: 'Chief Technology Officer',
    bio: 'Sarah has over 15 years of experience in enterprise technology solutions.',
  },
  {
    name: 'David Chen',
    title: 'Healthcare Innovation Director',
    bio: 'David specializes in digital transformation for healthcare organizations.',
  },
  {
    name: 'Amanda Rodriguez',
    title: 'Financial Systems Analyst',
    bio: 'Amanda helps companies optimize their financial technology infrastructure.',
  },
  {
    name: 'Michael Stewart',
    title: 'Head of Digital Marketing',
    bio: 'Michael leverages data analytics to drive marketing success.',
  },
];

// Sample resources data
export const resources: Resource[] = [
  {
    id: 'resource-1',
    slug: 'digital-transformation-guide-2023',
    title: 'Digital Transformation Guide 2023',
    type: 'guide',
    categories: ['technology', 'innovation'],
    description: 'A comprehensive guide to implementing digital transformation in your organization.',
    publishDate: '2023-03-15',
    featured: true,
    author: authors[0],
    readTime: 12,
    relatedResourceIds: ['resource-3', 'resource-7']
  },
  {
    id: 'resource-2',
    slug: 'healthcare-ai-applications',
    title: 'AI Applications in Modern Healthcare',
    type: 'whitepaper',
    categories: ['healthcare', 'technology'],
    description: 'Exploring how artificial intelligence is revolutionizing patient care and hospital operations.',
    publishDate: '2023-05-22',
    lastUpdated: '2023-06-10',
    featured: true,
    author: authors[1],
    readTime: 18,
    relatedResourceIds: ['resource-5']
  },
  {
    id: 'resource-3',
    slug: 'cloud-migration-strategies',
    title: 'Effective Cloud Migration Strategies',
    type: 'article',
    categories: ['technology', 'operations'],
    description: 'Learn best practices for migrating your infrastructure to the cloud with minimal disruption.',
    publishDate: '2023-01-08',
    featured: false,
    author: authors[0],
    readTime: 7,
    relatedResourceIds: ['resource-1', 'resource-6']
  },
  {
    id: 'resource-4',
    slug: 'financial-technology-trends-2023',
    title: 'Financial Technology Trends 2023',
    type: 'webinar',
    categories: ['finance', 'technology'],
    description: 'An expert panel discusses emerging trends in financial technology and their implications.',
    publishDate: '2023-02-17',
    featured: true,
    author: authors[2],
    readTime: 45,
    relatedResourceIds: ['resource-8']
  },
  {
    id: 'resource-5',
    slug: 'healthcare-data-security',
    title: 'Securing Healthcare Data in the Digital Age',
    type: 'ebook',
    categories: ['healthcare', 'technology'],
    description: 'A comprehensive approach to protecting sensitive patient information while enabling innovation.',
    publishDate: '2023-04-03',
    featured: false,
    author: authors[1],
    readTime: 25,
    relatedResourceIds: ['resource-2']
  },
  {
    id: 'resource-6',
    slug: 'agile-transformation',
    title: 'Agile Transformation: Beyond Software Development',
    type: 'article',
    categories: ['operations', 'leadership'],
    description: 'How agile methodologies can be applied to transform various business functions.',
    publishDate: '2023-02-28',
    featured: false,
    author: authors[0],
    readTime: 9,
    relatedResourceIds: ['resource-3']
  },
  {
    id: 'resource-7',
    slug: 'digital-marketing-analytics',
    title: 'Leveraging Analytics for Digital Marketing Success',
    type: 'video',
    categories: ['marketing', 'technology'],
    description: 'Strategies for using data analytics to optimize your digital marketing campaigns.',
    publishDate: '2023-06-12',
    featured: true,
    author: authors[3],
    readTime: 15,
    relatedResourceIds: ['resource-1']
  },
  {
    id: 'resource-8',
    slug: 'sustainable-technology-practices',
    title: 'Implementing Sustainable Technology Practices',
    type: 'whitepaper',
    categories: ['sustainability', 'technology'],
    description: 'How organizations can reduce their environmental impact through sustainable technology choices.',
    publishDate: '2023-05-04',
    featured: false,
    author: authors[0],
    readTime: 20,
    relatedResourceIds: ['resource-4']
  },
];

// Helper functions
export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(resource => resource.slug === slug);
}

export function getFeaturedResources(count?: number): Resource[] {
  const featured = resources.filter(resource => resource.featured);
  return count ? featured.slice(0, count) : featured;
}

export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return resources.filter(resource => resource.categories.includes(category));
}

export function getResourcesByType(type: ResourceType): Resource[] {
  return resources.filter(resource => resource.type === type);
}

export function getRelatedResources(resource: Resource): Resource[] {
  if (!resource.relatedResourceIds || resource.relatedResourceIds.length === 0) {
    return [];
  }
  
  return resources.filter(r => resource.relatedResourceIds?.includes(r.id));
}

export function getLatestResources(count: number = 3): Resource[] {
  return [...resources]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
} 