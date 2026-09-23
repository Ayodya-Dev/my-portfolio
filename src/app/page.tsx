"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Send,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const techStack = [
  "node.js",
  "redis",
  "NEXT.js",
  "aws",
  "GraphQL",
  "TypeScript",
  "PostgreSQL",
  "React",
  "MongoDB",
  "Docker",
  "Python",
  "Tailwind",
  "Prisma",
  "Firebase",
  "Git",
  "Expo",
];

const projects = [
  {
    title: "Codexeed",
    description:
      "Software company platform for custom web and mobile products — clean architecture, fast delivery, and scalable builds for modern teams.",
    logo: "/codexeed.png",
    href: "https://codexeed.com",
    tags: ["Web Development", "Mobile Apps", "UI/UX", "Consulting"],
    accent: "cyan" as const,
  },
  {
    title: "GameXeed",
    description:
      "Full-featured game sales and distribution platform connecting players with PC and console titles at competitive prices.",
    logo: "/Gamexeed21.png",
    href: "#contact",
    tags: ["E-Commerce", "Gaming", "Digital Sales", "Community"],
    accent: "lime" as const,
  },
];

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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "education", "company", "contact"];
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
          <div className="relative flex items-center justify-end h-20">
            {/* Desktop Navigation — centered */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-1 glass rounded-full px-2 py-1">
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
              <ShimmerButton 
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0"
              >
                Hire Me
              </ShimmerButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
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
      <section
        id="hero"
        className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0f1c]"
      >
        {/* Atmosphere */}
        <div className="absolute inset-0 hero-panel-grid pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 78% 40%, rgba(6, 182, 212, 0.28) 0%, rgba(37, 99, 235, 0.14) 35%, transparent 65%), linear-gradient(180deg, #0a0f1c 0%, #070b14 70%, #05080f 100%)",
          }}
        />
        <div className="absolute right-0 top-1/4 w-[55%] h-[70%] rounded-full bg-cyan-500/20 blur-[120px] animate-hero-glow pointer-events-none" />

        <div className="relative z-10 flex-1 flex items-center pt-24 pb-8">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
              {/* Left — copy */}
              <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 max-w-xl">
                <h1
                  className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-6xl font-bold tracking-tight leading-[1.12] animate-hero-rise"
                  style={{ animationDelay: "0.1s" }}
                >
                  <span className="block text-white mb-3 sm:mb-4">
                    Ayodya Sasanka
                  </span>
                  <span className="block text-[0.72em] sm:text-[0.68em] font-semibold text-white/50 leading-[1.25]">
                    Engineering{" "}
                    <span className="text-white">scalable architecture</span>{" "}
                    for modern <span className="text-white">enterprises</span>
                  </span>
                </h1>

                <p
                  className="text-base sm:text-lg text-white/45 leading-relaxed max-w-md animate-hero-rise"
                  style={{ animationDelay: "0.3s" }}
                >
                  Full-Stack Software Engineer specializing in performant React
                  applications, robust Node.js backend systems, and cloud
                  optimization.
                </p>

                <div
                  className="flex flex-wrap gap-3 pt-1 animate-hero-rise"
                  style={{ animationDelay: "0.45s" }}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="h-12 rounded-lg bg-white text-black hover:bg-white/90 px-7 text-sm font-semibold border-0 shadow-none"
                  >
                    Let&apos;s Talk
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="h-12 rounded-lg bg-transparent text-white border border-white/40 hover:bg-white/10 hover:text-white px-6 text-sm font-medium shadow-none"
                  >
                    <a href="/resume.pdf" download>
                      Download Resume
                      <Download className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right — portrait */}
              <div
                className="order-1 lg:order-2 relative flex justify-center lg:justify-end animate-hero-rise"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] aspect-[3/4] isolate">
                  <div className="absolute inset-x-[5%] top-[10%] bottom-[15%] -z-10 rounded-full bg-cyan-500/30 blur-[100px] animate-hero-glow pointer-events-none" />
                  <div className="relative z-10 hero-portrait-mask h-full">
                    <Image
                      src="/my.png"
                      alt="Ayodya Sasanka"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 580px"
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack bar */}
        <div className="relative z-10 border-t border-white/5 bg-black overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-black to-transparent" />
          <div className="flex w-max animate-tech-marquee hover:[animation-play-state:paused] py-5">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex items-center gap-10 sm:gap-14 md:gap-16 px-5 sm:px-7"
                aria-hidden={copy === 1}
              >
                {techStack.map((tech) => (
                  <li
                    key={`${copy}-${tech}`}
                    className="shrink-0 text-[13px] sm:text-sm font-medium tracking-wide text-white/35 hover:text-white/55 transition-colors select-none"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* About / My Story */}
      <section
        id="about"
        className="relative overflow-hidden py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="origin-center -rotate-2 md:-rotate-3 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 md:mb-10 animate-hero-rise">
              My Story
            </h2>

            <div
              className="mx-auto max-w-2xl space-y-5 text-left text-base sm:text-lg leading-relaxed text-slate-400 animate-hero-rise"
              style={{ animationDelay: "0.15s" }}
            >
              <p>
                I&apos;m{" "}
                <span className="font-semibold text-white">Ayodya Sasanka</span>
                , a software engineering student at Cardiff Metropolitan
                University and founder building products that people actually
                use. My path started with curiosity about how software works —
                and grew into shipping real systems for clients and communities.
              </p>
              <p>
                As Founder &amp; CEO of{" "}
                <span className="font-semibold text-cyan-400">Codexeed</span>, I
                lead web and mobile builds with a focus on clean architecture
                and performance. Through{" "}
                <span className="font-semibold text-cyan-400">GameXeed</span>, I
                also serve gamers with accessible game distribution. I care
                about craft, clarity, and turning ideas into dependable software.
              </p>
            </div>
          </div>

          {/* Polaroid cluster */}
          <div
            className="relative mx-auto mt-16 md:mt-20 h-[340px] sm:h-[400px] md:h-[460px] max-w-xl animate-hero-rise"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Left polaroid */}
            <figure className="absolute left-[2%] sm:left-[8%] top-4 w-[48%] sm:w-[46%] max-w-[240px] rotate-[-8deg] z-10 transition-transform duration-500 hover:-rotate-6 hover:-translate-y-1">
              <div className="relative bg-[#f4f4f4] p-2.5 pb-10 sm:p-3 sm:pb-12 shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
                <span className="story-pin" aria-hidden />
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-800">
                  <Image
                    src="/my.png"
                    alt="Ayodya Sasanka portrait"
                    fill
                    sizes="240px"
                    className="object-cover object-[center_20%] grayscale contrast-125"
                  />
                </div>
              </div>
            </figure>

            {/* Right polaroid */}
            <figure className="absolute right-[2%] sm:right-[6%] top-16 sm:top-20 w-[50%] sm:w-[48%] max-w-[260px] rotate-[7deg] z-20 transition-transform duration-500 hover:rotate-5 hover:-translate-y-1">
              <div className="relative bg-[#f4f4f4] p-2.5 pb-10 sm:p-3 sm:pb-12 shadow-[0_22px_55px_rgba(0,0,0,0.6)]">
                <span className="story-pin" aria-hidden />
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-800">
                  <Image
                    src="/my.png"
                    alt="Ayodya Sasanka"
                    fill
                    sizes="260px"
                    className="object-cover object-[center_10%] grayscale contrast-125 scale-110"
                  />
                </div>
              </div>
            </figure>
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
      <section id="company" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.04] to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Founder &amp; CEO of{" "}
              <span className="gradient-text">two ventures</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400 max-w-xl">
              Building software products and gaming experiences — from client
              systems to community platforms.
            </p>
          </div>

          {/* Codexeed details */}
          <article className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-24 md:mb-28">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-sm font-medium tracking-[0.18em] uppercase text-cyan-400/80 mb-3">
                  Software
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Codexeed
                </h3>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Custom web and mobile products for teams that need clean
                architecture, fast delivery, and software that scales. I lead
                design and engineering from idea to launch.
              </p>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                {["Web Development", "Mobile Apps", "UI/UX", "Consulting"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg bg-white text-black hover:bg-white/90 px-7 text-sm font-semibold border-0 shadow-none"
                >
                  <a
                    href="https://codexeed.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Codexeed
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-6 bg-cyan-500/15 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4 mb-10">
                    <Image
                      src="/codexeed.png"
                      alt="Codexeed"
                      width={56}
                      height={56}
                      className="h-14 w-auto object-contain"
                    />
                    <div>
                      <p className="text-white font-semibold text-lg">Codexeed</p>
                      <p className="text-slate-500 text-sm">Software Company</p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
                    {[
                      { label: "Clients", value: "5+" },
                      { label: "Team", value: "5+" },
                      { label: "Success", value: "100%" },
                      { label: "Years", value: "2+" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                          {label}
                        </dt>
                        <dd className="text-3xl md:text-4xl font-bold gradient-text">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </article>

          {/* GameXeed details */}
          <article className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-24 md:mb-28">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-6 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4 mb-10">
                    <Image
                      src="/Gamexeed21.png"
                      alt="GameXeed"
                      width={56}
                      height={56}
                      className="h-14 w-auto object-contain"
                    />
                    <div>
                      <p className="text-white font-semibold text-lg">GameXeed</p>
                      <p className="text-slate-500 text-sm">Gaming Company</p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
                    {[
                      { label: "Games sold", value: "100+" },
                      { label: "Gamers", value: "50+" },
                      { label: "Platforms", value: "PC" },
                      { label: "Years", value: "1+" },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                          {label}
                        </dt>
                        <dd className="text-3xl md:text-4xl font-bold text-sky-300">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 lg:text-right lg:flex lg:flex-col lg:items-end">
              <div>
                <p className="text-sm font-medium tracking-[0.18em] uppercase text-sky-300/80 mb-3">
                  Gaming
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  GameXeed
                </h3>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                A game sales and distribution venture connecting players with
                PC and console titles — simple checkout, fair pricing, and a
                growing community of gamers.
              </p>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300 lg:justify-end">
                {[
                  "PC Games",
                  "Console",
                  "Digital Sales",
                  "Community",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-sky-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <div>
                <Button
                  size="lg"
                  asChild
                  className="h-12 rounded-lg bg-transparent text-white border border-white/40 hover:bg-white/10 hover:text-white px-7 text-sm font-medium shadow-none"
                >
                  <a href="#contact">
                    Visit GameXeed
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </article>

          {/* Site showcase cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => {
              const isExternal = project.href.startsWith("http");
              return (
                <a
                  key={project.title}
                  href={project.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  onClick={
                    !isExternal
                      ? (e) => {
                          e.preventDefault();
                          scrollToSection("contact");
                        }
                      : undefined
                  }
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0d1526] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]"
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden ${
                      project.accent === "lime"
                        ? "bg-[#050805]"
                        : "bg-[#060a12]"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 ${
                        project.accent === "lime"
                          ? "bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.18)_0%,transparent_65%)]"
                          : "bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.2)_0%,transparent_65%)]"
                      }`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-14">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={320}
                        height={120}
                        className="relative z-10 w-full max-w-[260px] h-auto object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span
                      className={`absolute top-1/2 left-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 ${
                        project.accent === "lime"
                          ? "bg-black/80 border-lime-400/50 text-lime-300"
                          : "bg-white text-black border-white"
                      }`}
                    >
                      {isExternal ? (
                        <ExternalLink className="w-5 h-5" />
                      ) : (
                        <ArrowRight className="w-5 h-5" />
                      )}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7 border-t border-white/5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-white/15 text-slate-300 bg-white/[0.03]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-px ${
                      project.accent === "lime"
                        ? "bg-gradient-to-r from-transparent via-lime-400/70 to-transparent"
                        : "bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
                    }`}
                  />
                </a>
              );
            })}
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
