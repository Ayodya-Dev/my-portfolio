"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { footerContent } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

const footerLinks = [
  { platform: 'github', href: 'https://github.com' },
  { platform: 'linkedin', href: 'https://linkedin.com' },
  { platform: 'email', href: 'mailto:ayodya@codexeed.com' },
];

export function Footer() {
  return (
    <footer 
      className="py-12 border-t border-cyan-500/20"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">
              {'<AS/>'}
            </span>
            <span className="text-slate-400">{footerContent.name}</span>
          </div>
          <p className="text-slate-500 text-sm">
            {footerContent.copyright}
          </p>
          <div className="flex items-center gap-4" role="list" aria-label="Social media links">
            {footerLinks.map(({ platform, href }) => {
              const IconComponent = iconMap[platform] || Github;
              return (
                <Link 
                  key={platform}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                  aria-label={platform}
                  role="listitem"
                >
                  <IconComponent className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
