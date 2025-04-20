export interface Industry {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  stats: {
    title: string;
    value: string;
    description: string;
  }[];
  keyServices: {
    title: string;
    description: string;
    icon: string;
  }[];
  caseStudyIds?: string[];
}

import { getCaseStudyBySlug } from '../CaseStudiesSections/caseStudiesData';

export const industries: Industry[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    slug: 'ecommerce',
    shortDescription: 'Custom solutions for online stores that drive conversions and improve customer experience.',
    description: 'We help e-commerce businesses build powerful online experiences with custom storefronts, payment processing, and customer relationship management systems that drive conversions and increase customer lifetime value.',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png',
    challenges: [
      'Increasing competition and market saturation',
      'Customer acquisition and retention challenges',
      'Complex inventory and order management',
      'Performance issues affecting conversion rates',
      'Mobile optimization and cross-device experience',
    ],
    solutions: [
      'Custom e-commerce platform development with headless architecture',
      'Personalized shopping experiences with AI-driven recommendations',
      'Optimized checkout flows that reduce cart abandonment',
      'Integrated inventory management and ERP system connections',
      'Performance optimization focused on Core Web Vitals and loading speed',
    ],
    stats: [
      {
        title: 'Average Conversion Rate Increase',
        value: '37%',
        description: 'For clients after implementing our optimized checkout experience',
      },
      {
        title: 'Mobile Revenue Growth',
        value: '58%',
        description: 'Average improvement in mobile sales after our responsive redesigns',
      },
      {
        title: 'Page Load Speed',
        value: '<1s',
        description: 'Typical loading time achieved for product pages with our optimization',
      },
    ],
    keyServices: [
      {
        title: 'Custom Storefront Development',
        description: 'Tailored shopping experiences built on modern frameworks that drive conversions',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
      {
        title: 'Payment Integration',
        description: 'Seamless checkout with multiple payment providers and international support',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
      {
        title: 'Performance Optimization',
        description: 'Speed improvements that directly impact conversion and retention rates',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
    ],
    caseStudyIds: ['fashion-store-redesign', 'supplement-subscription-platform'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    slug: 'healthcare',
    shortDescription: 'HIPAA-compliant digital solutions that improve patient care and operational efficiency.',
    description: 'We develop secure, compliant healthcare solutions that enhance patient engagement, streamline clinical workflows, and improve operational efficiency while ensuring the highest standards of data security and privacy.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'https://cdn-icons-png.flaticon.com/512/5778/5778578.png',
    challenges: [
      'Strict regulatory compliance requirements (HIPAA)',
      'Complex integration with existing EMR/EHR systems',
      'User experience for diverse patient populations',
      'Data security and privacy concerns',
      'Interoperability between different healthcare systems',
    ],
    solutions: [
      'HIPAA-compliant application development with security best practices',
      'Patient portal and engagement platforms with intuitive interfaces',
      'Telemedicine and remote monitoring solutions',
      'Integrated healthcare data analytics and reporting',
      'Secure EMR/EHR integration and interoperability solutions',
    ],
    stats: [
      {
        title: 'Patient Engagement',
        value: '+43%',
        description: 'Increase in patient portal usage and engagement',
      },
      {
        title: 'Operational Efficiency',
        value: '29%',
        description: 'Reduction in administrative workload for staff',
      },
      {
        title: 'Appointment No-Shows',
        value: '-38%',
        description: 'Decrease in missed appointments with our reminder systems',
      },
    ],
    keyServices: [
      {
        title: 'Patient Portals',
        description: 'Secure, accessible patient engagement platforms with mobile support',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
      {
        title: 'Telemedicine Solutions',
        description: 'High-quality video consultation platforms with scheduling integration',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
      {
        title: 'Healthcare Analytics',
        description: 'Data-driven insights for improving patient outcomes and operations',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
    ],
    caseStudyIds: ['telehealth-platform'],
  },
  {
    id: 'fintech',
    title: 'FinTech',
    slug: 'fintech',
    shortDescription: 'Secure and innovative financial technology solutions for modern banking and investment.',
    description: 'We build cutting-edge financial technology solutions that transform how businesses and consumers manage money, investments, and transactions while maintaining the highest standards of security and regulatory compliance.',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'https://cdn-icons-png.flaticon.com/512/4256/4256898.png',
    challenges: [
      'Stringent regulatory requirements and compliance',
      'High security demands and fraud prevention',
      'Complex integration with banking systems and APIs',
      'User trust and data privacy concerns',
      'Need for real-time processing and low latency',
    ],
    solutions: [
      'Secure banking and investment platform development',
      'Payment processing and digital wallet solutions',
      'Blockchain and smart contract implementation',
      'Automated compliance and regulatory reporting',
      'AI-powered fraud detection and prevention systems',
    ],
    stats: [
      {
        title: 'Transaction Processing',
        value: '99.9%',
        description: 'Uptime for payment processing systems we\'ve developed',
      },
      {
        title: 'Fraud Reduction',
        value: '47%',
        description: 'Average decrease in fraud incidents with our detection systems',
      },
      {
        title: 'User Adoption',
        value: '3.4x',
        description: 'Increased user adoption compared to previous financial platforms',
      },
    ],
    keyServices: [
      {
        title: 'Digital Banking',
        description: 'Modern banking experiences with seamless account management',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
      {
        title: 'Payment Solutions',
        description: 'Secure, fast payment processing with multiple integration options',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
      {
        title: 'Investment Platforms',
        description: 'Trading and investment tools with real-time data and analytics',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
    ],
    caseStudyIds: ['digital-banking-app', 'investment-platform'],
  },
  {
    id: 'saas',
    title: 'SaaS',
    slug: 'saas',
    shortDescription: 'Scalable software solutions with modern architecture and exceptional user experiences.',
    description: 'We help businesses build, scale, and optimize Software-as-a-Service products that deliver exceptional user experiences while establishing sustainable growth through modern architecture, optimized performance, and effective monetization strategies.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'https://cdn-icons-png.flaticon.com/512/4236/4236894.png',
    challenges: [
      'Scaling architecture to support growing user bases',
      'Creating sustainable pricing and monetization models',
      'Balancing feature development with technical debt',
      'Implementing effective onboarding and user retention',
      'Managing multi-tenancy and data isolation',
    ],
    solutions: [
      'Cloud-native application architecture with auto-scaling',
      'Subscription management and billing integration',
      'Data-driven product development and feature prioritization',
      'User onboarding optimization and engagement strategies',
      'Secure multi-tenant infrastructure design',
    ],
    stats: [
      {
        title: 'User Retention',
        value: '+32%',
        description: 'Average improvement in user retention after our UX optimizations',
      },
      {
        title: 'Infrastructure Costs',
        value: '-41%',
        description: 'Typical cost reduction through our cloud architecture optimization',
      },
      {
        title: 'Development Speed',
        value: '2.7x',
        description: 'Faster feature deployment with our CI/CD implementation',
      },
    ],
    keyServices: [
      {
        title: 'SaaS Architecture',
        description: 'Scalable, cloud-native application design and implementation',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
      {
        title: 'Subscription Management',
        description: 'Billing, pricing, and subscription lifecycle handling',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
      {
        title: 'User Experience Design',
        description: 'Intuitive interfaces that drive adoption and retention',
        icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
      },
    ],
    caseStudyIds: ['project-management-tool', 'crm-platform'],
  },
];

// Helper function to get an industry by slug
export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug);
};

// Helper function to get related industries
export const getRelatedIndustries = (currentId: string, limit: number = 3): Industry[] => {
  return industries
    .filter(industry => industry.id !== currentId)
    .slice(0, limit);
};

// Helper function to get related case studies for an industry
export const getCaseStudiesForIndustry = (industryId: string) => {
  const industry = industries.find(ind => ind.id === industryId);
  if (!industry) return [];
  
  return industry.caseStudyIds
    ?.map(id => getCaseStudyBySlug(id))
    .filter(study => study !== undefined) || [];    
}; 