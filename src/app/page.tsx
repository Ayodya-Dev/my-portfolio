"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  GraduationCap,
  Building2,
  User,
  Send,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Terminal,
  Database,
  Globe,
  Zap,
  ArrowRight,
  MapPin,
  Calendar,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

// Shimmer Button Component
const ShimmerButton = ({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
  <Button 
    onClick={onClick}
    className={`relative overflow-hidden group ${className}`}
  >
    <span className="relative z-10 flex items-center">{children}</span>
    <div className="absolute inset-0 animate-shimmer" />
  </Button>
);

// Gradient Border Component
const GradientBorder = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative p-[1px] rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-border-flow ${className}`}>
    <div className="relative bg-[#0a0f1c] rounded-xl h-full">
      {children}
    </div>
  </div>
);

// Tech Badge Component
const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">
    {children}
  </span>
);

// Skill Card Component
const SkillCard = ({ icon: Icon, title, skills, delay = 0 }: { icon: LucideIcon; title: string; skills: string[]; delay?: number }) => (
  <div 
    className="group glass p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 animate-scale-in"
    style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-cyan-500/30">
      <Icon className="w-6 h-6 text-cyan-400" />
    </div>
    <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <TechBadge key={skill}>{skill}</TechBadge>
      ))}
    </div>
  </div>
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "education", "company", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "company", label: "Company" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className={`min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid opacity-50" />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-dots opacity-30" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong shadow-lg shadow-cyan-500/5" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold gradient-text">
              {'<AS/>'}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 glass rounded-full px-2 py-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    activeSection === item.id 
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25" 
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <ShimmerButton 
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0"
              >
                Hire Me
              </ShimmerButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg glass"
              >
                {isMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-strong border-t border-cyan-500/20">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                className="w-full mt-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500" 
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-cyan-400">Available for opportunities</span>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-slate-400 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
                  Hello, I&apos;m
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="block text-white animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}>
                    Ayodya
                  </span>
                  <span className="block gradient-text animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0 }}>
                    Sasanka
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-lg animate-slide-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards', opacity: 0 }}>
                  Software Engineering Student & Founder
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'forwards', opacity: 0 }}>
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25 group border-0"
                  onClick={() => scrollToSection("contact")}
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Let&apos;s Talk
                </Button>
              </div>

              <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards', opacity: 0 }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-3 rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group">
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="p-3 rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </a>
                <a href="mailto:ayodya@codexeed.com" 
                   className="p-3 rounded-xl glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Circular Profile Image */}
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700">
                  <img 
                    src="/mypic.jpg" 
                    alt="Ayodya Sasanka"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Simple Badge */}
                <div className="absolute bottom-0 right-4 bg-slate-800 border border-slate-600 px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-white">Ayodya Sasanka</p>
                  <p className="text-xs text-cyan-400">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-3xl p-8 md:p-12 border-cyan-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 glass rounded-2xl border-cyan-500/20 hover:border-cyan-500/50 transition-colors group">
                    <p className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">2+</p>
                    <p className="text-sm text-slate-400">Years Experience</p>
                  </div>
                  <div className="text-center p-6 glass rounded-2xl border-cyan-500/20 hover:border-cyan-500/50 transition-colors group">
                    <p className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">10+</p>
                    <p className="text-sm text-slate-400">Projects</p>
                  </div>
                  <div className="text-center p-6 glass rounded-2xl border-cyan-500/20 hover:border-cyan-500/50 transition-colors group">
                    <p className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">5+</p>
                    <p className="text-sm text-slate-400">Happy Clients</p>
                  </div>
                  <div className="text-center p-6 glass rounded-2xl border-cyan-500/20 hover:border-cyan-500/50 transition-colors group">
                    <p className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">2</p>
                    <p className="text-sm text-slate-400">Companies Founded</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
                <User className="w-4 h-4" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Crafting Digital
                <span className="gradient-text"> Excellence</span>
              </h2>
              <div className="space-y-4 text-lg text-slate-400">
                <p>
                  Hi! I&apos;m <span className="text-white font-semibold">Ayodya Sasanka</span>, a passionate Software Engineering student at Cardiff Metropolitan University. My journey in tech started with curiosity and has evolved into a mission to create impactful software solutions.
                </p>
                <p>
                  As the Founder & CEO of <span className="text-cyan-400 font-semibold">Codexeed Software Company</span>, I lead a talented team in delivering cutting-edge web and mobile applications. Additionally, I&apos;m the Founder & CEO of <span className="text-purple-400 font-semibold">GameXeed</span>, a computer game selling company serving the gaming community.
                </p>
                <p>
                  I believe in writing clean, efficient code and building products that make a difference. Whether it&apos;s a complex enterprise solution, an innovative startup idea, or a gaming platform, I bring dedication and expertise to every project.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {["Problem Solver", "Team Leader", "Innovation Driven", "Detail Oriented"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full glass text-sm font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line with Gradient */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />
              
              {/* Education Item 1 */}
              <div className="relative mb-12 md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-8 pl-12 md:pl-0">
                  <div className="hidden md:block absolute right-0 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0f1c] md:translate-x-1/2 glow-cyan" />
                  <div className="md:hidden absolute left-0 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0f1c] glow-cyan" />
                </div>
                <div className="pl-12 md:pl-8">
                  <GradientBorder className="">
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-cyan-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>2022 - Present</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">BSc Software Engineering</h3>
                      <p className="text-cyan-400 font-medium mb-3">Cardiff Metropolitan University</p>
                      <p className="text-slate-400 mb-4">
                        Pursuing comprehensive education in software development, algorithms, database systems, and modern software engineering practices.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Software Dev", "Algorithms", "Database Systems", "Project Management"].map((skill) => (
                          <TechBadge key={skill}>{skill}</TechBadge>
                        ))}
                      </div>
                    </div>
                  </GradientBorder>
                </div>
              </div>

              {/* Education Item 2 */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8">
                <div className="md:pr-8 md:text-right pl-12 md:pl-0">
                  <GradientBorder className="">
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-cyan-400 mb-2 md:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>Completed</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">A-Levels & GCSEs</h3>
                      <p className="text-cyan-400 font-medium mb-3">Secondary Education</p>
                      <p className="text-slate-400 mb-4">
                        Strong foundation in Mathematics, Computer Science, and Sciences, building the groundwork for a successful tech career.
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {["Mathematics", "Computer Science", "Physics"].map((skill) => (
                          <TechBadge key={skill}>{skill}</TechBadge>
                        ))}
                      </div>
                    </div>
                  </GradientBorder>
                </div>
                <div className="hidden md:block md:pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0f1c] -translate-x-1/2 glow-cyan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="company" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
              <Building2 className="w-4 h-4" />
              <span>My Companies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Founder & CEO of <span className="gradient-text">Multiple Ventures</span>
            </h2>
          </div>

          {/* Codexeed */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                <span className="gradient-text">Codexeed</span> Software
              </h3>
              <div className="space-y-4 text-lg text-slate-400 mb-8">
                <p>
                  Codexeed Software Company represents my vision of creating technology that empowers businesses and individuals. As the founder and CEO, I&apos;ve built a team of passionate developers dedicated to excellence.
                </p>
                <p>
                  We specialize in custom software development, web applications, mobile apps, and digital transformation consulting. Our mission is to turn innovative ideas into scalable, robust solutions.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: Globe, text: "Web Development" },
                  { icon: Code2, text: "Mobile Applications" },
                  { icon: Sparkles, text: "UI/UX Design" },
                  { icon: Zap, text: "Digital Consulting" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-medium text-white">{text}</span>
                  </div>
                ))}
              </div>

              <ShimmerButton className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                Visit Codexeed
                <ArrowRight className="w-4 h-4 ml-2" />
              </ShimmerButton>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <div className="relative glass rounded-3xl p-8 border-cyan-500/20">
                  <div className="flex justify-center mb-6">
                    <img src="/codexeed.png" alt="Codexeed Logo" className="h-20 w-auto object-contain" />
                  </div>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-2 gradient-text">Codexeed</h3>
                    <p className="text-cyan-400">Software Company</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Clients", value: "5+" },
                      { label: "Team Size", value: "5+" },
                      { label: "Success Rate", value: "100%" },
                      { label: "Experience", value: "2+ yrs" },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center p-4 glass rounded-xl border-cyan-500/20 hover:border-cyan-500/50 transition-colors group">
                        <p className="text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">{value}</p>
                        <p className="text-sm text-slate-400">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GameXeed */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
                <div className="relative glass rounded-3xl p-8 border-purple-500/20">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center border border-purple-500/50">
                      <Gamepad2 className="w-12 h-12 text-purple-400" />
                    </div>
                  </div>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-2 text-purple-400">GameXeed</h3>
                    <p className="text-purple-300">Gaming Company</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Games Sold", value: "100+" },
                      { label: "Happy Gamers", value: "50+" },
                      { label: "Platforms", value: "PC/Console" },
                      { label: "Experience", value: "1+ yr" },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center p-4 glass rounded-xl border-purple-500/20 hover:border-purple-500/50 transition-colors group">
                        <p className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform">{value}</p>
                        <p className="text-sm text-slate-400">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                <span className="text-purple-400">GameXeed</span>
              </h3>
              <div className="space-y-4 text-lg text-slate-400 mb-8">
                <p>
                  GameXeed is my venture into the gaming industry. As the Founder and CEO, I&apos;m building a platform for computer game sales and distribution, connecting gamers with the best titles.
                </p>
                <p>
                  We specialize in selling computer games across multiple platforms, providing gamers with easy access to their favorite titles at competitive prices.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: Gamepad2, text: "PC Games Sales" },
                  { icon: Globe, text: "Console Games" },
                  { icon: Zap, text: "Digital Distribution" },
                  { icon: Sparkles, text: "Gaming Community" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="font-medium text-white">{text}</span>
                  </div>
                ))}
              </div>

              <ShimmerButton className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                Visit GameXeed
                <ArrowRight className="w-4 h-4 ml-2" />
              </ShimmerButton>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
              <Zap className="w-4 h-4" />
              <span>Skills</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Frontend", icon: Globe, skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"], color: "from-cyan-500/20" },
              { category: "Backend", icon: Database, skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"], color: "from-blue-500/20" },
              { category: "Tools", icon: Terminal, skills: ["Git", "Docker", "AWS", "Figma", "VS Code"], color: "from-purple-500/20" },
              { category: "Mobile", icon: Code2, skills: ["React Native", "Expo", "Responsive Design", "PWA"], color: "from-orange-500/20" },
              { category: "Soft Skills", icon: User, skills: ["Leadership", "Communication", "Problem Solving", "Agile/Scrum"], color: "from-pink-500/20" },
              { category: "Learning", icon: Sparkles, skills: ["AI/ML", "Cloud Architecture", "System Design", "DevOps"], color: "from-yellow-500/20" },
            ].map((group, index) => (
              <SkillCard
                key={group.category}
                icon={group.icon}
                title={group.category}
                skills={group.skills}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                Let&apos;s Work <span className="gradient-text">Together</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="glass p-6 rounded-2xl border-cyan-500/20">
                  <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "ayodya@codexeed.com", href: "mailto:ayodya@codexeed.com" },
                      { icon: Linkedin, label: "LinkedIn", value: "Ayodya Sasanka", href: "https://linkedin.com" },
                      { icon: Github, label: "GitHub", value: "@ayodyasasanka", href: "https://github.com" },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <a 
                        key={label}
                        href={href} 
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl glass hover:border-cyan-500/50 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                          <Icon className="w-5 h-5 text-cyan-400 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{label}</p>
                          <p className="font-medium text-white">{value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl border-cyan-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="font-medium text-white">Location</span>
                  </div>
                  <p className="text-slate-400">Cardiff, United Kingdom</p>
                </div>
              </div>

              {/* Contact Form */}
              <GradientBorder>
                <div className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Your Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#0f172a]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Your Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#0f172a]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#0f172a]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#0f172a]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <ShimmerButton className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </ShimmerButton>
                  </form>
                </div>
              </GradientBorder>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">
                {'<AS/>'}
              </span>
              <span className="text-slate-400">Ayodya Sasanka</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 Ayodya Sasanka. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:ayodya@codexeed.com" },
              ].map(({ icon: Icon, href }) => (
                <a 
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg glass hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <Icon className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
