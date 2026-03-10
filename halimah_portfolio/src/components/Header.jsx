import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white z-[1000] shadow-[0_10px_100px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo/Name Section */}
        <div className="flex items-center gap-4 cursor-pointer hover:text-[#7843e9] transition-colors">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#7843e9]/20">
            <img 
              src="https://rammaheshwari.com/static/media/ram-maheshwari.930983a9.jpg" 
              alt="Halimah Akinoso" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-bold uppercase tracking-widest text-gray-800">
            Halimah Akinoso
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-bold uppercase tracking-widest text-[#333] hover:text-[#7843e9] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-8 py-6 text-right text-lg font-bold uppercase tracking-widest text-[#333] border-b border-gray-50 hover:text-[#7843e9]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;