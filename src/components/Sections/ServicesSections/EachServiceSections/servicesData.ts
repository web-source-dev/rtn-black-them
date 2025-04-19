// Define service interface
export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  heroImage?: string;
  benefits: {
    title: string;
    description: string;
  }[];
  features: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  technologies?: string[];
  process?: {
    title: string;
    description: string;
  }[];
  caseStudies?: {
    title: string;
    description: string;
    image?: string;
    link?: string;
  }[];
  [key: string]: unknown; // Add index signature to allow additional properties
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'We build responsive, high-performance websites and applications using the latest technologies.',
    fullDescription: 'Our web development services deliver custom, responsive websites and applications that are tailored to your specific business needs. We use modern frameworks and technologies to create fast, secure, and scalable digital solutions that work seamlessly across all devices. From simple landing pages to complex web applications, we handle projects of any size with meticulous attention to detail.',
    icon: 'code',
    heroImage: '/images/services/web-development-hero.jpg',
    benefits: [
      {
        title: 'Custom Solutions',
        description: 'Tailor-made websites designed specifically for your business needs and objectives.'
      },
      {
        title: 'Responsive Design',
        description: 'Websites that work perfectly on all devices, from desktops to smartphones.'
      },
      {
        title: 'Performance Optimized',
        description: 'Fast-loading, optimized code that provides excellent user experience.'
      },
      {
        title: 'SEO-Friendly',
        description: 'Built with search engine visibility in mind to improve your organic rankings.'
      }
    ],
    features: [
      'Custom website development',
      'E-commerce solutions',
      'Progressive web apps',
      'CMS integration',
      'API development',
      'Database design',
      'Third-party integrations',
      'Performance optimization'
    ],
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer: "The timeline for a website project depends on its complexity. A simple website might take 4-6 weeks, while more complex web applications can take 3-6 months or more. We'll provide you with a specific timeline during our initial consultation."
      },
      {
        question: 'What technologies do you use?',
        answer: 'We work with a variety of modern technologies, including React, Next.js, Vue.js, Node.js, PHP, and more. Our technology stack recommendations are based on your specific project requirements.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All websites we build are fully responsive and optimized for all screen sizes. We follow a mobile-first approach to ensure great user experience across all devices.'
      },
      {
        question: 'Will I be able to update the website myself?',
        answer: 'Yes. We can build your website with a content management system (CMS) that allows you to easily update content, add pages, and manage your website without technical knowledge.'
      }
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'PostgreSQL',
      'GraphQL'
    ],
    process: [
      {
        title: 'Discovery',
        description: 'We start by understanding your business goals, target audience, and specific requirements.'
      },
      {
        title: 'Planning & Strategy',
        description: 'We develop a detailed project plan including sitemap, wireframes, and technical specifications.'
      },
      {
        title: 'Design',
        description: 'Our designers create visually appealing mockups that align with your brand identity.'
      },
      {
        title: 'Development',
        description: 'Our developers transform designs into functional websites with clean, efficient code.'
      },
      {
        title: 'Testing',
        description: 'We thoroughly test across browsers and devices to ensure everything works perfectly.'
      },
      {
        title: 'Launch',
        description: 'After your approval, we deploy your website and ensure everything is running smoothly.'
      }
    ]
  },
  {
    id: 'wix',
    title: 'Wix Development',
    shortDescription: 'Custom Wix website development and solutions to make your platform stand out.',
    fullDescription: 'Our Wix development services help businesses create professional, feature-rich websites on the Wix platform. We leverage the full power of Wix to create custom designs, implement advanced functionality, and optimize performance. Whether you need a brand new Wix website or want to improve an existing one, our experts can help you maximize the potential of this popular platform.',
    icon: 'grid',
    benefits: [
      {
        title: 'Quick Deployment',
        description: 'Get your website up and running faster compared to traditional development.'
      },
      {
        title: 'Easy Maintenance',
        description: 'Intuitive content management system that\'s easy to update and maintain.'
      },
      {
        title: 'Cost-Effective',
        description: 'Lower development costs while still achieving a professional web presence.'
      },
      {
        title: 'Scalable Solutions',
        description: 'Easily add new features and functionality as your business grows.'
      }
    ],
    features: [
      'Custom Wix site design',
      'Wix performance optimization',
      'Wix app integration',
      'E-commerce functionality',
      'SEO for Wix platforms',
      'Wix booking systems',
      'Custom forms and automations',
      'Third-party integrations'
    ],
    faqs: [
      {
        question: 'Why choose Wix over other platforms?',
        answer: 'Wix offers an excellent balance of ease-of-use, design flexibility, and built-in features. It\'s particularly well-suited for small to medium businesses that need a professional website without the higher costs of custom development.'
      },
      {
        question: 'Can you migrate my existing website to Wix?',
        answer: 'Yes, we can help migrate your content and design from another platform to Wix. The process depends on your current platform, but we\'ll handle the transition to ensure minimal disruption.'
      },
      {
        question: 'Can Wix websites rank well in search engines?',
        answer: 'Absolutely! We implement best practices for Wix SEO to ensure your site performs well in search engines. Wix provides all the tools needed for good SEO performance when properly implemented.'
      },
      {
        question: 'Can you customize my Wix template?',
        answer: 'Yes, we can extensively customize any Wix template to match your brand guidelines and requirements, creating a unique website that stands out from other Wix sites.'
      }
    ]
  },
  {
    id: 'bug-fixes',
    title: 'Bug Fixes',
    shortDescription: 'Fast and effective solutions for website issues, errors, and performance problems.',
    fullDescription: 'Our bug fixing services provide quick and reliable solutions for all types of website issues and errors. Whether you\'re experiencing functional problems, performance issues, or compatibility concerns, our team can identify and resolve the root causes efficiently. We follow a systematic approach to troubleshooting that ensures thorough resolution rather than temporary fixes.',
    icon: 'check-circle',
    benefits: [
      {
        title: 'Quick Resolution',
        description: 'Fast identification and fixing of issues to minimize downtime.'
      },
      {
        title: 'Comprehensive Testing',
        description: 'Thorough testing to ensure bugs are completely resolved.'
      },
      {
        title: 'Root Cause Analysis',
        description: 'We don\'t just fix the symptom, we address the underlying problem.'
      },
      {
        title: 'Preventive Recommendations',
        description: 'Advice on how to prevent similar issues in the future.'
      }
    ],
    features: [
      'Code debugging and fixes',
      'Performance improvements',
      'Cross-browser compatibility issues',
      'Mobile responsiveness problems',
      'JavaScript errors',
      'Plugin conflicts',
      'Security vulnerability fixes',
      'Database optimization'
    ],
    faqs: [
      {
        question: 'How quickly can you fix my website issues?',
        answer: 'The timeline depends on the complexity of the issue. Simple bugs can often be fixed within 24-48 hours, while more complex problems may take longer. We provide an estimated timeline after initial diagnosis.'
      },
      {
        question: 'Do you offer emergency bug fix services?',
        answer: 'Yes, we offer priority service for critical issues that affect your website\'s core functionality, with faster response times and dedicated attention.'
      },
      {
        question: 'What information do you need to fix a bug?',
        answer: 'To efficiently fix bugs, we typically need details about when the issue occurs, steps to reproduce it, any error messages, and access to your website\'s backend. The more information you provide, the faster we can resolve the issue.'
      },
      {
        question: 'Will fixing one bug create new issues?',
        answer: 'Our thorough testing process ensures that bug fixes don\'t introduce new problems. We test not only the fixed functionality but also related features to ensure everything works harmoniously.'
      }
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design',
    shortDescription: 'Beautiful, user-friendly designs that engage visitors and represent your brand.',
    fullDescription: 'Our web design services focus on creating visually stunning, user-friendly websites that effectively communicate your brand message and engage your visitors. We combine aesthetic appeal with functional design to create websites that not only look great but also deliver results. Each design is unique and tailored to your brand identity, target audience, and business objectives.',
    icon: 'pen-tool',
    benefits: [
      {
        title: 'Brand-Aligned Design',
        description: 'Designs that authentically represent your brand personality and values.'
      },
      {
        title: 'User-Focused Experience',
        description: 'Intuitive navigation and layout that guides visitors toward key actions.'
      },
      {
        title: 'Conversion-Optimized',
        description: 'Strategic design elements that encourage visitors to take desired actions.'
      },
      {
        title: 'Memorable Visual Impact',
        description: 'Distinctive visual elements that help your brand stand out from competitors.'
      }
    ],
    features: [
      'Website UI/UX design',
      'Brand-aligned web design',
      'Mobile-first approach',
      'Visual identity development',
      'Wireframing and prototyping',
      'User flow optimization',
      'Design system creation',
      'Interactive element design'
    ],
    faqs: [
      {
        question: 'What\'s your web design process?',
        answer: 'Our design process includes discovery (understanding your business and goals), research (analyzing your industry and competitors), wireframing, design concepts, refinement based on feedback, and final design delivery with style guides.'
      },
      {
        question: 'How much input will I have in the design process?',
        answer: 'We believe in collaborative design. You\'ll have multiple opportunities to provide feedback and request revisions throughout the process. Your input is crucial to creating a design that meets your expectations.'
      },
      {
        question: 'Do you just design or also develop websites?',
        answer: 'We offer both design and development services. Many clients choose our comprehensive service, but we can also provide design-only services if you have your own development team.'
      },
      {
        question: 'How do you ensure designs will look good on all devices?',
        answer: 'We follow a mobile-first design approach, ensuring your website looks great and functions perfectly on all screen sizes. Each design is created with responsive principles in mind from the beginning.'
      }
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    shortDescription: 'Intuitive interfaces and seamless user experiences that convert visitors to customers.',
    fullDescription: 'Our UI/UX design services focus on creating intuitive, enjoyable, and effective user experiences that help you achieve your business goals. We combine user research, interaction design, and visual design to create interfaces that users love to engage with. Whether for websites, applications, or digital products, our UI/UX solutions balance aesthetic appeal with functionality to drive user satisfaction and business results.',
    icon: 'layout',
    benefits: [
      {
        title: 'Increased Conversion Rates',
        description: 'Streamlined user journeys that guide users toward conversion goals.'
      },
      {
        title: 'Reduced Bounce Rates',
        description: 'Engaging, intuitive interfaces that keep users on your site longer.'
      },
      {
        title: 'Higher User Satisfaction',
        description: 'Enjoyable experiences that build positive associations with your brand.'
      },
      {
        title: 'Lower Support Costs',
        description: 'Intuitive design reduces customer confusion and support requests.'
      }
    ],
    features: [
      'User research and testing',
      'Information architecture',
      'Wireframing and prototyping',
      'Interaction design',
      'Visual UI design',
      'Usability testing',
      'Conversion optimization',
      'Accessibility compliance'
    ],
    faqs: [
      {
        question: 'What\'s the difference between UI and UX design?',
        answer: 'UI (User Interface) design focuses on the visual elements users interact with, while UX (User Experience) design encompasses the entire user journey and how users feel when interacting with your product. We address both to create comprehensive design solutions.'
      },
      {
        question: 'How do you measure the success of UI/UX design?',
        answer: 'We track key metrics including conversion rates, bounce rates, time on site, task completion rates, and user satisfaction scores. We also conduct usability testing to gather qualitative feedback.'
      },
      {
        question: 'Do you create design systems?',
        answer: 'Yes, we create comprehensive design systems that include component libraries, style guides, and usage documentation. These systems ensure consistency across your product and make future development more efficient.'
      },
      {
        question: 'How do you incorporate accessibility into your designs?',
        answer: 'We follow WCAG (Web Content Accessibility Guidelines) to ensure our designs are accessible to users with disabilities. This includes considerations for color contrast, keyboard navigation, screen reader compatibility, and more.'
      }
    ]
  },
  {
    id: 'performance',
    title: 'Performance Optimization',
    shortDescription: 'Enhance your website speed and performance for better user experience and SEO.',
    fullDescription: 'Our performance optimization services help improve your website\'s speed, responsiveness, and overall user experience. Slow-loading websites lose visitors and conversions. We identify performance bottlenecks and implement best practices to significantly improve loading times and interactivity. From code optimization to server configuration, we address all aspects that affect your website\'s performance.',
    icon: 'zap',
    benefits: [
      {
        title: 'Improved User Experience',
        description: 'Faster loading times lead to better user satisfaction and engagement.'
      },
      {
        title: 'Higher Conversion Rates',
        description: 'Speed improvements directly correlate with increased conversions.'
      },
      {
        title: 'Better Search Rankings',
        description: 'Fast websites are favored by search engines, improving your SEO.'
      },
      {
        title: 'Reduced Bounce Rates',
        description: 'Users are less likely to leave when sites load quickly and respond well.'
      }
    ],
    features: [
      'Page speed optimization',
      'Code optimization',
      'Image and asset optimization',
      'Caching implementation',
      'Server performance tuning',
      'Database optimization',
      'Core Web Vitals improvement',
      'Mobile performance enhancement'
    ],
    faqs: [
      {
        question: 'How much can you improve my website\'s speed?',
        answer: 'Most websites we optimize see a 40-70% improvement in loading times. The exact improvement depends on your current setup, but we typically achieve significant gains even for already-optimized sites.'
      },
      {
        question: 'What performance metrics do you focus on?',
        answer: 'We focus on Core Web Vitals (LCP, FID, CLS) and other key metrics like Time to First Byte (TTFB), Time to Interactive (TTI), and overall page load time. These metrics directly impact both user experience and SEO.'
      },
      {
        question: 'Will performance optimization change how my website looks?',
        answer: 'No, our optimization preserves your website\'s design and functionality while making it faster. In some cases, we might recommend small visual changes if they would dramatically improve performance.'
      },
      {
        question: 'How long does performance optimization take?',
        answer: 'Basic optimization can be completed in 1-2 weeks, while more comprehensive optimization for complex websites might take 3-4 weeks. We\'ll provide a specific timeline after our initial audit.'
      }
    ]
  }
]; 