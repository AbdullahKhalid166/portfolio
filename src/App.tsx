import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Capabilities } from './components/Capabilities';
import { SelectedWorks } from './components/SelectedWorks';
import { Experience } from './components/Experience';
import { Foundations } from './components/Foundations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check system preference or stored preference
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased selection:bg-primary selection:text-on-primary">
      {/* Header */}
      <Header
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* SECTION 000: HERO */}
          <Hero />

          {/* SECTION 001: ABOUT & PHILOSOPHY */}
          <Philosophy />

          {/* SECTION 002: CAPABILITIES & TECHNICAL MATRIX */}
          <Capabilities />

          {/* SECTION 003: SELECTED WORKS */}
          <SelectedWorks />

          {/* SECTION 004: EXPERIENCE & TRAJECTORY */}
          <Experience />

          {/* SECTION 005: FOUNDATIONS */}
          <Foundations />

          {/* SECTION 006: CONNECT / INTERFACE */}
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
