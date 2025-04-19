'use client';

import { useEffect } from 'react';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

// Define a function to send metrics to your analytics service
const reportWebVitals = (metric: any) => {
  // Replace this with your actual analytics reporting code
  console.log(metric);
  
  // Example: send to analytics service
  // const body = JSON.stringify(metric);
  // fetch('/api/analytics', { method: 'POST', body });
  
  // Or if using Google Analytics:
  // if (window.gtag) {
  //   window.gtag('event', name, {
  //     event_category: 'Web Vitals',
  //     event_label: id,
  //     value: Math.round(value * 1000),
  //     non_interaction: true,
  //   });
  // }
};

export default function WebVitals() {
  useEffect(() => {
    // Only run in production or when explicitly testing web vitals
    if (process.env.NODE_ENV === 'production' || process.env.ANALYZE_BUNDLE === 'true') {
      // Core Web Vitals
      onCLS(reportWebVitals);
      onFID(reportWebVitals);
      onLCP(reportWebVitals);
      
      // Additional metrics
      onFCP(reportWebVitals);
      onTTFB(reportWebVitals);
    }
  }, []);

  // This component doesn't render anything
  return null;
} 