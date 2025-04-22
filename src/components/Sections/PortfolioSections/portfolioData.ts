export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  completionDate: string;
  thumbnail: string;
  heroImage: string;
  shortDescription: string;
  overview: string;
  images: string[];
  technologies: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  projectLink?: string;
  [key: string]: unknown;
}

const link = process.env.NEXT_PUBLIC_FRONTEND_URL;

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    slug: 'modern-e-commerce-platform',
    title: 'Modern E-Commerce Platform',
    category: 'Web Development',
    client: 'StyleHaven',
    completionDate: 'March 2023',
    thumbnail: '/images/ecom-2.png',
    heroImage: '/images/ecom-2.png',
    shortDescription: 'A fully responsive e-commerce platform with advanced filtering, search, and secure payment processing.',
    overview: 'StyleHaven needed a modern e-commerce solution to showcase their fashion products and improve their online sales. We developed a custom platform with a focus on user experience, performance, and conversion optimization.',
    images: [
      '/images/ecommerce-1.png',
      '/images/ecom-3.png',
      '/images/ecom-4.jpg',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'Sanity CMS',
      'Vercel',
    ],
    challenges: [
      {
        challenge: 'Implementing a scalable product catalog with complex filtering options.',
        solution: 'We developed a custom filtering system with client-side caching and server-side pagination to handle large product catalogs efficiently.'
      },
      {
        challenge: 'Ensuring fast page loads despite high-quality product imagery.',
        solution: 'We implemented responsive images, lazy loading, and next-gen image formats with automatic optimization to balance quality and performance.'
      }
    ],
    results: [
      '42% increase in conversion rate',
      '65% improvement in page load speed',
      '30% reduction in cart abandonment',
      '50% increase in mobile sales'
    ],
    testimonial: {
      quote: 'The new platform transformed our online business. The intuitive design and seamless checkout process have significantly increased our sales and customer satisfaction.',
      author: 'Sarah Johnson',
      position: 'E-Commerce Director, StyleHaven'
    },
    projectLink: `${link}/portfolio/modern-e-commerce-platform`
  },
  {
    id: '2',
    slug: 'finance-dashboard-app',
    title: 'Finance Dashboard Application',
    category: 'Web Application',
    client: 'FinTech Solutions',
    completionDate: 'November 2022',
    thumbnail: '/images/finance-2.png',
    heroImage: '/images/finance-2.png',
    shortDescription: 'A comprehensive financial dashboard with real-time data visualization and predictive analytics.',
    overview: 'FinTech Solutions required a sophisticated financial dashboard to help their clients track investments, analyze market trends, and make data-driven decisions. We created a powerful web application that processes complex financial data and presents it in an accessible way.',
    images: [
      '/images/finance-1.png',
      '/images/finance-3.png',
    ],
    technologies: [
      'React',
      'Redux',
      'D3.js',
      'Node.js',
      'Express',
      'MongoDB',
      'AWS',
    ],
    challenges: [
      {
        challenge: 'Handling large datasets with real-time updates without impacting performance.',
        solution: 'We implemented WebSocket connections with efficient data structures and client-side caching to minimize data transfer while maintaining real-time updates.'
      },
      {
        challenge: 'Creating intuitive visualizations for complex financial data.',
        solution: 'We designed custom interactive charts and graphs using D3.js with tooltips and drill-down capabilities to make data exploration intuitive.'
      }
    ],
    results: [
      'Reduced data analysis time by 60%',
      'Improved investment decision accuracy by 35%',
      'Increased client retention by 25%',
      'Supported 10,000+ concurrent users with sub-second response times'
    ],
    testimonial: {
      quote: 'This dashboard has completely transformed how our clients interact with their financial data. The intuitive interface and powerful analytics have become essential tools for our financial advisors.',
      author: 'Michael Chen',
      position: 'CTO, FinTech Solutions'
    },
    projectLink: `${link}/portfolio/finance-dashboard-app`
  },
  {
    id: '3',
    slug: 'health-tracking-mobile-app',
    title: 'Health Tracking Mobile App',
    category: 'Mobile Development',
    client: 'HealthFirst',
    completionDate: 'June 2023',
    thumbnail: '/images/health-2.png',
    heroImage: '/images/health-2.png',
    shortDescription: 'A feature-rich mobile application for tracking health metrics, setting goals, and improving wellness.',
    overview: 'HealthFirst wanted to create a mobile app that would help users track their health metrics, set personalized goals, and improve their overall wellness. We developed a user-friendly application with seamless integration with wearable devices and engaging features to promote healthy habits.',
    images: [
      '/images/health-1.png',
      '/images/health-3.png',
    ],
    technologies: [
      'React Native',
      'TypeScript',
      'Firebase',
      'Redux',
      'HealthKit',
      'Google Fit API',
    ],
    challenges: [
      {
        challenge: 'Ensuring data privacy and security for sensitive health information.',
        solution: 'We implemented end-to-end encryption, secure authentication, and compliance with healthcare data regulations (HIPAA) to protect user data.'
      },
      {
        challenge: 'Creating a consistent experience across iOS and Android platforms.',
        solution: 'We utilized React Native with platform-specific components and adaptations to maintain a consistent user experience while respecting platform design guidelines.'
      }
    ],
    results: [
      '100,000+ downloads in the first month',
      '4.8/5 star average rating across app stores',
      '78% user retention rate after 3 months',
      '40% improvement in user health metrics'
    ],
    testimonial: {
      quote: 'The app exceeded our expectations in every way. The intuitive design and powerful features have made a real difference in our users\' health outcomes. The team\'s attention to detail and understanding of user behavior was exceptional.',
      author: 'Dr. Lisa Thompson',
      position: 'Chief Medical Officer, HealthFirst'
    },
    projectLink: `${link}/portfolio/health-tracking-mobile-app`
  },
  {
    id: '4',
    slug: 'project-management-saas',
    title: 'Project Management SaaS Platform',
    category: 'SaaS Platform',
    client: 'TaskForge Inc.',
    completionDate: 'February 2024',
    thumbnail: '/images/saas-2.png',
    heroImage: '/images/saas-2.png',
    shortDescription: 'A comprehensive project management SaaS platform with real-time collaboration, task tracking, and analytics.',
    overview: 'TaskForge needed a scalable project management platform to help teams organize work, track progress, and boost productivity. We built a feature-rich SaaS solution with intuitive interfaces and powerful collaboration tools.',
    images: [
      '/images/saas-1.png',
      '/images/saas-3.png',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'WebSockets',
      'Docker',
      'AWS',
    ],
    challenges: [
      {
        challenge: 'Building a real-time collaboration system that scales to thousands of concurrent users.',
        solution: 'We implemented a WebSocket architecture with optimized data synchronization and conflict resolution mechanisms to ensure real-time updates without performance degradation.'
      },
      {
        challenge: 'Creating an intuitive interface for complex project workflows and dependencies.',
        solution: 'We developed a drag-and-drop interface with visual workflow builders and customizable dashboards that simplify complex project management tasks.'
      }
    ],
    results: [
      'Reduced project completion time by 35%',
      '86% user satisfaction rating',
      '200% increase in team collaboration',
      'Successfully onboarded 500+ companies in the first quarter'
    ],
    testimonial: {
      quote: 'This platform has revolutionized how our teams work together. The intuitive design and powerful features have made a significant impact on our productivity and project delivery times.',
      author: 'James Wilson',
      position: 'CTO, TaskForge Inc.'
    },
    projectLink: `${link}/portfolio/project-management-saas`
  },
  {
    id: '5',
    slug: 'ai-content-creation-tool',
    title: 'AI Content Creation Tool',
    category: 'Artificial Intelligence',
    client: 'CreativeAI',
    completionDate: 'September 2023',
    thumbnail: '/images/ai-1.png',
    heroImage: '/images/ai-1.png',
    shortDescription: 'An AI-powered content creation platform that helps marketers and creators generate engaging content efficiently.',
    overview: 'CreativeAI wanted to develop a platform that leverages artificial intelligence to help content creators and marketers generate high-quality content faster. We built a sophisticated AI tool that can create various content types while maintaining brand voice and quality standards.',
    images: [
      '/images/ai-1.png',
      '/images/ai-2.png',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'React',
      'FastAPI',
      'MongoDB',
      'Docker',
      'GCP',
    ],
    challenges: [
      {
        challenge: 'Training AI models to understand brand voice and maintain consistency across generated content.',
        solution: 'We developed custom fine-tuning mechanisms that allow the AI to learn from existing brand content and maintain consistent tone and style in new generations.'
      },
      {
        challenge: 'Creating an interface that balances AI automation with human creativity and control.',
        solution: 'We designed a collaborative editing environment where AI suggestions and human input work seamlessly together, with intuitive controls for adjusting AI parameters.'
      }
    ],
    results: [
      'Content creation time reduced by 70%',
      '45% increase in content engagement metrics',
      '12,000+ active users within three months of launch',
      'Featured in major tech publications as an innovative AI tool'
    ],
    testimonial: {
      quote: 'This AI tool has transformed our content creation process. What used to take days now takes hours, and the quality is consistently excellent. The ability to maintain our brand voice while scaling content production has been game-changing.',
      author: 'Elena Rodriguez',
      position: 'Marketing Director, CreativeAI'
    },
    projectLink: `${link}/portfolio/ai-content-creation-tool`
  },
  {
    id: '6',
    slug: 'real-estate-marketplace',
    title: 'Real Estate Marketplace Platform',
    category: 'Web Application',
    client: 'PropertyConnect',
    completionDate: 'April 2023',
    thumbnail: '/images/estate-2.png',
    heroImage: '/images/estate-2.png',
    shortDescription: 'A comprehensive real estate marketplace connecting buyers, sellers, and agents with advanced property search and virtual tours.',
    overview: 'PropertyConnect needed a modern platform to disrupt the traditional real estate market by providing a seamless digital experience for property transactions. We built a feature-rich marketplace with advanced search capabilities, virtual tours, and secure transaction processing.',
    images: [
      '/images/estate-1.png',
      '/images/estate-5.png',
      '/images/estate-4.png',
    ],
    technologies: [
      'Next.js',
      'GraphQL',
      'PostgreSQL',
      'Three.js',
      'AWS',
      'Stripe',
      'Algolia',
    ],
    challenges: [
      {
        challenge: 'Implementing immersive virtual property tours that work across devices.',
        solution: 'We developed an optimized 3D rendering system using Three.js with progressive loading to ensure smooth virtual tours even on mobile devices with limited bandwidth.'
      },
      {
        challenge: 'Creating a sophisticated search system that handles complex property criteria and location-based queries.',
        solution: 'We implemented Algolia with custom ranking algorithms and geospatial indexing to deliver lightning-fast, relevant search results based on multiple parameters.'
      }
    ],
    results: [
      '250,000+ property listings in the first year',
      '38% faster property transactions compared to traditional methods',
      '65% of users preferring virtual tours before in-person visits',
      '28% increase in successful property matches'
    ],
    testimonial: {
      quote: 'The platform has transformed how we connect buyers and sellers. The virtual tour feature and intelligent matching have dramatically improved our efficiency and customer satisfaction. It\'s become the cornerstone of our digital transformation.',
      author: 'Thomas Rivera',
      position: 'CEO, PropertyConnect'
    },
    projectLink: `${link}/portfolio/real-estate-marketplace`
  }
];

// Helper function to get related projects
export const getRelatedProjects = (currentProjectId: string, limit: number = 3): PortfolioProject[] => {
  return portfolioProjects
    .filter(project => project.id !== currentProjectId)
    .slice(0, limit);
};

// Helper function to get a project by slug
export const getProjectBySlug = (slug: string): PortfolioProject | undefined => {
  return portfolioProjects.find(project => project.slug === slug);
}; 