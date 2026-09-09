import React, { useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILLS_DATA, EDUCATION_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyMarkdown = () => {
    const text = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.role} | ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github}

## SUMMARY
${PERSONAL_INFO.manifestoSubtext}

## EXPERIENCE
${EXPERIENCE_DATA.map((e) => `### ${e.role} - ${e.company} (${e.period})
${e.description}
Technologies: ${e.techStack}
Key Milestones:
${e.achievements.map((a) => `- ${a}`).join('\n')}`).join('\n\n')}

## SELECTED WORKS & PROJECTS
${PROJECTS_DATA.map((p) => `### ${p.title} (${p.code})
${p.description}
Tags: ${p.tags.join(', ')}
${p.caseStudy?.benchmarks ? p.caseStudy.benchmarks.map((b) => `- ${b.metric}: ${b.value} (${b.note})`).join('\n') : ''}`).join('\n\n')}

## EDUCATION & CREDENTIALS
${EDUCATION_DATA.map((ed) => `- ${ed.title}, ${ed.institution} (${ed.metadata})`).join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150 print:p-0 print:bg-white">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-surface border-2 border-primary p-space-lg md:p-space-2xl shadow-none print:border-none print:max-h-none print:overflow-visible"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between border-b border-primary/20 pb-space-sm mb-space-lg print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-label-code text-[12px] uppercase text-primary font-bold">
              CURRICULUM VITAE // ABDULLAH KHALID
            </span>
            <span className="font-label-code text-[11px] text-secondary">
              [PRINT READY]
            </span>
          </div>

          <div className="flex items-center gap-space-sm">
            <a
              href="/Abdullah_Khalid_CV_2026.docx"
              download="Abdullah_Khalid_CV_2026.docx"
              className="inline-flex items-center gap-1.5 font-label-code text-[12px] bg-primary text-on-primary px-3 py-1 hover:bg-surface hover:text-primary border border-primary transition-colors uppercase font-medium"
            >
              Download DOCX
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 font-label-code text-[12px] border border-primary/30 text-primary px-3 py-1 hover:border-primary transition-colors uppercase font-medium"
            >
              <Printer size={13} /> Print
            </button>
            <button
              onClick={copyMarkdown}
              className="inline-flex items-center gap-1.5 font-label-code text-[12px] border border-primary/30 text-primary px-3 py-1 hover:border-primary transition-colors uppercase font-medium"
            >
              {copied ? <Check size={13} className="text-primary" /> : <Copy size={13} />}
              {copied ? 'Copied MD' : 'Copy MD'}
            </button>
            <button
              onClick={onClose}
              className="p-1 border border-primary/20 text-primary hover:bg-primary hover:text-on-primary transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="space-y-space-lg text-on-surface">
          {/* Header */}
          <div className="border-b-2 border-primary pb-space-md">
            <h1 className="font-display-xl text-[36px] md:text-[44px] uppercase font-bold tracking-tight text-primary leading-none">
              {PERSONAL_INFO.name}
            </h1>
            <div className="font-label-code text-[14px] text-primary font-semibold mt-1">
              {PERSONAL_INFO.role}
            </div>
            <div className="font-label-code text-[12px] text-secondary mt-1 flex flex-wrap gap-x-4 gap-y-1">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.github}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="font-label-code text-[13px] uppercase tracking-wider text-primary font-bold border-b border-primary/20 pb-1 mb-2">
              01 // EXECUTIVE SUMMARY &amp; MANIFESTO
            </h2>
            <p className="font-body-md text-sm text-secondary leading-relaxed">
              {PERSONAL_INFO.manifestoSubtext} Specializing in mathematical loss modeling, sub-millisecond CUDA kernel optimization, scalable AWS/Kubernetes distributed systems, and modern deterministic user interfaces.
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h2 className="font-label-code text-[13px] uppercase tracking-wider text-primary font-bold border-b border-primary/20 pb-1 mb-2">
              02 // CORE CAPABILITIES MATRIX
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {SKILLS_DATA.map((s) => (
                <div key={s.id} className="p-2 border border-primary/15 bg-surface-container-lowest">
                  <div className="flex justify-between items-baseline">
                    <span className="font-label-code text-[12px] font-bold text-primary">{s.title}</span>
                    <span className="font-label-code text-[10px] text-secondary">[{s.category}]</span>
                  </div>
                  <p className="font-label-code text-[11px] text-secondary mt-0.5">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Experience */}
          <div>
            <h2 className="font-label-code text-[13px] uppercase tracking-wider text-primary font-bold border-b border-primary/20 pb-1 mb-3">
              03 // PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="border-l-2 border-primary/30 pl-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div className="font-title-sm text-[16px] font-bold text-primary uppercase">
                      {exp.role} <span className="text-secondary font-normal">— {exp.company}</span>
                    </div>
                    <span className="font-label-code text-[11px] text-secondary">{exp.period}</span>
                  </div>
                  <p className="text-sm text-secondary mt-1">{exp.description}</p>
                  <ul className="mt-1.5 list-disc list-inside text-xs text-primary space-y-0.5 font-label-code">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                  <div className="font-label-code text-[11px] text-secondary mt-1">
                    TECH: {exp.techStack}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmarked Deployments */}
          <div>
            <h2 className="font-label-code text-[13px] uppercase tracking-wider text-primary font-bold border-b border-primary/20 pb-1 mb-3">
              04 // BENCHMARKED PROJECTS &amp; ARTIFACTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="p-3 border border-primary/15 bg-surface-container-lowest">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-title-sm text-[15px] font-bold text-primary">{p.title}</h3>
                    <span className="font-label-code text-[10px] text-secondary">{p.badge}</span>
                  </div>
                  <p className="text-xs text-secondary mt-1 line-clamp-2">{p.description}</p>
                  <div className="font-label-code text-[10px] text-primary mt-2">
                    {p.tags.join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div>
            <h2 className="font-label-code text-[13px] uppercase tracking-wider text-primary font-bold border-b border-primary/20 pb-1 mb-2">
              05 // EDUCATION &amp; CREDENTIALS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-2 border border-primary/15">
                  <div className="font-label-code text-[12px] font-bold text-primary uppercase">
                    {edu.title}
                  </div>
                  <div className="text-xs text-secondary">{edu.institution}</div>
                  <div className="font-label-code text-[10px] text-secondary mt-0.5">{edu.metadata}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-space-lg pt-space-md border-t border-primary/15 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="font-label-code text-label-code text-secondary hover:text-primary uppercase"
          >
            [CLOSE CURRICULUM VITAE]
          </button>
        </div>
      </div>
    </div>
  );
};
