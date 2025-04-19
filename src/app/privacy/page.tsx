import React from 'react';
import { Metadata } from 'next';
import GridPattern from '@/components/ui/GridPattern';
import TransitionWrapper from '@/components/animations/TransitionWrapper';
import Divider from '@/components/ui/Divider';
import Badge from '@/components/ui/Badge';
import Link from '@/components/ui/Link';
import GlitchText from '@/components/ui/GlitchText';
import MagneticButton from '@/components/ui/MagneticButton';
import Tooltip from '@/components/ui/Tooltip';
import { BreadcrumbJsonLd } from '@/components/utils/JsonLd';
import MagneticGradientCard from '@/components/ui/MagneticGradientCard';
import GlowButton from '@/components/ui/GlowButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | RTN Global',
  description: 'RTN Global Privacy Policy. Learn how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | RTN Global',
    description: 'RTN Global Privacy Policy. Learn how we collect, use, and protect your personal information.',
    url: 'https://rtnglobal.co/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | RTN Global',
    description: 'RTN Global Privacy Policy. Learn how we collect, use, and protect your personal information.',
  },
  alternates: {
    canonical: 'https://rtnglobal.co/privacy',
  },
  keywords: ['privacy policy', 'data protection', 'personal information', 'RTN Global', 'privacy', 'GDPR', 'CCPA'],
};

// Privacy Policy sections
const privacyPolicySections = [
  {
    title: 'Information We Collect',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <p>We may collect the following personal information:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Contact information (name, email address, phone number)</li>
            <li>Billing information and payment details</li>
            <li>Account credentials</li>
            <li>Communications and feedback you provide to us</li>
            <li>Information you provide when completing forms on our website</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Usage Data</h3>
          <p>We may also collect information about how you access and use our Services:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages you visit and features you use on our website</li>
            <li>Time and date of your visits</li>
            <li>Referring website or application</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: 'How We Use Your Information',
    content: (
      <div className="space-y-4">
        <p>We use the information we collect for various purposes, including to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide, maintain, and improve our Services</li>
          <li>Process transactions and send related information</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Send you technical notices, updates, security alerts, and support messages</li>
          <li>Communicate with you about products, services, offers, and events</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          <li>Personalize and improve your experience with our Services</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Information Sharing and Disclosure',
    content: (
      <div className="space-y-4">
        <p>We may share your personal information in the following situations:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us.</li>
          <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
          <li><strong>Legal Obligations:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.</li>
          <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </div>
    )
  },
  {
    title: 'Cookies and Tracking Technologies',
    content: (
      <div className="space-y-4">
        <p>We use cookies and similar tracking technologies to track activity on our Services and hold certain information.</p>
        <p>Cookies are files with a small amount of data that may include an anonymous unique identifier. We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>To understand and save user preferences</li>
          <li>To keep users logged in and authenticate users</li>
          <li>To gather analytics data about how users interact with our Services</li>
          <li>To provide targeted advertisements</li>
        </ul>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.</p>
      </div>
    )
  },
  {
    title: 'Data Security',
    content: (
      <div className="space-y-4">
        <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
        <p>We strive to use commercially acceptable means to protect your personal information, but we cannot guarantee its absolute security. If you have reason to believe that your interaction with us is no longer secure, please immediately notify us.</p>
      </div>
    )
  },
  {
    title: 'Your Data Protection Rights',
    content: (
      <div className="space-y-4">
        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Access:</strong> You have the right to request copies of your personal information.</li>
          <li><strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li><strong>Erasure:</strong> You have the right to request that we erase your personal information under certain conditions.</li>
          <li><strong>Restrict processing:</strong> You have the right to request that we restrict the processing of your personal information under certain conditions.</li>
          <li><strong>Object to processing:</strong> You have the right to object to our processing of your personal information under certain conditions.</li>
          <li><strong>Data portability:</strong> You have the right to request that we transfer the data we have collected to another organization or directly to you under certain conditions.</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.</p>
      </div>
    )
  },
  {
    title: 'Children\'s Privacy',
    content: (
      <div className="space-y-4">
        <p>Our Services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.</p>
      </div>
    )
  },
  {
    title: 'Changes to This Privacy Policy',
    content: (
      <div className="space-y-4">
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top of this Privacy Policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      </div>
    )
  },
  {
    title: 'Contact Us',
    content: (
      <div className="space-y-4">
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>
          RTN Global<br />
          1209 MOUNTAIN ROAD PLNE, STE R<br />
          ALBUQUERQUE, NM 87110<br />
          Email: info@rtnglobal.site<br />
          Phone: +1 505 528 6780
        </p>
      </div>
    )
  }
];

// Privacy Policy summaries for cards
const privacySummaries = [
  {
    title: "Data Collection",
    description: "We collect personal information and usage data to provide and improve our services.",
    icon: "🔍"
  },
  {
    title: "Data Security",
    description: "We implement appropriate security measures to protect your personal information.",
    icon: "🔒"
  },
  {
    title: "Your Rights",
    description: "You have rights to access, correct, delete, and transfer your personal data.",
    icon: "⚖️"
  }
];

export default function PrivacyPolicyPage() {
  // Breadcrumb items for schema
  const breadcrumbItems = [
    { name: 'Home', url: 'https://rtnglobal.co' },
    { name: 'Privacy Policy', url: 'https://rtnglobal.co/privacy' },
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
              <GlitchText 
                text="Privacy Policy" 
                className="text-4xl md:text-5xl font-bold mb-6"
              />
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Learn how we collect, use, and protect your personal information. Your privacy is important to us.
              </p>
            </div>

            {/* Last updated timestamp */}
            <div className="flex justify-center mb-10">
              <Badge variant="outline" className="text-sm py-1 px-3">
                Last Updated: May 15, 2024
              </Badge>
            </div>
            
            {/* Privacy summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              {privacySummaries.map((summary, index) => (
                <MagneticGradientCard
                  key={index}
                  className="p-6"
                  borderClassName="border-primary"
                  showGradient={false}
                >
                  <div className="text-3xl mb-3">{summary.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{summary.title}</h3>
                  <p className="text-foreground/70 text-sm">{summary.description}</p>
                </MagneticGradientCard>
              ))}
            </div>
            
            {/* Policy Details */}
            <div className="max-w-4xl mx-auto">
              {privacyPolicySections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    {section.title}
                    {section.title === 'Data Security' && (
                      <Tooltip content="We use industry-standard encryption">
                        <span className="ml-2 cursor-help">ℹ️</span>
                      </Tooltip>
                    )}
                  </h2>
                  <div className="text-foreground/80">
                    {section.content}
                  </div>
                  {index < privacyPolicySections.length - 1 && (
                    <Divider className="mt-8" />
                  )}
                </div>
              ))}
              
              <div className="text-center mt-16">
                <p className="mb-6 text-foreground/70">
                  Have questions about our privacy practices? We&apos;re here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GlowButton className='text-forground'>
                    <Link href="/contact" className="no-underline text-forground">
                      Contact Us
                    </Link>
                  </GlowButton>
                  <MagneticButton variant="outline">
                    <Link href="/terms" className="no-underline">
                      Terms of Service
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
