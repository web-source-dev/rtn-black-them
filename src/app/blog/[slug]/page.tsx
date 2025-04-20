import React from 'react';
import type { Metadata } from 'next';
import BlogPostPage from '@/components/Sections/BlogSections/BlogPostPage';
import { blogPosts, getBlogPostBySlug } from '@/data/blogData';
import { notFound } from 'next/navigation';
import { BreadcrumbJsonLd, ArticleJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | RTN Global',
      description: 'We could not find the requested blog article.',
    };
  }

  return {
    title: `${post.title} | RTN Global Blog`,
    description: post.excerpt,
    keywords: [...(post.tags || []).map(tag => tag.name), 'RTN Global blog', 'web development', 'digital agency'],
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `https://rtnglobal.co/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      url: `https://rtnglobal.co/blog/${slug}`,
      siteName: 'RTN Global',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      creator: '@rtnglobal',
      site: '@rtnglobal',
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Blog', url: 'https://rtnglobal.co/blog' },
    { name: post.title, url: `https://rtnglobal.co/blog/${slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ArticleJsonLd 
        title={post.title}
        description={post.excerpt}
        publishDate={post.date}
        authorName={post.author.name}
        imageUrl={post.coverImage}
        url={`https://rtnglobal.co/blog/${slug}`}
      />
      <TransitionWrapper>
        <BlogPostPage post={post} />
      </TransitionWrapper>
    </>
  );
}
