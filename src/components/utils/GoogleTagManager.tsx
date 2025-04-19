'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Add type definition for window.dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function GoogleTagManager() {
  const GTM_ID = 'GTM-WN9F2XJN'; // Your Google Tag Manager ID

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
  }, []);

  return (
    <>
      {/* Google Tag Manager - Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Google Tag Manager - NoScript (will be added via inline script) */}
      <Script
        id="gtm-noscript-installer"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof document !== 'undefined') {
              const noscript = document.createElement('noscript');
              const iframe = document.createElement('iframe');
              iframe.src = 'https://www.googletagmanager.com/ns.html?id=${GTM_ID}';
              iframe.height = '0';
              iframe.width = '0';
              iframe.style.display = 'none';
              iframe.style.visibility = 'hidden';
              noscript.appendChild(iframe);
              document.body.insertBefore(noscript, document.body.firstChild);
            }
          `,
        }}
      />
    </>
  );
} 