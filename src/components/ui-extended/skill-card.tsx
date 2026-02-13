import { LucideIcon, Globe, Database, Terminal, Code2, User, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: string;
  title: string;
  skills: string[];
  delay?: number;
  colorClass?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Database,
  Terminal,
  Code2,
  User,
  Sparkles,
};

export function SkillCard({ 
  icon, 
  title, 
  skills, 
  delay = 0,
  colorClass = 'from-cyan-500/20'
}: SkillCardProps) {
  const IconComponent = iconMap[icon] || Globe;

  return (
    <div 
      className={cn(
        'group glass p-6 rounded-2xl',
        'hover:border-cyan-500/50 transition-all duration-300',
        'hover:shadow-lg hover:shadow-cyan-500/10 animate-scale-in',
        colorClass.includes('purple') && 'hover:border-purple-500/50 hover:shadow-purple-500/10',
        colorClass.includes('blue') && 'hover:border-blue-500/50 hover:shadow-blue-500/10',
        colorClass.includes('orange') && 'hover:border-orange-500/50 hover:shadow-orange-500/10',
        colorClass.includes('pink') && 'hover:border-pink-500/50 hover:shadow-pink-500/10',
        colorClass.includes('yellow') && 'hover:border-yellow-500/50 hover:shadow-yellow-500/10',
      )}
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className={cn(
        'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
        'group-hover:scale-110 transition-transform border',
        colorClass,
        colorClass.includes('purple') ? 'border-purple-500/30 text-purple-400' :
        colorClass.includes('blue') ? 'border-blue-500/30 text-blue-400' :
        colorClass.includes('orange') ? 'border-orange-500/30 text-orange-400' :
        colorClass.includes('pink') ? 'border-pink-500/30 text-pink-400' :
        colorClass.includes('yellow') ? 'border-yellow-500/30 text-yellow-400' :
        'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400'
      )}>
        <IconComponent className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
