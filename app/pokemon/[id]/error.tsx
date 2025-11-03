'use client';

import { useEffect } from 'react';
import { Button } from '@/components/common/Button/Button';
import { BackButton } from '@/components/common/BackButton/BackButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-red-500 p-8">
      <BackButton />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
          <h2 className="text-2xl font-bold text-white mb-8">Something went wrong</h2>
          <p className="text-xl text-white mb-8">{error.message || 'An unexpected error occurred'}</p>
          <Button onClick={reset} variant="secondary">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
