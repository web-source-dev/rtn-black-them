'use client';

import React from 'react';
import GlowButton from '@/components/ui/GlowButton';
import Divider from '@/components/ui/Divider';
import GlitchText from '@/components/ui/GlitchText';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import MagneticButton from '@/components/ui/MagneticButton';

export interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  address?: string;
  className?: string;
}

export default function ContactSection({
  subtitle = "Ready to bring your digital vision to life? Let's talk about how we can help.",
  email = "contact@rtndigital.com",
  phone = "+1 (555) 123-4567",
  address = "123 Digital Way, Tech City, TC 12345",
  className = "",
}: ContactSectionProps) {
  return (
    <section className={`py-28 bg-gradient-to-b from-background/95 via-background to-background/95 relative ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[100px] opacity-70" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[40%] h-[60%] bg-secondary/5 rounded-full blur-[100px] opacity-70" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact information */}
          <RevealOnScroll>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl mb-6 md:text-5xl font-bold">
                Get in
                <span className="relative">
                <span className="text-white mx-3"><GlitchText text="Touch" /></span>
                <span className="absolute -bottom-1 left-2 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                </span>
                </h2>
                <p className="text-foreground/80 text-xl">
                  {subtitle}
                </p>
              </div>
              
              <Divider className="my-8 opacity-30" />
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <a href={`mailto:${email}`} className="text-primary hover:text-primary/80 transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-secondary/20 text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-secondary hover:text-secondary/80 transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-accent/20 text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-foreground/80">
                      {address}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <GlowButton>
                  Schedule a Call
                </GlowButton>
                <MagneticButton variant="outline" className="dark-card text-white border-primary/20 hover:border-primary/40 hover:bg-background/80 py-2.5 px-6 rounded-full">
                  View Our Work
                </MagneticButton>
              </div>
            </div>
          </RevealOnScroll>
          
          {/* Contact form */}
          <TransitionWrapper>
            <div className="relative">
              <div className="relative z-10 dark-card rounded-2xl p-8 md:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5 transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full bg-background/30 border border-border/40 focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2.5 transition-colors"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <GlowButton className="w-full">
                    Send Message
                  </GlowButton>
                </form>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-xl z-0 opacity-80"></div>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-secondary/20 rounded-full blur-xl z-0 opacity-80"></div>
            </div>
          </TransitionWrapper>
        </div>
      </div>
    </section>
  );
} 