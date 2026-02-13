"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { navItems } from '@/lib/data';
import { useScroll, useActiveSection } from '@/hooks';
import { cn } from '@/lib/utils';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

const ShimmerButton = ({ children, onClick, className = "" }: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string 
}) => (
  <Button 
    onClick={onClick}
    className={cn(
      'relative overflow-hidden group',
      'rounded-full bg-gradient-to-r from-cyan-500 to-blue-500',
      'hover:from-cyan-400 hover:to-blue-400 text-white border-0',
      className
    )}
  >
    <span className="relative z-10 flex items-center">{children}</span>
    <div className="absolute inset-0 animate-shimmer" />
  </Button>
);

export function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll(50);
  const activeSection = useActiveSection(navItems.map(item => item.id), 100);

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'glass-strong shadow-lg shadow-cyan-500/5' : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="text-2xl font-bold gradient-text"
            aria-label="Ayodya Sasanka - Home"
          >
            {'<AS/>'}
          </Link>

          <div className="hidden md:flex items-center space-x-1 glass rounded-full px-2 py-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'px-4 py-2 text-sm rounded-full transition-all duration-300',
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'text-slate-400 hover:text-white'
                )}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <ShimmerButton onClick={() => handleNavClick('contact')}>
              Hire Me
            </ShimmerButton>
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg glass"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden glass-strong border-t border-cyan-500/20"
            role="menu"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left py-3 px-4 text-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all"
                  role="menuitem"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500" 
                onClick={() => handleNavClick('contact')}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
