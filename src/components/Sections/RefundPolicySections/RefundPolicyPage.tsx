'use client';

import React from 'react';
import Badge from '@/components/ui/Badge';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[50%] bg-primary/5 rounded-full blur-[120px] opacity-70" />
          <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[40%] bg-secondary/5 rounded-full blur-[100px] opacity-70" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Legal</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
                <span className="text-white">
                  <GlitchText 
                    text="Refund Policy"
                    className="bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent"
                  />
                </span>
              </h1>
              <p className="text-foreground/80 text-xl max-w-3xl mx-auto mb-8">
                Our commitment to transparency and fairness in all refund matters
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-1 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.02] mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              
              <RevealOnScroll>
                <div className="bg-foreground/5 rounded-2xl p-8 border border-foreground/10 mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
                  <p className="text-foreground/80 mb-0">
                    At RTN Global, we strive to deliver exceptional digital services that meet and exceed our clients' expectations. 
                    This refund policy outlines the terms and conditions under which refunds may be requested and processed for our services.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary text-sm font-bold">1</span>
                    Service Categories
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                      <h3 className="text-xl font-semibold mb-3 text-white">Web Development Services</h3>
                      <p className="text-foreground/80 mb-3">
                        Custom website development, web applications, and e-commerce solutions.
                      </p>
                      <ul className="list-disc list-inside text-foreground/70 space-y-1">
                        <li>Refunds available within 14 days of project initiation</li>
                        <li>50% refund if less than 25% of work is completed</li>
                        <li>No refund if more than 50% of work is completed</li>
                      </ul>
                    </div>

                    <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                      <h3 className="text-xl font-semibold mb-3 text-white">Design Services</h3>
                      <p className="text-foreground/80 mb-3">
                        UI/UX design, branding, and graphic design services.
                      </p>
                      <ul className="list-disc list-inside text-foreground/70 space-y-1">
                        <li>Full refund if initial concepts are rejected within 7 days</li>
                        <li>Partial refund (75%) if revisions haven't started</li>
                        <li>No refund after final designs are delivered</li>
                      </ul>
                    </div>

                    <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                      <h3 className="text-xl font-semibold mb-3 text-white">Digital Marketing Services</h3>
                      <p className="text-foreground/80 mb-3">
                        SEO, social media marketing, and digital advertising services.
                      </p>
                      <ul className="list-disc list-inside text-foreground/70 space-y-1">
                        <li>Refunds available for unused monthly retainer amounts</li>
                        <li>No refund for completed campaign work</li>
                        <li>30-day notice required for service cancellation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary text-sm font-bold">2</span>
                    Refund Eligibility
                  </h2>
                  
                  <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                    <h3 className="text-xl font-semibold mb-4 text-white">You may be eligible for a refund if:</h3>
                    <ul className="list-disc list-inside text-foreground/80 space-y-2">
                      <li>Services were not delivered as specified in the signed agreement</li>
                      <li>Project is cancelled within the specified timeframe for your service type</li>
                      <li>We are unable to deliver the agreed-upon services due to technical limitations</li>
                      <li>There was an error in billing or duplicate charges</li>
                      <li>Services were cancelled due to our inability to meet project requirements</li>
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary text-sm font-bold">3</span>
                    Non-Refundable Items
                  </h2>
                  
                  <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                    <h3 className="text-xl font-semibold mb-4 text-white">The following are not eligible for refunds:</h3>
                    <ul className="list-disc list-inside text-foreground/80 space-y-2">
                      <li>Third-party costs (domain names, hosting, licenses, stock photos)</li>
                      <li>Completed and delivered work that meets project specifications</li>
                      <li>Services cancelled after the specified refund period</li>
                      <li>Custom development work that has been integrated into your systems</li>
                      <li>Training sessions or consultations that have been completed</li>
                      <li>Rush or expedited service fees</li>
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.4}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary text-sm font-bold">4</span>
                    Refund Process
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                      <h3 className="text-xl font-semibold mb-3 text-white">How to Request a Refund</h3>
                      <ol className="list-decimal list-inside text-foreground/80 space-y-2">
                        <li>Contact us at <a href="mailto:info@rtnglobal.co" className="text-primary hover:text-primary/80">info@rtnglobal.co</a> with your refund request</li>
                        <li>Include your project details, invoice number, and reason for the refund</li>
                        <li>Provide any relevant documentation or evidence</li>
                        <li>Our team will review your request within 3-5 business days</li>
                        <li>You will receive a written response regarding the decision</li>
                      </ol>
                    </div>

                    <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                      <h3 className="text-xl font-semibold mb-3 text-white">Processing Timeline</h3>
                      <ul className="list-disc list-inside text-foreground/80 space-y-2">
                        <li>Approved refunds will be processed within 7-10 business days</li>
                        <li>Refunds will be issued to the original payment method</li>
                        <li>Bank processing times may vary (3-5 additional business days)</li>
                        <li>You will receive email confirmation once the refund is processed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.5}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary text-sm font-bold">5</span>
                    Dispute Resolution
                  </h2>
                  
                  <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                    <p className="text-foreground/80 mb-4">
                      If you disagree with our refund decision, we encourage you to contact us for further discussion. 
                      We are committed to finding fair solutions for all parties involved.
                    </p>
                    <p className="text-foreground/80">
                      For unresolved disputes, you may seek resolution through:
                    </p>
                    <ul className="list-disc list-inside text-foreground/80 space-y-1 mt-3">
                      <li>Mediation services</li>
                      <li>Better Business Bureau</li>
                      <li>Local consumer protection agencies</li>
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.6}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 text-primary text-sm font-bold">6</span>
                    Contact Information
                  </h2>
                  
                  <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                    <p className="text-foreground/80 mb-4">
                      For any questions about this refund policy or to request a refund, please contact us:
                    </p>
                    <div className="space-y-2 text-foreground/80">
                      <p><strong className="text-white">Email:</strong> <a href="mailto:info@rtnglobal.co" className="text-primary hover:text-primary/80">info@rtnglobal.co</a></p>
                      <p><strong className="text-white">Address:</strong> 1209 MOUNTAIN ROAD PLNE, STE R, ALBUQUERQUE, NM 87110, US</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.7}>
                <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10">
                  <h3 className="text-lg font-semibold mb-3 text-white">Policy Updates</h3>
                  <p className="text-foreground/80 text-sm">
                    RTN Global reserves the right to update this refund policy at any time. 
                    Changes will be posted on our website and clients will be notified of significant changes. 
                    Continued use of our services after policy changes constitutes acceptance of the updated terms.
                  </p>
                </div>
              </RevealOnScroll>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}