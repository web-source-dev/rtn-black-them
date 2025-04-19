'use client';

import { motion } from 'framer-motion';
import GlowButton from '@/components/ui/GlowButton';

export default function HeaderCTA() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="relative"
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-primary/20 filter blur-xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
      
      <GlowButton 
        onClick={() => window.location.href = '/contact'}
        className="shadow-lg shadow-primary/10 border border-primary/20"
      >
        Get Started
      </GlowButton>
    </motion.div>
  );
} 