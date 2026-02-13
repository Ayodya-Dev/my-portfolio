"use client";

import { Building2, Globe, Code2, Sparkles, Zap, Gamepad2, ArrowRight } from 'lucide-react';
import { experiences } from '@/lib/data';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Code2,
  Sparkles,
  Zap,
  Gamepad2,
};

export function ExperienceSection() {
  return (
    <section 
      id="experience" 
      className="py-24 md:py-32 relative"
      aria-labelledby="experience-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
            <Building2 className="w-4 h-4" />
            <span>My Companies</span>
          </div>
          <h2 id="experience-title" className="text-3xl md:text-5xl font-bold text-white">
            Founder & CEO of <span className="gradient-text">Multiple Ventures</span>
          </h2>
        </div>

        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          const colorClass = experience.color === 'cyan' 
            ? 'from-cyan-500/20 to-blue-500/20'
            : 'from-purple-500/20 to-pink-500/20';
          
          return (
            <div 
              key={experience.id}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={isEven ? 'order-2 lg:order-1' : 'order-2'}>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                  <span className={experience.color === 'cyan' ? 'gradient-text' : 'text-purple-400'}>
                    {experience.company}
                  </span>
                </h3>
                <div className="space-y-4 text-lg text-slate-400 mb-8">
                  <p>{experience.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {experience.services.map(({ icon, text }) => {
                    const IconComponent = iconMap[icon] || Globe;
                    return (
                      <div key={text} className="flex items-center gap-3">
                        <div className={`
                          w-10 h-10 rounded-lg flex items-center justify-center border
                          ${experience.color === 'cyan' 
                            ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400'
                            : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400'
                          }
                        `}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-white">{text}</span>
                      </div>
                    );
                  })}
                </div>

                <Button 
                  className={`
                    rounded-full bg-gradient-to-r 
                    ${experience.color === 'cyan' 
                      ? 'from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
                      : 'from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400'
                    }
                  `}
                >
                  Visit {experience.company}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className={isEven ? 'order-1 lg:order-2' : 'order-1'}>
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${colorClass} rounded-3xl blur-2xl`} />
                  <div className={`relative glass rounded-3xl p-8 border ${experience.color === 'cyan' ? 'border-cyan-500/20' : 'border-purple-500/20'}`}>
                    <div className="flex justify-center mb-6">
                      {experience.id === 'codexeed' ? (
                        <img 
                          src="/codexeed.png" 
                          alt={`${experience.company} Logo`} 
                          className="h-20 w-auto object-contain" 
                        />
                      ) : (
                        <div className={`
                          w-20 h-20 rounded-2xl flex items-center justify-center border
                          ${experience.color === 'purple' ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-purple-500/50' : ''}
                        `}>
                          <Gamepad2 className="w-12 h-12 text-purple-400" />
                        </div>
                      )}
                    </div>
                    <div className="text-center mb-8">
                      <h3 className={`text-3xl font-bold mb-2 ${experience.color === 'cyan' ? 'gradient-text' : 'text-purple-400'}`}>
                        {experience.company}
                      </h3>
                      <p className={experience.color === 'cyan' ? 'text-cyan-400' : 'text-purple-300'}>
                        {experience.companyTagline}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {experience.metrics.map(({ label, value }) => (
                        <div 
                          key={label} 
                          className={`
                            text-center p-4 glass rounded-xl border transition-colors group
                            ${experience.color === 'cyan' 
                              ? 'border-cyan-500/20 hover:border-cyan-500/50'
                              : 'border-purple-500/20 hover:border-purple-500/50'
                            }
                          `}
                        >
                          <p className={`
                            text-2xl font-bold group-hover:scale-110 transition-transform
                            ${experience.color === 'cyan' ? 'gradient-text' : 'text-purple-400'}
                          `}>
                            {value}
                          </p>
                          <p className="text-sm text-slate-400">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
