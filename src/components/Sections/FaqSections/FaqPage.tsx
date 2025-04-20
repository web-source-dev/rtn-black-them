import React from 'react';
import Accordion from '../../ui/Accordion';
import RevealOnScroll from '../../animations/RevealOnScroll';
import TransitionWrapper from '../../animations/TransitionWrapper';
import Divider from '../../ui/Divider';

const faqItems = [
  {
    title: 'What services do you offer?',
    content: 'We offer a comprehensive range of digital services including web design and development, mobile app development, UI/UX design, digital marketing, and more. Our team of experts is dedicated to delivering high-quality solutions tailored to your business needs.'
  },
  {
    title: 'How long does a typical project take?',
    content: 'Project timelines vary depending on the scope and complexity of the work. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. During our initial consultation, we\'ll provide you with a more accurate timeline based on your specific requirements.'
  },
  {
    title: 'What is your pricing structure?',
    content: 'Our pricing is project-based and depends on the scope, complexity, and timeline of your requirements. We provide detailed quotes after understanding your project needs. We also offer flexible payment options including milestone-based payments for larger projects.'
  },
  {
    title: 'Do you provide ongoing support after project completion?',
    content: 'Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally. These include regular updates, security monitoring, performance optimization, and technical support.'
  },
  {
    title: 'How do I get started with your services?',
    content: 'Getting started is easy! Simply contact us through our website, email, or phone. We\'ll schedule an initial consultation to discuss your needs, provide recommendations, and outline the next steps for your project.'
  }
];

const FaqPage = () => {
  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and policies.
            </p>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <Accordion items={faqItems} />
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
              <p className="mb-6">Our support team is ready to help you with any other questions you may have.</p>
              <a href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-all">
                Contact Us
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default FaqPage; 