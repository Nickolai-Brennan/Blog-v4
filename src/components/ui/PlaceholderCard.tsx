import { cn } from '@/lib/utils';

interface PlaceholderCardProps {
  className?: string;
  showImage?: boolean;
  lines?: number;
}

export default function PlaceholderCard({ className, showImage = true, lines = 3 }: PlaceholderCardProps) {
  return (
    <div className={cn('bg-white rounded-lg shadow-md overflow-hidden animate-pulse', className)}>
      {showImage && (
        <div className="bg-gray-200 h-48 w-full" />
      )}
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 h-5 w-20 rounded-full" />
          <div className="bg-gray-200 h-4 w-16 rounded" />
        </div>
        <div className="bg-gray-200 h-6 w-3/4 rounded" />
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={cn('bg-gray-200 h-4 rounded', i === lines - 1 ? 'w-2/3' : 'w-full')} />
        ))}
        <div className="flex items-center gap-3 pt-2">
          <div className="bg-gray-200 h-4 w-24 rounded" />
          <div className="bg-gray-200 h-4 w-16 rounded" />
        </div>
      </div>
    </div>
  );
}
