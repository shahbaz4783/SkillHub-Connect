'use client';

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

const ErrorBoundary = ({ error }: ErrorBoundaryProps) => {
  return (
    <div className="flex h-svh flex-col items-center justify-center text-center">
      <h1 className="font-serif text-4xl">An Error occured</h1>
      <p className="mt-2 text-lg text-slate-600">{error.message}</p>
    </div>
  );
};

export default ErrorBoundary;
