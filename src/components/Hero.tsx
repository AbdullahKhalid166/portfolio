import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="w-full border-b border-primary/15 px-margin-mobile md:px-margin-desktop py-space-2xl md:py-space-4xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl items-start">
        {/* Left Column (Cols 1-7) */}
        <div className="md:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-space-sm mb-space-lg">
              <span className="font-label-code text-label-code px-space-xs py-0.5 bg-primary text-on-primary font-semibold">
                001
              </span>
              <span className="font-label-code text-label-code uppercase tracking-wider text-secondary">
                ARCHITECTURAL MANIFESTO // PORTFOLIO
              </span>
            </div>

            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase tracking-tighter text-primary mb-space-lg font-bold leading-[0.95]">
              FULL-STACK<br />
              ML ENGINEER<br />
              &amp; RESEARCHER
            </h1>

            <p className="font-body-lg text-body-lg text-secondary max-w-xl mb-space-2xl leading-relaxed">
              {PERSONAL_INFO.manifestoSubtext}
            </p>
          </div>

          {/* Quick Stats Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs border-t border-b border-primary/15 py-space-md mb-space-xl">
            {PERSONAL_INFO.systemStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col border-r last:border-r-0 border-primary/10 pr-space-xs">
                <span className="font-label-code text-[11px] text-secondary tracking-wider uppercase">
                  {stat.label}
                </span>
                <span className="font-label-code text-[15px] font-bold text-primary mt-0.5">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Hero Actions */}
          <div className="flex flex-wrap items-center gap-space-md">
            <a
              href="/Abdullah_Khalid_CV.docx"
              download="Abdullah_Khalid_CV.docx"
              className="inline-flex items-center justify-center font-label-code text-label-code bg-primary text-on-primary border border-primary px-space-xl py-space-sm hover:bg-surface hover:text-primary transition-all duration-150 uppercase font-medium group"
            >
              DOWNLOAD CV <span className="ml-space-xs font-mono group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center font-label-code text-label-code border border-primary/30 text-primary px-space-xl py-space-sm hover:border-primary hover:bg-surface-container transition-all duration-150 uppercase font-medium group"
            >
              EXPLORE WORK <span className="ml-space-xs group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Frame (Cols 8-12) */}
        <div className="md:col-span-5 flex flex-col mt-space-lg md:mt-0">
          <div className="relative w-full border border-primary/20 bg-surface-container-low p-space-sm">
            <div className="w-full aspect-[1/1.2] overflow-hidden bg-surface-container grayscale contrast-125 border border-primary/10">
              <img
                src={PERSONAL_INFO.heroImage}
                alt={`${PERSONAL_INFO.name} - Full-Stack ML Engineer`}
                className="w-full h-full object-cover object-top transform hover:scale-[1.03] transition-transform duration-500"
                loading="eager"
              />
            </div>
            <div className="mt-space-sm pt-space-xs border-t border-primary/10 flex justify-between items-baseline font-label-code text-label-code text-primary">
              <span className="font-semibold tracking-wide">FIG. 01 — ABDULLAH KHALID</span>
              <span className="text-secondary tracking-widest">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
