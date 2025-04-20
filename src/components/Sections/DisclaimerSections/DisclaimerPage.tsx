import React from 'react';
import TransitionWrapper from '../../animations/TransitionWrapper';
import RevealOnScroll from '../../animations/RevealOnScroll';
import Divider from '../../ui/Divider';

const DisclaimerPage = () => {
  return (
    <TransitionWrapper>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Important information about the use of our website and services.
            </p>
          </div>
        </RevealOnScroll>

        <Divider className="my-10" />

        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                <strong>Last updated:</strong> April 21, 2025
              </p>
              
              <h2>Website Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only. 
                All information on the site is provided in good faith, however, we make no representation 
                or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
                reliability, availability, or completeness of any information on the site.
              </p>
              
              <h2>External Links Disclaimer</h2>
              <p>
                The site may contain links to external websites that are not provided or maintained by or 
                in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, 
                timeliness, or completeness of any information on these external websites.
              </p>
              
              <h2>Professional Disclaimer</h2>
              <p>
                The site cannot and does not contain legal, medical, financial, or professional advice. 
                The information is provided for general informational and educational purposes only and 
                is not a substitute for professional advice.
              </p>
              <p>
                Accordingly, before taking any actions based upon such information, we encourage you to 
                consult with the appropriate professionals. The use or reliance of any information contained 
                on this site is solely at your own risk.
              </p>
              
              <h2>Errors and Omissions Disclaimer</h2>
              <p>
                While we have made every attempt to ensure that the information contained in this site 
                has been obtained from reliable sources, we are not responsible for any errors or omissions, 
                or for the results obtained from the use of this information.
              </p>
              <p>
                All information in this site is provided &quot;as is,&quot; with no guarantee of completeness, 
                accuracy, timeliness or of the results obtained from the use of this information, and 
                without warranty of any kind, express or implied.
              </p>
              
              <h2>Fair Use Disclaimer</h2>
              <p>
                This site may contain copyrighted material the use of which has not always been specifically 
                authorized by the copyright owner. We are making such material available in our efforts to 
                provide information and education. We believe this constitutes a &quot;fair use&quot; of any such 
                copyrighted material as provided for in section 107 of the US Copyright Law.
              </p>
              
              <h2>Views Expressed Disclaimer</h2>
              <p>
                The views and opinions expressed on this website are purely those of the authors. These 
                views and opinions do not necessarily represent those of our company or its management.
              </p>
              
              <h2>No Responsibility Disclaimer</h2>
              <p>
                The information on the website is provided with the understanding that we are not 
                herein engaged in rendering legal, accounting, tax, or other professional advice and 
                services. As such, it should not be used as a substitute for consultation with professional 
                accounting, tax, legal or other competent advisors.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Disclaimer, you can contact us at info@rtnglobal.co.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </TransitionWrapper>
  );
};

export default DisclaimerPage; 