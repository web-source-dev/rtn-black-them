import React from 'react';
import Link from 'next/link';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export default function BlogPostNotFound() {
  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We couldn&apos;t find the article you&apos;re looking for. It may have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/blog"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-all"
            >
              Browse All Articles
            </Link>
            <Link 
              href="/blog/tag"
              className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              Browse Topics
            </Link>
          </div>
        </div>
      </section>
    </TransitionWrapper>
  );
} 