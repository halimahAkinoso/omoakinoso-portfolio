import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import myImage from '../assets/my-image.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Consolidated navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white z-[1000] shadow-[0_10px_100px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex justify-between items-center">
        
        {/* Brand/Logo Section */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#7843e9]/10 group-hover:border-[#7843e9] transition-all duration-300">
            <img 
              src={myImage}
              alt="Halimah"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-lg font-bold uppercase tracking-widest text-gray-800 group-hover:text-[#7843e9] transition-colors">
            Halimah Ibrahim-Akinoso
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold uppercase tracking-[2px] text-[#333] hover:text-[#7843e9] transition-colors duration-300 px-5 py-4"
            >
              {item.label}
            </a>
          ))}

          {/* Download CV Button Integration */}
          <a 
            href="/HALIMAT IBRAHIM.pdf" 
            download="Halimah_Ibrahim_Akinoso_CV.pdf"
            className="ml-4 px-6 py-2 bg-[#7843e9] text-white text-xs font-bold uppercase tracking-widest rounded shadow-md hover:bg-[#6635d0] transition-all"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#7843e9]"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-right text-base font-bold uppercase tracking-widest text-gray-800 border-b border-gray-50 py-6 px-10 hover:text-[#7843e9]"
            >
              {item.label}
            </a>
          ))}
          {/* Mobile Download CV Link */}
          <a 
            href="/Halimah_CV.pdf" 
            download
            className="text-right text-base font-bold uppercase tracking-widest text-[#7843e9] py-6 px-10"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;