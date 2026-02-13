"use client";

import { Zap } from 'lucide-react';
import { skills as skillData } from '@/lib/data';
import { SkillCard } from '@/components/ui-extended/skill-card';

export function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 relative"
      aria-labelledby="skills-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>Skills</span>
          </div>
          <h2 id="skills-title" className="text-3xl md:text-5xl font-bold text-white">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((group, index) => (
            <SkillCard
              key={group.category}
              icon={group.icon}
              title={group.category}
              skills={group.skills}
              delay={index * 0.1}
              colorClass={group.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
