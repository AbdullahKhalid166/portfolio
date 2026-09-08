import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-primary/15 bg-surface py-space-2xl transition-colors">
      <div className="w-full px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
        <div className="flex flex-col gap-space-xxs">
          <div className="font-label-code text-label-code uppercase text-primary font-bold">
            {PERSONAL_INFO.name}
          </div>
          <div className="font-label-meta text-label-meta uppercase text-secondary">
            {PERSONAL_INFO.role}
          </div>
        </div>

        <div className="flex items-center gap-space-md font-label-code text-label-code text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-wider text-secondary">SYSTEMS NORMAL</span>
          </div>
          <span className="text-secondary">•</span>
          <span className="text-secondary text-[12px]">© {new Date().getFullYear()} ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
};
