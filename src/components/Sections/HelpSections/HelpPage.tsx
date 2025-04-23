import React from 'react';
import TransitionWrapper from '../../animations/TransitionWrapper';
import RevealOnScroll from '../../animations/RevealOnScroll';
import Divider from '../../ui/Divider';
import Link from '../../ui/Link';
import Accordion from '../../ui/Accordion';
import GlowButton from '../../ui/GlowButton';
import BadgeIcon from '../../ui/BadgeIcon';

const helpTopics = [
  {
    title: 'Getting Started',
    content: (
      <div className="space-y-4">
        <p>New to our platform? Here&apos;s how to get started:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Create an account and complete your profile</li>
          <li>Explore our dashboard and familiarize yourself with the navigation</li>
          <li>Check out our quick start guides for your specific needs</li>
          <li>Set up your preferences and notification settings</li>
        </ul>
        <Link href="/help/getting-started" variant="default">Learn more about getting started</Link>
      </div>
    )
  },
  {
    title: 'Account Management',
    content: (
      <div className="space-y-4">
        <p>Learn how to manage your account effectively:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Update your profile information and payment details</li>
          <li>Manage your subscription and billing preferences</li>
          <li>Set up two-factor authentication for extra security</li>
          <li>Add team members and manage permissions</li>
        </ul>
        <Link href="/help/account" variant="default">Learn more about account management</Link>
      </div>
    )
  },
  {
    title: 'Troubleshooting',
    content: (
      <div className="space-y-4">
        <p>Encountering issues? Here are common troubleshooting steps:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Clear your browser cache and cookies</li>
          <li>Make sure you&apos;re using a supported browser and version</li>
          <li>Check your internet connection</li>
          <li>Try logging out and logging back in</li>
        </ul>
        <Link href="/help/troubleshooting" variant="default">View all troubleshooting guides</Link>
      </div>
    )
  }
];

const HelpPage = () => {
  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find helpful resources, guides, and answers to your questions.
            </p>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <RevealOnScroll>
              <div className="bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md text-center">
                <BadgeIcon icon="📚" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Browse our comprehensive documentation for detailed guides and tutorials.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll>
              <div className="bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md text-center">
                <BadgeIcon icon="🎬" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Watch step-by-step video tutorials to learn how to use our platform.
                </p>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll>
              <div className="bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md text-center">
                <BadgeIcon icon="🔍" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Search our knowledge base for answers to common questions.
                </p>
              </div>
            </RevealOnScroll>
          </div>
    
          <RevealOnScroll>
            <div className="bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md mb-16">
              <h2 className="text-2xl font-bold mb-6">Popular Help Topics</h2>
              <Accordion items={helpTopics} />
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-10 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                If you couldn&apos;t find what you&apos;re looking for, our support team is ready to assist you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/support" className="w-full sm:w-auto">
                <GlowButton  className='cursor-pointer'>
                  Contact Support
                </GlowButton>
                </Link>
                <Link href="/faq" className="w-full sm:w-auto">
                <GlowButton variant="outline" className="w-full sm:w-auto text-default cursor-pointer">
                  View FAQ
                </GlowButton>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default HelpPage; 