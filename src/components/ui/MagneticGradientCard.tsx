'use client';

import { useRef, useState, MouseEvent, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { cn } from './utils';

interface MagneticGradientCardProps {
  children: ReactNode;
  hoverContent?: ReactNode;
  className?: string;
  contentClassName?: string;
  hoverContentClassName?: string;
  borderClassName?: string;
  magneticStrength?: number;
  gradientColors?: string[];
  onClick?: () => void;
  glowColor?: string;
  imageSelector?: string;
  parallaxStrength?: number;
  borderWidth?: number;
  glowStrength?: number;
  borderStyle?: 'solid' | 'dashed' | 'flowing';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function MagneticGradientCard({
  children,
  hoverContent,
  className = '',
  contentClassName = '',
  hoverContentClassName = '',
  borderClassName = '',
  magneticStrength = 0.07,
  gradientColors = ['#4F46E5', '#06B6D4', '#818CF8', '#EC4899'],
  onClick,
  imageSelector = 'img',
  parallaxStrength = 15,
  glowStrength = 0.5,
  borderStyle = 'flowing',
  onMouseEnter,
  onMouseLeave
}: MagneticGradientCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Image parallax effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Apply damping to make movement smoother
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  // Calculate the magnetic effect based on mouse position
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate position for magnetic effect
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const xPos = e.clientX - centerX;
    const yPos = e.clientY - centerY;
    
    setPosition({ 
      x: xPos * magneticStrength, 
      y: yPos * magneticStrength 
    });
    
    // Calculate relative mouse position within card (0-1)
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x: relativeX, y: relativeY });
    
    // Update parallax position for image
    // Transform from (0,0)-(1,1) to (-1,-1)-(1,1)
    const normX = (relativeX - 0.5) * 2;
    const normY = (relativeY - 0.5) * 2;
    x.set(normX * parallaxStrength);
    y.set(normY * parallaxStrength);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
    x.set(0);
    y.set(0);
    if (onMouseLeave) onMouseLeave();
  };

  // Construct the gradient based on mouse position
  const getGradient = () => {
    // Make the gradient follow the mouse somewhat
    const angle = Math.atan2(mousePosition.y - 0.5, mousePosition.x - 0.5) * (180 / Math.PI);
    return `linear-gradient(${angle + 90}deg, ${gradientColors.join(', ')})`;
  };
  
  // Apply parallax effect to image
  useEffect(() => {
    if (!cardRef.current || !isHovered) return;
    
    const imageElement = cardRef.current.querySelector(imageSelector) as HTMLElement;
    if (imageElement) {
      imageElement.style.transition = 'transform 0.15s ease-out';
      imageElement.style.transform = `translate(${springX.get() * -0.15}px, ${springY.get() * -0.15}px) scale(1.1)`;
    }
    
    return () => {
      if (imageElement) {
        imageElement.style.transform = 'translate(0px, 0px)';
      }
    };
  }, [isHovered, springX, springY, imageSelector]);
  
  // Track window width for responsive behavior
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Adjust magnetic strength for mobile
  
  // Set up border animation based on style
  const getBorderAnimation = () => {
    switch(borderStyle) {
      case 'dashed':
        return {
          backgroundPosition: ['0% 0%', '100% 100%'],
          backgroundSize: ['200% 200%', '200% 200%'],
        };
      case 'flowing':
        return {
          backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%', '0% 0%'],
          backgroundSize: ['400% 400%', '400% 400%', '400% 400%', '400% 400%', '400% 400%'],
        };
      default: // solid
        return {
          opacity: [0.8, 1, 0.8],
        };
    }
  };
  
  const getBorderTransition = () => {
    switch(borderStyle) {
      case 'dashed':
        return {
          backgroundPosition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "linear" as const
          },
        };
      case 'flowing':
        return {
          backgroundPosition: {
            duration: 12,
            repeat: Infinity,
            ease: "linear" as const
          },
        };
      default: // solid
        return {
          opacity: {
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse" as const,
            ease: "easeInOut" as const
          },
        };
    }
  };
  
  // Calculate effective glow based on screen size
  const effectiveGlowStrength = windowWidth < 768 ? glowStrength * 0.6 : glowStrength;

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden rounded-xl cursor-pointer',
        className
      )}
      animate={{ 
        x: position.x, 
        y: position.y,
        scale: isHovered ? 1.02 : 1
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 150, 
        damping: 20, 
        mass: 0.2 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 -z-10 blur-xl opacity-0"
          style={{ 
            background: getGradient(),
            transform: 'scale(0.85) translateY(20px)'
          }}
          animate={{ 
            opacity: effectiveGlowStrength,
          }}
          transition={{
            opacity: { duration: 0.3 }
          }}
        />
      )}
      
      {/* Animated gradient border */}
      <motion.div
        className={cn(
          'absolute inset-0 z-0 opacity-0',
          isHovered ? 'opacity-100' : 'opacity-0',
          borderClassName
        )}
        style={{
          background: getGradient(),
          backgroundSize: '400% 400%',
        }}
        animate={isHovered ? getBorderAnimation() : {}}
        transition={getBorderTransition()}
      />
      
      {/* Content container with inner shadow */}
      <div className={cn(
        'relative z-10 bg-card m-[3px] rounded-lg h-full transition-all duration-300',
        contentClassName
      )}>
        {children}
      </div>
      
      {/* Hover content overlay with backdrop blur */}
      <AnimatePresence>
        {isHovered && hoverContent && (
          <motion.div
            className={cn(
              'absolute inset-0 z-20 backdrop-blur-[2px]',
              'bg-gradient-to-t from-black/90 via-black/70 to-transparent',
              'flex items-end p-6',
              hoverContentClassName
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {hoverContent}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 