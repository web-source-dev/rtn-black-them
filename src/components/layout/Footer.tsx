'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SocialIcons from '@/components/ui/SocialIcons';
import Divider from '@/components/ui/Divider';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

const services = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Wix Development', href: '/services/wix' },
  { name: 'Bug Fixes', href: '/services/bug-fixes' },
  { name: 'Web Design', href: '/services/web-design' },
  { name: 'UI/UX Design', href: '/services/ui-ux' },
  { name: 'Performance Optimization', href: '/services/performance' },
];

const resources = [
  { name: 'Resources', href: '/resources' },
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Industries', href: '/industries' },
  { name: 'FAQ', href: '/faq' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Careers', href: '/careers' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

const support = [
  { name: 'Help Center', href: '/help' },
  { name: 'Support', href: '/support' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookies Policy', href: '/cookies-policy' },
  { name: 'Disclaimer', href: '/disclaimer' },
];

export default function Footer() {
  return (
    <motion.footer
      className="relative bg-background border-t border-border/40 pt-16 pb-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
   
      {/* CONTENT WRAPPER WITH HIGHER Z-INDEX */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Top section with logo and contact button */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-8 md:mb-0">
            <div className="mr-5 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-40"></div>
              <div className="relative bg-background rounded-full p-2.5">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" className="fill-primary" />
                  <path d="M2 17L12 22L22 17" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                RTN GLOBAL
              </h2>
              <p className="text-sm text-foreground/60">Web Development & Design</p>
            </div>
          </div>
          
          <motion.div
            className="relative w-fit"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <Link
              href="/contact"
              className="relative flex items-center gap-2 text-sm font-medium px-7 py-3.5 rounded-full border border-primary/30 bg-background text-primary hover:bg-primary/10 transition-colors"
            >
              <span>Get a Free Consultation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Compact Featured section with 3D on left and social/newsletter on right */}
        <motion.div 
          variants={itemVariants} 
          className="mb-14 flex flex-col lg:flex-row items-stretch rounded-3xl border border-white/10 overflow-hidden"
        >
          {/* 3D Animation on Left */}
          <div className="lg:w-1/2 relative hidden lg:block lg:h-[350px] w-full bg-gradient-to-r from-background/80 to-background/40 overflow-hidden">
            <iframe
              src="https://my.spline.design/pufferfishsplinetutorialcopy-vodDdAMnCE9BVrTBYBHdU00y/"
              frameBorder="0"
              width="110%"
              height="110%"
              allow="autoplay; fullscreen"
              loading="lazy"
              className="absolute inset-0 scale-125"
            ></iframe>
          </div>
          
          {/* Social and newsletter on right */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary/90 to-blue-400/90 bg-clip-text text-transparent">
                Stay Connected
              </h4>
              <p className="text-foreground/70 mb-4 text-sm">
                Follow us for updates and insights
              </p>
              <div className="p-3">
                <SocialIcons />
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6 flex-grow">
              <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary/90 to-blue-400/90 bg-clip-text text-transparent">
                Subscribe to Our Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                />
                <button className="px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Main navigation grid with all links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 mb-14">
          {/* Services links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 relative group inline-block">
              <span className="bg-gradient-to-r from-primary/90 to-blue-400/90 bg-clip-text text-transparent">
                Services
              </span>
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-blue-400 group-hover:w-20 transition-all duration-300"></span>
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <Link href={item.href} className="text-foreground/70 hover:text-primary transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-3 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 relative group inline-block">
              <span className="bg-gradient-to-r from-primary/90 to-blue-400/90 bg-clip-text text-transparent">
                Resources
              </span>
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-blue-400 group-hover:w-20 transition-all duration-300"></span>
            </h4>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <Link href={item.href} className="text-foreground/70 hover:text-primary transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-3 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 relative group inline-block">
              <span className="bg-gradient-to-r from-primary/90 to-blue-400/90 bg-clip-text text-transparent">
                Company
              </span>
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-blue-400 group-hover:w-20 transition-all duration-300"></span>
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <Link href={item.href} className="text-foreground/70 hover:text-primary transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-3 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 relative group inline-block">
              <span className="bg-gradient-to-r from-primary/90 to-blue-400/90 bg-clip-text text-transparent">
                Support
              </span>
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-blue-400 group-hover:w-20 transition-all duration-300"></span>
            </h4>
            <ul className="space-y-2.5">
              {support.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <Link href={item.href} className="text-foreground/70 hover:text-primary transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-3 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Divider className="mb-8" />

        {/* Updated footer bottom section with better flex layout */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left" 
          variants={itemVariants}
        >
          <div className="text-foreground/60 text-sm order-2 lg:order-1">
            <p>© {new Date().getFullYear()} RTN GLOBAL. All rights reserved.</p>
            <div className="mt-2 text-xs text-foreground/40 flex flex-wrap justify-center lg:justify-start gap-x-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/cookies-policy" className="hover:text-primary transition-colors">Cookies Policy</Link>
              <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>

          <div className="order-3 flex items-center text-foreground/60 text-xs">
            <span className="mr-2">Designed and Developed with</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="ml-2">by RTN GLOBAL</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
