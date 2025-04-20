import React from 'react';
import type { Metadata } from 'next';
import BlogTagPageComponent from '@/components/Sections/BlogSections/BlogTagPage';
import { blogTags } from '@/data/blogData';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = blogTags.find((tag) => tag.slug === slug);

  if (!tag) {
    return {
      title: 'Tag Not Found | RTN Global Blog',
      description: 'We could not find the requested blog tag.',
    };
  }

  return {
    title: `${tag.name} Articles | RTN Global Blog`,
    description: tag.description || `Explore our articles about ${tag.name} - the latest insights and guides from RTN Global.`,
    keywords: [tag.name, 'blog articles', 'RTN Global blog', 'web development', 'digital agency'],
    alternates: {
      canonical: `https://rtnglobal.co/blog/tag/${slug}`,
    },
    openGraph: {
      title: `${tag.name} Articles | RTN Global Blog`,
      description: tag.description || `Explore our articles about ${tag.name} - the latest insights and guides from RTN Global.`,
      url: `https://rtnglobal.co/blog/tag/${slug}`,
      siteName: 'RTN Global',
      images: [
        {
          url: '/images/og-blog.jpg',
          width: 1200,
          height: 630,
          alt: `${tag.name} Articles - RTN Global Blog`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return blogTags.map((tag) => ({
    slug: tag.slug,
  }));
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  const breadcrumbs = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Blog', url: 'https://rtnglobal.co/blog' },
    { name: 'Tags', url: 'https://rtnglobal.co/blog/tag' },
    { name: blogTags.find(tag => tag.slug === slug)?.name || slug, url: `https://rtnglobal.co/blog/tag/${slug}` },
  ];
  
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <TransitionWrapper>
        <BlogTagPageComponent tagSlug={slug} />
      </TransitionWrapper>
    </>
  );
}
