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
  'article': 'bg-blue-900/30 text-blue-300 border border-blue-500/20',
  'whitepaper': 'bg-purple-900/30 text-purple-300 border border-purple-500/20',
  'guide': 'bg-green-900/30 text-green-300 border border-green-500/20',
  'video': 'bg-red-900/30 text-red-300 border border-red-500/20',
  'webinar': 'bg-orange-900/30 text-orange-300 border border-orange-500/20',
  'case-study': 'bg-indigo-900/30 text-indigo-300 border border-indigo-500/20',
  'ebook': 'bg-pink-900/30 text-pink-300 border border-pink-500/20',
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
        'group flex flex-col overflow-hidden rounded-lg border border-foreground/20 bg-foreground/5 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/40 hover:bg-foreground/10',
        variant === 'featured' && 'md:flex-row',
        variant === 'compact' && 'h-full',
        className || ''
      )}
    >
      <div 
        className={cn(
          'relative overflow-hidden bg-background/20',
          variant === 'default' && 'h-48',
          variant === 'featured' && 'h-52 md:h-auto md:w-2/5',
          variant === 'compact' && 'h-32'
        )}
      >
        <Link href={`/resources/${slug}`} className="block h-full w-full">
          <Image
            src={thumbnailImage || 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
          <div 
            className={cn(
              "absolute left-3 top-3 z-10 rounded-md px-2 py-1 text-xs font-medium shadow-sm backdrop-blur-sm",
              typeColors[type]
            )}
          >
            <div className="flex items-center gap-1.5">
              {typeIcons[type]}
              <span className="capitalize">{type}</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        </Link>
      </div>

      <div className={cn(
        'flex flex-1 flex-col p-5',
        variant === 'featured' && 'md:w-3/5',
        variant === 'compact' && 'p-3'
      )}>
        <div className="mb-2 flex items-center gap-2 text-sm text-foreground/60">
          <span>{formatDate(publishDate)}</span>
          {readTime && (
            <>
              <span className="text-foreground/30">•</span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime} min
              </span>
            </>
          )}
        </div>

        <h3 className={cn(
          'mb-3 font-semibold leading-tight tracking-tight text-white group-hover:text-primary transition-colors duration-300',
          variant === 'featured' ? 'text-xl' : 'text-lg',
          variant === 'compact' && 'text-base line-clamp-2'
        )}>
          <Link href={`/resources/${slug}`}>
            {title}
          </Link>
        </h3>

        {variant !== 'compact' && (
          <p className={cn(
            'mb-4 text-sm text-foreground/70',
            variant === 'default' && 'line-clamp-2',
            variant === 'featured' && 'line-clamp-3'
          )}>
            {description}
          </p>
        )}

        <div className="mt-auto flex items-center">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-background/50 border border-foreground/10">
              {author.avatar ? (
                <Image 
                  src={author.avatar} 
                  alt={author.name} 
                  fill 
                  className="object-cover" 
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-xs font-medium text-foreground/70">
                  {author.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">{author.name}</span>
              {variant !== 'compact' && (
                <span className="text-xs text-foreground/60">{author.title}</span>
              )}
            </div>
          </div>

          {variant !== 'compact' && (
            <Link 
              href={`/resources/${slug}`}
              className="text-sm font-medium text-primary hover:text-primary/80 flex items-center group-hover:translate-x-0.5 transition-transform duration-300"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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