'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { industries } from './industriesData';
import { FiArrowRight } from 'react-icons/fi';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

export default function IndustriesGrid() {

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              We deliver cutting-edge solutions tailored to the unique challenges and opportunities in each industry.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <RevealOnScroll key={industry.id} delay={index * 0.1}>
              <Link href={`/industries/${industry.slug}`}>
                <motion.div
                  className="relative group rounded-xl overflow-hidden h-[400px] cursor-pointer bg-foreground/5 border border-foreground/10"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ 
                    scale: 1.02,
                    opacity: 1,
                    transition: { duration: 0.3 } 
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={industry.thumbnail}
                      alt={industry.title}
                      fill
                      className="object-cover opacity-60 transition-all duration-500 group-hover:scale-[1.05] group-hover:opacity-40"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 mt-auto">
                    <div className="mb-4 p-2 rounded-full bg-primary/20 w-fit">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/30 backdrop-blur-sm">
                        <Image 
                          src={industry.icon} 
                          alt={`${industry.title} icon`} 
                          width={24} 
                          height={24} 
                          className="object-contain" 
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                      {industry.shortDescription}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium">
                      <span>Learn more</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
} 