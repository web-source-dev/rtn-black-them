'use client';

import { motion } from 'framer-motion';
import IconButton from '@/components/ui/IconButton';
import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

export default function SocialIcons() {
  const socialPlatforms = [
    {
      name: 'TikTok',
      icon: <FaTiktok className="text-[#010101] group-hover:text-white" />,
      label: 'TikTok',
      url: 'https://www.tiktok.com/@rtnglobalofficial',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="text-[#1877F2] group-hover:text-white" />,
      label: 'Facebook',
      url: 'https://web.facebook.com/people/RTN-Global/61573828870610/',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-[#0A66C2] group-hover:text-white" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rtnglobalofficial',
    },
    {
      name: 'Threads',
      icon: <FaThreads className="text-black group-hover:text-white" />,
      label: 'Threads',
      url: 'https://www.threads.net/@rtnglobalofficial',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube className="text-[#FF0000] group-hover:text-white" />,
      label: 'YouTube',
      url: 'https://www.youtube.com/@RTNGlobal',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-black group-hover:text-white" />, // Gradient effect
      label: 'Instagram',
      url: 'https://www.instagram.com/rtnglobalofficial',
    },
  ];

  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  const buttonVariants = {
    hover: {
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      y: 0,
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex space-x-4">
      {socialPlatforms.map((platform) => (
        <motion.div
          key={platform.name}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="relative group"
        >
          <IconButton
            icon={platform.icon}
            ariaLabel={platform.label}
            onClick={() => openSocialLink(platform.url)}
            className="relative cursor-pointer z-10 bg-white hover:bg-primary/50 border border-border/40 backdrop-blur-sm"
          />
        </motion.div>
      ))}
    </div>
  );
}
