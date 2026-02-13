export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'activity', label: 'Activity' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { platform: 'github', href: 'https://github.com', label: 'GitHub' },
  { platform: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  { platform: 'email', href: 'mailto:ayodya@codexeed.com', label: 'Email' },
];

export interface ExperienceMetric {
  label: string;
  value: string;
}

export interface Experience {
  id: string;
  company: string;
  companyTagline?: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  services: { icon: string; text: string }[];
  metrics: ExperienceMetric[];
  color: 'cyan' | 'purple';
}

export const experiences: Experience[] = [
  {
    id: 'codexeed',
    company: 'Codexeed',
    companyTagline: 'Software Company',
    role: 'Founder & CEO',
    period: '2022 - Present',
    description: 'Codexeed Software Company represents my vision of creating technology that empowers businesses and individuals. As the founder and CEO, I\'ve built a team of passionate developers dedicated to excellence. We specialize in custom software development, web applications, mobile apps, and digital transformation consulting.',
    highlights: [
      'Leading a team of 5+ developers on client projects',
      'Delivered 5+ successful client projects with 100% satisfaction',
      'Specialized in MERN stack and Next.js development',
      'Providing end-to-end digital transformation solutions',
    ],
    services: [
      { icon: 'Globe', text: 'Web Development' },
      { icon: 'Code2', text: 'Mobile Applications' },
      { icon: 'Sparkles', text: 'UI/UX Design' },
      { icon: 'Zap', text: 'Digital Consulting' },
    ],
    metrics: [
      { label: 'Clients', value: '5+' },
      { label: 'Team Size', value: '5+' },
      { label: 'Success Rate', value: '100%' },
      { label: 'Experience', value: '2+ yrs' },
    ],
    color: 'cyan',
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  subjects: string[];
  type: 'university' | 'secondary';
}

export const education: Education[] = [
  {
    id: 'cardiff-met',
    degree: 'BSc Software Engineering',
    institution: 'Cardiff Metropolitan University',
    period: '2022 - Present',
    description: 'Pursuing comprehensive education in software development, algorithms, database systems, and modern software engineering practices.',
    subjects: ['Software Dev', 'Algorithms', 'Database Systems', 'Project Management'],
    type: 'university',
  },
  {
    id: 'secondary',
    degree: 'A-Levels & GCSEs',
    institution: 'Secondary Education',
    period: 'Completed',
    description: 'Strong foundation in Mathematics, Computer Science, and Sciences, building the groundwork for a successful tech career.',
    subjects: ['Mathematics', 'Computer Science', 'Physics'],
    type: 'secondary',
  },
];

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
  colorClass: string;
}

export const skills: SkillCategory[] = [
  { 
    category: 'Frontend', 
    icon: 'Globe', 
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    colorClass: 'from-cyan-500/20',
  },
  { 
    category: 'Backend', 
    icon: 'Database', 
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    colorClass: 'from-blue-500/20',
  },
  { 
    category: 'Tools', 
    icon: 'Terminal', 
    skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'],
    colorClass: 'from-purple-500/20',
  },
  { 
    category: 'Mobile', 
    icon: 'Code2', 
    skills: ['React Native', 'Expo', 'Responsive Design', 'PWA'],
    colorClass: 'from-orange-500/20',
  },
  { 
    category: 'Soft Skills', 
    icon: 'User', 
    skills: ['Leadership', 'Communication', 'Problem Solving', 'Agile/Scrum'],
    colorClass: 'from-pink-500/20',
  },
  { 
    category: 'Learning', 
    icon: 'Sparkles', 
    skills: ['AI/ML', 'Cloud Architecture', 'System Design', 'DevOps'],
    colorClass: 'from-yellow-500/20',
  },
];

export interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const contactInfo: ContactInfo[] = [
  { label: 'Email', value: 'ayodya@codexeed.com', href: 'mailto:ayodya@codexeed.com', icon: 'Mail' },
  { label: 'LinkedIn', value: 'Ayodya Sasanka', href: 'https://linkedin.com', icon: 'Linkedin' },
  { label: 'GitHub', value: '@ayodyasasanka', href: 'https://github.com', icon: 'Github' },
];

export const location = {
  label: 'Location',
  value: 'Cardiff, United Kingdom',
};

export interface Stat {
  value: string;
  label: string;
}

export const aboutStats: Stat[] = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects' },
  { value: '5+', label: 'Happy Clients' },
  { value: '2', label: 'Companies Founded' },
];

export const aboutTags = [
  'Problem Solver', 
  'Team Leader', 
  'Innovation Driven', 
  'Detail Oriented'
];

export const aboutContent = {
  title: 'Crafting Digital',
  titleAccent: 'Excellence',
  paragraphs: [
    `Hi! I'm Ayodya Sasanka, a passionate Software Engineering student at Cardiff Metropolitan University. My journey in tech started with curiosity and has evolved into a mission to create impactful software solutions.`,
    `As the Founder & CEO of Codexeed Software Company, I lead a talented team in delivering cutting-edge web and mobile applications. Additionally, I'm the Founder & CEO of GameXeed, a computer game selling company serving the gaming community.`,
    `I believe in writing clean, efficient code and building products that make a difference. Whether it's a complex enterprise solution, an innovative startup idea, or a gaming platform, I bring dedication and expertise to every project.`,
  ],
};

export const heroContent = {
  greeting: "Hello, I'm",
  firstName: 'Ayodya',
  lastName: 'Sasanka',
  title: 'Full-Stack Developer & Technical Founder',
  tagline: 'Building scalable web applications with modern technologies.',
  availability: 'Available for opportunities',
  cta: "Let's Talk",
};

export const footerContent = {
  name: 'Ayodya Sasanka',
  copyright: '© 2026 Ayodya Sasanka. All rights reserved.',
};
