import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const SelectedWorks: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full border-b border-primary/15 px-margin-mobile md:px-margin-desktop py-space-2xl md:py-space-3xl scroll-mt-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/15 pb-space-lg mb-space-2xl">
        <div>
          <span className="font-label-code text-label-code text-primary uppercase font-semibold">
            03 // MY WORK
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-primary tracking-tight mt-1 font-bold">
            PROJECTS
          </h2>
        </div>
      </div>

      {/* Project Manifest Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {PROJECTS_DATA.map((project) => (
          <article
            key={project.id}
            className="border border-primary/20 bg-surface p-space-lg flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-150 group cursor-pointer"
            onClick={() => setActiveProject(project)}
          >
            <div>
              {/* Card Meta Bar */}
              <div className="flex justify-between items-baseline border-b border-primary/10 pb-space-xs mb-space-md">
                <span className="font-label-code text-label-code text-primary font-semibold">
                  {project.code}
                </span>
                <span
                  className={`font-label-code text-label-code px-space-xs py-0.5 text-[11px] font-semibold ${
                    project.badgeType === 'arch'
                      ? 'border border-primary/30 text-primary bg-transparent'
                      : 'bg-primary text-on-primary'
                  }`}
                >
                  {project.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-headline-md text-headline-md text-primary tracking-tight mb-space-xs font-bold group-hover:text-primary">
                {project.title}
              </h3>

              <p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
                {project.description}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-space-xs mb-space-lg">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-label-code text-label-code border border-primary/20 px-space-xs py-0.5 bg-surface text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div
              className="flex items-center justify-between border-t border-primary/10 pt-space-md font-label-code text-label-code"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-space-md">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline flex items-center gap-1 font-semibold uppercase cursor-pointer"
                  >
                    LIVE DEMO ↗
                  </a>
                )}
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-primary hover:underline flex items-center gap-1 font-semibold uppercase cursor-pointer"
                >
                  CASE STUDY &amp; SYSTEM ↗
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-1 uppercase"
                >
                  GITHUB REPO ↗
                </a>
              </div>

              {project.scaleMetric && (
                <span className="text-secondary hidden sm:inline-block font-mono text-[12px]">
                  {project.scaleMetric}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
