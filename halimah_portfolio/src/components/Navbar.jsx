import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import myImage from '../assets/my-image.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cvUrl = '/Halimah_Ibrahim_CV.pdf';

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const goToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const headerOffset = 96;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
    window.history.replaceState(null, '', `#${sectionId}`);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] isolate h-20 bg-white shadow-[0_10px_100px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => goToSection('home')}
          className="flex min-w-0 shrink-0 items-center gap-4 text-left"
        >
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-[#7843e9]/10 transition-colors duration-300 hover:border-[#7843e9]">
            <img src={myImage} alt="Halimah" className="h-full w-full object-cover" />
          </div>
          <span className="hidden max-w-[220px] truncate text-sm font-bold uppercase tracking-[2px] text-gray-800 md:block lg:max-w-[320px] xl:max-w-none xl:text-lg">
            Halimah Ibrahim-Akinoso
          </span>
        </button>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:flex xl:items-center xl:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className="px-4 py-3 text-sm font-bold uppercase tracking-[2px] text-[#333] transition-colors duration-300 hover:text-[#7843e9]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-[10001] pointer-events-auto rounded bg-[#7843e9] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md transition-colors duration-300 hover:bg-[#6635d0]"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 text-gray-700 xl:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div
        className={`xl:hidden absolute top-20 left-0 w-full origin-top border-t border-gray-100 bg-white shadow-xl transition-all duration-300 ${
          isOpen ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className="border-b border-gray-50 px-8 py-5 text-right text-base font-bold uppercase tracking-widest text-gray-800 hover:text-[#7843e9]"
            >
              {item.label}
            </button>
          ))}
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="px-8 py-5 text-right text-base font-bold uppercase tracking-widest text-[#7843e9]"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
