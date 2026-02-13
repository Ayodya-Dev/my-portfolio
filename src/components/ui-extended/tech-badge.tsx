import { cn } from '@/lib/utils';

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TechBadge({ children, className = '' }: TechBadgeProps) {
  return (
    <span className={cn(
      'px-3 py-1 text-xs font-medium rounded-full',
      'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
      'hover:bg-cyan-500/20 transition-colors',
      className
    )}>
      {children}
    </span>
  );
}
