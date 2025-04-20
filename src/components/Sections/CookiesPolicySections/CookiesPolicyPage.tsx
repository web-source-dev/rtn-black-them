import React from 'react';
import TransitionWrapper from '../../animations/TransitionWrapper';
import RevealOnScroll from '../../animations/RevealOnScroll';
import Divider from '../../ui/Divider';
import Accordion from '../../ui/Accordion';

const cookiePolicyAccordionItems = [
  {
    title: 'What are cookies?',
    content: 'Cookies are small text files that are placed on your device when you visit our website. They allow us to recognize your device and store information about your preferences or past actions on our website.'
  },
  {
    title: 'How do we use cookies?',
    content: 'We use cookies for various purposes including: analyzing website traffic, personalizing content, remembering your preferences, and improving your browsing experience. We also use cookies to help with marketing and to provide you with relevant advertisements.'
  },
  {
    title: 'Types of cookies we use',
    content: 'We use necessary cookies that enable core functionality, performance cookies that help us improve our website, functional cookies that remember your preferences, and targeting cookies used for marketing purposes.'
  },
  {
    title: 'Managing cookie preferences',
    content: 'You can manage your cookie preferences by adjusting your browser settings. Most browsers allow you to refuse or accept cookies, delete cookies, or browse our website using your browser\'s anonymous usage setting.'
  }
];

const CookiesPolicyPage = () => {
  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookies Policy</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Information about how we use cookies and your privacy on our website.
            </p>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="prose dark:prose-invert max-w-none mb-12">
              <p>
                This Cookies Policy explains how our website uses cookies and similar technologies to recognize 
                you when you visit our website. It explains what these technologies are and why we use them, 
                as well as your rights to control our use of them.
              </p>
              <p>
                This policy was last updated on January 1, 2023.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <Accordion items={cookiePolicyAccordionItems} />
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="mt-12 prose dark:prose-invert max-w-none">
              <h2>Your consent</h2>
              <p>
                By continuing to use our website, you are agreeing to our placing cookies on your device. If 
                you do not want cookies to be placed on your device, you can adjust the settings on your internet 
                browser to refuse the setting of all or some cookies and to alert you when a cookie is placed on 
                your device. For further information about how to do so, please refer to your browser &apos;help&apos;, 
                &apos;tool&apos;, or &apos;edit&apos; section.
              </p>
              <p>
                Please note that if you use your browser settings to block all cookies (including essential cookies) 
                you may not be able to access all or parts of our website.
              </p>
              <h2>Changes to our Cookies Policy</h2>
              <p>
                We may update this Cookies Policy from time to time in order to reflect changes to the cookies 
                we use or for operational, legal, or regulatory reasons. Please re-visit this Cookies Policy 
                regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>
                If you have any questions about our use of cookies or other technologies, please email us at 
                info@rtnglobal.co.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default CookiesPolicyPage; 