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
            Bridging frontier machine learning research and resilient production architectures.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl font-body-md text-body-md text-secondary leading-relaxed mb-space-2xl">
            <p>
              Machine learning has transitioned from an exploratory empirical science into an unapologetic systems engineering problem. The barrier to state-of-the-art inference is rarely conceptual; it is memory bandwidth, distributed concurrency, microsecond tail latencies, and rigorous data telemetry.
            </p>
            <p>
              I develop end-to-end intelligence stacks: formulating neural architectures, engineering custom CUDA kernels for extreme acceleration, and structuring modular user interfaces that translate raw matrix multiplications into intuitive, responsive enterprise utilities.
            </p>
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
