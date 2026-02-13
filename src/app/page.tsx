"use client";

import { Suspense, lazy, useState, useEffect } from 'react';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';

const AboutSection = lazy(() => import('@/components/sections/about').then(mod => ({ default: mod.AboutSection })));
const ActivitySection = lazy(() => import('@/components/sections/activity').then(mod => ({ default: mod.ActivitySection })));
const EducationSection = lazy(() => import('@/components/sections/education').then(mod => ({ default: mod.EducationSection })));
const ExperienceSection = lazy(() => import('@/components/sections/experience').then(mod => ({ default: mod.ExperienceSection })));
const SkillsSection = lazy(() => import('@/components/sections/skills').then(mod => ({ default: mod.SkillsSection })));
const ContactSection = lazy(() => import('@/components/sections/contact').then(mod => ({ default: mod.ContactSection })));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
    >
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-dots opacity-30" />
      </div>

      <Navigation onNavigate={handleNavigate} />
      
      <main id="main-content">
        <HeroSection onNavigate={handleNavigate} />
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ActivitySection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <EducationSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ExperienceSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}
