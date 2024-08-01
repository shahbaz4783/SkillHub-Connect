import { Skeleton } from '../ui/skeleton';

export function OneAndHalf() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-3" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  );
}

export function TwoAndHalf() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-3" />
      <Skeleton className="h-3" />
      <Skeleton className="h-3 w-3/4" />
    </div>
  );
}
