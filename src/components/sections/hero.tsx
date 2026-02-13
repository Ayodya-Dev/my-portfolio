"use client";

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Send, Terminal, Database, Gamepad2, GraduationCap, ChevronDown, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GradientBorder } from '@/components/ui-extended/gradient-border';
import { FloatingCard } from '@/components/ui-extended/floating-card';
import { heroContent } from '@/lib/data';

interface HeroSectionProps {
  onNavigate?: (section: string) => void;
}

const roles = [
  'Full-Stack Developer',
  'Technical Founder',
  'React Specialist',
  'Problem Solver',
];

function TypewriterEffect({ texts, className = '' }: { texts: string[]; className?: string }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isDeleting, texts]);

  return (
    <span className={className}>
      {texts[currentTextIndex].slice(0, currentCharIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,15,28,0.8)_100%)]" />
    </div>
  );
}

function GlowingOrb({ delay = 0, size = 400, position = 'top-left' }: { delay?: number; size?: number; position?: string }) {
  const positions: Record<string, string> = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div 
      className={`absolute ${positions[position]} w-[${size}px] h-[${size}px] rounded-full`}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
      }}
    >
      <div 
        className="w-full h-full rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)',
        }}
      />
    </div>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            animation: `float-particle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleCtaClick = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const handleScrollDown = () => {
    if (onNavigate) {
      onNavigate('about');
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <AnimatedGrid />
      <FloatingParticles />
      <GlowingOrb delay={0} size={600} position="top-left" />
      <GlowingOrb delay={2} size={500} position="bottom-right" />
      <GlowingOrb delay={4} size={400} position="center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
              <span className="text-sm font-medium text-cyan-400">{heroContent.availability}</span>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-slate-400 animate-fade-in">
                {heroContent.greeting}
              </p>
              <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block text-white">
                  {heroContent.firstName}
                </span>
                <span className="block gradient-text">
                  {heroContent.lastName}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-lg">
                <TypewriterEffect 
                  texts={roles} 
                  className="text-cyan-400 font-medium"
                />
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25 group border-0"
                onClick={handleCtaClick}
                aria-label="Contact me for opportunities"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                {heroContent.cta}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full border-cyan-500/30 text-slate-300 hover:bg-cyan-500/10"
                asChild
              >
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4" role="list" aria-label="Social media links">
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                aria-label="GitHub profile"
                role="listitem"
              >
                <Github className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                aria-label="LinkedIn profile"
                role="listitem"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
              </Link>
              <Link 
                href="mailto:ayodya@codexeed.com"
                className="p-3 rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                aria-label="Send email"
                role="listitem"
              >
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
              <GradientBorder className="w-80 h-80 md:w-96 md:h-96" color="cyan">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img 
                    src="/mypic.jpg" 
                    alt="Ayodya Sasanka - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-0 right-0 text-center z-10">
                    <p className="text-2xl font-bold text-white">Ayodya Sasanka</p>
                    <p className="text-cyan-400">Software Engineer</p>
                  </div>
                  
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl glass flex items-center justify-center border-cyan-500/30">
                      <Terminal className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="absolute inset-0 animate-spin-slow-reverse">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-xl glass flex items-center justify-center border-cyan-500/30">
                      <Database className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </GradientBorder>

              <FloatingCard delay={0} className="absolute -right-20 top-1/4 z-20">
                <div className="glass p-3 rounded-xl border-cyan-500/30 glow-cyan">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 overflow-hidden">
                      <img src="/codexeed.png" alt="Codexeed" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Founder & CEO</p>
                      <p className="text-xs text-cyan-400">Codexeed</p>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={0.5} className="absolute -right-20 bottom-1/4 z-20">
                <div className="glass p-3 rounded-xl border-purple-500/30 glow-cyan">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                      <Gamepad2 className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Founder & CEO</p>
                      <p className="text-xs text-purple-400">GameXeed</p>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={1} className="absolute -left-16 bottom-1/4 z-20">
                <div className="glass p-3 rounded-xl border-cyan-500/30 glow-cyan">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Student</p>
                      <p className="text-xs text-cyan-400">Cardiff Met</p>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={1.5} className="absolute -left-12 top-1/3 z-20 hidden md:block">
                <div className="glass p-3 rounded-xl border-cyan-500/30">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-white">Open to work</span>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </button>
    </section>
  );
}
