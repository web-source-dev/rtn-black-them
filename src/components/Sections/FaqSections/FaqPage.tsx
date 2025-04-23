'use client'

import React, { useState, useEffect } from 'react';
import Accordion from '../../ui/Accordion';
import RevealOnScroll from '../../animations/RevealOnScroll';
import TransitionWrapper from '../../animations/TransitionWrapper';
import Divider from '../../ui/Divider';
import { faqData, FaqItem, FaqCategory } from './faqData';

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState<FaqItem[]>(faqData.flatMap(category => category.items));

  // Filter FAQs based on search query and active category
  useEffect(() => {
    let filtered: FaqItem[] = [];
    
    if (activeCategory === 'all') {
      filtered = faqData.flatMap((category: FaqCategory) => category.items);
    } else {
      const categoryData = faqData.find((cat: FaqCategory) => cat.id === activeCategory);
      filtered = categoryData ? categoryData.items : [];
    }

    if (searchQuery) {
      filtered = filtered.filter((faq: FaqItem) => 
        faq.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredFaqs(filtered);
  }, [searchQuery, activeCategory]);

  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and policies.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-background hover:bg-gray-700 border border-gray-700'
              }`}
            >
              All FAQs
            </button>
            {faqData.map((category: FaqCategory) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-background hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <RevealOnScroll>
              <Accordion items={filteredFaqs} />
            </RevealOnScroll>
          ) : (
            <div className="text-center py-10">
              <p className="text-xl">No FAQs match your search criteria.</p>
              <button 
                className="mt-4 text-primary hover:underline"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Clear filters
              </button>
            </div>
          )}
          
          <RevealOnScroll>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
              <p className="mb-6">Our support team is ready to help you with any other questions you may have.</p>
              <a href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-all">
                Contact Us
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* FAQ Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": filteredFaqs.map((faq: FaqItem) => ({
              "@type": "Question",
              "name": faq.title,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.content
              }
            }))
          })
        }} />
      </section>
    </TransitionWrapper>
  );
};

export default FaqPage; 