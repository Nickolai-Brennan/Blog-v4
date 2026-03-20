import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  shadow?: 'sm' | 'md' | 'lg' | 'none';
}

export function Card({ className, shadow = 'md', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg overflow-hidden',
        {
          'shadow-sm': shadow === 'sm',
          'shadow-md': shadow === 'md',
          'shadow-lg': shadow === 'lg',
          '': shadow === 'none',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-4 border-b border-gray-100', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-4 border-t border-gray-100', className)} {...props}>
      {children}
    </div>
  );
}
