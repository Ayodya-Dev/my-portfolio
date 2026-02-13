"use client";

import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '@/lib/data';
import { GradientBorder } from '@/components/ui-extended/gradient-border';

export function EducationSection() {
  return (
    <section 
      id="education" 
      className="py-24 md:py-32 relative"
      aria-labelledby="education-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>
          <h2 id="education-title" className="text-3xl md:text-5xl font-bold text-white">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />
            
            {education.map((edu, index) => (
              <div 
                key={edu.id}
                className={cn(
                  'relative mb-12 md:grid md:grid-cols-2 md:gap-8',
                  index === 0 && 'md:grid-cols-2'
                )}
              >
                {index === 0 && (
                  <div className="md:text-right md:pr-8 pl-12 md:pl-0">
                    <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0f1c] md:translate-x-1/2 glow-cyan" />
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0f1c] glow-cyan" />
                  </div>
                )}
                
                <div className={cn(
                  index === 0 ? 'pl-12 md:pl-8' : 'md:pr-8 md:text-right pl-12 md:pl-0'
                )}>
                  <GradientBorder className="">
                    <div className="p-6">
                      <div className={cn(
                        'flex items-center gap-2 text-sm text-cyan-400 mb-2',
                        index === 1 && 'md:justify-end'
                      )}>
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
                      <p className="text-cyan-400 font-medium mb-3">{edu.institution}</p>
                      <p className="text-slate-400 mb-4">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span key={subject} className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GradientBorder>
                </div>

                {index === 1 && (
                  <div className="hidden md:block md:pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0f1c] -translate-x-1/2 glow-cyan" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
