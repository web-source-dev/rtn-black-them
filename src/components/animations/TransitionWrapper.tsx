'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

type TransitionTypes = 
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'rotate'
  | 'flip';

interface TransitionWrapperProps {
  children: ReactNode;
  type?: TransitionTypes;
  duration?: number;
  delay?: number;
  isVisible?: boolean;
  className?: string;
}

export default function TransitionWrapper({
  children,
  type = 'fade',
  duration = 0.5,
  delay = 0,
  isVisible = true,
  className = '',
}: TransitionWrapperProps) {
  const getVariants = () => {
    switch (type) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 },
        };
      case 'slide-up':
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
          exit: { y: 50, opacity: 0 },
        };
      case 'slide-down':
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
          exit: { y: -50, opacity: 0 },
        };
      case 'slide-left':
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
          exit: { x: 50, opacity: 0 },
        };
      case 'slide-right':
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
          exit: { x: -50, opacity: 0 },
        };
      case 'scale':
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1 },
          exit: { scale: 0.8, opacity: 0 },
        };
      case 'rotate':
        return {
          hidden: { rotate: -10, opacity: 0 },
          visible: { rotate: 0, opacity: 1 },
          exit: { rotate: 10, opacity: 0 },
        };
      case 'flip':
        return {
          hidden: { rotateY: 90, opacity: 0 },
          visible: { rotateY: 0, opacity: 1 },
          exit: { rotateY: -90, opacity: 0 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className={className}
          variants={getVariants()}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0], // cubic bezier
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 