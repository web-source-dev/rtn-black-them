'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Resource, ResourceType } from './resourcesData';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { ResourceCard } from './ResourceCard';
import Link from '@/components/ui/Link';
import { formatDate } from '@/lib/utils';

// Type colors mapping for badges
const typeColors: Record<ResourceType, string> = {
  'article': 'bg-blue-900/30 text-blue-300 border-blue-500/30',
  'whitepaper': 'bg-purple-900/30 text-purple-300 border-purple-500/30',
  'guide': 'bg-green-900/30 text-green-300 border-green-500/30',
  'video': 'bg-red-900/30 text-red-300 border-red-500/30',
  'webinar': 'bg-orange-900/30 text-orange-300 border-orange-500/30',
  'case-study': 'bg-indigo-900/30 text-indigo-300 border-indigo-500/30',
  'ebook': 'bg-pink-900/30 text-pink-300 border-pink-500/30',
};

interface ResourceDetailProps {
  resource: Resource;
  relatedResources: Resource[];
}

export default function ResourceDetail({ resource, relatedResources }: ResourceDetailProps) {
  const {
    title,
    type,
    description,
    publishDate,
    lastUpdated,
    coverImage,
    content,
    author,
    readTime,
    categories,
    downloadUrl,
  } = resource;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <div className="absolute top-1/4 right-1/4 w-[30%] h-[30%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[25%] h-[25%] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-2/3 w-[20%] h-[20%] bg-foreground/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-screen-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${typeColors[type]}`}>
                {type}
              </span>
              {categories.map((category, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-foreground/10 backdrop-blur-sm text-foreground/80 text-xs font-medium rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              {title}
            </h1>
          </motion.div>
        </div>

        {/* Resource Meta Info Bar */}
        <div className="max-w-screen-lg mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-xl"
          >
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-foreground/70">{formatDate(publishDate)}</span>
              </div>
              
              {lastUpdated && (
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-sm text-foreground/70">Updated: {formatDate(lastUpdated)}</span>
                </div>
              )}
              
              {readTime && (
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-foreground/70">{readTime} min read</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-background/50 border border-foreground/10">
                {author.avatar ? (
                  <Image 
                    src={author.avatar} 
                    alt={author.name} 
                    fill 
                    className="object-cover" 
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-sm font-medium text-white">
                    {author.name.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{author.name}</p>
                <p className="text-xs text-foreground/60">{author.title}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-screen-lg mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <RevealOnScroll>
              {coverImage && (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-10 border border-foreground/10 shadow-xl shadow-black/20">
                  <Image
                    src={coverImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="prose prose-invert prose-lg max-w-none">
                {content ? (
                  <div dangerouslySetInnerHTML={{ __html: content }} className="prose-headings:text-white prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white/90" />
                ) : (
                  <div>
                    <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                      {description}
                    </p>
                    
                    <div className="my-10 pl-4 border-l-4 border-primary/70 italic text-foreground/90">
                      <p className="text-lg">This is just a sample description. The full content for this resource is not available in preview mode.</p>
                    </div>
                  </div>
                )}
              </div>
              
              {downloadUrl && (
                <div className="mt-12 p-8 bg-foreground/5 border border-foreground/10 rounded-xl backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Get the full {type}
                      </h3>
                      <p className="text-foreground/70 mb-4 max-w-lg">
                        Access the complete version of this resource by downloading the PDF. No email required.
                      </p>
                    </div>
                    <Link href={downloadUrl} variant="default" size="lg" className="whitespace-nowrap px-6 shadow-lg shadow-primary/10">
                      Download PDF
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
              
              {/* Author Section for Mobile */}
              <div className="mt-12 p-6 bg-foreground/5 border border-foreground/10 rounded-xl md:hidden backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  About the Author
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full bg-background/50 border border-foreground/10">
                    {author.avatar ? (
                      <Image 
                        src={author.avatar} 
                        alt={author.name} 
                        fill 
                        className="object-cover" 
                      />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
                        {author.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{author.name}</h4>
                    <p className="text-foreground/70 text-sm">{author.title}</p>
                  </div>
                </div>
                {author.bio && (
                  <p className="text-foreground/80 text-sm">{author.bio}</p>
                )}
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 hidden md:block">
            <RevealOnScroll delay={0.2}>
              <div className="sticky top-24 space-y-8">
                {/* Author Info */}
                <div className="p-6 bg-foreground/5 border border-foreground/10 rounded-xl backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    About the Author
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-background/50 border border-foreground/10">
                      {author.avatar ? (
                        <Image 
                          src={author.avatar} 
                          alt={author.name} 
                          fill 
                          className="object-cover" 
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
                          {author.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{author.name}</h4>
                      <p className="text-foreground/70 text-sm">{author.title}</p>
                    </div>
                  </div>
                  {author.bio && (
                    <p className="text-foreground/80 text-sm leading-relaxed">{author.bio}</p>
                  )}
                </div>
                
                {/* Table of Contents */}
                <div className="p-6 bg-foreground/5 border border-foreground/10 rounded-xl backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Quick Navigation
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="border-l-2 border-primary pl-3 text-white">Introduction</li>
                    <li className="border-l-2 border-foreground/20 pl-3 text-foreground/70 hover:border-primary hover:text-white transition-colors">
                      <a href="#" className="block">Key Components</a>
                    </li>
                    <li className="border-l-2 border-foreground/20 pl-3 text-foreground/70 hover:border-primary hover:text-white transition-colors">
                      <a href="#" className="block">Technology Enablers</a>
                    </li>
                    <li className="border-l-2 border-foreground/20 pl-3 text-foreground/70 hover:border-primary hover:text-white transition-colors">
                      <a href="#" className="block">Implementation Roadmap</a>
                    </li>
                    <li className="border-l-2 border-foreground/20 pl-3 text-foreground/70 hover:border-primary hover:text-white transition-colors">
                      <a href="#" className="block">Conclusion</a>
                    </li>
                  </ul>
                </div>
                
                {/* Related Resources */}
                {relatedResources.length > 0 && (
                  <div className="p-6 bg-foreground/5 border border-foreground/10 rounded-xl backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Related Resources
                    </h3>
                    <div className="space-y-4">
                      {relatedResources.map(resource => (
                        <ResourceCard 
                          key={resource.id} 
                          resource={resource} 
                          variant="compact" 
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="p-6 bg-foreground/5 border border-foreground/10 rounded-xl backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share This Resource
                  </h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-[#1877f2]/20 hover:bg-[#1877f2]/30 flex items-center justify-center text-[#1877f2] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </button>
                    <button className="flex-1 h-10 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-white text-sm flex items-center justify-center transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </button>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
} 