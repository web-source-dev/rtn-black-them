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
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] right-[10%] w-[50%] h-[60%] bg-primary/10 rounded-full blur-[120px] opacity-80 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[60%] bg-secondary/10 rounded-full blur-[120px] opacity-80 animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-soft-light"></div>
          {/* Added animated particles for more dynamic background */}
          <div className="absolute inset-0 bg-[url('/particles.svg')] opacity-[0.05] animate-slow-drift"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <RevealOnScroll>
              <div className="lg:pr-10">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 animate-pulse-subtle">Contact Us</Badge>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent leading-tight">
                  Let&apos;s <span className="relative text-white">
                    <GlitchText text="Connect" />
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
                  </span> & Create Together
                </h1>
                <p className="text-foreground/80 text-xl max-w-2xl mb-8">
                  Our team is excited to hear about your project. We&apos;re committed to providing innovative solutions tailored to your specific needs and goals.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <ShinyBorderButton className="scale-100 hover:scale-105 transition-all duration-300">
                    <a href="#contact-form" className="flex items-center">
                      Start Your Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </ShinyBorderButton>
                  
                  <ZoomOnHover>
                    <a 
                      href="tel:+15055286780"
                      className="flex items-center justify-center px-5 py-2.5 rounded-full bg-foreground/5 text-foreground hover:bg-foreground/10 font-medium transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Us: +1 (505) 528-6780
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
                  <div className="text-sm text-foreground/80">Our talented team is ready to bring your vision to life</div>
                </div>
              </div>
            </RevealOnScroll>
            
            {/* Added illustration/image for visual appeal */}
            <RevealOnScroll delay={0.3}>
              <div className="hidden lg:block relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[50px]"></div>
                <div className="relative z-10 bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl p-2 backdrop-blur-sm border border-foreground/10">
                  <Image 
                    src="/contact-illustration.svg" 
                    alt="Contact illustration" 
                    width={600} 
                    height={500} 
                    className="w-full h-auto rounded-xl object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://dummyimage.com/600x500/404040/ffffff&text=Connect+With+Us";
                    }}
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Trust indicators with improved styling */}
          <RevealOnScroll delay={0.3}>
            <div className="mt-16 lg:mt-24">
              <div className="text-center text-foreground/60 text-sm mb-4">TRUSTED BY INDUSTRY LEADERS</div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <Image src="/industry/employ_me.avif" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
                <Image src="/industry/Nmga.png" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
                <Image src="/industry/stabm.avif" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
                <Image src="/industry/Harmony 4 All logo.avif" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
                <Image src="/industry/tourprism.png" alt="Company logo" className="h-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" width={100} height={40} />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      <Divider className="opacity-50" />
      
      {/* Enhanced Contact Section with Feature Cards */}
      <div className="bg-gradient-to-b from-background via-background/98 to-background relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[30%] right-[20%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[150px] opacity-70"></div>
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Get in Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
                How Can We <span className="text-white"><GlitchText text="Help You" /></span>?
              </h2>
              <p className="text-foreground/80 text-xl max-w-3xl mx-auto mb-12">
                Whether you have a question about our services, pricing, or just want to say hello, we&apos;re here for you.
              </p>
            </div>
          </RevealOnScroll>
          
          {/* Feature cards for why contact us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <RevealOnScroll delay={0.1}>
              <div className="dark-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300 h-full flex flex-col">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Fast Response</h3>
                <p className="text-foreground/80 flex-grow">
                  Our team typically responds within 2-4 hours during business hours. We&apos;re committed to prompt, helpful communication.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="dark-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300 h-full flex flex-col">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Secure Communication</h3>
                <p className="text-foreground/80 flex-grow">
                  Your information is kept confidential and secure. We take data privacy seriously and comply with all relevant regulations.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <div className="dark-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300 h-full flex flex-col">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">24/7 Availability</h3>
                <p className="text-foreground/80 flex-grow">
                  While our main hours are 9am-6pm, our system receives messages 24/7, and urgent matters are flagged for immediate attention.
                </p>
              </div>
            </RevealOnScroll>
          </div>
          <div id="contact-form">
          
          <ContactSection 
            title="Send Us a Message"
            subtitle="Fill out the form below and we'll get back to you as soon as possible."
            email="info@rtnglobal.co"
            phone="+1 (505) 528-6780"
            address="1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM 87110, US"
            className="pb-16"
          />
          </div>
          {/* Added quick contact options */}
          <RevealOnScroll delay={0.3}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="mailto:info@rtnglobal.co" className="group flex items-center p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-all border border-foreground/5 backdrop-blur-sm">
                <div className="mr-4 rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Email Us</h3>
                  <p className="text-primary">info@rtnglobal.co</p>
                </div>
              </a>
              
              <a href="tel:+15055286780" className="group flex items-center p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-all border border-foreground/5 backdrop-blur-sm">
                <div className="mr-4 rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Call Us</h3>
                  <p className="text-primary">+1 (505) 528-6780</p>
                </div>
              </a>
              
              <a href="https://calendly.com/rtnglobal" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-all border border-foreground/5 backdrop-blur-sm">
                <div className="mr-4 rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Schedule a Call</h3>
                  <p className="text-primary">Book a time that works for you</p>
                </div>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
      
      <Divider className="opacity-50" />
      
      {/* Enhanced FAQ Section */}
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
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                  <span className="text-primary mr-2">Q:</span>
                  What services do you offer?
                </h3>
                <p className="text-foreground/80 pl-6">
                  We offer a comprehensive range of digital services including web development, UI/UX design, e-commerce solutions, mobile app development, branding, and digital marketing strategies.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                  <span className="text-primary mr-2">Q:</span>
                  How much does a typical project cost?
                </h3>
                <p className="text-foreground/80 pl-6">
                  Project costs vary based on scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements. We&apos;re transparent about pricing and work within various budgets.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                  <span className="text-primary mr-2">Q:</span>
                  What is your typical project timeline?
                </h3>
                <p className="text-foreground/80 pl-6">
                  Timelines vary based on project complexity. Simple websites might take 2-4 weeks, while complex web applications could take 2-6 months. We&apos;ll provide a detailed timeline during our initial consultation.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                  <span className="text-primary mr-2">Q:</span>
                  Do you provide ongoing support?
                </h3>
                <p className="text-foreground/80 pl-6">
                  Yes, we offer various maintenance and support packages to keep your digital products running smoothly. Our team is available for updates, security patches, and feature enhancements.
                </p>
              </div>
            </RevealOnScroll>
            
            {/* Added two more FAQs */}
            <RevealOnScroll delay={0.5}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                  <span className="text-primary mr-2">Q:</span>
                  What is your design process?
                </h3>
                <p className="text-foreground/80 pl-6">
                  Our design process begins with discovery and research, followed by wireframing, prototyping, and visual design. We involve clients throughout the process, gathering feedback at each stage to ensure the final product meets expectations.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.6}>
              <div className="dark-card rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 border border-foreground/5 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-white flex items-center">
                  <span className="text-primary mr-2">Q:</span>
                  Do you work with clients internationally?
                </h3>
                <p className="text-foreground/80 pl-6">
                  Yes, we work with clients globally. Our digital collaboration tools and flexible scheduling accommodate different time zones, making it easy to work together regardless of location.
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
      
      {/* Enhanced Office Locations Section */}
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
          
          <RevealOnScroll delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ZoomOnHover>
                <div className="dark-card rounded-2xl overflow-hidden border border-foreground/5 h-full col-span-1">
                  <div className="h-48 overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="ALBUQUERQUE Office"
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">ALBUQUERQUE</h3>
                    <p className="text-foreground/80 mb-4">
                      1209 MOUNTAIN ROAD PLNE, STE R<br />
                      ALBUQUERQUE, NM 87110
                    </p>
                    <div className="flex items-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +1 (505) 528-6780
                    </div>
                  </div>
                </div>
              </ZoomOnHover>
            </div>
          </RevealOnScroll>
          
          {/* Call to action */}
          <RevealOnScroll delay={0.3}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-background/50 via-foreground/10 to-background/50 backdrop-blur-sm rounded-2xl p-8 border border-foreground/10 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold mb-3 text-white">Ready to Start Your Project?</h3>
                <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                  Let&apos;s bring your vision to life. Our team is ready to help you create something extraordinary.
                </p>
                <ZoomOnHover>
                  <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
                    Get in Touch Today
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </ZoomOnHover>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
} 