"use client";

import { User } from 'lucide-react';
import { aboutContent, aboutStats, aboutTags } from '@/lib/data';

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 relative"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12 border-cyan-500/20">
              <div className="grid grid-cols-2 gap-6">
                {aboutStats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="text-center p-6 glass rounded-2xl border-cyan-500/20 hover:border-cyan-500/50 transition-colors group"
                  >
                    <p className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
              <User className="w-4 h-4" />
              <span>About Me</span>
            </div>
            <h2 id="about-title" className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              {aboutContent.title}
              <span className="gradient-text"> {aboutContent.titleAccent}</span>
            </h2>
            <div className="space-y-4 text-lg text-slate-400">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {aboutTags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 rounded-full glass text-sm font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
