import { cn } from '@/lib/utils';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: 'cyan' | 'purple';
}

export function GradientBorder({ 
  children, 
  className = '',
  color = 'cyan'
}: GradientBorderProps) {
  const colorClasses = color === 'cyan' 
    ? 'from-cyan-500 via-blue-500 to-cyan-500'
    : 'from-purple-500 via-pink-500 to-purple-500';

  return (
    <div className={cn(
      'relative p-[1px] rounded-xl bg-gradient-to-r animate-border-flow',
      colorClasses,
      className
    )}>
      <div className="relative bg-[#0a0f1c] rounded-xl h-full">
        {children}
      </div>
    </div>
  );
}
