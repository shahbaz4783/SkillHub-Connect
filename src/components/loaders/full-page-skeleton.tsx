const FullPageSkeleton = () => {
  return (
    <div className="flex h-[80svh] flex-row items-center justify-center gap-2">
      <div className="h-4 w-4 animate-bounce rounded-full bg-slate-700 [animation-delay:.7s]"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-slate-600 [animation-delay:.3s]"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-slate-700 [animation-delay:.7s]"></div>
    </div>
  );
};

export default FullPageSkeleton;
