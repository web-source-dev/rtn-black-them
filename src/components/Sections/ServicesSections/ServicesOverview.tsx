'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import IconButton from '@/components/ui/IconButton';
import MagneticGradientCard from '@/components/ui/MagneticGradientCard';

// Interface for service data
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  link: string;
  image: string;
}

export default function ServicesOverview() {
  // Service data
  const services: Service[] = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'We build responsive, high-performance websites and applications using the latest technologies.',
      icon: <WebDevIcon />,
      features: [
        'Custom website development',
        'E-commerce solutions',
        'Full-stack development',
        'API development and integration'
      ],
      link: '/services/web-development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    },
    {
      id: 'wix-development',
      title: 'Wix Development',
      description: 'Custom Wix website development and solutions to make your platform stand out.',
      icon: <WixIcon />,
      features: [
        'Custom Wix site design',
        'Wix performance optimization',
        'Wix app integration',
        'E-commerce functionality',
        'SEO for Wix platforms'
      ],
      link: '/services/wix',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    },
    {
      id: 'bug-fixes',
      title: 'Bug Fixes',
      description: 'Fast and effective solutions for website issues, errors, and performance problems.',
      icon: <BugFixIcon />,
      features: [
        'Code debugging and fixes',
        'Performance improvements',
        'Cross-browser compatibility',
        'Mobile responsiveness issues',
        'Security vulnerability fixes'
      ],
      link: '/services/bug-fixes',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Beautiful, user-friendly designs that engage visitors and represent your brand.',
      icon: <WebDesignIcon />,
      features: [
        'UI/UX design',
        'Brand-aligned web design',
        'Mobile-first approach',
        'Wireframing and prototyping',
        'Design system creation'
      ],
      link: '/services/web-design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Intuitive interfaces and seamless user experiences that convert visitors to customers.',
      icon: <UiUxIcon />,
      features: [
        'User research and testing',
        'Information architecture',
        'Interaction design',
        'Usability testing',
        'Conversion optimization'
      ],
      link: '/services/ui-ux',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop',
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Enhance your website speed and performance for better user experience and SEO.',
      icon: <PerformanceIcon />,
      features: [
        'Page speed optimization',
        'Code optimization',
        'Image and asset optimization',
        'Server performance tuning',
        'Core Web Vitals improvement'
      ],
      link: '/services/performance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">What We Offer</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
              Our Specialized Services
            </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive online.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={service.link}>
      <MagneticGradientCard className="h-full">
        <div className="p-6 h-full flex flex-col">
          <div className="mb-5 flex items-center">
            <div className="bg-foreground/5 w-14 h-14 rounded-full flex items-center justify-center relative">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold ml-3 text-white">{service.title}</h3>
          </div>
          
          <div className="mb-4 relative overflow-hidden rounded-lg">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
          
          <p className="text-foreground/70 mb-6">{service.description}</p>
          
          <div className="mt-4 mb-6 flex-grow">
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto flex justify-between items-center">
            <span className="text-primary text-sm font-medium">Learn more</span>
            <IconButton 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              }
              variant="ghost"
              className="text-primary"
            />
          </div>
        </div>
      </MagneticGradientCard>
    </Link>
  );
}

// Icon Components
function WebDevIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
    </svg>
  );
}

function WixIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
    </svg>
  );
}

function BugFixIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function WebDesignIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
    </svg>
  );
}

function UiUxIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
} 