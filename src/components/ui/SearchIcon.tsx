import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSearchSuggestions, SearchSuggestion } from '@/utils/SearchUtils';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchIconProps {
  isMobile?: boolean;
}

export default function SearchIcon({ isMobile = false }: SearchIconProps) {
  const [isExpanded, setIsExpanded] = useState(isMobile);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Toggle the search input visibility (desktop only)
  const toggleSearch = () => {
    if (!isMobile) {
      setIsExpanded(!isExpanded);
      
      // Focus input when expanded
      if (!isExpanded && inputRef.current) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 300); // Increased delay to wait for animation
      }
    }
  };

  // Handle click outside to close the search input (desktop only)
  useEffect(() => {
    if (isMobile) return; // Don't add this effect for mobile
    
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  // Auto-focus input on mobile
  useEffect(() => {
    if (isMobile && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMobile]);

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Get suggestions if query is at least 2 characters
    if (query.length >= 2) {
      const results = getSearchSuggestions(query, 5);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      if (!isMobile) {
        setIsExpanded(false);
      }
      setSuggestions([]);
      setSearchQuery('');
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && !isMobile) {
      setIsExpanded(false);
      setSuggestions([]);
    }
  };

  if (isMobile) {
    // Mobile version - permanent search input
    return (
      <div className="w-full px-5 py-4" ref={containerRef}>
        <form onSubmit={handleSubmit} className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className="w-full px-4 py-3 rounded-lg bg-background/70 backdrop-blur-sm border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            aria-label="Search input"
          />
          <button 
            type="submit" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/70 hover:text-primary focus:outline-none transition-colors"
            aria-label="Submit search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 max-h-60 overflow-y-auto py-2 divide-y divide-border/20 z-50 bg-background border border-border/40 shadow-xl shadow-black/20 rounded-lg backdrop-blur-sm">
              {suggestions.map((suggestion) => (
                <Link
                  href={suggestion.url}
                  key={`${suggestion.type}-${suggestion.id}`}
                  className="block px-4 py-2 hover:bg-primary/10 transition-colors"
                  onClick={() => {
                    setSuggestions([]);
                    setSearchQuery('');
                  }}
                >
                  <div className="text-sm font-medium text-foreground">{suggestion.title}</div>
                  <div className="text-xs text-foreground/60 uppercase">{suggestion.type}</div>
                </Link>
              ))}
            </div>
          )}
        </form>
      </div>
    );
  }

  // Desktop version - expandable search icon
  return (
    <div className="relative" ref={containerRef}>
      <form onSubmit={handleSubmit} className="flex items-center">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                className="w-48 md:w-64 px-4 py-2 mr-2 rounded-full bg-background/70 backdrop-blur-sm border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all"
                aria-label="Search input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
          type={isExpanded ? "button" : "submit"}
          onClick={toggleSearch} 
          className="flex items-center justify-center w-10 h-10 rounded-full border border-border/40 hover:border-border/80 bg-background/50 hover:bg-primary/10 text-foreground hover:text-primary focus:outline-none transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isExpanded ? "Close search" : "Search"}
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </motion.button>
      </form>
      
      {/* Suggestions dropdown for desktop */}
      <AnimatePresence>
        {isExpanded && suggestions.length > 0 && (
          <motion.div 
            className="absolute right-0 top-full mt-2 w-72 max-h-80 overflow-y-auto py-2 divide-y divide-border/20 z-50 bg-background border border-border/40 shadow-xl shadow-black/20 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {suggestions.map((suggestion) => (
              <Link
                href={suggestion.url}
                key={`${suggestion.type}-${suggestion.id}`}
                className="block px-4 py-2 hover:bg-primary/10 transition-colors"
                onClick={() => {
                  setIsExpanded(false);
                  setSuggestions([]);
                }}
              >
                <div className="text-sm font-medium text-foreground">{suggestion.title}</div>
                <div className="text-xs text-foreground/60 uppercase">{suggestion.type}</div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* "No results" message */}
      <AnimatePresence>
        {isExpanded && searchQuery.length >= 2 && suggestions.length === 0 && (
          <motion.div 
            className="absolute right-0 top-full mt-2 w-72 bg-background border border-border/40 shadow-xl shadow-black/20 rounded-lg backdrop-blur-sm z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4 text-sm text-foreground/70">
              No results found. Press Enter to search all content.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 