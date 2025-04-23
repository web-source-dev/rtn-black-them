'use client';

import React, { useState, useEffect, useRef } from 'react';
import TransitionWrapper from '../../animations/TransitionWrapper';
import RevealOnScroll from '../../animations/RevealOnScroll';
import Divider from '../../ui/Divider';
import { FiPrinter, FiChevronDown, FiChevronUp, FiArrowUp } from 'react-icons/fi';

interface DisclaimerSectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const DisclaimerSection: React.FC<DisclaimerSectionProps> = ({ title, id, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div id={id} className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
      <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label={isOpen ? "Collapse section" : "Expand section"}>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
      {isOpen && <div className="prose dark:prose-invert max-w-none">{children}</div>}
    </div>
  );
};

const DisclaimerPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Get current date in format: Month Day, Year
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check scroll position to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    { id: 'website-disclaimer', title: 'Website Disclaimer' },
    { id: 'external-links', title: 'External Links Disclaimer' },
    { id: 'professional-disclaimer', title: 'Professional Disclaimer' },
    { id: 'errors-omissions', title: 'Errors and Omissions Disclaimer' },
    { id: 'fair-use', title: 'Fair Use Disclaimer' },
    { id: 'views-expressed', title: 'Views Expressed Disclaimer' },
    { id: 'no-responsibility', title: 'No Responsibility Disclaimer' },
    { id: 'contact-us', title: 'Contact Us' },
  ];

  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Important information about the use of our website and services.
            </p>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 mx-auto mt-6 px-4 py-2 bg-white text-black border border-black hover:bg-gray-400 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-200 rounded-lg transition-colors"
              aria-label="Print this page"
            >
              <FiPrinter /> Print Disclaimer
            </button>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className= "text-black dark:text-white bg-white dark:bg-gray-100 rounded-lg p-6 mb-8 print:hidden">
              <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <div ref={contentRef}>
            <RevealOnScroll>
              <p className="mb-6">
                <strong>Last updated:</strong> {getCurrentDate()}
              </p>
              
              <DisclaimerSection title="Website Disclaimer" id="website-disclaimer">
                <p>
                  The information provided on this website is for general informational purposes only. 
                  All information on the site is provided in good faith, however, we make no representation 
                  or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
                  reliability, availability, or completeness of any information on the site.
                </p>
              </DisclaimerSection>
              
              <DisclaimerSection title="External Links Disclaimer" id="external-links">
                <p>
                  The site may contain links to external websites that are not provided or maintained by or 
                  in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, 
                  timeliness, or completeness of any information on these external websites.
                </p>
              </DisclaimerSection>
              
              <DisclaimerSection title="Professional Disclaimer" id="professional-disclaimer">
                <p>
                  The site cannot and does not contain legal, medical, financial, or professional advice. 
                  The information is provided for general informational and educational purposes only and 
                  is not a substitute for professional advice.
                </p>
                <p>
                  Accordingly, before taking any actions based upon such information, we encourage you to 
                  consult with the appropriate professionals. The use or reliance of any information contained 
                  on this site is solely at your own risk.
                </p>
              </DisclaimerSection>
              
              <DisclaimerSection title="Errors and Omissions Disclaimer" id="errors-omissions">
                <p>
                  While we have made every attempt to ensure that the information contained in this site 
                  has been obtained from reliable sources, we are not responsible for any errors or omissions, 
                  or for the results obtained from the use of this information.
                </p>
                <p>
                  All information in this site is provided &quot;as is,&quot; with no guarantee of completeness, 
                  accuracy, timeliness or of the results obtained from the use of this information, and 
                  without warranty of any kind, express or implied.
                </p>
              </DisclaimerSection>
              
              <DisclaimerSection title="Fair Use Disclaimer" id="fair-use">
                <p>
                  This site may contain copyrighted material the use of which has not always been specifically 
                  authorized by the copyright owner. We are making such material available in our efforts to 
                  provide information and education. We believe this constitutes a &quot;fair use&quot; of any such 
                  copyrighted material as provided for in section 107 of the US Copyright Law.
                </p>
              </DisclaimerSection>
              
              <DisclaimerSection title="Views Expressed Disclaimer" id="views-expressed">
                <p>
                  The views and opinions expressed on this website are purely those of the authors. These 
                  views and opinions do not necessarily represent those of our company or its management.
                </p>
              </DisclaimerSection>
              
              <DisclaimerSection title="No Responsibility Disclaimer" id="no-responsibility">
                <p>
                  The information on the website is provided with the understanding that we are not 
                  herein engaged in rendering legal, accounting, tax, or other professional advice and 
                  services. As such, it should not be used as a substitute for consultation with professional 
                  accounting, tax, legal or other competent advisors.
                </p>
              </DisclaimerSection>
              
              <DisclaimerSection title="Contact Us" id="contact-us">
                <p>
                  If you have any questions about this Disclaimer, you can contact us at{' '}
                  <a href="mailto:info@rtnglobal.co" className="text-blue-600 dark:text-blue-400 hover:underline">
                    info@rtnglobal.co
                  </a>
                </p>
              </DisclaimerSection>
            </RevealOnScroll>
          </div>
        </div>

        {/* Back to top button */}
        {showBackToTop && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors print:hidden"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        )}
      </section>
    </TransitionWrapper>
  );
};

export default DisclaimerPage; 