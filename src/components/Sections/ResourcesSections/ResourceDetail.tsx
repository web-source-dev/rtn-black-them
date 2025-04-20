'use client';

import React from 'react';
import Image from 'next/image';
import { Resource } from './resourcesData';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { ResourceCard } from './ResourceCard';
import Link from '@/components/ui/Link';
import { formatDate } from '@/lib/utils';

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
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <RevealOnScroll>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/80 text-white text-xs font-medium rounded-full">
                  {type}
                </span>
                {categories.map((category, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-foreground/10 text-foreground/80 text-xs font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                {title}
              </h1>
              
              <div className="flex items-center gap-4 mb-8 text-sm text-foreground/70">
                <span>{formatDate(publishDate)}</span>
                {lastUpdated && (
                  <span>(Updated: {formatDate(lastUpdated)})</span>
                )}
                {readTime && (
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readTime} min read
                  </span>
                )}
              </div>
              
              {coverImage && (
                <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-8">
                  <Image
                    src={coverImage}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="prose prose-invert prose-lg max-w-none">
                {content ? (
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                  <p className="text-foreground/80 text-lg mb-8">
                    {description}
                  </p>
                )}
              </div>
              
              {downloadUrl && (
                <div className="mt-12 p-6 bg-foreground/5 border border-foreground/10 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Download this {type}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Get access to the full version of this resource by downloading the PDF.
                  </p>
                  <Link href={downloadUrl} variant="default" size="lg">
                    Download PDF
                  </Link>
                </div>
              )}
            </RevealOnScroll>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <RevealOnScroll delay={0.2}>
              <div className="sticky top-24">
                {/* Author Info */}
                <div className="mb-8 p-6 bg-foreground/5 border border-foreground/10 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full bg-neutral-800">
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
                
                {/* Related Resources */}
                {relatedResources.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">
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
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
} 