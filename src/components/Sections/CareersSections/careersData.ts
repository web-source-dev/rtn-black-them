export interface JobPosting {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  locationType: 'Remote' | 'Hybrid' | 'On-site';
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salary?: string;
  postedDate: string;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferredSkills?: string[];
  benefits: string[];
  applicationProcess: string;
  isActive: boolean;
}

export const jobPostings: JobPosting[] = [
  {
    id: '1',
    slug: 'senior-frontend-developer',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    locationType: 'Hybrid',
    employmentType: 'Full-time',
    salary: '$120,000 - $160,000',
    postedDate: 'June 15, 2023',
    shortDescription: 'Join our team to build modern, responsive web applications using React, Next.js, and TypeScript that delight users and solve complex business problems.',
    description: 'We are looking for a Senior Frontend Developer to join our growing engineering team. In this role, you will work closely with designers, product managers, and backend engineers to build exceptional user experiences. You will be responsible for architecting and implementing complex frontend solutions, optimizing performance, and mentoring junior developers. You\'ll help shape our frontend technology choices and establish best practices for the team.',
    responsibilities: [
      'Develop robust, scalable, and maintainable frontend code using React, Next.js, and TypeScript',
      'Collaborate with UX/UI designers to translate designs into responsive, accessible, and performant web applications',
      'Implement state management solutions and optimize application performance',
      'Write unit and integration tests to ensure code quality and prevent regressions',
      'Participate in code reviews and provide constructive feedback to other developers',
      'Research and evaluate new frontend technologies and methodologies',
      'Mentor junior developers and help them grow their technical skills'
    ],
    requirements: [
      '5+ years of professional experience in frontend development',
      'Deep expertise in React and modern JavaScript (ES6+)',
      'Strong knowledge of TypeScript and type-safe code practices',
      'Experience with Next.js and server-side rendering',
      'Familiarity with modern CSS techniques and layout systems (Flexbox, Grid)',
      'Understanding of web performance optimization techniques',
      'Knowledge of frontend testing methodologies and tools',
      'Excellent problem-solving and analytical skills'
    ],
    preferredSkills: [
      'Experience with state management libraries (Redux, Zustand, Jotai)',
      'Familiarity with GraphQL and Apollo Client',
      'Knowledge of design systems and component libraries',
      'Experience with animation libraries (Framer Motion, GSAP)',
      'Understanding of CI/CD pipelines and deployment processes'
    ],
    benefits: [
      'Competitive salary and equity compensation',
      'Health, dental, and vision insurance',
      'Flexible work schedule and location',
      'Professional development budget',
      'Home office stipend',
      'Unlimited PTO policy',
      'Weekly team lunches and quarterly outings',
      'Parental leave'
    ],
    applicationProcess: 'Submit your resume and a brief cover letter explaining why you\'re interested in joining our team. Qualified candidates will be invited for an initial screening call, followed by a technical assessment and interviews with the engineering team and hiring manager.',
    isActive: true
  },
  {
    id: '2',
    slug: 'ux-ui-designer',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'New York, NY',
    locationType: 'Remote',
    employmentType: 'Full-time',
    salary: '$90,000 - $130,000',
    postedDate: 'July 5, 2023',
    shortDescription: 'Design intuitive and visually compelling user experiences for our digital products that balance aesthetics with functionality and solve real user problems.',
    description: 'We are seeking a talented UX/UI Designer to create exceptional user experiences for our products. In this role, you will collaborate closely with product managers, engineers, and stakeholders to design intuitive, accessible, and beautiful interfaces. You will be involved in the entire product design process, from research and ideation to implementation and iteration. Your designs will directly impact how users interact with our products and ultimately contribute to our business success.',
    responsibilities: [
      'Create user-centered designs by understanding business requirements, user feedback, and research insights',
      'Design user flows, wireframes, prototypes, and high-fidelity mockups',
      'Develop and maintain design systems to ensure consistency across products',
      'Conduct user research and usability testing to inform design decisions',
      'Collaborate with engineers to ensure accurate implementation of designs',
      'Present and defend design decisions to stakeholders',
      'Stay current with UX trends, tools, and methodologies'
    ],
    requirements: [
      '3+ years of experience in UX/UI design for digital products',
      'Strong portfolio demonstrating your design process and problem-solving skills',
      'Proficiency in design tools such as Figma, Adobe XD, or Sketch',
      'Experience with interactive prototyping tools',
      'Understanding of accessibility standards and best practices',
      'Knowledge of responsive design principles',
      'Excellent communication and presentation skills'
    ],
    preferredSkills: [
      'Experience with design systems and component libraries',
      'Basic understanding of HTML, CSS, and JavaScript capabilities',
      'Knowledge of motion design and microinteractions',
      'Experience conducting user research and usability testing',
      'Familiarity with Agile development methodologies'
    ],
    benefits: [
      'Competitive salary and equity compensation',
      'Health, dental, and vision insurance',
      'Flexible work schedule and location',
      'Professional development budget',
      'Home office stipend',
      'Unlimited PTO policy',
      'Weekly team lunches and quarterly outings',
      'Parental leave'
    ],
    applicationProcess: 'Please submit your resume, portfolio link, and a brief cover letter explaining why you\'re interested in this position. Selected candidates will be invited for an initial interview, followed by a design exercise and team interviews.',
    isActive: true
  },
  {
    id: '3',
    slug: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Austin, TX',
    locationType: 'Hybrid',
    employmentType: 'Full-time',
    salary: '$110,000 - $150,000',
    postedDate: 'July 10, 2023',
    shortDescription: 'Build scalable, secure, and performant backend systems that power our applications and integrate with various services and data sources.',
    description: 'We are looking for a Backend Engineer to join our engineering team and help build robust, scalable systems that power our applications. In this role, you will design and implement APIs, services, and data models that form the foundation of our products. You will work on complex technical challenges related to performance, security, and reliability. This position offers an opportunity to work with modern technologies and contribute to the architecture of our systems.',
    responsibilities: [
      'Design and implement RESTful APIs and microservices',
      'Develop database schemas and efficient queries',
      'Build and maintain integration with third-party services and APIs',
      'Ensure high performance, security, and reliability of backend systems',
      'Write clean, maintainable, and well-tested code',
      'Collaborate with frontend developers to integrate frontend and backend components',
      'Participate in code reviews and technical discussions',
      'Help troubleshoot and resolve production issues'
    ],
    requirements: [
      '3+ years of experience in backend development',
      'Strong knowledge of Node.js, Python, or similar backend technologies',
      'Experience with relational databases (PostgreSQL, MySQL) and query optimization',
      'Familiarity with NoSQL databases (MongoDB, DynamoDB)',
      'Understanding of RESTful API design principles',
      'Knowledge of authentication and authorization mechanisms',
      'Experience with cloud services (AWS, GCP, or Azure)',
      'Solid understanding of software engineering best practices'
    ],
    preferredSkills: [
      'Experience with TypeScript in backend development',
      'Knowledge of GraphQL and implementing GraphQL APIs',
      'Familiarity with containerization (Docker) and orchestration (Kubernetes)',
      'Experience with serverless architectures',
      'Understanding of CI/CD pipelines and automated testing',
      'Knowledge of message queues and event-driven architectures'
    ],
    benefits: [
      'Competitive salary and equity compensation',
      'Health, dental, and vision insurance',
      'Flexible work schedule and location',
      'Professional development budget',
      'Home office stipend',
      'Unlimited PTO policy',
      'Weekly team lunches and quarterly outings',
      'Parental leave'
    ],
    applicationProcess: 'Submit your resume and a brief description of a challenging backend problem you\'ve solved in the past. Qualified candidates will proceed to a technical screening call, followed by a coding assessment and team interviews.',
    isActive: true
  },
  {
    id: '4',
    slug: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Chicago, IL',
    locationType: 'Remote',
    employmentType: 'Full-time',
    salary: '$115,000 - $145,000',
    postedDate: 'July 20, 2023',
    shortDescription: 'Define and execute the product strategy and roadmap, working closely with cross-functional teams to deliver exceptional products that meet user needs and business goals.',
    description: 'We are seeking an experienced Product Manager to lead the development of our digital products. In this role, you will own the product vision, strategy, and roadmap, working closely with design, engineering, marketing, and customer success teams. You will be responsible for understanding user needs, prioritizing features, and ensuring the successful delivery of products that delight users and achieve business objectives.',
    responsibilities: [
      'Define and communicate product vision, strategy, and roadmap',
      'Gather and analyze user requirements through research, feedback, and data',
      'Translate business requirements into detailed product specifications',
      'Prioritize features and create user stories for development teams',
      'Collaborate with design and engineering teams throughout the product lifecycle',
      'Track and measure product performance against key metrics',
      'Conduct competitive analysis and stay informed about market trends',
      'Present product updates and gather feedback from stakeholders'
    ],
    requirements: [
      '4+ years of experience in product management for digital products',
      'Proven track record of successfully shipping products or features',
      'Strong analytical skills and data-driven decision making',
      'Excellent communication and presentation abilities',
      'Experience working with Agile development methodologies',
      'Ability to understand technical concepts and communicate with engineering teams',
      'Good understanding of UX design principles',
      'Bachelor\'s degree in a relevant field (Computer Science, Business, or similar)'
    ],
    preferredSkills: [
      'Experience with product analytics tools (Amplitude, Mixpanel, etc.)',
      'Knowledge of user research methodologies',
      'Familiarity with project management tools (Jira, Asana, etc.)',
      'Experience with growth strategies and user acquisition',
      'Understanding of SaaS business models',
      'MBA or other advanced degree'
    ],
    benefits: [
      'Competitive salary and equity compensation',
      'Health, dental, and vision insurance',
      'Flexible work schedule and location',
      'Professional development budget',
      'Home office stipend',
      'Unlimited PTO policy',
      'Weekly team lunches and quarterly outings',
      'Parental leave'
    ],
    applicationProcess: 'Please submit your resume and a cover letter describing a product you\'ve managed and the impact it had. Selected candidates will be invited for an initial interview, followed by a product exercise and team interviews.',
    isActive: true
  },
  {
    id: '5',
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Seattle, WA',
    locationType: 'Hybrid',
    employmentType: 'Full-time',
    postedDate: 'August 5, 2023',
    shortDescription: 'Build and maintain the infrastructure and deployment pipelines that enable our engineering teams to deliver high-quality software quickly and reliably.',
    description: 'We are looking for a DevOps Engineer to join our team and help build and maintain our cloud infrastructure and deployment processes. In this role, you will be responsible for designing and implementing scalable, secure, and cost-effective infrastructure solutions. You will work closely with development teams to improve CI/CD pipelines, monitoring, and automation. This position offers an opportunity to work with cutting-edge cloud technologies and contribute to the reliability and performance of our systems.',
    responsibilities: [
      'Design, implement, and maintain cloud infrastructure using infrastructure as code',
      'Build and optimize CI/CD pipelines for automated testing and deployment',
      'Implement monitoring, alerting, and logging solutions',
      'Troubleshoot and resolve infrastructure and deployment issues',
      'Improve system security, reliability, and performance',
      'Automate repetitive tasks and operational processes',
      'Collaborate with development teams to improve deployment practices',
      'Participate in on-call rotation to support production systems'
    ],
    requirements: [
      '3+ years of experience in DevOps or Site Reliability Engineering',
      'Strong knowledge of cloud platforms (AWS, GCP, or Azure)',
      'Experience with infrastructure as code tools (Terraform, CloudFormation)',
      'Familiarity with containerization (Docker) and orchestration (Kubernetes)',
      'Knowledge of CI/CD tools and practices (Jenkins, GitHub Actions, CircleCI)',
      'Understanding of monitoring and observability principles',
      'Scripting and automation skills (Bash, Python)',
      'Solid understanding of networking and security concepts'
    ],
    preferredSkills: [
      'Experience with serverless architectures',
      'Knowledge of database administration',
      'Familiarity with web servers and load balancers',
      'Experience with configuration management tools (Ansible, Chef, Puppet)',
      'Understanding of cost optimization strategies for cloud resources',
      'Security certifications or experience with security tools'
    ],
    benefits: [
      'Competitive salary and equity compensation',
      'Health, dental, and vision insurance',
      'Flexible work schedule and location',
      'Professional development budget',
      'Home office stipend',
      'Unlimited PTO policy',
      'Weekly team lunches and quarterly outings',
      'Parental leave'
    ],
    applicationProcess: 'Submit your resume and a description of an infrastructure or automation challenge you\'ve solved. Qualified candidates will proceed to a technical screening, followed by technical interviews with the engineering team.',
    isActive: true
  }
];

// Helper function to get all active job postings
export const getActiveJobPostings = (): JobPosting[] => {
  return jobPostings.filter(job => job.isActive);
};

// Helper function to get all job postings (for the main careers page)
export const getAllJobPostings = async (): Promise<JobPosting[]> => {
  return jobPostings;
};

// Helper function to get job postings by department
export const getJobPostingsByDepartment = (department: string): JobPosting[] => {
  return jobPostings.filter(job => job.department === department && job.isActive);
};

// Helper function to get a job posting by slug
export const getJobPostingBySlug = (slug: string): JobPosting | undefined => {
  return jobPostings.find(job => job.slug === slug);
};

// Helper function to get related job postings
export const getRelatedJobPostings = (currentId: string, limit: number = 3): JobPosting[] => {
  return jobPostings
    .filter(job => job.id !== currentId && job.isActive)
    .slice(0, limit);
}; 