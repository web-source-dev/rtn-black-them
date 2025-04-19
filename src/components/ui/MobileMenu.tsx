'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import IconButton from '@/components/ui/IconButton';
import GlowButton from './GlowButton';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
  };

  return (
    <div className="md:hidden">
      <IconButton 
        icon="menu" 
        ariaLabel="Menu" 
        onClick={toggleMenu} 
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {/* 3D Decorative Elements */}
            <div className="absolute top-1/4 right-0 w-56 h-56 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-end mb-8">
                <motion.div 
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconButton icon="x" ariaLabel="Close menu" onClick={toggleMenu} />
                </motion.div>
              </div>
              
              <motion.nav 
                className="flex flex-col items-center gap-8 text-xl"
              >
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.name}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-foreground hover:text-primary transition-colors py-2 relative group"
                      onClick={toggleMenu}
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="mt-6"
                  variants={itemVariants}
                >
                  <GlowButton onClick={() => {
                    window.location.href = '/contact';
                    toggleMenu();
                  }}>
                    Get Started
                  </GlowButton>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 