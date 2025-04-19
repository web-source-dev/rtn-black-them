import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: '404 - Page Not Found | RTN Global',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
      >
        <FiArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
} 