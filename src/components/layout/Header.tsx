'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPlus, FiMinus, FiChevronRight } from 'react-icons/fi';
import ShinyBorderButton from '@/components/ui/ShinyBorderButton';
import Image from 'next/image';

const menuItems = [
  { 
    name: 'Services', 
    href: '/services',
    hasSubmenu: true,
    submenu: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Wix Development', href: '/services/wix' },
      { name: 'Bug Fixes', href: '/services/bug-fixes' },
      { name: 'Web Design', href: '/services/web-design' },
      { name: 'UI/UX Design', href: '/services/ui-ux' },
      { name: 'Performance Optimization', href: '/services/performance' },
    ]
  },
  { 
    name: 'Portfolio', 
    href: '/portfolio',
    hasSubmenu: true,
    submenu: [
      { name: 'E-Commerce', href: '/portfolio/modern-e-commerce-platform' },
      { name: 'Finance Dashboard', href: '/portfolio/finance-dashboard-app' },
      { name: 'Health Tracking Mobile App', href: '/portfolio/health-tracking-mobile-app' },
    ]
  },
  { name: 'About', href: '/about', hasSubmenu: false },
  { name: 'Contact', href: '/contact', hasSubmenu: false },
];

// Animation variants
const menuVariants = {
  initial: { 
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.99],
      staggerChildren: 0.06,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const itemVariants = {
  initial: { 
    opacity: 0, 
    y: 20
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.3
    }
  }
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling when menu is closed
      setExpandedMenus([]); // Reset expanded menus when closing
    }
  };

  // Handle accordion expansion
  const toggleAccordion = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName) 
        : [...prev, menuName]
    );
  };

  return (
    <>
      <motion.header 
        className={`sticky top-4 z-50 w-full max-w-4xl mx-auto px-6`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`flex items-center justify-between rounded-full backdrop-blur-xl h-16 px-4 
          ${scrolled 
            ? 'bg-background/80 border border-border/40 shadow-lg' 
            : 'bg-background/100 border border-border/20'
          }`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="group relative overflow-hidden px-4">
              <Image src="/RTN.png" alt="RTN Digital Services" width={120} height={100} />
            </Link>
          </motion.div>
          
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <ShinyBorderButton 
                variant='primary'
                onClick={() => window.location.href = '/contact'}
                className="shadow-lg shadow-primary/10 border border-primary/20 text-sm py-2 cursor-pointer"
              >
                Get a Free Quote
              </ShinyBorderButton>
            </motion.div>
            
            <motion.button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 border border-border/40 backdrop-blur-sm text-foreground"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--primary), 0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { duration: 0.3 }
            }}
            exit={{ 
              opacity: 0,
              transition: { 
                duration: 0.3,
                when: "afterChildren"
              }
            }}
          >
            {/* Blurred Background */}
            <motion.div 
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <div className="container h-full mx-auto flex flex-col md:flex-row relative z-10">
              {/* Left Side - Menu Links */}
              <motion.div 
                className="w-full md:w-1/2 p-4 sm:p-8 pt-20 sm:pt-28"
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <div className="max-w-md mx-auto md:ml-20 mt-5 px-5">                  
                  <motion.nav className="space-y-2">
                    <motion.div variants={itemVariants}>
                      <Link 
                        href="/" 
                        className="block py-2 sm:py-3 text-xl sm:text-2xl font-medium text-foreground hover:text-primary transition-colors group flex items-center"
                        onClick={toggleMenu}
                      >
                        <span>Home</span>
                        <motion.span 
                          className="inline-block ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                          transition={{ duration: 0.2 }}
                        >
                          <FiChevronRight />
                        </motion.span>
                      </Link>
                    </motion.div>
                    
                    {menuItems.map((item) => (
                      <motion.div key={item.name} className="border-b border-border/10" variants={itemVariants}>
                        <div className="flex items-center justify-between py-2 sm:py-3">
                          {item.hasSubmenu ? (
                            <button 
                              onClick={() => toggleAccordion(item.name)}
                              className="flex items-center justify-between w-full text-xl sm:text-2xl font-medium text-foreground hover:text-primary transition-colors"
                            >
                              <span>{item.name}</span>
                              <motion.div
                                animate={{ rotate: expandedMenus.includes(item.name) ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-primary"
                              >
                                {expandedMenus.includes(item.name) ? <FiMinus size={18} /> : <FiPlus size={18} />}
                              </motion.div>
                            </button>
                          ) : (
                            <Link 
                              href={item.href} 
                              className="block w-full text-xl sm:text-2xl font-medium text-foreground hover:text-primary transition-colors group flex items-center"
                              onClick={toggleMenu}
                            >
                              <span>{item.name}</span>
                              <motion.span 
                                className="inline-block ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                                transition={{ duration: 0.2 }}
                              >
                                <FiChevronRight />
                              </motion.span>
                            </Link>
                          )}
                        </div>
                        
                        {/* Submenu */}
                        {item.hasSubmenu && (
                          <AnimatePresence mode="wait">
                            {expandedMenus.includes(item.name) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ 
                                  height: 'auto', 
                                  opacity: 1,
                                  transition: {
                                    height: {
                                      duration: 0.3
                                    },
                                    opacity: {
                                      duration: 0.3,
                                      delay: 0.1
                                    }
                                  }
                                }}
                                exit={{ 
                                  height: 0, 
                                  opacity: 0,
                                  transition: {
                                    height: {
                                      duration: 0.3
                                    },
                                    opacity: {
                                      duration: 0.15
                                    }
                                  } 
                                }}
                                className="overflow-hidden"
                              >
                                <ul className="pl-6 pb-3 space-y-2">
                                  {item.submenu?.map((subItem, subIndex) => (
                                    <motion.li 
                                      key={subItem.name}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ 
                                        opacity: 1, 
                                        x: 0,
                                        transition: {
                                          delay: 0.05 * subIndex
                                        }
                                      }}
                                      className="py-1"
                                    >
                                      <Link 
                                        href={subItem.href} 
                                        className="block text-lg text-foreground/70 hover:text-primary transition-colors"
                                        onClick={toggleMenu}
                                      >
                                        <span className="flex items-center group">
                                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2 transition-all duration-300 group-hover:w-2.5"></span>
                                          <span>{subItem.name}</span>
                                          <motion.span 
                                            className="inline-block ml-1 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
                                            transition={{ duration: 0.2 }}
                                          >
                                            <FiChevronRight size={14} />
                                          </motion.span>
                                        </span>
                                      </Link>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </motion.div>
                    ))}
                  </motion.nav>
                  
                  {/* Mobile Feature - Only visible on mobile */}
                  <motion.div 
                    className="md:hidden w-full mt-8"
                    variants={itemVariants}
                  >
                    <div className="relative w-full h-40 rounded-xl overflow-hidden border border-border/40 shadow-lg bg-gradient-to-br from-background to-primary/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-lg font-bold text-white mb-1">RTN Digital Services</h3>
                        <p className="text-sm text-white/80 mb-3">Premium digital services for your business</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-1.5 bg-primary/80 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-primary transition-colors"
                          onClick={() => {
                            window.location.href = '/services';
                            toggleMenu();
                          }}
                        >
                          Explore Services
                        </motion.button>
                      </div>
                      
                      <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-blue-500/30 blur-2xl"></div>
                      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-primary/20 blur-2xl"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Right Side - Visual Elements */}
              <motion.div 
                className="relative hidden md:flex md:w-1/2 items-center justify-center p-4 pt-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2
                }}
              >
                <div className="relative w-full max-w-md h-[400px] rounded-2xl overflow-hidden border border-border/40 shadow-xl bg-gradient-to-br from-background to-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-6">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      Digital Excellence
                    </motion.h3>
                    <motion.p 
                      className="text-white/80 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Transform your brand with our premium digital services
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-primary/80 backdrop-blur-sm rounded-full text-white font-medium hover:bg-primary transition-colors"
                        onClick={() => {
                          window.location.href = '/services';
                          toggleMenu();
                        }}
                      >
                        Explore Services
                      </motion.button>
                    </motion.div>
                  </div>
                  
                  {/* 3D decorative elements */}
                  <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-500/30 blur-2xl"></div>
                  <div className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-primary/20 blur-2xl"></div>
                  
                  {/* Abstract 3D shapes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <motion.div 
                        className="absolute top-0 left-0 w-32 h-32 rounded-2xl border border-white/20 backdrop-blur-sm bg-white/5"
                        animate={{ 
                          rotate: [0, 10, 0], 
                          y: [0, -10, 0],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 8,
                          ease: "easeInOut" 
                        }}
                      />
                      <motion.div 
                        className="absolute bottom-0 right-0 w-32 h-32 rounded-full border border-primary/20 backdrop-blur-sm bg-primary/5"
                        animate={{ 
                          rotate: [0, -15, 0], 
                          x: [0, 10, 0],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 10,
                          ease: "easeInOut",
                          delay: 1 
                        }}
                      />
                      <motion.div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-3xl border border-blue-400/20 backdrop-blur-sm bg-blue-500/5 rotate-45"
                        animate={{ 
                          rotate: [45, 60, 45], 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 12,
                          ease: "easeInOut" 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 