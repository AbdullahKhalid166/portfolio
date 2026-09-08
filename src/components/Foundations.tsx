import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Foundations: React.FC = () => {
  const formalEducation = EDUCATION_DATA.filter((e) => e.type === 'DEGREE');
  const certifications = EDUCATION_DATA.filter((e) => e.type === 'CERTIFICATION');

  return (
    <section id="foundations" className="w-full border-b border-primary/15 px-margin-mobile md:px-margin-desktop py-space-2xl md:py-space-3xl scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl">
        {/* Left Meta Column */}
        <div className="md:col-span-3">
          <span className="font-label-code text-label-code text-primary uppercase font-semibold">
            05 // FOUNDATIONS
          </span>
          <div className="font-label-meta text-label-meta uppercase text-secondary mt-1">
            ACADEMIA &amp; CREDENTIALS
          </div>
        </div>

        {/* Right Content Grid */}
        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          {/* Formal Education */}
          <div className="flex flex-col border-t border-primary/15 pt-space-lg">
            <span className="font-label-code text-label-code text-secondary mb-space-md uppercase font-semibold">
              [FORMAL EDUCATION]
            </span>
            {formalEducation.map((edu, idx) => (
              <div key={idx} className="mb-space-lg">
                <h3 className="font-title-sm text-title-sm uppercase text-primary mt-0.5 font-bold">
                  {edu.title}
                </h3>
                <div className="font-body-md text-body-md text-primary font-medium mt-1">
                  {edu.subtitle}
                </div>
                <p className="font-label-code text-label-code text-secondary mt-1">
                  {edu.metadata}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Industry Credentials */}
          <div className="flex flex-col border-t border-primary/15 pt-space-lg">
            <span className="font-label-code text-label-code text-secondary mb-space-md uppercase font-semibold">
              [CERTIFICATIONS &amp; EXPERIENCE]
            </span>
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`${
                  idx > 0 ? 'border-t border-primary/10 pt-space-md' : 'mb-space-lg'
                }`}
              >
                <h3 className="font-title-sm text-title-sm uppercase text-primary mt-0.5 font-bold">
                  {cert.institution}
                </h3>
                <div className="font-body-md text-body-md text-primary font-medium mt-1">
                  {cert.title}
                </div>
                <p className="font-label-code text-label-code text-secondary mt-1">
                  {cert.metadata}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
