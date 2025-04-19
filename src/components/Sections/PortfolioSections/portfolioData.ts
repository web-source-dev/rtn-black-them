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
    thumbnail: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    heroImage: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    shortDescription: 'A fully responsive e-commerce platform with advanced filtering, search, and secure payment processing.',
    overview: 'StyleHaven needed a modern e-commerce solution to showcase their fashion products and improve their online sales. We developed a custom platform with a focus on user experience, performance, and conversion optimization.',
    images: [
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
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
    thumbnail: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    heroImage: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    shortDescription: 'A comprehensive financial dashboard with real-time data visualization and predictive analytics.',
    overview: 'FinTech Solutions required a sophisticated financial dashboard to help their clients track investments, analyze market trends, and make data-driven decisions. We created a powerful web application that processes complex financial data and presents it in an accessible way.',
    images: [
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
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
    thumbnail: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    heroImage: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    shortDescription: 'A feature-rich mobile application for tracking health metrics, setting goals, and improving wellness.',
    overview: 'HealthFirst wanted to create a mobile app that would help users track their health metrics, set personalized goals, and improve their overall wellness. We developed a user-friendly application with seamless integration with wearable devices and engaging features to promote healthy habits.',
    images: [
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
        'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
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
    slug: 'social-media-platform',
    title: 'Social Media Platform',
    category: 'Web Development',
    client: 'SocialMedia Inc.',
    completionDate: 'February 2024',
    thumbnail: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    heroImage: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    shortDescription: 'A social media platform for connecting with friends and sharing content.',
    overview: 'SocialMedia Inc. wanted to create a social media platform that would allow users to connect with friends and share content. We developed a platform that allows users to create an account, login, and share content with their friends.',
    images: [
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
      'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Redux',
      'AWS',
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
    projectLink: `${link}/portfolio/social-media-platform`
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