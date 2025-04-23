import React from 'react';
import { Metadata } from 'next';
import GridPattern from '@/components/ui/GridPattern';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import Accordion from '@/components/ui/Accordion';
import Divider from '@/components/ui/Divider';
import Badge from '@/components/ui/Badge';
import Link from '@/components/ui/Link';
import GlitchText from '@/components/ui/GlitchText';
import MagneticButton from '@/components/ui/MagneticButton';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import GlowButton from '@/components/ui/GlowButton';

export const metadata: Metadata = {
  title: 'Terms of Service | RTN Global',
  description: 'RTN Global Terms of Service. Please read these terms carefully before using our services.',
  openGraph: {
    title: 'Terms of Service | RTN Global',
    description: 'RTN Global Terms of Service. Please read these terms carefully before using our services.',
    url: 'https://rtnglobal.co/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | RTN Global',
    description: 'RTN Global Terms of Service. Please read these terms carefully before using our services.',
  },
  alternates: {
    canonical: 'https://rtnglobal.co/terms',
  },
  keywords: ['terms of service', 'terms and conditions', 'legal', 'RTN Global', 'services agreement'],
};

// Terms of Service sections
const termsOfServiceSections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: (
      <div className="space-y-4">
        <p>Welcome to RTN Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website, services, applications, or any other content provided by RTN Global (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).</p>
        <p>Please read these Terms carefully before using our Services. If you do not agree to these Terms, you may not access or use the Services.</p>
        <Badge variant="outline" className="mt-4">Last Updated: May 15, 2024</Badge>
      </div>
    )
  },
  {
    id: 'services',
    title: 'Services Description',
    content: (
      <div className="space-y-4">
        <p>RTN Global provides web design, development, digital marketing, and related services as described on our website and in our client agreements.</p>
        <p>We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice.</p>
      </div>
    )
  },
  {
    id: 'accounts',
    title: 'User Accounts and Responsibilities',
    content: (
      <div className="space-y-4">
        <p>Some of our Services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        <p>You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
        <p>We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, not current, or incomplete.</p>
      </div>
    )
  },
  {
    id: 'ip',
    title: 'Intellectual Property Rights',
    content: (
      <div className="space-y-4">
        <p>All content included in or made available through our Services, including text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of RTN Global or its content suppliers and is protected by international copyright laws.</p>
        <p>Upon full payment for our Services, clients will be granted rights to the deliverables as specified in their individual client agreements.</p>
        <p>We retain all rights, title, and interest in and to our proprietary tools, methods, and processes used to create the deliverables.</p>
      </div>
    )
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    content: (
      <div className="space-y-4">
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RTN GLOBAL AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>
        <p>IN NO EVENT WILL RTN GLOBAL&apos;S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID TO RTN GLOBAL IN THE LAST SIX (6) MONTHS, OR $100 IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO RTN GLOBAL.</p>
      </div>
    )
  },
  {
    id: 'governing-law',
    title: 'Governing Law and Dispute Resolution',
    content: (
      <div className="space-y-4">
        <p>These Terms shall be governed by and construed in accordance with the laws of the State of New Mexico, without regard to its conflict of law principles.</p>
        <p>Any dispute arising out of or relating to these Terms or our Services shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association.</p>
        <p>The arbitration shall be conducted in Albuquerque, New Mexico, and judgment on the arbitration award may be entered in any court having jurisdiction thereof.</p>
      </div>
    )
  },
  {
    id: 'modifications',
    title: 'Modifications to Terms',
    content: (
      <div className="space-y-4">
        <p>We reserve the right to modify these Terms at any time. If we make changes to these Terms, we will provide notice of such changes by updating the date at the top of these Terms and by maintaining a current version of the Terms at https://rtnglobal.co/terms.</p>
        <p>Your continued use of our Services after any such change constitutes your acceptance of the new Terms.</p>
      </div>
    )
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: (
      <div className="space-y-4">
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>
          RTN Global<br />
          1209 MOUNTAIN ROAD PLNE, STE R<br />
          ALBUQUERQUE, NM 87110<br />
          Email: info@rtnglobal.co<br />
          Phone: +1 (505) 528-6780
        </p>
      </div>
    )
  }
];

export default function TermsPage() {
  // Breadcrumb items for schema
  const breadcrumbItems = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Terms of Service', url: 'https://rtnglobal.co/terms' },
  ];

  return (
    <>
      {/* JSON-LD structured data */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      <TransitionWrapper>
        <main className="min-h-screen bg-background relative">
          {/* Background grid pattern */}
          <GridPattern 
            dotColor="rgba(255,255,255,0.3)" 
            size={40} 
            dotSize={1} 
            backgroundOpacity={0.03} 
            className="fixed inset-0 z-0 pointer-events-none"
          />
          
          {/* Main content */}
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            {/* Header */}
            <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">
            <span className="relative">
            <span className="text-white ml-5"><GlitchText text="Terms of Service" /></span>
            <span className="absolute -bottom-1 left-5 w-full h-[3px] bg-gradient-to-r from-primary via-primary/80 to-secondary"></span>
            </span>
             </h1>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. These terms establish the rules and regulations for the use of RTN Global&apos;s website and services.
              </p>
            </div>

            {/* Last updated timestamp */}
            <div className="flex justify-center mb-10">
              <Badge variant="outline" className="text-sm py-1 px-3">
                Last Updated: May 15, 2024
              </Badge>
            </div>
            
            {/* Terms sections */}
            <div className="max-w-4xl mx-auto">
              <Accordion 
                items={termsOfServiceSections} 
                type="single" 
                collapsible={true} 
                className="w-full mb-10" 
              />
              
              <Divider className="my-10" />
              
              {/* Footer CTA */}
              <div className="text-center mt-10">
                <p className="mb-6 text-foreground/70">
                  Have questions about our terms? We&apos;re here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GlowButton variant="outline" className='text-forground'>
                    <Link href="/contact" className="no-underline text-forground">
                      Contact Us
                    </Link>
                  </GlowButton>
                  <MagneticButton variant="default" className='text-forground'>
                    <Link href="/privacy" className="no-underline text-forground">
                      Privacy Policy
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </main>
      </TransitionWrapper>
    </>
  );
}
