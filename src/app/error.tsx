'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FiAlertTriangle, FiRefreshCcw } from 'react-icons/fi';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="flex justify-center mb-6">
        <FiAlertTriangle className="h-12 w-12 text-red-500" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="text-lg mb-8 max-w-md mx-auto">
        We apologize for the inconvenience. Please try again or contact our support team if the issue persists.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
        >
          <FiRefreshCcw className="w-4 h-4" />
          <span>Try again</span>
        </button>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-transparent text-white border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
        >
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
} 