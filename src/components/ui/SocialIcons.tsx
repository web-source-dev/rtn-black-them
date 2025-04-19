'use client';

import { motion } from 'framer-motion';
import IconButton from '@/components/ui/IconButton';
import ShinyBorderButton from '@/components/ui/ShinyBorderButton';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function SocialIcons() {
  const socialPlatforms = [
    { name: 'twitter', icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com/rtndigital' },
    { name: 'linkedin', icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/company/rtndigital' },
    { name: 'github', icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/rtndigital' },
    { name: 'instagram', icon: <FaInstagram />, label: 'Instagram', url: 'https://instagram.com/rtndigital' },
  ];
  
  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };
  
  const buttonVariants = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      y: 0,
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  return (
    <>
      <div className="flex space-x-4 mb-4">
        {socialPlatforms.map((platform) => (
          <motion.div
            key={platform.name}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="relative group"
          >
            <span className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            <IconButton 
              icon={platform.icon} 
              ariaLabel={platform.label} 
              onClick={() => openSocialLink(platform.url)}
              className="relative cursor-pointer z-10 bg-background/50 hover:bg-primary/10 border border-border/40 backdrop-blur-sm"
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <ShinyBorderButton 
          onClick={() => window.location.href = '/contact'}
          className="w-full justify-center"
        >
          Contact Us
        </ShinyBorderButton>
      </motion.div>
    </>
  );
} 