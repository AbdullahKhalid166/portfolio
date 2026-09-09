import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import type { SkillItem } from '../types';

export const Capabilities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = ['ALL', 'CORE', 'CLOUD', 'DATA', 'FOUNDATIONS', 'FULL-STACK'];

  const filteredSkills = selectedCategory === 'ALL'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="w-full border-b border-primary/15 px-margin-mobile md:px-margin-desktop py-space-2xl md:py-space-3xl scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl">
        {/* Left Meta Column */}
        <div className="md:col-span-3">
          <span className="font-label-code text-label-code text-primary uppercase font-semibold">02 // CAPABILITIES</span>
          <div className="font-label-meta text-label-meta uppercase text-secondary mt-1">SYSTEM COMPILATION &amp; STACK</div>

          {/* Category Filter Matrix */}
          <div className="mt-space-lg flex flex-col gap-1">
            <span className="font-label-code text-[11px] text-secondary tracking-widest uppercase mb-1">FILTER DOMAIN:</span>
            <div className="flex flex-wrap md:flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left font-label-code text-[12px] px-2 py-1 border transition-all duration-150 ${
                    selectedCategory === cat
                      ? 'border-primary bg-primary text-on-primary font-semibold'
                      : 'border-primary/15 text-secondary hover:border-primary/40 hover:text-primary bg-surface'
                  }`}
                >
                  [{cat}]
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content Grid */}
        <div className="md:col-span-9 flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md border-t border-primary/15 pt-space-lg">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.id === skill.id;
              return (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  className={`p-space-md border cursor-pointer transition-all duration-150 flex flex-col justify-between group ${
                    isSelected
                      ? 'border-primary bg-surface-container-low ring-1 ring-primary'
                      : 'border-primary/20 bg-surface hover:border-primary hover:bg-surface-container-low'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-baseline mb-space-xs">
                      <span className="font-label-code text-label-code text-secondary group-hover:text-primary transition-colors font-mono">
                        {skill.number}
                      </span>
                      <span className="font-label-code text-label-code uppercase text-secondary font-medium">
                        {skill.category}
                      </span>
                    </div>

                    <h4 className="font-title-sm text-title-sm uppercase text-primary mb-1 font-bold">
                      {skill.title}
                    </h4>

                    <p className="font-label-code text-label-code text-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Expandable / Inspectable Details */}
                  {skill.details && (
                    <div className="mt-space-md pt-space-xs border-t border-primary/10">
                      <div className="flex flex-wrap gap-1 mt-1">
                        {skill.details.map((item, idx) => (
                          <span
                            key={idx}
                            className="font-label-code text-[11px] text-secondary group-hover:text-primary transition-colors bg-surface-container/60 px-1.5 py-0.5 border border-primary/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
