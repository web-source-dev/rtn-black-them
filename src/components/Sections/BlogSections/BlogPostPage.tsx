'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, getRelatedPosts } from '@/data/blogData';
import TransitionWrapper from '../../animations/TransitionWrapper';
import RevealOnScroll from '../../animations/RevealOnScroll';
import Divider from '../../ui/Divider';
import BlobMorph from '../../animations/BlobMorph';
import BadgeIcon from '../../ui/BadgeIcon';

interface RelatedPostCardProps {
  post: BlogPost;
}

const RelatedPostCard: React.FC<RelatedPostCardProps> = ({ post }) => {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="block h-full transition-all duration-300 hover:translate-y-[-5px]"
    >
      <div className="h-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-background dark:bg-gray-800 shadow-md flex flex-col">
        <div className="relative h-40 w-full overflow-hidden">
            <Image 
              src={post.coverImage} 
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">{post.excerpt}</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm text-primary">{post.readingTime}</span>
            <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Helper function to format date
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const relatedPosts = getRelatedPosts(post);

  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <Link 
                  key={tag.id} 
                  href={`/blog/tag/${tag.slug}`}
                  className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden relative mr-3">
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
              <div className="text-gray-500">
                <div>{formatDate(post.date)}</div>
                <div>{post.readingTime}</div>
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-10">
              <Image 
                src={post.coverImage} 
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </RevealOnScroll>

            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          
          <Divider className="my-12" />
          
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-16">
              <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
                <p className="text-gray-500 mb-2">{post.author.role}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </RevealOnScroll>
          
          {relatedPosts.length > 0 && (
            <RevealOnScroll>
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 relative">
                  <span className="relative z-10">Related Articles</span>
                  <span className="absolute bottom-0 left-0 w-24 h-3 bg-primary/20"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          )}
          
          <RevealOnScroll>
            <div className="relative overflow-hidden p-8 md:p-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-gray-200 dark:border-gray-700">
              <div className="relative z-10">
                <BadgeIcon icon="✉️" className="mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Subscribe to Our Newsletter</h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Stay updated with our latest articles, news, and insights. We promise not to spam your inbox!
                </p>
                <form className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
                    />
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-all"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="absolute top-0 left-0 opacity-50 pointer-events-none">
                <BlobMorph />
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="mt-12 flex justify-center gap-4">
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
                Browse Topics
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default BlogPostPage; 