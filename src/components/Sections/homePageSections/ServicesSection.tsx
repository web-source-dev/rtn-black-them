'use client';

import React from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import ZoomOnHover from '@/components/animations/ZoomOnHover';
import IconButton from '@/components/ui/IconButton';
import GlitchText from '@/components/ui/GlitchText';
import Image from 'next/image';
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'We build responsive, high-performance websites and applications using the latest technologies.',
      icon: <WebDevIcon />,
      link: '/services/web-development',
    },
    {
      id: 'wix-development',
      title: 'Wix Development',
      description: 'Custom Wix website development and solutions to make your platform stand out.',
      icon: <WixIcon />,
      link: '/services/wix',
    },
    {
      id: 'bug-fixes',
      title: 'Bug Fixes',
      description: 'Fast and effective solutions for website issues, errors, and performance problems.',
      icon: <BugFixIcon />,
      link: '/services/bug-fixes',
    },
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Beautiful, user-friendly designs that engage visitors and represent your brand.',
      icon: <WebDesignIcon />,
      link: '/services/web-design',
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Intuitive interfaces and seamless user experiences that convert visitors to customers.',
      icon: <UiUxIcon />,
      link: '/services/ui-ux',
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Enhance your website speed and performance for better user experience and SEO.',
      icon: <PerformanceIcon />,
      link: '/services/performance',
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] -right-[15%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[150px] opacity-80" />
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[120px] opacity-70" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">What We             
            <span className="relative">
            <span className="text-white ml-2"><GlitchText text="Do Best" /></span>
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
            </span>
             </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              We specialize in creating exceptional digital experiences through a range of specialized services.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={`service-${service.id}`} delay={index * 0.1}>
              <ServiceCard service={service} />
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={0.3}>
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium group">
              <span className="relative">
                View All Services
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary/40 group-hover:bg-primary transition-colors"></span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <ZoomOnHover scale={1.03}>
      <Link href={service.link} className="block h-full group">
        <div className="dark-card rounded-2xl p-6 h-full flex flex-col group transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
          <div className="mb-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="bg-foreground/5 w-14 h-14 rounded-full flex items-center justify-center relative">
              {service.icon}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
          
          <p className="text-foreground/70 mb-6 flex-grow">{service.description}</p>
          
          <div className="mt-auto">
            <IconButton 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              }
              variant="ghost"
              className="group-hover:text-primary transition-colors"
              aria-label={`Learn more about ${service.title}`}
            />
          </div>
        </div>
      </Link>
    </ZoomOnHover>
  );
}

// Icon Components
function WebDevIcon() {
  return (
   <Image src="/assets/gif1.gif" alt="Web Development" width={100} height={100} />
  );
}

function WixIcon() {
  return (
   <video src="/assets/gif2.webm" autoPlay muted loop playsInline className="w-10 h-10" />
  );
}

function BugFixIcon() {
  return (
    <Image src="/assets/gif3.gif" alt="Web Development" width={100} height={100} />
  );
}

function WebDesignIcon() {
  return (
    <Image src="/assets/gif4.gif" alt="Web Development" width={100} height={100} />
  );
}

function UiUxIcon() {
  return (
    <Image src="/assets/gif5.gif" alt="Web Development" width={100} height={100} />
  );
}

function PerformanceIcon() {
  return (
    <video src="/assets/video1.mp4" autoPlay muted loop playsInline className="w-10 h-10" />
  );
} 