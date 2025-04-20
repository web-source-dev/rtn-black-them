import React from 'react';
import TransitionWrapper from '../../animations/TransitionWrapper';
import RevealOnScroll from '../../animations/RevealOnScroll';
import Divider from '../../ui/Divider';
import Accordion from '../../ui/Accordion';
import BadgeIcon from '../../ui/BadgeIcon';
import Link from '../../ui/Link';
import ContactSection from '../reusableSections/ContactSection';

const supportFaqItems = [
  {
    title: 'How do I contact support?',
    content: 'You can contact our support team through the contact form on this page, via email at support@example.com, or by calling our support line at +1 (555) 123-4567.'
  },
  {
    title: 'What are your support hours?',
    content: 'Our support team is available Monday through Friday from 9:00 AM to 6:00 PM EST. For urgent issues outside of these hours, please use our emergency contact form.'
  },
  {
    title: 'How quickly can I expect a response?',
    content: 'We strive to respond to all inquiries within 24 hours during business days. For premium support customers, our response time is typically within 4 hours.'
  },
  {
    title: 'Do you offer phone support?',
    content: 'Yes, phone support is available for all customers. Our standard support plan includes email and web support, while our premium plans include priority phone support.'
  }
];

const SupportPage = () => {
  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;re here to help you succeed. Find the support you need.
            </p>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md text-center">
                <BadgeIcon icon="📧" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Send us an email and we&apos;ll get back to you within.
                </p>
                <Link href="mailto:info@rtnglobal.co" variant="default">
                  info@rtnglobal.co
                </Link>
              </div>
              
              <div className="bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md text-center">
                <BadgeIcon icon="📞" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Available Monday-Friday, 9AM-6PM EST.
                </p>
                <Link href="tel:+15551234567" variant="default">
                  +1 (555) 123-4567
                </Link>
              </div>
              
              <div className="bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md text-center">
                <BadgeIcon icon="💬" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Chat with our support team in real-time during business hours.
                </p>
                <Link href="#" variant="default">
                  Start Chat
                </Link>
              </div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="bg-background dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md mb-16">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Support Questions</h2>
              <Accordion items={supportFaqItems} />
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll>
            <ContactSection />
          </RevealOnScroll>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default SupportPage; 