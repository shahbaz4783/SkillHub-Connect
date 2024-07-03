'use client';

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

const ErrorBoundary = ({ error }: ErrorBoundaryProps) => {
  return (
    <div className="flex h-svh flex-col items-center justify-center text-center">
      <h1 className="font-serif text-4xl">An Error occured</h1>
      <h1 className="text-xl">
        Sorry for the inconvience. Please Try again later
      </h1>
      <p className="mt-2 text-slate-600">{error.message}</p>
    </div>
  );
};

export default ErrorBoundary;
