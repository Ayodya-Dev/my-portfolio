"use client";

import { Activity } from 'lucide-react';
import { ReactBit, ReactBitStats } from '@/components/ui-extended/react-bit';

export function ActivitySection() {
  return (
    <section 
      id="activity" 
      className="py-24 md:py-32 relative"
      aria-labelledby="activity-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
            <Activity className="w-4 h-4" />
            <span>Activity</span>
          </div>
          <h2 id="activity-title" className="text-3xl md:text-5xl font-bold text-white">
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            A visual representation of my coding activity over the past year
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 border border-cyan-500/20">
            <ReactBit weeks={52} />
          </div>
          
          <div className="mt-8">
            <ReactBitStats />
          </div>
        </div>
      </div>
    </section>
  );
}
