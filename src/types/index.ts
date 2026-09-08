export interface Project {
  id: string;
  code: string;
  domain: string;
  badge: string;
  badgeType: 'live' | 'active' | 'arch';
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl: string;
  scaleMetric?: string;
  caseStudy?: {
    overview: string;
    architecture: string;
    pipeline: string[];
    benchmarks: { metric: string; value: string; note: string }[];
    technologies: string[];
    keyDecisions: string[];
  };
}

export interface SkillItem {
  id: string;
  number: string;
  category: 'CORE' | 'CLOUD' | 'DATA' | 'FOUNDATIONS' | 'FULL-STACK';
  title: string;
  description: string;
  details?: string[];
  level: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  location: string;
  role: string;
  description: string;
  achievements: string[];
  techStack: string;
}

export interface EducationItem {
  type: 'DEGREE' | 'CERTIFICATION';
  institution: string;
  title: string;
  subtitle: string;
  metadata: string;
  date?: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  inquiryType: 'ADVISORY' | 'ML_SYSTEMS' | 'STAFF_ROLE' | 'GENERAL';
  message: string;
}
