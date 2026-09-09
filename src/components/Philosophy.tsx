import React from 'react';
import { CORE_PILLARS } from '../data/portfolioData';

export const Philosophy: React.FC = () => {
  return (
    <section id="about" className="w-full border-b border-primary/15 px-margin-mobile md:px-margin-desktop py-space-2xl md:py-space-3xl scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl">
        {/* Meta column */}
        <div className="md:col-span-3 flex flex-col gap-space-xs">
          <span className="font-label-code text-label-code text-primary uppercase font-semibold">01 // PHILOSOPHY</span>
          <span className="font-label-meta text-label-meta uppercase text-secondary">CORE DISCIPLINES</span>
        </div>

        {/* Core Content */}
        <div className="md:col-span-9 flex flex-col">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight mb-space-xl leading-tight font-bold">
            LEARNING TO BUILD MACHINE LEARNING SYSTEMS THAT ACTUALLY WORK, END TO END.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl font-body-md text-body-md text-secondary leading-relaxed mb-space-2xl">
            <p>
I'm a Computer Science student who got pulled into machine learning by wanting to see models do something beyond a notebook — predict, decide, or power a product someone can actually use. That's meant spending as much time on data cleaning, algorithm comparison, and deployment as on the model itself, because an accurate model that no one can use isn't really finished work.            </p>
            <p>
Across my internships and projects, I've worked as an ML team lead building SmartPOS-ML, built predictive models like a disease-risk predictor with XGBoost and RandomForest, and shipped a personal dashboard end-to-end. Alongside that, I'm building out my systems side — SQL, AWS, and core data structures and algorithms — so I can take a project from raw data to a deployed interface myself.            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-primary/15">
            {CORE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className={`p-space-lg border-b sm:border-b-0 ${
                  idx < CORE_PILLARS.length - 1 ? 'sm:border-r' : ''
                } border-primary/15 hover:bg-surface-container-low transition-colors duration-150 group`}
              >
                <span className="font-label-code text-label-code text-secondary group-hover:text-primary transition-colors font-medium">
                  {pillar.code}
                </span>
                <h3 className="font-title-sm text-title-sm uppercase text-primary mt-space-sm mb-space-xs font-semibold">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
