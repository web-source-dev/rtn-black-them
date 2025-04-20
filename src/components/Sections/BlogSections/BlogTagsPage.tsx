'use client';

import React from 'react';
import Link from 'next/link';
import { getTagsWithCount } from '@/data/blogData';
import TransitionWrapper from '../../animations/TransitionWrapper';
import RevealOnScroll from '../../animations/RevealOnScroll';
import Divider from '../../ui/Divider';
import MagneticGradientCard from '../../ui/MagneticGradientCard';

const BlogTagsPage = () => {
  const tagsWithCount = getTagsWithCount();
  
  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Topics</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse our articles by topic to find the information you&apos;re looking for.
            </p>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tagsWithCount.map(tag => (
              <Link key={tag.id} href={`/blog/tag/${tag.slug}`} className="block">
                <MagneticGradientCard className="h-full">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-3">{tag.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {tag.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag.count} {tag.count === 1 ? 'Article' : 'Articles'}
                      </span>
                      <span className="inline-flex items-center text-primary hover:text-primary/80">
                        View articles
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </MagneticGradientCard>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className="mt-16 text-center">
            <Link 
              href="/blog"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-all"
            >
              Back to All Articles
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </TransitionWrapper>
  );
};

export default BlogTagsPage; 