import React from 'react';
import { Linkedin, Twitter, Youtube, Github, BookOpen } from 'lucide-react';

function Hero() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: BookOpen, href: '#', label: 'Dev.to' },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-[linear-gradient(to_right,rgba(245,245,245,0.8),rgba(245,245,245,0.8)),url('https://d33wubrfki0l68.cloudfront.net/da0520573b7858d199da3052194e4384b6587c64/62f6b/assets/svg/common-bg.svg')]"
    >
      {/* Social Links Side Bar */}
      <div className="hidden lg:flex flex-col absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md py-4 px-2 rounded-r-md">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              className="p-4 text-gray-800 hover:bg-[#7843e9]/10 hover:text-[#7843e9] transition-all duration-300"
              aria-label={social.label}
            >
              <Icon size={28} strokeWidth={1.5} />
            </a>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full mt-20 pb-32">
        <div className="text-center space-y-12">
          {/* Main Heading & Bio */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight uppercase">
              Hey, I'm Halimah Ibrahim-Akinoso
            </h1>
            <p className="text-xl md:text-2xl text-[#333] max-w-3xl mx-auto leading-relaxed font-medium">
              A Full Stack AI Developer specializing in building <span className="text-[#7843e9]">LLM-powered applications</span> and seamless user experiences that solve complex problems with data.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center relative z-10">
            <a
              href="#projects"
              className="px-20 py-5 bg-[#7843e9] text-white font-bold rounded-md 
                         hover:translate-y-[-3px] transition-all shadow-xl text-lg uppercase tracking-widest active:bg-[#6635d0] touch-manipulation"
            >
              Projects
            </a>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;