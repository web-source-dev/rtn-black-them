import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Resource, ResourceType } from './resourcesData';
import { cn } from '@/lib/utils';

// Type icons mapping
const typeIcons: Record<ResourceType, React.ReactNode> = {
  'article': <IconDocument className="h-4 w-4" />,
  'whitepaper': <IconBook className="h-4 w-4" />,
  'guide': <IconCompass className="h-4 w-4" />,
  'video': <IconVideo className="h-4 w-4" />,
  'webinar': <IconPresentation className="h-4 w-4" />,
  'case-study': <IconClipboard className="h-4 w-4" />,
  'ebook': <IconBookOpen className="h-4 w-4" />,
};

// Type colors mapping
const typeColors: Record<ResourceType, string> = {
  'article': 'bg-blue-100 text-blue-700',
  'whitepaper': 'bg-purple-100 text-purple-700',
  'guide': 'bg-green-100 text-green-700',
  'video': 'bg-red-100 text-red-700',
  'webinar': 'bg-orange-100 text-orange-700',
  'case-study': 'bg-indigo-100 text-indigo-700',
  'ebook': 'bg-pink-100 text-pink-700',
};

interface ResourceCardProps {
  resource: Resource;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
}

// Format date helper function
function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  variant = 'default',
  className,
}) => {
  const {
    slug,
    title,
    type,
    description,
    publishDate,
    author,
    readTime,
    thumbnailImage,
  } = resource;

  return (
    <div 
      className={cn(
        'group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md',
        variant === 'featured' && 'md:flex-row',
        variant === 'compact' && 'h-full',
        className || ''
      )}
    >
      <div 
        className={cn(
          'relative overflow-hidden bg-neutral-100',
          variant === 'default' && 'h-48',
          variant === 'featured' && 'h-52 md:h-auto md:w-2/5',
          variant === 'compact' && 'h-32'
        )}
      >
        <Link href={`/resources/${slug}`}>
          <Image
            src={thumbnailImage || '/images/placeholder.jpg'}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div 
            className={cn(
              "absolute left-3 top-3 z-10 rounded-md px-2 py-1 text-xs font-medium shadow-sm",
              typeColors[type]
            )}
          >
            <div className="flex items-center gap-1.5">
              {typeIcons[type]}
              <span className="capitalize">{type}</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={cn(
        'flex flex-1 flex-col p-4',
        variant === 'featured' && 'md:w-3/5',
        variant === 'compact' && 'p-3'
      )}>
        <div className="mb-2 flex items-center gap-2 text-sm text-neutral-600">
          <span>{formatDate(publishDate)}</span>
          {readTime && (
            <>
              <span className="text-neutral-300">•</span>
              <span>{readTime} min read</span>
            </>
          )}
        </div>

        <h3 className={cn(
          'mb-2 font-semibold leading-tight tracking-tight text-neutral-900',
          variant === 'featured' ? 'text-xl' : 'text-lg',
          variant === 'compact' && 'text-base line-clamp-2'
        )}>
          <Link href={`/resources/${slug}`}>
            {title}
          </Link>
        </h3>

        {variant !== 'compact' && (
          <p className={cn(
            'mb-4 text-sm text-neutral-600',
            variant === 'default' && 'line-clamp-2',
            variant === 'featured' && 'line-clamp-3'
          )}>
            {description}
          </p>
        )}

        <div className="mt-auto flex items-center">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-neutral-200">
              {author.avatar ? (
                <Image 
                  src={author.avatar} 
                  alt={author.name} 
                  fill 
                  className="object-cover" 
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-xs font-medium text-neutral-500">
                  {author.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-neutral-900">{author.name}</span>
              {variant !== 'compact' && (
                <span className="text-xs text-neutral-500">{author.title}</span>
              )}
            </div>
          </div>

          {variant !== 'compact' && (
            <Link 
              href={`/resources/${slug}`}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Icon components
function IconDocument(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function IconBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
}

function IconCompass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    </svg>
  );
}

function IconVideo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconPresentation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
      />
    </svg>
  );
}

function IconClipboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );
}

function IconBookOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
} 