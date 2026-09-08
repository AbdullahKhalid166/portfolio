import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('elevvo');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="w-full border-b border-primary/15 px-margin-mobile md:px-margin-desktop py-space-2xl md:py-space-3xl scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl">
        {/* Left Meta Column */}
        <div className="md:col-span-3">
          <span className="font-label-code text-label-code text-primary uppercase font-semibold">
            04 // EXPERIENCE
          </span>
          <div className="font-label-meta text-label-meta uppercase text-secondary mt-1">
            ENGINEERING TRAJECTORY
          </div>
        </div>

        {/* Right Timeline Roles */}
        <div className="md:col-span-9 flex flex-col">
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            const isLast = idx === EXPERIENCE_DATA.length - 1;

            return (
              <div
                key={exp.id}
                className={`border-t ${
                  isLast ? 'border-b' : ''
                } border-primary/15 py-space-xl flex flex-col md:flex-row md:items-start justify-between gap-space-md hover:bg-surface-container-low/50 transition-colors cursor-pointer`}
                onClick={() => toggleExpand(exp.id)}
              >
                {/* Left Period & Company */}
                <div className="w-full md:w-1/3 pr-space-md">
                  <span className="font-label-code text-label-code text-secondary font-mono">
                    {exp.period}
                  </span>
                  <h3 className="font-title-sm text-title-sm uppercase text-primary mt-1 font-bold">
                    {exp.company}
                  </h3>
                  <div className="font-label-code text-label-code text-secondary mt-0.5">
                    {exp.location}
                  </div>
                </div>

                {/* Right Details */}
                <div className="w-full md:w-2/3 flex flex-col">
                  <div className="flex items-center justify-between mb-space-sm">
                    <h4 className="font-headline-md text-headline-md text-primary tracking-tight font-bold">
                      {exp.role}
                    </h4>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exp.id);
                      }}
                      className="text-secondary hover:text-primary p-1"
                      aria-label="Toggle role achievements"
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  <p className="font-body-md text-body-md text-secondary mb-space-md leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Expandable Achievements */}
                  {isExpanded && (
                    <div className="mb-space-md bg-surface-container/40 p-space-md border border-primary/10 animate-in fade-in duration-200">
                      <span className="font-label-code text-[11px] text-secondary tracking-widest uppercase block mb-space-xs font-semibold">
                        KEY ARCHITECTURAL MILESTONES:
                      </span>
                      <ul className="flex flex-col gap-1.5 font-label-code text-[12px] text-primary">
                        {exp.achievements.map((item, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2">
                            <span className="text-secondary font-mono">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="font-label-code text-label-code text-primary font-medium">
                    TECH: {exp.techStack}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
