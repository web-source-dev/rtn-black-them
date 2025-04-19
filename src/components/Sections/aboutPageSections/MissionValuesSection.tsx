'use client';

import React from 'react';
import Badge from '@/components/ui/Badge';
import BadgeIcon from '@/components/ui/BadgeIcon';
import Divider from '@/components/ui/Divider';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import ZoomOnHover from '@/components/animations/ZoomOnHover';
import { motion } from 'framer-motion';
import GlitchText from '@/components/ui/GlitchText';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface MissionValuesSectionProps {
  subtitle?: string;
  missionTitle?: string;
  missionDescription?: string;
  visionTitle?: string;
  visionDescription?: string;
  valuesTitle?: string;
  values?: ValueItem[];
  className?: string;
}

export default function MissionValuesSection({
  subtitle = "What Drives Us Forward",
  missionTitle = "Our Mission",
  missionDescription = "To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.",
  visionTitle = "Our Vision",
  visionDescription = "To be a global leader in digital transformation, recognized for our creativity, technical excellence, and commitment to helping clients achieve their full potential in the digital world.",
  valuesTitle = "Our Core Values",
  values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
        </svg>
      ),
      title: "Innovation",
      description: "We embrace creativity and forward-thinking approaches, constantly exploring new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to design aesthetics, ensuring our work consistently exceeds expectations."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, working closely with our clients and each other to achieve shared goals and create outstanding results."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
      title: "Integrity",
      description: "We conduct ourselves with honesty, transparency, and ethical practices in all our interactions, building trust and long-lasting relationships."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      ),
      title: "Continuous Learning",
      description: "We embrace a culture of perpetual growth and knowledge sharing, staying ahead of industry trends and constantly evolving our skills and capabilities."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>
      ),
      title: "Client Focus",
      description: "We put our clients at the center of everything we do, understanding their unique needs and delivering solutions that address their specific challenges and goals."
    }
  ],
  className = "",
}: MissionValuesSectionProps) {
  return (
    <section className={`py-24 bg-background relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] right-[5%] w-[25%] h-[30%] bg-primary/5 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] left-[10%] w-[20%] h-[25%] bg-secondary/5 rounded-full blur-[100px] opacity-60" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Purpose</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
              Our 
              <span className="relative">
                <span className="text-white mx-3">
                <GlitchText 
                  text='Mission'
                  className="bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent"
                />
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
              </span>
              &
              <span className="relative">
                <span className="text-white mx-3">
                <GlitchText 
                  text='Values'
                  className="bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent"
                />
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                </span>
              </h2>
            <p className="text-2xl font-semibold mb-4 text-foreground/90">{subtitle}</p>
          </div>
        </RevealOnScroll>
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24">
          <RevealOnScroll>
            <div className="bg-card rounded-2xl p-8 border border-foreground/5 h-full flex flex-col shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="flex items-center mb-6">
                <BadgeIcon 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z" clipRule="evenodd" />
                    </svg>
                  }
                  className="mr-4"
                  variant="primary"
                />
                <h3 className="text-2xl font-bold text-foreground">{missionTitle}</h3>
              </div>
              <p className="text-foreground/70 text-lg leading-relaxed">{missionDescription}</p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-foreground/5 h-full flex flex-col shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="flex items-center mb-6">
                <BadgeIcon 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                    </svg>
                  }
                  className="mr-4"
                  variant="secondary"
                />
                <h3 className="text-2xl font-bold text-foreground">{visionTitle}</h3>
              </div>
              <p className="text-foreground/70 text-lg leading-relaxed">{visionDescription}</p>
            </div>
          </RevealOnScroll>
        </div>
        
        {/* Core Values */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">{valuesTitle}</h3>
            <p className="text-foreground/70 max-w-3xl mx-auto mb-12">
              These principles guide our decisions, shape our culture, and define how we work with our clients and each other.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <RevealOnScroll key={`value-${index}`} delay={index * 0.1}>
              <ZoomOnHover scale={1.02}>
                <div className="bg-card rounded-xl p-6 border border-foreground/5 h-full flex flex-col shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="text-primary mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              </ZoomOnHover>
            </RevealOnScroll>
          ))}
        </div>
        
        {/* Call to Action */}
        <RevealOnScroll>
          <div className="mt-20 text-center">
            <Divider className="max-w-sm mx-auto mb-12 opacity-30" />
            <p className="text-xl mb-8 text-foreground/80 max-w-3xl mx-auto">
              Our mission, vision, and values aren&apos;t just words—they&apos;re the foundation of everything we do at RTN Global.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-flex items-center py-3 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project With Us
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
} 