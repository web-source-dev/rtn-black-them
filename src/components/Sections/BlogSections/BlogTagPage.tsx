'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, getBlogPostsByTag, blogTags } from '@/data/blogData';
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

interface BlogTagPageProps {
  tagSlug: string;
}

const BlogTagPage: React.FC<BlogTagPageProps> = ({ tagSlug }) => {
  const posts = getBlogPostsByTag(tagSlug);
  const tag = blogTags.find(tag => tag.slug === tagSlug);
  
  if (!tag) {
    return (
      <TransitionWrapper>
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tag Not Found</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We couldn&apos;t find any tag matching your request.
            </p>
            <Link 
              href="/blog/tag"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-all"
            >
              Browse All Topics
            </Link>
          </div>
        </section>
      </TransitionWrapper>
    );
  }

  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tag.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {tag.description}
            </p>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <RevealOnScroll>
          {posts.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                No articles found for this topic.
              </p>
            </div>
          )}
        </RevealOnScroll>
        
        <RevealOnScroll>
          <div className="mt-16 flex justify-center gap-4">
            <Link 
              href="/blog"
              className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
            >
              Back to All Articles
            </Link>
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

export default BlogTagPage; 