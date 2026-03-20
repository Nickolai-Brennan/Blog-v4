import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

const categoryColors: Record<string, string> = {
  instruction: 'bg-blue-100 text-blue-800',
  equipment: 'bg-purple-100 text-purple-800',
  travel: 'bg-amber-100 text-amber-800',
  'course review': 'bg-green-100 text-green-800',
  'mental game': 'bg-rose-100 text-rose-800',
  history: 'bg-stone-100 text-stone-800',
  fitness: 'bg-orange-100 text-orange-800',
  news: 'bg-cyan-100 text-cyan-800',
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'category' | 'tag' | 'status';
  category?: string;
}

export default function Badge({ className, variant = 'category', category, children, ...props }: BadgeProps) {
  const categoryColor = category ? categoryColors[category.toLowerCase()] ?? 'bg-green-100 text-green-800' : 'bg-green-100 text-green-800';

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variant === 'category' && categoryColor,
        variant === 'tag' && 'bg-gray-100 text-gray-700',
        variant === 'status' && 'bg-green-100 text-green-800',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
