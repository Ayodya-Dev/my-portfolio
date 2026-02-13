import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  return (
    <div 
      className={cn('animate-float', className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
