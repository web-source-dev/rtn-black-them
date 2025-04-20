'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, blogPosts } from '@/data/blogData';
import TransitionWrapper from '../../animations/TransitionWrapper';
import RevealOnScroll from '../../animations/RevealOnScroll';
import Divider from '../../ui/Divider';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="block h-full transition-all duration-300 hover:translate-y-[-5px]"
    >
      <div className="h-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-background dark:bg-gray-800 shadow-md flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src={post.coverImage} 
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            {post.tags.slice(0, 2).map(tag => (
              <Link 
                key={tag.id} 
                href={`/blog/tag/${tag.slug}`}
                className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {tag.name}
              </Link>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden relative mr-2">
                <Image 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm">{post.author.name}</span>
            </div>
            <span className="text-sm text-gray-500">{post.readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-background dark:bg-gray-800 shadow-md">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-full w-full overflow-hidden">
            <Image 
              src={post.coverImage} 
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        <div className="p-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            {post.tags.map(tag => (
              <Link 
                key={tag.id} 
                href={`/blog/tag/${tag.slug}`}
                className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden relative mr-3">
                <Image 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-gray-500">{post.author.role}</div>
              </div>
            </div>
            <span className="text-sm text-gray-500">{post.readingTime}</span>
          </div>
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            Read article 
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogListPage = () => {
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  // Get remaining posts
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Insights, thoughts, and knowledge from our team of experts.
            </p>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        {featuredPosts.length > 0 && (
          <RevealOnScroll>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
              <FeaturedPost post={featuredPosts[0]} />
            </div>
          </RevealOnScroll>
        )}

        <RevealOnScroll>
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className="mt-12 text-center">
            <Link 
              href="/blog/tag"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-all"
            >
              Browse All Topics
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </TransitionWrapper>
  );
};

export default BlogListPage; 