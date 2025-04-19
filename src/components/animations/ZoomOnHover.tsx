'use client';

import { motion } from 'framer-motion';

interface ZoomOnHoverProps {
  children: React.ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
  containerClassName?: string;
}

export default function ZoomOnHover({
  children,
  scale = 1.05,
  duration = 0.3,
  className = '',
  containerClassName = '',
}: ZoomOnHoverProps) {
  return (
    <div className={`overflow-hidden ${containerClassName}`}>
      <motion.div
        className={className}
        whileHover={{ scale }}
        transition={{ duration, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
} 