import { BlogPost } from '@/data/blogData';
import { jobPostings } from '@/components/Sections/CareersSections/careersData';
import { caseStudies } from '@/components/Sections/CaseStudiesSections/caseStudiesData';
import { faqData } from '@/components/Sections/FaqSections/faqData';
import { industries } from '@/components/Sections/IndustriesSections/industriesData';
import { portfolioProjects } from '@/components/Sections/PortfolioSections/portfolioData';
import { resources } from '@/components/Sections/ResourcesSections/resourcesData';
import { ServiceDetail, servicesData } from '@/components/Sections/ServicesSections/EachServiceSections/servicesData';

export type SearchResultType = 
  | 'blog'
  | 'career'
  | 'case-study'
  | 'faq'
  | 'industry'
  | 'portfolio'
  | 'resource'
  | 'service';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  date?: string;
  score: number; // Relevance score for better sorting
}

export interface SearchSuggestion {
  id: string;
  type: SearchResultType;
  title: string;
  url: string;
  score: number;
}

// Update the getServices function to return actual services data
const getServices = (): ServiceDetail[] => {
  return servicesData;
};

// Helper function to calculate relevance score based on where and how the match occurred
const calculateScore = (
  query: string, 
  title: string = '', 
  description: string = '', 
  content: string = '', 
  tags: string[] = []
): number => {
  const normalizedQuery = query.toLowerCase();
  let score = 0;
  
  // Exact title match is the highest value
  if (title.toLowerCase() === normalizedQuery) {
    score += 100;
  }
  // Title starts with query
  else if (title.toLowerCase().startsWith(normalizedQuery)) {
    score += 80;
  }
  // Title contains query as a whole word
  else if (new RegExp(`\\b${escapeRegExp(normalizedQuery)}\\b`, 'i').test(title)) {
    score += 70;
  }
  // Title contains query
  else if (title.toLowerCase().includes(normalizedQuery)) {
    score += 60;
  }

  // Tags match (if available)
  if (tags.some(tag => tag.toLowerCase() === normalizedQuery)) {
    score += 50;
  } else if (tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) {
    score += 30;
  }

  // Description match
  if (description.toLowerCase().includes(normalizedQuery)) {
    score += 40;
  }

  // Content match (if available)
  if (content && content.toLowerCase().includes(normalizedQuery)) {
    score += 20;
  }

  // Handle multiple word queries - check if all words are present
  const queryWords = normalizedQuery.split(/\s+/).filter(word => word.length > 1);
  if (queryWords.length > 1) {
    const titleLower = title.toLowerCase();
    const descriptionLower = description.toLowerCase();
    const contentLower = content.toLowerCase();
    
    // Count how many words match
    let matchCount = 0;
    for (const word of queryWords) {
      if (titleLower.includes(word) || descriptionLower.includes(word) || contentLower.includes(word)) {
        matchCount++;
      }
    }
    
    // Add score based on percentage of words that matched
    const matchPercentage = matchCount / queryWords.length;
    score += Math.round(matchPercentage * 30);
  }

  return score;
};

// Helper function to escape special regex characters
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const searchBlogs = (query: string): SearchResult[] => {
  // In a real implementation, this would be:
  // const blogPosts = getBlogPosts();
  // For now, we'll use an empty array as we don't have access to the full blogData implementation
  const blogPosts: BlogPost[] = [];
  
  return blogPosts
    .map(post => {
      const score = calculateScore(
        query,
        post.title,
        post.excerpt,
        post.content,
        post.tags.map(tag => tag.name)
      );

      return {
        id: post.id,
        type: 'blog' as SearchResultType,
        title: post.title,
        description: post.excerpt,
        url: `/blog/${post.slug}`,
        thumbnail: post.coverImage,
        date: post.date,
        score: score
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
};

const searchCareers = (query: string): SearchResult[] => {
  return jobPostings
    .map(job => {
      const score = calculateScore(
        query,
        job.title,
        job.shortDescription,
        job.description + ' ' + job.responsibilities.join(' ') + ' ' + job.requirements.join(' '),
        [job.department, job.location, job.employmentType]
      );

      return {
        id: job.id,
        type: 'career' as SearchResultType,
        title: job.title,
        description: job.shortDescription,
        url: `/careers/${job.slug}`,
        date: job.postedDate,
        score: score
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
};

const searchCaseStudies = (query: string): SearchResult[] => {
  return caseStudies
    .map(study => {
      const content = `${study.overview} ${study.challenge} ${study.approach} ${study.solution}`;
      
      const score = calculateScore(
        query,
        study.title,
        study.shortDescription,
        content,
        [study.category, study.client, ...study.technologies]
      );

      return {
        id: study.id,
        type: 'case-study' as SearchResultType,
        title: study.title,
        description: study.shortDescription,
        url: `/case-studies/${study.slug}`,
        thumbnail: study.thumbnail,
        date: study.date,
        score: score
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
};

const searchFaqs = (query: string): SearchResult[] => {
  const results: SearchResult[] = [];
  
  faqData.forEach(category => {
    category.items.forEach(item => {
      const score = calculateScore(
        query,
        item.title,
        item.content,
        '',
        [category.name]
      );

      if (score > 0) {
        results.push({
          id: `${category.id}-${item.title}`,
          type: 'faq' as SearchResultType,
          title: item.title,
          description: item.content.substring(0, 150) + (item.content.length > 150 ? '...' : ''),
          url: `/faq#${category.id}`,
          score: score
        });
      }
    });
  });
  
  return results.sort((a, b) => b.score - a.score);
};

const searchIndustries = (query: string): SearchResult[] => {
  return industries
    .map(industry => {
      const content = industry.description + ' ' +
        industry.challenges.join(' ') + ' ' +
        industry.solutions.join(' ');
      
      const score = calculateScore(
        query,
        industry.title,
        industry.shortDescription,
        content,
        []
      );

      return {
        id: industry.id,
        type: 'industry' as SearchResultType,
        title: industry.title,
        description: industry.shortDescription,
        url: `/industries/${industry.slug}`,
        thumbnail: industry.thumbnail,
        score: score
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
};

const searchPortfolio = (query: string): SearchResult[] => {
  return portfolioProjects
    .map(project => {
      const additionalContent = project.challenges ? 
        project.challenges.map(c => `${c.challenge} ${c.solution}`).join(' ') : '';
      const content = project.overview + ' ' + additionalContent;
      
      const score = calculateScore(
        query,
        project.title,
        project.shortDescription,
        content,
        [project.category, project.client, ...(project.technologies || [])]
      );

      return {
        id: project.id,
        type: 'portfolio' as SearchResultType,
        title: project.title,
        description: project.shortDescription,
        url: `/portfolio/${project.slug}`,
        thumbnail: project.thumbnail,
        date: project.completionDate,
        score: score
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
};

const searchResources = (query: string): SearchResult[] => {
  return resources
    .map(resource => {
      const score = calculateScore(
        query,
        resource.title,
        resource.description,
        resource.content || '',
        [...resource.categories, resource.type]
      );

      return {
        id: resource.id,
        type: 'resource' as SearchResultType,
        title: resource.title,
        description: resource.description,
        url: `/resources/${resource.slug}`,
        thumbnail: resource.thumbnailImage,
        date: resource.publishDate,
        score: score
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
};

const searchServices = (query: string): SearchResult[] => {
  const services = getServices();
  
  // Debug log to verify services are loaded
  console.log(`Searching ${services.length} services for: "${query}"`);
  
  return services
    .map(service => {
      const content = service.fullDescription + ' ' +
        service.benefits.map(b => `${b.title} ${b.description}`).join(' ') + ' ' +
        service.features.join(' ');
      
      const score = calculateScore(
        query,
        service.title,
        service.shortDescription,
        content,
        service.technologies || []
      );

      return {
        id: service.id,
        type: 'service' as SearchResultType,
        title: service.title,
        description: service.shortDescription,
        url: `/services/${service.id}`,
        thumbnail: service.heroImage || '/images/default-service.jpg', // Add default image fallback
        score: score
      };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
};

export const performSearch = (query: string): SearchResult[] => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const trimmedQuery = query.trim();
  
  // Combine all search results
  const combinedResults = [
    ...searchBlogs(trimmedQuery),
    ...searchCareers(trimmedQuery),
    ...searchCaseStudies(trimmedQuery),
    ...searchFaqs(trimmedQuery),
    ...searchIndustries(trimmedQuery),
    ...searchPortfolio(trimmedQuery),
    ...searchResources(trimmedQuery),
    ...searchServices(trimmedQuery)
  ];
  
  // Sort all results by score
  return combinedResults.sort((a, b) => b.score - a.score);
};

export const getSearchSuggestions = (query: string, limit: number = 5): SearchSuggestion[] => {
  const results = performSearch(query);
  
  return results
    .slice(0, limit)
    .map(result => ({
      id: result.id,
      type: result.type,
      title: result.title,
      url: result.url,
      score: result.score
    }));
};

export const getResultsGroupedByType = (results: SearchResult[]): Record<SearchResultType, SearchResult[]> => {
  const grouped: Record<SearchResultType, SearchResult[]> = {
    'blog': [],
    'career': [],
    'case-study': [],
    'faq': [],
    'industry': [],
    'portfolio': [],
    'resource': [],
    'service': []
  };
  
  results.forEach(result => {
    grouped[result.type].push(result);
  });
  
  return grouped;
};

export const getTypeLabel = (type: SearchResultType): string => {
  switch (type) {
    case 'blog':
      return 'Blog';
    case 'career':
      return 'Careers';
    case 'case-study':
      return 'Case Studies';
    case 'faq':
      return 'FAQs';
    case 'industry':
      return 'Industries';
    case 'portfolio':
      return 'Portfolio';
    case 'resource':
      return 'Resources';
    case 'service':
      return 'Services';
    default:
      return '';
  }
}; 