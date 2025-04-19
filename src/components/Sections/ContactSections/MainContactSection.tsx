'use client';

import React from 'react';
import ContactSection from '@/components/Sections/reusableSections/ContactSection';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import Divider from '@/components/ui/Divider';
import Badge from '@/components/ui/Badge';
import GlitchText from '@/components/ui/GlitchText';
import ZoomOnHover from '@/components/animations/ZoomOnHover';
import ShinyBorderButton from '@/components/ui/ShinyBorderButton';
import Image from 'next/image';


export default function MainContactSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with more visual elements and interactive design */}
      <section className="py-16 md:py-16 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] right-[10%] w-[50%] h-[60%] bg-primary/10 rounded-full blur-[120px] opacity-80 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[60%] bg-secondary/10 rounded-full blur-[120px] opacity-80 animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-soft-light"></div>
        
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-20 items-center">
            <RevealOnScroll>
              <div className="lg:pr-10">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Contact Us</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent leading-tight">
                  Ready to <span className="relative text-white">
                    <GlitchText text="Transform" />
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                  </span> Your Digital Presence?
                </h1>
                <p className="text-foreground/80 text-xl max-w-2xl mb-8">
                  Our team of experts is ready to help bring your vision to life. Let&apos;s start the conversation and create something extraordinary together.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <ShinyBorderButton className="scale-100 hover:scale-105 transition-all duration-300">
                    <a href="#contact-form" className="flex items-center">
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ShinyBorderButton>
                  
                  <ZoomOnHover>
                    <a 
                      href="tel:+18001234567" 
                      className="flex items-center justify-center px-5 py-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 font-medium transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Us: (800) 123-4567
                    </a>
                  </ZoomOnHover>
                </div>
                
                <div className="mt-12 flex items-center space-x-6">
                  <div className="flex -space-x-2">
                    <Image src="https://randomuser.me/api/portraits/women/79.jpg" alt="Team member" className="w-10 h-10 rounded-full border-2 border-background" width={100} height={100}  />
                    <Image src="https://randomuser.me/api/portraits/men/54.jpg" alt="Team member" className="w-10 h-10 rounded-full border-2 border-background" width={100} height={100}  />
                    <Image src="https://randomuser.me/api/portraits/women/45.jpg" alt="Team member" className="w-10 h-10 rounded-full border-2 border-background" width={100} height={100}  />
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium border-2 border-background">+12</div>
                  </div>
                  <div className="text-sm text-foreground/80">Our team is ready to help you succeed</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Trust indicators */}
          <RevealOnScroll delay={0.3}>
            <div className="mt-16 lg:mt-24">
              <div className="text-center text-foreground/60 text-sm mb-4">TRUSTED BY INDUSTRY LEADERS</div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <Image src="https://dummyimage.com/100x40/cccccc/666666&text=Company+1" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
                <Image src="https://dummyimage.com/100x40/cccccc/666666&text=Company+2" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
                <Image src="https://dummyimage.com/100x40/cccccc/666666&text=Company+3" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
                <Image src="https://dummyimage.com/100x40/cccccc/666666&text=Company+4" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
                <Image src="https://dummyimage.com/100x40/cccccc/666666&text=Company+5" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      <Divider className="opacity-50" />
      
      {/* Main Contact Section */}
      <div id="contact-form">
        <ContactSection 
          title="Get in Touch"
          subtitle="Ready to elevate your digital presence? We're here to help you transform your ideas into reality."
          email="hello@rtndigital.com"
          phone="+1 (800) 123-4567"
          address="1234 Digital Avenue, Tech District, San Francisco, CA 94105"
          className="pb-16"
        />
      </div>
      
      <Divider className="opacity-50" />
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background/95 via-background to-background/95 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-[120px] opacity-70" />
          <div className="absolute bottom-[10%] right-[5%] w-[25%] h-[30%] bg-secondary/5 rounded-full blur-[100px] opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">FAQ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">Frequently Asked <span className="text-white"><GlitchText text="Questions" /></span></h2>
              <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
                Find quick answers to common questions about our services and process.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RevealOnScroll delay={0.1}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">What services do you offer?</h3>
                <p className="text-foreground/80">
                  We offer a comprehensive range of digital services including web development, UI/UX design, e-commerce solutions, mobile app development, branding, and digital marketing strategies.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">How much does a typical project cost?</h3>
                <p className="text-foreground/80">
                  Project costs vary based on scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements. We&apos;re transparent about pricing and work within various budgets.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">What is your typical project timeline?</h3>
                <p className="text-foreground/80">
                  Timelines vary based on project complexity. Simple websites might take 2-4 weeks, while complex web applications could take 2-6 months. We&apos;ll provide a detailed timeline during our initial consultation.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white">Do you provide ongoing support?</h3>
                <p className="text-foreground/80">
                  Yes, we offer various maintenance and support packages to keep your digital products running smoothly. Our team is available for updates, security patches, and feature enhancements.
                </p>
              </div>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll delay={0.5}>
            <div className="text-center mt-12">
              <p className="text-foreground/80 mb-6">Don&apos;t see your question here?</p>
              <ZoomOnHover>
                <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
                  Ask Us Directly
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </ZoomOnHover>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      <Divider className="opacity-50" />
      
      {/* Office Locations Section */}
      <section className="py-20 bg-gradient-to-b from-background/90 via-background to-background/90 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-primary/5 to-transparent opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Locations</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
                Visit Our <span className="text-white"><GlitchText text="Offices" /></span>
              </h2>
              <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
                We have offices in key locations to better serve our global clients.
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealOnScroll delay={0.1}>
              <ZoomOnHover>
                <div className="dark-card rounded-2xl overflow-hidden border border-foreground/5 h-full">
                  <div className="h-48 overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="San Francisco Office"
                      className="w-full h-full object-cover object-center"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">San Francisco</h3>
                    <p className="text-foreground/80 mb-4">
                      1234 Digital Avenue<br />
                      Tech District<br />
                      San Francisco, CA 94105
                    </p>
                    <p className="text-primary">+1 (800) 123-4567</p>
                  </div>
                </div>
              </ZoomOnHover>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <ZoomOnHover>
                <div className="dark-card rounded-2xl overflow-hidden border border-foreground/5 h-full">
                  <div className="h-48 overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" 
                      alt="New York Office"
                      className="w-full h-full object-cover object-center"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">New York</h3>
                    <p className="text-foreground/80 mb-4">
                      567 Innovation Plaza<br />
                      Midtown<br />
                      New York, NY 10001
                    </p>
                    <p className="text-primary">+1 (800) 987-6543</p>
                  </div>
                </div>
              </ZoomOnHover>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <ZoomOnHover>
                <div className="dark-card rounded-2xl overflow-hidden border border-foreground/5 h-full">
                  <div className="h-48 overflow-hidden">
                      <Image 
                      src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="London Office"
                      className="w-full h-full object-cover object-center"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">London</h3>
                    <p className="text-foreground/80 mb-4">
                      42 Tech Boulevard<br />
                      Shoreditch<br />
                      London, EC2A 4BQ
                    </p>
                    <p className="text-primary">+44 20 1234 5678</p>
                  </div>
                </div>
              </ZoomOnHover>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
} 