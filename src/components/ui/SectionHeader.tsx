import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
  accent?: boolean;
}

export default function SectionHeader({ title, subtitle, className, align = 'left', accent = true }: SectionHeaderProps) {
  return (
    <div className={cn('mb-8', align === 'center' && 'text-center', className)}>
      {accent && (
        <div className={cn('flex items-center gap-3 mb-3', align === 'center' && 'justify-center')}>
          <div className="h-px bg-green-800 w-8" />
          <span className="text-green-700 text-xs font-semibold tracking-widest uppercase">The Clubhouse</span>
          <div className="h-px bg-green-800 w-8" />
        </div>
      )}
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </div>
  );
}
