import React from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface border-2 border-primary p-space-lg md:p-space-2xl shadow-none"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-space-md right-space-md p-1.5 border border-primary/20 text-primary hover:bg-primary hover:text-on-primary transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="border-b border-primary/15 pb-space-md mb-space-lg">
          <div className="flex items-center gap-space-sm mb-space-xs">
            <span className="font-label-code text-label-code text-primary font-bold">
              {project.code}
            </span>
            <span className="font-label-code text-label-code px-space-xs py-0.5 bg-primary text-on-primary text-[11px] font-semibold">
              {project.badge}
            </span>
            {project.scaleMetric && (
              <span className="font-label-code text-[11px] text-secondary font-mono">
                {project.scaleMetric}
              </span>
            )}
          </div>
          <h2 className="font-headline-md text-headline-md text-primary font-bold tracking-tight">
            {project.title}
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col gap-space-lg font-body-md text-body-md">
          {/* Executive Overview */}
          <div>
            <span className="font-label-code text-[12px] uppercase text-primary font-bold block mb-1">
              01 // SYSTEM OVERVIEW
            </span>
            <p className="text-secondary leading-relaxed">
              {project.caseStudy?.overview || project.description}
            </p>
          </div>

          {/* Architecture & Pipeline */}
          {project.caseStudy && (
            <div>
              <span className="font-label-code text-[12px] uppercase text-primary font-bold block mb-1">
                02 // ARCHITECTURAL PIPELINE
              </span>
              <p className="text-secondary mb-space-sm leading-relaxed">
                {project.caseStudy.architecture}
              </p>
              <div className="bg-surface-container-low border border-primary/15 p-space-md">
                <span className="font-label-code text-[11px] text-secondary tracking-widest uppercase block mb-space-xs">
                  EXECUTION FLOW:
                </span>
                <ul className="flex flex-col gap-2 font-label-code text-[12px] text-primary">
                  {project.caseStudy.pipeline.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-secondary font-mono">[{idx + 1}]</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Benchmarks & Empirical Metrics */}
          {project.caseStudy?.benchmarks && (
            <div>
              <span className="font-label-code text-[12px] uppercase text-primary font-bold block mb-space-xs">
                03 // BENCHMARKED TELEMETRY
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm border border-primary/15">
                {project.caseStudy.benchmarks.map((bench, idx) => (
                  <div key={idx} className="p-space-sm border-b sm:border-b-0 sm:border-r last:border-r-0 border-primary/15 bg-surface-container-lowest">
                    <span className="font-label-code text-[11px] text-secondary uppercase block">
                      {bench.metric}
                    </span>
                    <span className="font-headline-md text-headline-md font-bold text-primary block mt-0.5">
                      {bench.value}
                    </span>
                    <span className="font-label-code text-[11px] text-secondary block mt-1">
                      {bench.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Decisions */}
          {project.caseStudy?.keyDecisions && (
            <div>
              <span className="font-label-code text-[12px] uppercase text-primary font-bold block mb-space-xs">
                04 // KEY ENGINEERING TRADEOFFS
              </span>
              <ul className="flex flex-col gap-2">
                {project.caseStudy.keyDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-secondary text-sm">
                    <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <span className="font-label-code text-[12px] uppercase text-primary font-bold block mb-space-xs">
              05 // STACK &amp; SPECIFICATIONS
            </span>
            <div className="flex flex-wrap gap-space-xs">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-label-code text-label-code border border-primary/20 px-space-xs py-0.5 bg-surface-container-low text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-space-xl pt-space-md border-t border-primary/15 flex flex-wrap items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-label-code text-label-code bg-primary text-on-primary border border-primary px-space-lg py-space-xs hover:bg-surface hover:text-primary transition-colors uppercase font-medium"
              >
                Launch Demo <ExternalLink size={13} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-label-code text-label-code border border-primary/30 text-primary px-space-lg py-space-xs hover:border-primary hover:bg-surface-container transition-colors uppercase font-medium"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
              </svg>
              GitHub Code
            </a>
          </div>

          <button
            onClick={onClose}
            className="font-label-code text-label-code text-secondary hover:text-primary uppercase"
          >
            [CLOSE WINDOW]
          </button>
        </div>
      </div>
    </div>
  );
};
