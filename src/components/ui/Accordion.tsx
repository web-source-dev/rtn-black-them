'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './utils';

interface AccordionItemProps {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  animationType?: 'height' | 'fade' | 'slide' | 'scale';
  disabled?: boolean;
  onClick?: () => void;
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className = '',
  contentClassName = '',
  titleClassName = '',
  icon,
  iconPosition = 'right',
  animationType = 'height',
  disabled = false,
  onClick,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (onClick) onClick();
    }
  };

  // Default chevron icon if none provided
  const defaultIcon = (
    <svg
      className="h-4 w-4 transition-transform duration-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  // Different animation variants based on the animation type
  const variants = {
    height: {
      open: { 
        height: 'auto',
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeOut' }
      },
      closed: { 
        height: 0,
        opacity: 0,
        transition: { duration: 0.2, ease: 'easeIn' }
      },
    },
    fade: {
      open: { 
        opacity: 1,
        transition: { duration: 0.3 }
      },
      closed: { 
        opacity: 0,
        transition: { duration: 0.2 }
      },
    },
    slide: {
      open: { 
        x: 0,
        opacity: 1,
        transition: { duration: 0.3 }
      },
      closed: { 
        x: -20,
        opacity: 0,
        transition: { duration: 0.2 }
      },
    },
    scale: {
      open: { 
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3 }
      },
      closed: { 
        scale: 0.95,
        opacity: 0,
        transition: { duration: 0.2 }
      },
    },
  };

  return (
    <div 
      className={cn(
        'border-b border-gray-200 dark:border-gray-800',
        disabled && 'opacity-50',
        className
      )}
    >
      <button
        className={cn(
          'flex w-full items-center justify-between py-4 text-left font-medium transition-colors',
          isOpen && 'text-purple-600',
          disabled && 'cursor-not-allowed',
          titleClassName
        )}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        disabled={disabled}
      >
        {iconPosition === 'left' && (
          <motion.span
            className="mr-2"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {icon || defaultIcon}
          </motion.span>
        )}
        
        <span className="flex-1">{title}</span>
        
        {iconPosition === 'right' && (
          <motion.span
            className="ml-2"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {icon || defaultIcon}
          </motion.span>
        )}
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants[animationType]}
          >
            <div className={cn('pb-4', contentClassName)}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: {
    id?: string;
    title: ReactNode;
    content: ReactNode;
    defaultOpen?: boolean;
    disabled?: boolean;
  }[];
  className?: string;
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  variant?: 'default' | 'bordered' | 'separated';
  animationType?: 'height' | 'fade' | 'slide' | 'scale';
  iconPosition?: 'left' | 'right';
}

export default function Accordion({
  items,
  className = '',
  type = 'single',
  collapsible = true,
  variant = 'default',
  animationType = 'height',
  iconPosition = 'right',
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>(
    items.filter((item) => item.defaultOpen).map((_, index) => index)
  );

  const toggleItem = (index: number) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(index) && collapsible ? [] : [index]);
    } else {
      setOpenItems(
        openItems.includes(index)
          ? openItems.filter((i) => i !== index)
          : [...openItems, index]
      );
    }
  };

  const variantClasses = {
    default: '',
    bordered: 'border rounded-lg overflow-hidden',
    separated: 'space-y-2',
  };

  return (
    <div className={cn('w-full', variantClasses[variant], className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={`accordion-item-${item.id || index}`}
          title={item.title}
          defaultOpen={openItems.includes(index)}
          disabled={item.disabled}
          className={cn(
            variant === 'separated' && 'mb-3',
            variant === 'bordered' && 'border border-gray-200 dark:border-gray-800 rounded-lg mb-3'
          )}
          animationType={animationType}
          iconPosition={iconPosition}
          onClick={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export { AccordionItem }; 