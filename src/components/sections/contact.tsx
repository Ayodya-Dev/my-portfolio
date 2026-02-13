"use client";

import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import Link from 'next/link';
import { GradientBorder } from '@/components/ui-extended/gradient-border';
import { Button } from '@/components/ui/button';
import { contactInfo, location } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Linkedin,
  Github,
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ayodya@codexeed.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 relative"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-cyan-500/30 text-cyan-400 text-sm mb-6">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </div>
            <h2 id="contact-title" className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl border-cyan-500/20">
                <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map(({ icon, label, value, href }) => {
                    const IconComponent = iconMap[icon] || Mail;
                    return (
                      <Link 
                        key={label}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl glass hover:border-cyan-500/50 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                          <IconComponent className="w-5 h-5 text-cyan-400 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{label}</p>
                          <p className="font-medium text-white">{value}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium text-white">{location.label}</span>
                </div>
                <p className="text-slate-400">{location.value}</p>
              </div>
            </div>

            <GradientBorder>
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#0f172a]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#0f172a]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#0f172a]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cyan-500/30 bg-[#0f172a]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </GradientBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
