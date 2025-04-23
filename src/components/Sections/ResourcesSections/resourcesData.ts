
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
  avatar?: string;
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
  coverImage?: string;
  thumbnailImage?: string;
  content?: string; // Full content or summary
  author: Author;
  readTime?: number; // in minutes
  downloadUrl?: string;
  relatedResourceIds?: string[];
}

// Sample placeholder images from Unsplash
const placeholderImages = {
  tech: 'https://images.unsplash.com/photo-1581089778245-3ce67677f718?q=80&w=800&auto=format&fit=crop',
  healthcare: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=800&auto=format&fit=crop',
  finance: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
  leadership: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
  marketing: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  sustainability: 'https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?q=80&w=800&auto=format&fit=crop',
  generic: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
};

// Sample avatars from UI Faces
const avatarImages = {
  sarah: 'https://randomuser.me/api/portraits/women/44.jpg',
  david: 'https://randomuser.me/api/portraits/men/32.jpg',
  amanda: 'https://randomuser.me/api/portraits/women/68.jpg',
  michael: 'https://randomuser.me/api/portraits/men/75.jpg',
};

// Sample authors
export const authors: Author[] = [
  {
    name: 'Sarah Johnson',
    title: 'Chief Technology Officer',
    bio: 'Sarah has over 15 years of experience in enterprise technology solutions and digital transformation. She specializes in cloud architecture and AI implementation.',
    avatar: avatarImages.sarah,
  },
  {
    name: 'David Chen',
    title: 'Healthcare Innovation Director',
    bio: 'David specializes in digital transformation for healthcare organizations with expertise in medical informatics and patient experience technology.',
    avatar: avatarImages.david,
  },
  {
    name: 'Amanda Rodriguez',
    title: 'Financial Systems Analyst',
    bio: 'Amanda helps companies optimize their financial technology infrastructure and implement secure payment systems and blockchain solutions.',
    avatar: avatarImages.amanda,
  },
  {
    name: 'Michael Stewart',
    title: 'Head of Digital Marketing',
    bio: 'Michael leverages data analytics to drive marketing success, specializing in marketing automation and customer journey optimization.',
    avatar: avatarImages.michael,
  },
];

// Sample content snippet for articles
const sampleContent = `
<p>The digital landscape is constantly evolving, requiring businesses to adapt quickly to remain competitive. This guide provides a framework for successful implementation of digital transformation initiatives.</p>

<h2>Understanding Digital Transformation</h2>
<p>Digital transformation is more than just adopting new technologies—it's about fundamentally changing how your business operates and delivers value to customers. It involves rethinking business models, operational processes, and customer experiences in the context of digital capabilities.</p>

<h2>Key Components of Successful Digital Transformation</h2>
<ul>
  <li><strong>Clear Vision and Strategy:</strong> Define what digital transformation means for your organization and establish measurable goals.</li>
  <li><strong>Leadership Commitment:</strong> Ensure executive buy-in and active championing of transformation initiatives.</li>
  <li><strong>Customer-Centric Approach:</strong> Place customer needs at the center of your transformation efforts.</li>
  <li><strong>Data-Driven Decision Making:</strong> Leverage analytics to guide strategic choices and measure impact.</li>
  <li><strong>Agile Implementation:</strong> Adopt iterative approaches that allow for learning and adjustment.</li>
</ul>

<h2>Technology Enablers</h2>
<p>While technology alone doesn't drive transformation, these key enablers provide the foundation:</p>
<ul>
  <li>Cloud Computing</li>
  <li>Artificial Intelligence and Machine Learning</li>
  <li>Internet of Things (IoT)</li>
  <li>Advanced Analytics</li>
  <li>API-First Architecture</li>
</ul>

<h2>Implementation Roadmap</h2>
<p>Follow these steps to structure your transformation journey:</p>
<ol>
  <li>Assess current digital maturity</li>
  <li>Define vision and set priorities</li>
  <li>Secure leadership alignment</li>
  <li>Develop talent and capabilities</li>
  <li>Implement and iterate</li>
  <li>Scale successful initiatives</li>
</ol>
`;

// Sample resources data
export const resources: Resource[] = [
  {
    id: 'resource-1',
    slug: 'digital-transformation-guide-2023',
    title: 'Digital Transformation Guide 2023',
    type: 'guide',
    categories: ['technology', 'innovation'],
    description: 'A comprehensive guide to implementing digital transformation in your organization, with practical strategies and real-world case studies.',
    publishDate: '2023-03-15',
    featured: true,
    coverImage: placeholderImages.tech,
    thumbnailImage: placeholderImages.tech,
    content: sampleContent,
    author: authors[0],
    readTime: 12,
    relatedResourceIds: ['resource-3', 'resource-7'],
    downloadUrl: '#'
  },
  {
    id: 'resource-2',
    slug: 'healthcare-ai-applications',
    title: 'AI Applications in Modern Healthcare',
    type: 'whitepaper',
    categories: ['healthcare', 'technology'],
    description: 'Exploring how artificial intelligence is revolutionizing patient care and hospital operations. Learn about the ethical considerations and implementation challenges.',
    publishDate: '2023-05-22',
    lastUpdated: '2023-06-10',
    featured: true,
    coverImage: placeholderImages.healthcare,
    thumbnailImage: placeholderImages.healthcare,
    content: sampleContent.replace('Digital Transformation', 'Healthcare AI'),
    author: authors[1],
    readTime: 18,
    relatedResourceIds: ['resource-5'],
    downloadUrl: '#'
  },
  {
    id: 'resource-3',
    slug: 'cloud-migration-strategies',
    title: 'Effective Cloud Migration Strategies',
    type: 'article',
    categories: ['technology', 'operations'],
    description: 'Learn best practices for migrating your infrastructure to the cloud with minimal disruption. This guide covers planning, execution, and post-migration optimization.',
    publishDate: '2023-01-08',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop',
    content: sampleContent.replace('Digital Transformation', 'Cloud Migration'),
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
    description: 'An expert panel discusses emerging trends in financial technology and their implications for banks, fintech startups, and regulatory compliance.',
    publishDate: '2023-02-17',
    featured: true,
    coverImage: placeholderImages.finance,
    thumbnailImage: placeholderImages.finance,
    content: sampleContent.replace('Digital Transformation', 'Financial Technology'),
    author: authors[2],
    readTime: 45,
    relatedResourceIds: ['resource-8'],
    downloadUrl: '#'
  },
  {
    id: 'resource-5',
    slug: 'healthcare-data-security',
    title: 'Securing Healthcare Data in the Digital Age',
    type: 'ebook',
    categories: ['healthcare', 'technology'],
    description: 'A comprehensive approach to protecting sensitive patient information while enabling innovation. Learn about HIPAA compliance, encryption, and threat monitoring.',
    publishDate: '2023-04-03',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    content: sampleContent.replace('Digital Transformation', 'Healthcare Data Security'),
    author: authors[1],
    readTime: 25,
    relatedResourceIds: ['resource-2'],
    downloadUrl: '#'
  },
  {
    id: 'resource-6',
    slug: 'agile-transformation',
    title: 'Agile Transformation: Beyond Software Development',
    type: 'article',
    categories: ['operations', 'leadership'],
    description: 'How agile methodologies can be applied to transform various business functions. This article explores agile principles in marketing, HR, and customer service.',
    publishDate: '2023-02-28',
    featured: false,
    coverImage: placeholderImages.leadership,
    thumbnailImage: placeholderImages.leadership,
    content: sampleContent.replace('Digital Transformation', 'Agile Transformation'),
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
    description: 'Strategies for using data analytics to optimize your digital marketing campaigns. Learn about attribution models, customer segmentation, and predictive analytics.',
    publishDate: '2023-06-12',
    featured: true,
    coverImage: placeholderImages.marketing,
    thumbnailImage: placeholderImages.marketing,
    content: sampleContent.replace('Digital Transformation', 'Marketing Analytics'),
    author: authors[3],
    readTime: 15,
    relatedResourceIds: ['resource-1'],
    downloadUrl: '#'
  },
  {
    id: 'resource-8',
    slug: 'sustainable-technology-practices',
    title: 'Implementing Sustainable Technology Practices',
    type: 'whitepaper',
    categories: ['sustainability', 'technology'],
    description: 'How organizations can reduce their environmental impact through sustainable technology choices. Learn about energy-efficient infrastructure, e-waste management, and green software engineering.',
    publishDate: '2023-05-04',
    featured: false,
    coverImage: placeholderImages.sustainability,
    thumbnailImage: placeholderImages.sustainability,
    content: sampleContent.replace('Digital Transformation', 'Sustainable Technology'),
    author: authors[0],
    readTime: 20,
    relatedResourceIds: ['resource-4'],
    downloadUrl: '#'
  },
  {
    id: 'resource-9',
    slug: 'machine-learning-best-practices',
    title: 'Machine Learning Implementation Best Practices',
    type: 'guide',
    categories: ['technology', 'innovation'],
    description: 'Learn how to effectively implement machine learning in your organization. This guide covers data preparation, model selection, training, and deployment considerations.',
    publishDate: '2023-07-18',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=800&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=800&auto=format&fit=crop',
    content: sampleContent.replace('Digital Transformation', 'Machine Learning'),
    author: authors[0],
    readTime: 14,
    relatedResourceIds: ['resource-1', 'resource-2']
  },
  {
    id: 'resource-10',
    slug: 'blockchain-in-supply-chain',
    title: 'Blockchain Revolution in Supply Chain Management',
    type: 'case-study',
    categories: ['technology', 'operations'],
    description: 'Explore how blockchain technology is transforming supply chain transparency, traceability, and efficiency with real-world implementation examples.',
    publishDate: '2023-08-05',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=800&auto=format&fit=crop',
    thumbnailImage: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=800&auto=format&fit=crop',
    content: sampleContent.replace('Digital Transformation', 'Blockchain Technology'),
    author: authors[2],
    readTime: 16,
    relatedResourceIds: ['resource-3', 'resource-8'],
    downloadUrl: '#'
  }
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

// Format date helper function
export function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
} 