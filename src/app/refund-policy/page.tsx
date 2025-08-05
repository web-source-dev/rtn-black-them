import type { Metadata } from 'next';
import RefundPolicyPage from '@/components/Sections/RefundPolicySections/RefundPolicyPage';

export const metadata: Metadata = {
  title: 'Refund Policy | RTN Global',
  description: 'Learn about RTN Global\'s refund policy, including our terms and conditions for refunds, cancellations, and service agreements.',
  keywords: 'refund policy, RTN Global, refunds, cancellations, terms, conditions, digital services',
  openGraph: {
    title: 'Refund Policy | RTN Global',
    description: 'Learn about RTN Global\'s refund policy, including our terms and conditions for refunds, cancellations, and service agreements.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Refund Policy | RTN Global',
    description: 'Learn about RTN Global\'s refund policy, including our terms and conditions for refunds, cancellations, and service agreements.',
  }
};

export default function RefundPolicyPageWrapper() {
  return <RefundPolicyPage />;
}