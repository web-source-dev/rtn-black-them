export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  date: string;
  thumbnail: string;
  heroImage: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  results: {
    title: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    avatar?: string;
  };
  sections: {
    title: string;
    content: string;
    image?: string;
  }[];
  technologies: string[];
  nextSteps?: string;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}


export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'e-commerce-platform-optimization',
    title: 'E-Commerce Platform Optimization',
    category: 'E-Commerce',
    client: 'FashionRetail Inc.',
    date: 'June 2023',
    thumbnail: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    heroImage: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    shortDescription: 'How we helped an e-commerce retailer increase conversions by 45% and reduce bounce rate by 30% through strategic UX improvements and performance optimization.',
    overview: 'FashionRetail Inc. operates in a highly competitive e-commerce market. Despite having quality products, their online platform was experiencing high bounce rates and low conversion. They approached us to revamp their online shopping experience and optimize their platform for better performance and user engagement.',
    challenge: "The client's existing e-commerce platform suffered from slow load times (average of 5.2 seconds), a complicated checkout process with a 70% abandonment rate, and poor mobile responsiveness. Additionally, their product search functionality was limiting customers' ability to find relevant items quickly.",
    approach: "We took a holistic approach to optimize the platform, focusing on three key areas: technical performance, user experience design, and conversion optimization. Our team conducted comprehensive user research, technical audits, and competitive analysis to develop a strategic roadmap.",
    solution: "We implemented a full-scale optimization of the e-commerce platform, including frontend performance optimization, redesigned user journeys, and mobile-first responsive design. We also developed a more efficient search algorithm and streamlined the checkout process to reduce friction points.",
    results: [
      {
        title: 'Conversion Rate',
        value: '+45%'
      },
      {
        title: 'Page Load Speed',
        value: '1.8s (from 5.2s)'
      },
      {
        title: 'Bounce Rate',
        value: '-30%'
      },
      {
        title: 'Mobile Revenue',
        value: '+60%'
      }
    ],
    testimonial: {
      quote: 'The transformation of our e-commerce platform has been remarkable. Not only did RTN Global deliver technical excellence, but they truly understood our business challenges and provided solutions that directly impacted our bottom line.',
      author: 'Jennifer Lawrence',
      position: 'E-Commerce Director, FashionRetail Inc.',
      avatar: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
    },
    sections: [
      {
        title: 'Research & Discovery',
        content: 'We began with a comprehensive analysis of user behavior through heatmaps, session recordings, and customer interviews. This research revealed critical pain points in the user journey: confusing navigation, slow product filtering, and a complicated checkout flow. We also conducted technical performance audits that identified server response issues, unoptimized images, and inefficient code execution.',
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      },
      {
        title: 'Technical Optimization',
        content: 'Our technical team implemented a series of performance enhancements, including server-side rendering for critical pages, image optimization with WebP format conversion, lazy loading for below-the-fold content, and code splitting. We also implemented a content delivery network (CDN) to reduce latency for global customers. These optimizations reduced the average page load time from 5.2 seconds to just 1.8 seconds.',
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      },
      {
        title: 'UX Redesign',
        content: 'Based on our user research, we redesigned key customer journeys with a focus on simplicity and efficiency. The product catalog was reorganized with improved filtering options, the search functionality was enhanced with AI-powered recommendations, and the checkout process was streamlined from 5 steps to 2 steps. We implemented a mobile-first approach ensuring a consistent experience across all devices.',
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      }
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'AWS CloudFront',
      'Webpack'
    ],
    nextSteps: "Following the success of the initial optimization, we're now working with FashionRetail Inc. to implement advanced personalization features using machine learning algorithms to further enhance the customer experience and increase conversions.",
    cta: {
      title: 'Ready to optimize your e-commerce platform?',
      description: 'We can help you identify performance bottlenecks and user experience issues that may be affecting your conversion rates.',
      buttonText: 'Get in Touch',
      buttonLink: '/contact'
    }
  },
  {
    id: '2',
    slug: 'saas-marketing-site-redesign',
    title: 'SaaS Marketing Site Redesign',
    category: 'Web Design',
    client: 'CloudFlow Solutions',
    date: 'September 2023',
    thumbnail: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    heroImage: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    shortDescription: "A complete redesign of CloudFlow's marketing website that improved lead generation by 85% and reduced bounce rate by 40%.",
    overview: "CloudFlow Solutions offers enterprise workflow automation software. Their previous marketing website failed to effectively communicate their value proposition and was not generating the expected leads. We were engaged to redesign their online presence to better reflect their innovative technology and improve conversion rates.",
    challenge: "The existing website had an outdated design, unclear messaging, and lacked a cohesive user journey. The site structure was confusing for visitors, leading to high bounce rates and low engagement. Additionally, the website performed poorly on mobile devices and had slow loading times.",
    approach: "We employed a data-driven design methodology starting with comprehensive user research, competitive analysis, and stakeholder interviews. We developed user personas and journey maps to guide our design decisions and ensure the new website would effectively address the needs of CloudFlow's target audience.",
    solution: "We created a modern, visually compelling website with clear messaging hierarchy, intuitive navigation, and strategic CTAs throughout the user journey. The new design incorporates interactive elements to showcase CloudFlow's software capabilities and includes dedicated landing pages for different industry verticals.",
    results: [
      {
        title: 'Lead Generation',
        value: '+85%'
      },
      {
        title: 'Bounce Rate',
        value: '-40%'
      },
      {
        title: 'Demo Requests',
        value: '+120%'
      },
      {
        title: 'Avg. Session Duration',
        value: '+65%'
      }
    ],
    testimonial: {
      quote: 'RTN Global truly transformed our online presence. They took the time to understand our business objectives and created a website that not only looks amazing but actually delivers results. The increase in quality leads has been substantial.',
      author: 'Michael Chen',
      position: 'CMO, CloudFlow Solutions',
      avatar: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
    },
    sections: [
      {
        title: 'Research & Strategy',
        content: "We conducted extensive research including stakeholder interviews, competitive analysis, and user testing of the existing website. This research revealed that potential customers were confused about CloudFlow's offerings and couldn't easily find the information they needed. We developed a comprehensive content strategy and information architecture to address these issues.",
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      },
      {
        title: 'Design System Development',
        content: "We created a comprehensive design system to ensure consistency across the website while reflecting CloudFlow's brand identity. This included typography, color palettes, component libraries, and interaction patterns. The design system not only guided the initial development but also provided CloudFlow with a framework for future digital products.",
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      },
      {
        title: 'Interactive Prototyping',
        content: "We developed interactive prototypes of key user journeys to test with actual users before moving to development. This allowed us to validate our design decisions and make refinements based on real user feedback. The prototypes included interactive demonstrations of CloudFlow's software capabilities, helping potential customers better understand the value proposition.",
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      }
    ],
    technologies: [
      'Figma',
      'Next.js',
      'React',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Vercel',
      'Google Analytics 4'
    ],
    nextSteps: "Following the successful website launch, we're now working with CloudFlow on implementing a customer portal using the same design system, creating a seamless experience from marketing site to product.",
    cta: {
      title: 'Is your website failing to generate leads?',
      description: 'We can help you create a conversion-focused website that clearly communicates your value proposition.',
      buttonText: 'Schedule a Consultation',
      buttonLink: '/contact'
    }
  },
  {
    id: '3',
    slug: 'mobile-banking-app-ux-redesign',
    title: 'Mobile Banking App UX Redesign',
    category: 'Mobile App Design',
    client: 'FinanceConnect Bank',
    date: 'December 2023',
    thumbnail: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    heroImage: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp',
    shortDescription: 'A comprehensive UX redesign of FinanceConnect\'s mobile banking application that increased user engagement by 75% and improved customer satisfaction scores by 4.2 points.',
    overview: 'FinanceConnect Bank, a mid-sized regional bank with over 500,000 customers, was struggling with low adoption rates of their mobile banking application. Customer feedback indicated that the app was difficult to use, lacked essential features, and didn\'t meet the expectations set by competing financial institutions. We were tasked with completely redesigning the user experience while ensuring compliance with financial regulations and security standards.',
    challenge: 'The existing app had a dated interface, inconsistent navigation patterns, and a complicated user flow for common tasks like money transfers and bill payments. The app also suffered from performance issues and didn\'t effectively utilize modern smartphone capabilities. Additionally, customer service reported a high volume of calls related to app usage difficulties.',
    approach: 'We implemented a user-centered design process focusing on the actual needs and pain points of FinanceConnect\'s customers. This included extensive user research, competitive analysis, and collaborative design workshops with the bank\'s stakeholders and compliance team. We also conducted usability testing at multiple stages to validate our design decisions.',
    solution: 'We delivered a comprehensive redesign that simplified core banking tasks while adding new features customers expected. The new design included personalized dashboards, simplified transaction flows, enhanced security features like biometric authentication, and improved accessibility features. We also introduced new capabilities like spending insights and budgeting tools.',
    results: [
      {
        title: 'App Store Rating',
        value: '4.7 (from 2.3)'
      },
      {
        title: 'User Engagement',
        value: '+75%'
      },
      {
        title: 'Support Calls',
        value: '-40%'
      },
      {
        title: 'Customer Satisfaction',
        value: '+4.2 points'
      }
    ],
    testimonial: {
      quote: "The RTN Global team delivered a transformative experience for our mobile banking customers. Their deep understanding of both UX best practices and financial industry requirements resulted in an app that's not only beautiful but also functional and secure. The positive customer feedback has been overwhelming.",
      author: 'Rebecca Martinez',
      position: 'VP of Digital Banking, FinanceConnect Bank',
      avatar: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
    },
    sections: [
      {
        title: 'User Research & Insights',
        content: 'We conducted extensive user research including interviews with 40+ customers across different demographics, analysis of app usage data, and review of customer service logs. This research revealed key pain points: confusion with transaction processes, difficulty finding account information, and frustration with login procedures. We also discovered opportunities for new features based on competitive analysis and user expectations.',
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      },
      {
        title: 'Security & Compliance Integration',
        content: 'Working closely with FinanceConnect\'s security and compliance teams, we designed authentication flows and data handling processes that met banking regulations while providing a seamless user experience. This included implementing biometric authentication, transaction verification protocols, and secure notification systems that kept users informed without compromising security.',
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      },
      {
        title: 'Personalized Financial Insights',
        content: 'A standout feature of the redesign was the introduction of personalized financial insights and budgeting tools. We created algorithms that analyzed transaction data to provide users with spending patterns, savings opportunities, and personalized financial recommendations. These features were designed with clear visualizations and actionable information, helping users improve their financial habits.',
        image: 'https://cdn.prod.website-files.com/65fcfd3a1f010ba8051f84bb/6621e5192bcc8a4d0fbc0f95_Service%20Two%20hero%20image%20(2)-p-1600.webp'
      }
    ],
    technologies: [
      'Figma',
      'React Native',
      'TypeScript',
      'Redux',
      'Firebase Analytics',
      'Swift',
      'Kotlin',
      'Biometric Authentication APIs'
    ],
    nextSteps: "Building on the success of the mobile app redesign, we're now working with FinanceConnect to create a cohesive omnichannel experience across their web platform, mobile app, and in-branch digital services.",
    cta: {
      title: 'Need to improve your mobile app user experience?',
      description: 'We specialize in creating intuitive, engaging mobile experiences that delight users while meeting business objectives.',
      buttonText: 'Discuss Your Project',
      buttonLink: '/contact'
    }
  }
];

// Helper function to get case studies by category
export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  return caseStudies.filter(study => study.category === category);
};

// Helper function to get a case study by slug
export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

// Helper function to get related case studies
export const getRelatedCaseStudies = (currentId: string, limit: number = 2): CaseStudy[] => {
  return caseStudies
    .filter(study => study.id !== currentId)
    .slice(0, limit);
}; 