'use client';

import { motion } from 'framer-motion';
import IconButton from '@/components/ui/IconButton';
import ShinyBorderButton from '@/components/ui/ShinyBorderButton';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';


export default function SocialIcons() {
  const socialPlatforms = [
    { name: 'TikTok', icon: <FaTiktok />, label: 'TikTok', url: 'https://www.tiktok.com/@rtnglobalofficial' },
    { name: 'facebook', icon: <FaFacebook />, label: 'Facebook', url: 'https://web.facebook.com/people/RTN-Global/61573828870610/' },
    { name: 'linkedin', icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/rtnglobalofficial' },
    { name: 'threads', icon: <FaThreads />, label: 'Threads', url: 'https://www.threads.net/@rtnglobalofficial' },
    { name: 'youtube', icon: <FaYoutube />, label: 'YouTube', url: 'https://www.youtube.com/@RTNGlobal' },
    { name: 'instagram', icon: <FaInstagram />, label: 'Instagram', url: 'https://www.instagram.com/rtnglobalofficial' },
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