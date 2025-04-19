'use client';

import React, {useEffect } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { BsLinkedin, BsTwitterX, BsGithub, BsGlobe, BsArrowRightShort, BsStarFill } from 'react-icons/bs';
import GlitchText from '@/components/ui/GlitchText';
import IconButton from '@/components/ui/IconButton';
import ShinyBorderButton from '@/components/ui/ShinyBorderButton';
import MagneticGradientCard from '@/components/ui/MagneticGradientCard';
import Image from 'next/image';
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  image: string;
  skills?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export interface TeamsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  teamMembers?: TeamMember[];
  displayedMembers?: TeamMember[];
  layout?: 'grid' | 'masonry';
  showFilters?: boolean;
  className?: string;
  showAllTeam?: boolean;
  highlightedMemberCount?: number;
  departments?: string[];
  activeDepartment?: string | null;
  onDepartmentChange?: (department: string | null) => void;
  isAnimating?: boolean;
}

export default function TeamsSection({
  subtitle = "The Talented People Behind Our Success",
  description = "Our diverse team of experts brings together decades of experience in design, development, and digital strategy. We are passionate about delivering exceptional results and building long-term partnerships with our clients.",
  teamMembers = [
    {
      id: '1',
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      department: 'Leadership',
      bio: 'Alex founded RTN with a vision to create digital experiences that truly transform businesses. With over 15 years in the tech industry, Alex leads our strategic direction and ensures we remain at the cutting edge of digital innovation.',
      image: 'https://cdn.prod.website-files.com/67c1739741f245e840f55398/67d7b29eed9d9055ae4d22f6_client%20img%201.webp',
      skills: ['Strategic Planning', 'Business Development', 'UX Strategy'],
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        website: 'https://alexjohnson.com'
      }
    },
    {
      id: '2',
      name: 'Samantha Williams',
      position: 'Creative Director',
      department: 'Design',
      bio: 'Sam brings creative vision to life with her exceptional eye for design and user experience. She ensures all our projects maintain the highest aesthetic standards while delivering meaningful interactions for users.',
      image: 'https://cdn.prod.website-files.com/67c1739741f245e840f55398/67d7b2ef2cbaeb164f98f2da_client%20img%205.webp',
      skills: ['UI/UX Design', 'Brand Identity', 'Design Systems'],
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: '3',
      name: 'David Chen',
      position: 'Lead Developer',
      department: 'Development',
      bio: 'David leads our development team with a focus on clean, efficient code and innovative technical solutions. His expertise spans multiple frameworks and he\'s passionate about performance optimization.',
      image: 'https://cdn.prod.website-files.com/6729a60e39d77fc0b3ef6840/673c34a439dc4e4926ecfd55_team-member-big-img-1-p-800.webp',
      skills: ['React', 'Node.js', 'Performance Optimization'],
      socialLinks: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: '4',
      name: 'Maria Rodriguez',
      position: 'Project Manager',
      department: 'Operations',
      bio: 'Maria ensures our projects run smoothly from kickoff to launch. Her meticulous planning and communication skills keep all stakeholders aligned throughout the development process.',
      image: 'https://cdn.prod.website-files.com/6729a60e39d77fc0b3ef6840/673ae8727d43a03e88e45bf7_team-member-4-p-800.webp',
      skills: ['Agile Methodologies', 'Risk Management', 'Client Communication'],
      socialLinks: {
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: '5',
      name: 'James Wilson',
      position: 'UX Researcher',
      department: 'Design',
      bio: 'James specializes in understanding user behavior and translating insights into actionable design recommendations. His research forms the foundation of our user-centered design approach.',
      image: 'https://cdn.prod.website-files.com/6729a60e39d77fc0b3ef6840/673c34b2070e7d0f25cd1e8b_team-member-big-img-6-p-800.webp',
      skills: ['User Testing', 'Data Analysis', 'Usability Heuristics'],
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: '6',
      name: 'Emily Parker',
      position: 'Frontend Developer',
      department: 'Development',
      bio: 'Emily crafts beautiful, responsive interfaces with a keen attention to detail. She specializes in creating seamless user experiences across all devices and browsers.',
      image: 'https://cdn.prod.website-files.com/6729a60e39d77fc0b3ef6840/673c3494c24b61ee68535dca_team-member-big-img-2-p-800.webp',
      skills: ['React', 'CSS/SCSS', 'Animation'],
      socialLinks: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: '7',
      name: 'Michael Thompson',
      position: 'Backend Developer',
      department: 'Development',
      bio: 'Michael architects robust server solutions and APIs that power our applications. He\'s an expert in database design and system scalability.',
      image: 'https://cdn.prod.website-files.com/660a91c30b6882c9618d6528/662252ba56bd6cdc6232901c_Team%20Member%20image%20(2)-p-500.webp',
      skills: ['Node.js', 'MongoDB', 'AWS'],
      socialLinks: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: '8',
      name: 'Sarah Adams',
      position: 'Digital Strategist',
      department: 'Marketing',
      bio: 'Sarah helps our clients navigate the digital landscape with data-driven strategies. She specializes in SEO, content marketing, and conversion optimization.',
      image: 'https://cdn.prod.website-files.com/660a91c30b6882c9618d6528/662252d0b0eed92b5b2aeacf_Team%20Member%20image%20(1)-p-500.webp',
      skills: ['SEO', 'Content Strategy', 'Analytics'],
      socialLinks: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ],
  displayedMembers,
  layout = 'grid',
  showFilters = true,
  className = "",
  showAllTeam = true,
  highlightedMemberCount = 4,
  departments,
  activeDepartment = null,
  onDepartmentChange = () => {},
  isAnimating = false
}: TeamsSectionProps) {
  // Mouse position for background effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use provided displayedMembers or calculate from teamMembers if not provided
  const membersToDisplay = displayedMembers || (
    showAllTeam ? teamMembers : teamMembers.slice(0, highlightedMemberCount)
  );
  
  // Extract unique departments for filters if not provided
  const departmentOptions = departments || ['All', ...new Set(teamMembers.map(member => member.department))];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 30 
      }
    }
  };

  // Handle mouse move for background effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Function to truncate text
  const truncateBio = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  // Get department color based on name
  const getDepartmentColor = (department: string) => {
    const colors: {[key: string]: string[]} = {
      'Leadership': ['#6366F1', '#A855F7', '#EC4899', '#8B5CF6'], // Purple to pink
      'Design': ['#14B8A6', '#0EA5E9', '#8B5CF6', '#06B6D4'], // Teal to indigo
      'Development': ['#3B82F6', '#8B5CF6', '#EC4899', '#6366F1'], // Blue to purple to pink
      'Marketing': ['#F97316', '#EC4899', '#8B5CF6', '#FBBF24'], // Orange to pink to purple
      'Operations': ['#10B981', '#14B8A6', '#0EA5E9', '#34D399'], // Green to teal to blue
    };
    
    return colors[department] || ['#6366F1', '#8B5CF6', '#EC4899', '#F97316'];
  };

  const renderSocialButtons = (member: TeamMember) => {
    // Count how many social links the member has
    const linkCount = Object.values(member.socialLinks || {}).filter(Boolean).length;
    
    // If no links, don't render anything
    if (linkCount === 0) return null;
    
    return (
      <div className="flex space-x-2 mt-4">
        {member.socialLinks?.linkedin && (
          <IconButton
            icon={<BsLinkedin size={16} />}
            variant="ghost"
            size="sm"
            ariaLabel={`${member.name}'s LinkedIn`}
            hoverEffect="scale"
            className="bg-white/20 hover:bg-white/30 text-white"
            onClick={() => window.open(member.socialLinks?.linkedin, '_blank')}
          />
        )}
        
        {member.socialLinks?.twitter && (
          <IconButton
            icon={<BsTwitterX size={16} />}
            variant="ghost"
            size="sm"
            ariaLabel={`${member.name}'s Twitter`}
            hoverEffect="scale"
            className="bg-white/20 hover:bg-white/30 text-white"
            onClick={() => window.open(member.socialLinks?.twitter, '_blank')}
          />
        )}
        
        {member.socialLinks?.github && (
          <IconButton
            icon={<BsGithub size={16} />}
            variant="ghost"
            size="sm"
            ariaLabel={`${member.name}'s GitHub`}
            hoverEffect="scale"
            className="bg-white/20 hover:bg-white/30 text-white"
            onClick={() => window.open(member.socialLinks?.github, '_blank')}
          />
        )}
        
        {member.socialLinks?.website && (
          <IconButton
            icon={<BsGlobe size={16} />}
            variant="ghost"
            size="sm"
            ariaLabel={`${member.name}'s Website`}
            hoverEffect="scale"
            className="bg-white/20 hover:bg-white/30 text-white"
            onClick={() => window.open(member.socialLinks?.website, '_blank')}
          />
        )}
      </div>
    );
  };

  const renderTeamMemberCard = (member: TeamMember) => {
    const departmentGradient = getDepartmentColor(member.department);
    
    // Card content that's always visible
    const cardContent = (
      <div className="flex flex-col h-full">
        <div className="aspect-[3/4] w-full overflow-hidden relative">
          <Image 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover transition-all duration-500"
            width={300}
            height={500}
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <h3 className="text-lg font-bold text-white">{member.name}</h3>
            <p className="text-white/80 text-xs">{member.position}</p>
          </div>
          <div className="absolute top-3 left-3">
            <Badge className="bg-black/40 backdrop-blur-sm text-white border-none px-2 py-0.5 text-xs">
              {member.department}
            </Badge>
          </div>
        </div>
      </div>
    );
    
    // Hover content that appears on hover
    const hoverContent = (
      <div className="text-white">
        <h3 className="text-xl font-bold mb-1 text-white">
          <GlitchText 
            text={member.name}
            glitchInterval={5000}
            glitchDuration={300}
            color="text-white"
            glitchColor1="text-primary"
            glitchColor2="text-secondary"
          />
        </h3>
        <p className="text-white/80 text-sm mb-2">{member.position}</p>
        <p className="text-white/90 text-sm mb-4">{truncateBio(member.bio, 160)}</p>
        
        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {member.skills.map((skill, index) => (
              <Badge
                key={`${member.id}-skill-${index}`}
                className="bg-white/20 backdrop-blur-sm text-white border-none text-xs py-0.5 px-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
        
        {renderSocialButtons(member)}
      </div>
    );
    
    return (
      <MagneticGradientCard
        key={member.id}
        className="h-full"
        gradientColors={departmentGradient}
        hoverContent={hoverContent}
        magneticStrength={0.04}
        parallaxStrength={20}
        glowStrength={0.7}
        borderStyle="flowing"
      >
        {cardContent}
      </MagneticGradientCard>
    );
  };

  const renderTeamGrid = () => (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={isAnimating ? "hidden" : "show"}
    >
      <AnimatePresence>
        {membersToDisplay.map((member) => (
          <motion.div 
            key={member.id} 
            variants={itemVariants} 
            layout
            className="h-full"
          >
            {renderTeamMemberCard(member)}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
  
  const renderTeamMasonry = () => (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-8">
      {membersToDisplay.map((member, index) => (
        <RevealOnScroll key={member.id} delay={index * 0.05}>
          <div className="break-inside-avoid mb-8">
            {renderTeamMemberCard(member)}
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );

  return (
    <section className={`py-20 bg-background relative overflow-hidden ${className}`}>
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute opacity-10 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
            top: '10%',
            right: '15%',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute opacity-10 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
            bottom: '10%',
            left: '10%',
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Subtle grain texture */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-soft-light"></div>
        
        {/* Radial gradient that follows mouse position */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 25%)",
            transform: useMotionTemplate`translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 shadow-sm shadow-primary/20">Our Team</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Meet
                <span className="relative">
                <span className="text-white mx-3">
              <GlitchText
                text='Our Team'
                className="bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent"
                glitchInterval={5000}
                glitchIntensity={3}
                active={true}
                glitchColor1="text-primary"
                glitchColor2="text-secondary"
              />
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
              </span>
            </h2>
            <p className="text-xl font-semibold mb-4 text-foreground/90">
              {subtitle}
            </p>
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              {truncateBio(description, 160)}
            </p>
          </div>
        </RevealOnScroll>
        
        {showFilters && departmentOptions.length > 2 && (
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12" role="tablist" aria-label="Filter team members by department">
              {departmentOptions.map((department) => {
                const isActive = (department === 'All' && !activeDepartment) || activeDepartment === department;
                const deptColors = department === 'All' 
                  ? ['#6366F1', '#8B5CF6', '#EC4899'] 
                  : getDepartmentColor(department);
                  
                return (
                  <motion.div
                    key={`department-${department}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive ? (
                      <div 
                        className="relative py-1.5 px-4 rounded-full text-sm font-medium overflow-hidden shadow-md shadow-primary/20"
                      >
                        <div 
                          className="absolute inset-0 animate-gradient-xy" 
                          style={{
                            background: `linear-gradient(90deg, ${deptColors.join(', ')})`,
                            backgroundSize: '200% 200%'
                          }}
                        />
                        <div className="relative z-10 text-white flex items-center">
                          {department === 'All' ? (
                            <>
                              <BsStarFill className="mr-1.5 text-xs opacity-70" />
                              {department}
                            </>
                          ) : department}
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => onDepartmentChange(department === 'All' ? null : department)}
                        className="py-1.5 px-4 rounded-full bg-foreground/5 text-foreground/70 hover:bg-foreground/10 text-sm font-medium transition-all shadow-sm hover:shadow"
                        role="tab"
                        aria-selected={false}
                      >
                        {department}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </RevealOnScroll>
        )}
        
        <div className="mt-8">
          {layout === 'grid' && renderTeamGrid()}
          {layout === 'masonry' && renderTeamMasonry()}
        </div>
        
        {!showAllTeam && teamMembers.length > highlightedMemberCount && (
          <div className="mt-16 text-center">
            <ShinyBorderButton
              onClick={() => window.location.href = '/about'}
              size="md"
              variant="primary"
              className="py-3 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-medium"
              gradientColors={['#6366F1', '#8B5CF6', '#EC4899', '#F97316']}
            >
              Meet the Entire Team
              <BsArrowRightShort className="ml-1 text-xl inline-block" />
            </ShinyBorderButton>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes gradient-xy {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
    </section>
  );
} 