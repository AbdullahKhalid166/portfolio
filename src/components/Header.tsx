import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'about', label: '01 // ABOUT' },
    { id: 'skills', label: '02 // SKILLS' },
    { id: 'projects', label: '03 // PROJECTS' },
    { id: 'experience', label: '04 // EXPERIENCE' },
    { id: 'foundations', label: '05 // CERTIFICATIONS' },
    { id: 'contact', label: '06 // CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-primary/15 transition-colors duration-150">
      <div className="h-16 w-full px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#" className="flex items-center gap-space-md group">
          <span className="font-label-code text-label-code uppercase tracking-wider text-primary font-semibold group-hover:opacity-75 transition-opacity">
            {PERSONAL_INFO.name} — {PERSONAL_INFO.tagline}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`font-label-code text-label-code transition-colors uppercase py-1 px-1 border-b ${
                  isActive
                    ? 'text-primary font-semibold border-primary'
                    : 'text-on-surface-variant border-transparent hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-space-sm md:gap-space-md">
          {/* Theme Inversion Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 border border-primary/20 text-primary hover:bg-primary hover:text-on-primary transition-all duration-150 title-tooltip"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode (Swiss Inversion)'}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Download Resume Link */}
          <a
            href="/Abdullah_Khalid_CV_2026.pdf"
            download="Abdullah_Khalid_CV_2026.pdf"
            className="hidden sm:inline-flex items-center justify-center font-label-code text-label-code border border-primary bg-primary text-on-primary px-space-md py-space-xs hover:bg-surface hover:text-primary transition-colors uppercase font-medium"
          >
            <FileDown size={14} className="mr-1.5" />
            RESUME / CV
          </a>

          {/* Profile Glyph */}
          <a
            href="#contact"
            className="w-8 h-8 bg-primary flex items-center justify-center text-on-primary hover:bg-surface hover:text-primary transition-colors"
            title="Contact Abdullah Khalid"
            aria-label="Go to contact section"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 border border-primary/20 text-primary hover:bg-primary hover:text-on-primary transition-colors"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface border-b border-primary/15 px-margin-mobile py-space-md flex flex-col gap-space-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-code text-label-code uppercase py-2 px-space-xs border-l-2 transition-colors ${
                activeSection === item.id
                  ? 'border-primary text-primary font-semibold bg-surface-container-low'
                  : 'border-transparent text-secondary hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Abdullah_Khalid_CV_2026.pdf"
            download="Abdullah_Khalid_CV_2026.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-space-xs w-full text-center font-label-code text-label-code border border-primary bg-primary text-on-primary py-space-sm uppercase block font-medium"
          >
            DOWNLOAD CV / RESUME
          </a>
        </div>
      )}
    </header>
  );
};
