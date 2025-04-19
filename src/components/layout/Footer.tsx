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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
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

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <motion.footer 
      className="relative bg-background border-t border-border/40 pt-16 pb-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      {/* 3D Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div variants={itemVariants} className='md:basis-[30%]'>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">RTN GLOBAL</h3>
            <p className="text-foreground/70 mb-6">
              Web development, design, and digital services to help your business grow in the digital landscape.
            </p>
            <motion.div 
              className="relative w-fit"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center text-sm px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
              >
                <span>Get in Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:basis-[21%]">
            <h4 className="text-lg font-semibold mb-4 relative">
              <span className="bg-gradient-to-r from-primary/80 to-blue-400/80 bg-clip-text text-transparent">Services</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-blue-400"></span>
            </h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Link href={item.href} className="text-foreground/70 hover:text-primary transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:basis-[21%]">
            <h4 className="text-lg font-semibold mb-4 relative">
              <span className="bg-gradient-to-r from-primary/80 to-blue-400/80 bg-clip-text text-transparent">Company</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-blue-400"></span>
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Link href={item.href} className="text-foreground/70 hover:text-primary transition-colors flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:basis-[28%]">
            <h4 className="text-lg font-semibold mb-4 relative">
              <span className="bg-gradient-to-r from-primary/80 to-blue-400/80 bg-clip-text text-transparent">Connect</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-blue-400"></span>
            </h4>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 shadow-inner">
              <SocialIcons />
            </div>
          </motion.div>
        </div>
        
        <Divider className="my-8" />
        
        <motion.div 
          className="text-center text-foreground/60 text-sm"
          variants={itemVariants}
        >
          <p>© {new Date().getFullYear()} RTN GLOBAL. All rights reserved.</p>
          <p className="mt-2 text-xs text-foreground/40">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            {' • '}
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 