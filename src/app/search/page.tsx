'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { performSearch, getResultsGroupedByType, getTypeLabel, SearchResult, SearchResultType } from '@/utils/SearchUtils';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Create a client component that uses useSearchParams
function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | SearchResultType>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Perform search when query changes
  useEffect(() => {
    if (query) {
      setIsLoading(true);
      // Small timeout to show loading state
      setTimeout(() => {
        const results = performSearch(query);
        setSearchResults(results);
        setIsLoading(false);
      }, 300);
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [query]);

  // Group results by type
  const groupedResults = getResultsGroupedByType(searchResults);

  // Get all result types that have at least one result
  const availableTypes = Object.entries(groupedResults)
    .filter(([, results]) => results.length > 0)
    .map(([type]) => type as SearchResultType);

  // Filter results based on active tab
  const filteredResults = activeTab === 'all'
    ? searchResults
    : groupedResults[activeTab];

  // Format date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Render search result item
  const renderSearchResult = (result: SearchResult, index: number) => (
    <motion.div 
      key={`${result.type}-${result.id}`} 
      className="flex flex-col sm:flex-row gap-4 p-4 border border-border/40 rounded-lg hover:shadow-md hover:shadow-primary/5 hover:border-border/60 transition-all bg-background/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          delay: index * 0.05,
          duration: 0.3
        } 
      }}
    >
      {result.thumbnail && (
        <div className="w-full sm:w-32 h-32 relative rounded-md overflow-hidden bg-background/30 flex-shrink-0 border border-border/20">
          <Image
            src={result.thumbnail}
            fill
            alt={result.title}
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
      <div className="flex-1">
        <Link href={result.url} className="inline-block">
          <h3 className="text-lg font-medium text-foreground hover:text-primary transition-colors">{result.title}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
            {getTypeLabel(result.type)}
          </span>
          {result.date && (
            <span className="text-xs text-foreground/60">
              {formatDate(result.date)}
            </span>
          )}
        </div>
        <p className="mt-2 text-foreground/70 line-clamp-2">{result.description}</p>
        <Link 
          href={result.url} 
          className="mt-2 text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 group"
        >
          View details
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 transform translate-x-0 group-hover:translate-x-0.5 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.h1 
        className="text-3xl font-bold text-center mb-2 text-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Search Results
      </motion.h1>
      
      {query && (
        <motion.p 
          className="text-center text-foreground/60 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isLoading ? 'Searching...' : `Found ${searchResults.length} results for "${query}"`}
        </motion.p>
      )}

      {/* Search input */}
      <motion.div 
        className="max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form action="/search" method="get" className="relative">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search for anything..."
            className="w-full px-4 py-3 rounded-lg bg-background/70 backdrop-blur-sm border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder-foreground/40"
            aria-label="Search"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60 hover:text-primary transition-colors"
            aria-label="Submit search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </motion.div>

      {/* Search results */}
      {query && !isLoading && (
        <>
          {searchResults.length > 0 ? (
            <motion.div 
              className="max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Filter tabs */}
              {searchResults.length > 0 && (
                <div className="mb-6 border-b border-border/30 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  <div className="flex whitespace-nowrap">
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeTab === 'all'
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-foreground/60 hover:text-foreground'
                      }`}
                    >
                      All Results ({searchResults.length})
                    </button>
                    
                    {availableTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => setActiveTab(type)}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          activeTab === type
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-foreground/60 hover:text-foreground'
                        }`}
                      >
                        {getTypeLabel(type)} ({groupedResults[type].length})
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Results list */}
              <div className="space-y-4">
                {filteredResults.map((result, index) => renderSearchResult(result, index))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-medium mb-2 text-foreground">No results found</h2>
              <p className="text-foreground/60 mb-6">
                We couldn&quot;t find any matches for &quot;{query}&quot;. Please try a different search term.
              </p>
              <div className="max-w-xl mx-auto bg-background/50 backdrop-blur-sm border border-border/30 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3 text-foreground">Suggestions:</h3>
                <ul className="text-foreground/70 text-left ml-8 list-disc space-y-2">
                  <li>Check your spelling</li>
                  <li>Try more general keywords</li>
                  <li>Try different keywords</li>
                  <li>Browse our navigation menu to find what you&quot;re looking for</li>
                </ul>
              </div>
            </motion.div>
          )}
        </>
      )}

      {/* If no query was provided */}
      {!query && (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-medium mb-3 text-foreground">Search our website</h2>
          <p className="text-foreground/60">
            Enter a search term above to find content across our website.
          </p>
        </motion.div>
      )}
    </div>
  );
}

// Main page component with Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto py-16 px-4 text-center">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-foreground/10 rounded mx-auto mb-4"></div>
          <div className="h-4 w-64 bg-foreground/10 rounded mx-auto mb-8"></div>
          <div className="h-12 max-w-2xl mx-auto bg-foreground/10 rounded mb-8"></div>
          <div className="max-w-5xl mx-auto space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-4 border border-border/40 rounded-lg bg-background/50">
                <div className="w-32 h-32 bg-foreground/10 rounded"></div>
                <div className="flex-1">
                  <div className="h-6 w-3/4 bg-foreground/10 rounded mb-2"></div>
                  <div className="h-4 w-1/4 bg-foreground/10 rounded mb-2"></div>
                  <div className="h-4 w-full bg-foreground/10 rounded mb-2"></div>
                  <div className="h-4 w-full bg-foreground/10 rounded mb-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
} 