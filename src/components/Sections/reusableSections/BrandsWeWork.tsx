'use client'

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Brand {
  name: string;
  image: string;
}

const BrandsWeWork = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "0px 0px -200px 0px" });
  
  // Define the brands using images from the industry folder
  const allBrands = useMemo<{
    desktop1: Brand[];
    desktop2: Brand[];
    mobile1: Brand[];
    mobile2: Brand[];
  }>(() => ({
    desktop1: [
      { name: 'Alpha Crew', image: '/industry/Alpha_crew.avif' },
      { name: 'Troys Crib', image: '/industry/troys_crib.avif' },
      { name: 'Go By Tesla', image: '/industry/Go_by _Tesla.avif' },
      { name: 'Maid Sparkling Clean', image: '/industry/maid_sparkling_clean.avif' },
      { name: 'Lily Rose Signature Lashes', image: '/industry/Lily_rose_signature_lashes.avif' },
      { name: 'AEPSIPECES', image: '/industry/AEPSIPECES.avif' },
      { name: 'Flamingo Bay', image: '/industry/flamingo_bay_tanning_and_beauty.avif' },
      { name: 'Spectra', image: '/industry/spectra.jpg' },
    ],
    desktop2: [
      { name: 'Emilia Romagna In Tour', image: '/industry/Emilia_Romagna_In_Tour.avif' },
      { name: 'Italia In Tour', image: '/industry/italia_in_tour.avif' },
      { name: 'Seed Exchange', image: '/industry/seed_exchange.avif' },
      { name: 'Sicilia In Tour', image: '/industry/sicilia_in_tour.avif' },
      { name: 'Beauty Bay', image: '/industry/Beauty_Bay.jpg' },
      { name: 'Handymen Directory', image: '/industry/handymen_directory.avif' },
      { name: 'Reachly', image: '/industry/Reachly.avif' },
      { name: 'Harmony 4 All', image: '/industry/Harmony 4 All logo.avif' },
    ],
    // Reduced set for mobile devices
    mobile1: [
      { name: 'Alpha Crew', image: '/industry/Alpha_crew.avif' },
      { name: 'Troys Crib', image: '/industry/troys_crib.avif' },
      { name: 'Go By Tesla', image: '/industry/Go_by _Tesla.avif' },
      { name: 'Maid Sparkling Clean', image: '/industry/maid_sparkling_clean.avif' },
    ],
    mobile2: [
      { name: 'Emilia Romagna In Tour', image: '/industry/Emilia_Romagna_In_Tour.avif' },
      { name: 'Seed Exchange', image: '/industry/seed_exchange.avif' },
      { name: 'Beauty Bay', image: '/industry/Beauty_Bay.jpg' },
      { name: 'Reachly', image: '/industry/Reachly.avif' },
    ],
  }), []);

  // Animation settings
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get the window width for animation calculations
      const handleResize = () => {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial call
      handleResize();
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  // Select the right brands based on screen size
  const brandsRow1 = useMemo(() => 
    isMobile ? allBrands.mobile1 : allBrands.desktop1
  , [isMobile, allBrands]);
  
  const brandsRow2 = useMemo(() => 
    isMobile ? allBrands.mobile2 : allBrands.desktop2
  , [isMobile, allBrands]);

  // Duplicate the brands to create a seamless loop
  const duplicatedBrandsRow1 = useMemo(() => 
    [...brandsRow1, ...brandsRow1]
  , [brandsRow1]);
  
  const duplicatedBrandsRow2 = useMemo(() => 
    [...brandsRow2, ...brandsRow2]
  , [brandsRow2]);

  // Calculate animation duration based on screen size (faster on mobile)
  const duration = useMemo(() => 
    isMobile ? 20 : 30
  , [isMobile]);

  if (!isInView) {
    // Only render the section container when not in view to minimize DOM elements
    return <section ref={sectionRef} className="py-16 overflow-hidden" />;
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-r from-background to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">Brands We Work With</h2>
          <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto">
            We&apos;re proud to collaborate with these amazing brands to create exceptional digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
            
          {/* First row of brands - scrolling left to right */}
          <div className="relative mb-4 md:mb-8 overflow-hidden w-full">
            <motion.div
              className="flex items-center"
              animate={{
                x: [-width, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: duration,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrandsRow1.map((brand, index) => (
                <div 
                  key={`${brand.name}-${index}`} 
                  className="flex-shrink-0 mx-3 md:mx-6"
                >
                  <div className="bg-background p-3 md:p-4 rounded-lg shadow-sm h-16 w-24 md:h-24 md:w-36 flex items-center justify-center">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={isMobile ? 80 : 120}
                      height={isMobile ? 50 : 80}
                      className="max-h-12 md:max-h-20 object-contain"
                      loading="lazy"
                      quality={80}
                      sizes="(max-width: 768px) 80px, 120px"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row of brands - scrolling right to left */}
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex items-center"
              animate={{
                x: [0, -width],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: duration,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrandsRow2.map((brand, index) => (
                <div 
                  key={`${brand.name}-${index}`} 
                  className="flex-shrink-0 mx-3 md:mx-6"
                >
                  <div className="bg-transparent p-3 md:p-4 rounded-lg shadow-sm h-16 w-24 md:h-24 md:w-36 flex items-center justify-center">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={isMobile ? 80 : 120}
                      height={isMobile ? 50 : 80}
                      className="max-h-12 md:max-h-20 object-contain"
                      loading="lazy"
                      quality={80}
                      sizes="(max-width: 768px) 80px, 120px"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsWeWork;
