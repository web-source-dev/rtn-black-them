import React from 'react';

interface TrustPilotWidgetProps {
  className?: string;
}

export default function TrustPilotWidget({ className = '' }: TrustPilotWidgetProps) {
  return (
    <div className={className}>
      {/* TrustBox widget - Review Collector */}
      <div 
        className="trustpilot-widget" 
        data-locale="en-US" 
        data-template-id="56278e9abfbbba0bdcd568bc" 
        data-businessunit-id="6806cad015b91e8838c555cd" 
        data-style-height="52px" 
        data-style-width="100%"
      >
        <a href="https://www.trustpilot.com/review/rtnglobal.co" target="_blank" rel="noopener">
          Trustpilot
        </a>
      </div>
      {/* End TrustBox widget */}
    </div>
  );
} 