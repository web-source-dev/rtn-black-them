'use client';

import React from 'react';
import GlowButton from '@/components/ui/GlowButton';
import MagneticButton from '@/components/ui/MagneticButton';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import AmbientLightEffect from '@/components/animations/AmbientLightEffect';
import GlitchTitle from '@/components/ui/GlitchTitle';
export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
  className?: string;
  variant?: 'default' | 'gradient' | 'border';
}

export default function CTASection({
  title = "Ready to",
  subtitle = "Let's build something amazing together. Our team of experts is ready to take your project to the next level.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "View Our Work",
  primaryButtonLink = "/contact",
  secondaryButtonLink = "/portfolio",
  className = "",
  variant = 'default',
}: CTASectionProps) {
  
  let containerClasses = "py-28 relative overflow-hidden";
  const contentClasses = "relative z-10 text-center";
  
  // Apply styling based on variant
  switch (variant) {
    case 'gradient':
      containerClasses += " bg-background";
      break;
    case 'border':
      containerClasses += " bg-background";
      break;
    default:
      containerClasses += " bg-background";
      break;
  }

  return (
    <section className={`${containerClasses} ${className}`}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
     
        {variant === 'default' && (
          <>
            <div className="absolute top-1/4 left-0 w-20 h-20 rounded-full bg-primary/20 blur-3xl opacity-70" />
            <div className="absolute bottom-1/4 right-0 w-32 h-32 rounded-full bg-secondary/20 blur-3xl opacity-70" />
          </>
        )}
      </div>
      
      <AmbientLightEffect color="rgba(138, 92, 245, 0.15)" size={400} blur={80}>
        <div className="container mx-auto px-4">
          <RevealOnScroll className={contentClasses}>
            <div className="max-w-4xl mx-auto space-y-6">
              <GlitchTitle title={title} />
              
              <p className="text-foreground/80 text-xl mx-auto max-w-3xl">
                {subtitle}
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                <GlowButton onClick={() => window.location.href = primaryButtonLink}>
                  {primaryButtonText}
                </GlowButton>
                
                <MagneticButton onClick={() => window.location.href = secondaryButtonLink} className="dark-card border-primary/20 hover:border-primary/40 hover:bg-background/80 py-2.5 px-6 rounded-full">
                  {secondaryButtonText}
                </MagneticButton>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </AmbientLightEffect>
      
      {/* Decorative grid */}
      {variant === 'default' && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      )}
    </section>
  );
} 