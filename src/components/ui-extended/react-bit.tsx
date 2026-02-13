"use client";

import { useMemo } from 'react';
import { Code2, CheckCircle, GitPullRequest, Eye } from 'lucide-react';

interface ReactBitProps {
  weeks?: number;
  className?: string;
}

interface DayData {
  date: string;
  count: number;
  dayOfWeek: number;
}

function generateContributionData(weeks: number): DayData[] {
  const data: DayData[] = [];
  const today = new Date();
  
  for (let w = weeks - 1; w >= 0; w--) {
    for (let d = 0; d < 7; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - (w * 7 + (6 - d)));
      
      const count = Math.random() < 0.3 
        ? 0 
        : Math.floor(Math.random() * (Math.random() < 0.5 ? 4 : 12)) + 1;
      
      data.push({
        date: date.toISOString().split('T')[0],
        count,
        dayOfWeek: d,
      });
    }
  }
  
  return data;
}

function getColorForCount(count: number): string {
  if (count === 0) return 'bg-cyan-950/30';
  if (count <= 2) return 'bg-cyan-900/50';
  if (count <= 5) return 'bg-cyan-700/70';
  if (count <= 8) return 'bg-cyan-500/80';
  return 'bg-cyan-400';
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function ReactBit({ weeks = 52, className = '' }: ReactBitProps) {
  const contributionData = useMemo(() => generateContributionData(weeks), [weeks]);
  
  const monthLabels = useMemo(() => {
    const labels: { month: string; startWeek: number }[] = [];
    let currentMonth = -1;
    
    for (let w = 0; w < weeks; w++) {
      const weekData = contributionData.slice(w * 7, w * 7 + 7);
      const firstDayOfWeek = new Date(weekData[0]?.date || '').getMonth();
      
      if (firstDayOfWeek !== currentMonth) {
        currentMonth = firstDayOfWeek;
        labels.push({ month: months[currentMonth], startWeek: w });
      }
    }
    
    return labels;
  }, [contributionData, weeks]);

  const totalContributions = useMemo(() => 
    contributionData.reduce((sum, day) => sum + day.count, 0),
    [contributionData]
  );

  return (
    <div className={className}>
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white">
            <span className="gradient-text">{totalContributions.toLocaleString()}</span>
          </h3>
          <p className="text-sm text-slate-400">contributions in last year</p>
        </div>
        <div className="flex gap-1 text-xs text-slate-500">
          <span>Less</span>
          <div className="flex gap-1 ml-1">
            <div className="w-3 h-3 rounded-sm bg-cyan-950/30" />
            <div className="w-3 h-3 rounded-sm bg-cyan-900/50" />
            <div className="w-3 h-3 rounded-sm bg-cyan-700/70" />
            <div className="w-3 h-3 rounded-sm bg-cyan-500/80" />
            <div className="w-3 h-3 rounded-sm bg-cyan-400" />
          </div>
          <span className="ml-1">More</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="inline-flex flex-col gap-1">
          <div className="flex">
            <div className="w-8 flex-shrink-0" />
            <div className="flex gap-1">
              {monthLabels.map(({ month, startWeek }, i) => (
                <div 
                  key={`${month}-${i}`}
                  className="text-xs text-slate-500"
                  style={{ marginLeft: i === 0 ? startWeek * 14 + 'px' : '0' }}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-1">
            <div className="flex flex-col gap-1 w-8 flex-shrink-0">
              {days.map((day, i) => (
                <div 
                  key={day}
                  className="h-3 text-xs text-slate-500 flex items-center"
                  style={{ visibility: i % 2 === 1 ? 'visible' : 'hidden' }}
                >
                  {day}
                </div>
              ))}
            </div>
            
            <div className="flex gap-1">
              {Array.from({ length: weeks }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {contributionData
                    .slice(weekIndex * 7, weekIndex * 7 + 7)
                    .map((day) => (
                      <div
                        key={day.date}
                        className={`w-3 h-3 rounded-sm ${getColorForCount(day.count)} transition-all hover:scale-125 cursor-pointer`}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ReactBitStatsProps {
  className?: string;
}

export function ReactBitStats({ className = '' }: ReactBitStatsProps) {
  const stats = [
    { label: 'Total Commits', value: '847', icon: Code2 },
    { label: 'Issues Closed', value: '124', icon: CheckCircle },
    { label: 'PRs Merged', value: '89', icon: GitPullRequest },
    { label: 'Code Reviews', value: '156', icon: Eye },
  ];

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div 
            key={stat.label}
            className="glass p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
          >
            <div className="flex items-center gap-2 mb-2">
              <IconComponent className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-400">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">
              {stat.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
