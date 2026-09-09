import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import type { ContactFormState } from '../types';
import { Copy, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    inquiryType: 'ADVISORY',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'transmitting' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const targetEmail = 'abdullahkhalid166e@gmail.com';
  const emailSubject = 'I have a query';
  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(emailSubject)}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = mailtoUrl;

    setTimeout(() => {
      if (document.hasFocus()) {
        window.open(gmailWebUrl, '_blank', 'noopener,noreferrer');
      }
    }, 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitStatus('transmitting');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: `Portfolio Inquiry [${formState.inquiryType}] from ${formState.name}`,
          _replyto: formState.email,
          inquiryType: formState.inquiryType,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('sent');
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message || 'Form delivery service returned an error.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setSubmitStatus('error');
      setErrorMessage(err?.message || 'Failed to submit via form service.');
    }
  };

  return (
    <section id="contact" className="w-full px-margin-mobile md:px-margin-desktop py-space-3xl md:py-space-4xl scroll-mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-xl items-start">
        {/* Left Meta Column */}
        <div className="md:col-span-3">
          <span className="font-label-code text-label-code text-primary uppercase font-semibold">
            06 // CONNECT
          </span>
          <div className="font-label-meta text-label-meta uppercase text-secondary mt-1">
            TRANSMISSION CHANNEL
          </div>

          <div className="mt-space-lg hidden md:flex flex-col gap-space-xs font-label-code text-[11px] text-secondary">
            <span>LOCATION: {PERSONAL_INFO.location}</span>
            <span>RESPONSE: &lt; 24 HOURS</span>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="md:col-span-9 flex flex-col">
          <h2 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase text-primary tracking-tighter mb-space-lg font-bold leading-[0.98]">
            OPEN TO OPPORTUNITIES.
          </h2>

          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mb-space-2xl leading-relaxed">
          Reach out about internships, ML projects, or full-stack development work.          
          </p>

          {/* Social Links & Quick Channels */}
          <div className="border-t border-primary/15 pt-space-xl mb-space-2xl">
            <div className="flex flex-col border-t border-primary/10">
              {/* GitHub */}
              <a
                className="py-space-md border-b border-primary/10 flex items-center justify-between group hover:pl-2 transition-all"
                href="https://github.com/AbdullahKhalid166"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-space-md">
                  <svg className="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24">
                    <path
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-label-code text-label-code text-primary uppercase font-semibold">
                    GITHUB / @AbdullahKhalid166
                  </span>
                </div>
                <span className="font-label-code text-label-code text-secondary group-hover:text-primary">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                className="py-space-md border-b border-primary/10 flex items-center justify-between group hover:pl-2 transition-all"
                href="https://www.linkedin.com/in/abdullah-khalid-021382315/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-space-md">
                  <svg className="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.88 0-1.59-.71-1.59-1.59s.71-1.59 1.59-1.59 1.59.71 1.59 1.59-.71 1.59-1.59 1.59M7.86 18.5v-8.37H5.07v8.37h2.79z"></path>
                  </svg>
                  <span className="font-label-code text-label-code text-primary uppercase font-semibold">
                    LINKEDIN / in/abdullah-khalid
                  </span>
                </div>
                <span className="font-label-code text-label-code text-secondary group-hover:text-primary">
                  ↗
                </span>
              </a>

              {/* Email Direct & Copy with Gmail Web Fallback */}
              <div className="py-space-md border-b border-primary/10 flex items-center justify-between group hover:pl-2 transition-all">
                <a
                  href={mailtoUrl}
                  onClick={handleEmailClick}
                  className="flex items-center gap-space-md"
                  title="Click to send email via Mail or Gmail app"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary">mail</span>
                  <span className="font-label-code text-label-code text-primary uppercase font-semibold">
                    EMAIL / {targetEmail}
                  </span>
                </a>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="font-label-code text-[11px] border border-primary/20 px-2 py-1 text-secondary hover:text-primary hover:border-primary transition-colors flex items-center gap-1"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="text-primary" /> COPIED
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> COPY
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Transmission Form */}
          <div className="border border-primary/20 bg-surface-container-low p-space-lg md:p-space-xl">
            <div className="flex items-center justify-between border-b border-primary/10 pb-space-xs mb-space-lg">
              <span className="font-label-code text-[12px] uppercase text-primary font-bold">
                DIRECT TRANSMISSION CONSOLE
              </span>
              <span className="font-label-code text-[11px] text-secondary font-mono">
                [ROUTING TO: {targetEmail}]
              </span>
            </div>

            {submitStatus === 'sent' ? (
              <div className="p-space-lg border border-primary bg-surface flex flex-col gap-space-sm animate-in fade-in">
                <div className="flex items-center gap-2 text-primary font-bold font-label-code">
                  <Check size={18} /> TRANSMISSION SENT DIRECTLY TO {targetEmail}
                </div>
                <p className="font-body-md text-secondary">
                  Thank you, <span className="text-primary font-semibold">{formState.name}</span>. Your inquiry regarding <span className="text-primary font-mono font-semibold">[{formState.inquiryType}]</span> has been dispatched to <span className="text-primary font-semibold">{targetEmail}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus('idle');
                    setFormState({ name: '', email: '', inquiryType: 'ADVISORY', message: '' });
                  }}
                  className="self-start mt-space-sm font-label-code text-[12px] border border-primary px-space-md py-1 text-primary hover:bg-primary hover:text-on-primary transition-colors uppercase font-medium"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                {submitStatus === 'error' && (
                  <div className="p-space-sm border border-red-500/40 bg-red-500/5 text-red-600 dark:text-red-400 font-label-code text-[12px] flex items-center justify-between">
                    <span>{errorMessage || 'Transmission failed.'}</span>
                    <a
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline font-bold ml-2"
                    >
                      Send via Gmail Web ↗
                    </a>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label className="font-label-meta text-[11px] uppercase text-secondary mb-1">
                      Sender Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-surface border border-primary/20 px-space-sm py-2 font-label-code text-[14px] text-primary focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col">
                    <label className="font-label-meta text-[11px] uppercase text-secondary mb-1">
                      Transmission Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@organization.ai"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-surface border border-primary/20 px-space-sm py-2 font-label-code text-[14px] text-primary focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col">
                  <label className="font-label-meta text-[11px] uppercase text-secondary mb-1">
                    Inquiry Scope *
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value as any })}
                    className="w-full bg-surface border border-primary/20 px-space-sm py-2 font-label-code text-[13px] text-primary focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="ADVISORY">TECHNICAL ADVISORY &amp; ARCHITECTURAL REVIEW</option>
                    <option value="ML_SYSTEMS">ML PRODUCTION PIPELINES &amp; CUDA/GPU OPTIMIZATION</option>
                    <option value="STAFF_ROLE">FULL-TIME STAFF / PRINCIPAL ML ENGINEER OPPORTUNITY</option>
                    <option value="GENERAL">GENERAL INQUIRY / COLLABORATION</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-baseline mb-1">
                    <label className="font-label-meta text-[11px] uppercase text-secondary">
                      Message Payload *
                    </label>
                    <span className="font-label-code text-[11px] text-secondary">
                      {formState.message.length} CHARACTERS
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe the engineering scope, infrastructure challenges, or role objectives..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-surface border border-primary/20 p-space-sm font-label-code text-[13px] text-primary focus:border-primary focus:outline-none transition-colors resize-y"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-between pt-space-xs">
                  <button
                    type="submit"
                    disabled={submitStatus === 'transmitting'}
                    className="inline-flex items-center justify-center gap-2 font-label-code text-label-code bg-primary text-on-primary border border-primary px-space-xl py-space-sm hover:bg-surface hover:text-primary transition-all duration-150 uppercase font-semibold disabled:opacity-50"
                  >
                    {submitStatus === 'transmitting' ? (
                      'TRANSMITTING...'
                    ) : (
                      <>
                        TRANSMIT INQUIRY <Send size={13} />
                      </>
                    )}
                  </button>

                  <span className="font-label-code text-[11px] text-secondary hidden sm:inline-block">
                    [PRESS TRANSMIT TO DISPATCH]
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
