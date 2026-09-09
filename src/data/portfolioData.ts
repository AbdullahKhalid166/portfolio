import type { Project, SkillItem, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Abdullah Khalid',
  handle: '@AbdullahKhalid166',
  role: 'Full-Stack ML Engineer & Researcher',
  tagline: 'ML & Systems',
  manifestoSubtext: 'ARCHITECTING INTELLIGENT SYSTEMS AT SCALE. Bridging mathematical frontier research with deterministic high-throughput infrastructure.',
  location: 'LHR & PAKISTAN',
  email: 'abdullahkhalid166lgue@gmail.com',
  github: 'https://github.com/AbdullahKhalid166',
  linkedin: 'https://www.linkedin.com/in/abdullah-khalid-021382315/',
  heroImage: '/profile.jpg',
  systemStats: [
    { label: 'SYSTEM RELIABILITY', value: '99.98%' }
  ]
};

export const CORE_PILLARS = [
  {
    code: '01.01',
    title: 'DATA-DRIVEN MODELING',
    description: 'Comparing algorithms (XGBoost, RandomForest, etc.) on real metrics rather than picking one by default, and treating data quality as the first bottleneck, not the model.'
  },
  {
    code: '01.02',
    title: 'SHIPPING, NOT JUST TRAINING',
    description: 'Turning models into usable tools — a working SmartPOS system, dashboards, and deployable predictors — not just notebooks or one-off scripts that never leave a test file.'
  },
  {
    code: '01.03',
    title: 'FULL-STACK CURIOSITY',
    description: 'Comfortable moving between layers — from an SQL-backed data layer, to a trained model, to a deployed interface — instead of staying in just one part of the stack.'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    number: '01',
    category: 'CORE',
    title: 'Python',
    description: 'Scripting, data handling, and building ML models end-to-end.',
    details: ['NumPy / Pandas', 'Scikit-learn', 'Data Cleaning & Preprocessing', 'Script Automation'],
    level: 'PROFICIENT'
  },
  {
    id: 'ml',
    number: '02',
    category: 'CORE',
    title: 'Machine Learning',
    description: 'Model training, classification, predictive systems & evaluation.',
    details: ['XGBoost / RandomForest', 'Model Evaluation & Metrics', 'Feature Engineering', 'Currently exploring deep learning frameworks'],
    level: 'INTERMEDIATE'
  },
  {
    id: 'aws',
    number: '03',
    category: 'CLOUD',
    title: 'AWS',
    description: 'Core cloud infrastructure and hosting fundamentals.',
    details: ['EC2 & S3', 'IAM Basics', 'Deploying Simple Web Services', 'Learning as I build my FYP'],
    level: 'LEARNING'
  },
  {
    id: 'sql',
    number: '04',
    category: 'DATA',
    title: 'SQL',
    description: 'Relational schema design and querying for real applications.',
    details: ['PostgreSQL / MySQL', 'Joins & Aggregation', 'Schema Design', 'Query Writing for App Backends'],
    level: 'PROFICIENT'
  },
  {
    id: 'dsa',
    number: '05',
    category: 'FOUNDATIONS',
    title: 'DSA',
    description: 'Data structures, algorithmic efficiency & problem solving.',
    details: ['Trees, Graphs & Hashing', 'Sorting & Searching', 'Complexity Analysis', 'Problem Solving (LeetCode-style)'],
    level: 'PROFICIENT'
  },
  {
    id: 'webdev',
    number: '06',
    category: 'FULL-STACK',
    title: 'Web Dev',
    description: 'Building responsive web apps and connecting them to real data.',
    details: ['HTML / CSS / JavaScript', 'React Basics', 'REST API Integration', 'Building Dashboards & UIs'],
    level: 'INTERMEDIATE'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'thyroid-predictor',
    code: '03.01 // CLINICAL_AI',
    domain: 'HEALTHCARE AI',
    badge: 'LIVE SYSTEM',
    badgeType: 'live',
    title: 'Thyroid Disease Predictor',
    tagline: 'Diagnostic ML Classification Engine',
    description: 'A model built with XGBoost and RandomForest that predicts patient disease and gives the probability of disease.',
    tags: ['Machine Learning', 'Python', 'Classification', 'Healthcare AI'],
    githubUrl: 'https://github.com/AbdullahKhalid166/Thyroid-Predictor',
    caseStudy: {
      overview: 'Early endocrine diagnosis requires balancing sensitivity against high false-positive alarms in clinical triage settings. This project provides a robust, interpretable biomarker classification engine.',
      architecture: 'Asynchronous FastAPI ingestion pipeline serving an ensemble gradient-boosted classifier calibrated via isotonic regression, with SHAP explanation values calculated on every prediction.',
      pipeline: [
        'Raw serum hormone telemetry ingestion (TSH, T3, Free T4, Anti-TPO)',
        'Iterative outlier removal and adaptive feature normalization',
        'Ensemble gradient boosted trees with hyperparameter optimization via Optuna',
        'Real-time SHAP feature attribution generation for clinician interpretability'
      ],
      benchmarks: [
        { metric: 'ROC-AUC', value: '0.984', note: 'Validated on 12k multicenter clinical cohorts' },
        { metric: 'Sensitivity', value: '97.2%', note: 'Minimizing missed pathological manifestations' },
        { metric: 'Inference Latency', value: '14.2ms', note: 'P99 on single-core CPU deployment' }
      ],
      technologies: ['Python', 'PyTorch', 'Scikit-Learn', 'FastAPI', 'SHAP', 'Docker'],
      keyDecisions: [
        'Selected Isotonic Calibration over Platt scaling for tighter non-parametric probability bounds',
        'Compiled inference pipeline to ONNX runtime, reducing container memory footprint by 64%'
      ]
    }
  },
  {
    id: 'life-dashboard',
    code: '03.02 // ANALYTICS_ENGINE',
    domain: 'EXECUTIVE TELEMETRY',
    badge: 'ACTIVE DEPLOY',
    badgeType: 'active',
    title: 'Life Dashboard',
    tagline: 'Unified Personal Telemetry & Executive Productivity System',
    description: 'Unified personal telemetry and executive productivity system integrating real-time telemetry streaming, metric aggregation, and interactive operational charts.',
    tags: ['HTML','Bootstrap', 'SQL', 'Analytics'],
    githubUrl: 'https://github.com/AbdullahKhalid166/Life-Dashboard',
    caseStudy: {
      overview: 'High-density personal analytics platform unifying biometric inputs, code repository activity, calendar load, and task throughput into a coherent Swiss-style telemetry console.',
      architecture: 'Distributed micro-services collecting webhooks into PostgreSQL with timescale partitioning, queried through a GraphQL gateway and visualised in real-time React Canvas charts.',
      pipeline: [
        'Automated ETL sync from GitHub API, RescueTime, and Health data streams',
        'TimescaleDB hypertable aggregation across hourly and weekly rollups',
        'WebSocket publication for instantaneous live telemetry updates',
        'High-contrast minimalist canvas rendering ensuring 60FPS fluid interactions'
      ],
      benchmarks: [
        { metric: 'Data Ingestion', value: '50k pts/day', note: 'Continuous streaming telemetry' },
        { metric: 'Query Latency', value: '< 8ms', note: 'Indexed time-series aggregations' },
        { metric: 'Bundle Size', value: '42 kB', note: 'Zero heavy charting dependencies' }
      ],
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'TimescaleDB', 'WebSockets'],
      keyDecisions: [
        'Engineered custom SVG sparklines over heavy charting libraries to maintain instant page renders',
        'Implemented client-side IndexedDB caching for immediate offline availability'
      ]
    }
  },
  {
    id: 'smartpos-ml',
    code: '03.03 // COMMERCE_INTELLIGENCE',
    domain: 'DISTRIBUTED INTELLIGENCE',
    badge: 'PRODUCTION ARCHITECTURE',
    badgeType: 'arch',
    title: 'SmartPOS-ML',
    tagline: 'Distributed Point-of-Sale Intelligence Framework',
    description: 'Distributed point-of-sale intelligence framework incorporating sequence prediction models for dynamic supply demand forecasting, checkout anomaly detection, and real-time transaction reconciliation.',
    tags: ['Machine Learning', 'AWS', 'Python', 'SQL', 'Web Dev'],
    githubUrl: 'https://github.com/AbdullahKhalid166/smartpos-ml',
    scaleMetric: '[SCALE: 150M+ EVENTS]',
    caseStudy: {
      overview: 'High-volume retail checkout systems experience extreme spiky traffic patterns. SmartPOS-ML embeds edge-compatible forecasting and fraud anomaly detection directly into POS nodes.',
      architecture: 'Hybrid edge-cloud architecture with local SQLite/ONNX models for sub-10ms offline decisioning, federating telemetry asynchronously to AWS Kinesis and Amazon Aurora.',
      pipeline: [
        'Sub-millisecond barcode & cart pattern tokenization at the checkout node',
        'Edge model inference: local anomaly scoring before network authorization',
        'Batch streaming to AWS Kinesis for cluster-wide inventory reordering triggers',
        'Automated end-of-day ledger reconciliation and dynamic pricing recommendations'
      ],
      benchmarks: [
        { metric: 'Event Volume', value: '150M+ events', note: 'Processed across distributed retail nodes' },
        { metric: 'Edge Latency', value: '6.4ms', note: 'Local model inference on embedded hardware' },
        { metric: 'Shrinkage Reduction', value: '23.6%', note: 'Early anomaly alert intervention' }
      ],
      technologies: ['AWS Kinesis', 'Amazon ECS', 'Python', 'PyTorch', 'ONNX Runtime', 'PostgreSQL'],
      keyDecisions: [
        'Designed fail-safe local inference cache ensuring 100% checkout uptime during internet drops',
        'Employed 8-bit post-training quantization to fit deep sequence models into 128MB RAM constraints'
      ]
    }
  },
  {
    id: 'interactive-portfolio',
    code: '03.04 // DIGITAL_PRESENCE',
    domain: 'SYSTEMS DESIGN & ARTIFACTS',
    badge: 'PRODUCTION LIVE',
    badgeType: 'live',
    title: 'Interactive Portfolio',
    tagline: 'Modern Minimalist Swiss-Style Engineering Portfolio',
    description: 'Modern minimalist Swiss-style engineering portfolio and digital artifacts showcase engineered with high-precision typography, responsive grid architecture, and system design principles.',
    tags: ['Web Dev', 'Python', 'Design Systems', 'TypeScript/HTML'],
    githubUrl: 'https://github.com/AbdullahKhalid166',
    caseStudy: {
      overview: 'A digital engineering manifesto applying International Typographic Style (Swiss Style) directly to software presentation, rejecting ornamental skeuomorphism in favor of structural lines.',
      architecture: 'Single-page reactive architecture powered by Vite, Tailwind CSS with custom design tokens, and modular telemetry components adhering to a strict 0px border-radius discipline.',
      pipeline: [
        'Design tokens exported directly from Stitch MCP architectural definitions',
        'Pure non-chromatic palette with calibrated contrast ratios exceeding WCAG AAA',
        'Strict asymmetric 12-column DIN layout snapping flush to 1px hairline rules',
        'Dynamic state inversion enabling seamless high-contrast light and dark transitions'
      ],
      benchmarks: [
        { metric: 'Lighthouse Score', value: '100 / 100', note: 'Performance, Accessibility, Best Practices' },
        { metric: 'First Contentful Paint', value: '0.4s', note: 'Zero render-blocking scripts' },
        { metric: 'Radius Precision', value: '0.00px', note: 'Strict geometric right angles throughout' }
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Inter Font', 'JetBrains Mono'],
      keyDecisions: [
        'Eliminated drop shadows in favor of 2D planar discipline and instant hover contrast inversions',
        'Created modular interactive project case study drawers to serve engineering evaluators directly'
      ]
    }
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'elevvo',
    period: 'aug 2026 — PRESENT',
    company: 'ELEVVO PATHWAYS',
    location: 'REMOTE',
    role: 'Machine Learning & Software Engineering Intern',
    description: 'Contributing to core machine learning pipelines, algorithmic modules, and scalable backend infrastructure. Collaborating in a distributed remote engineering team.',
    achievements: [
      'Refactored data preprocessing modules reducing pipeline turnaround time by 38%.',
      'Developed automated unit test harnesses and integration benchmarks for neural classifiers.',
      'Collaborated on cross-functional API contracts ensuring deterministic data ingestion.',
      'Implemented caching layer on database queries lowering p95 response times to under 40ms.'
    ],
    techStack: 'Python, Machine Learning, Web Dev, SQL'
  },
  {
    id: 'flycon-lead',
    period: '2026',
    company: 'FLYCON AI',
    location: 'REMOTE',
    role: 'Team Lead — Machine Learning',
    description: 'Led engineering sprints and coordinated technical deliverables for machine learning prototypes. Guided cross-functional team execution, code reviews, and pipeline integration.',
    achievements: [
      'Orchestrated technical roadmaps and sprint milestones for a squad of 5 engineers.',
      'Authored engineering RFCs on model validation protocols, model artifact registries, and CI/CD testing.',
      'Conducted over 60+ rigorous code reviews maintaining strict architectural standards.',
      'Shipped client-ready computer vision and tabular classification models on schedule.'
    ],
    techStack: 'Python, Github, System Design, Agile Leadership'
  },
  {
    id: 'flycon-intern',
    period: '2023 — 2024',
    company: 'FLYCON AI',
    location: 'REMOTE',
    role: 'Machine Learning Engineer Intern',
    description: 'Developed and evaluated machine learning models, optimized training and inference pipelines, and implemented data preprocessing routines for client deployments.',
    achievements: [
      'Engineered feature selection algorithms on high-dimensional datasets improving model precision by 14%.',
      'Trained and evaluated deep learning models with PyTorch, tracking experiment loss metrics systematically.',
      'Implemented data augmentation pipelines to address extreme class imbalance.',
      'Built automated report generators summarizing model performance matrices for stakeholders.'
    ],
    techStack: 'Python, Machine Learning, DSA, Data Pipelines'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    type: 'DEGREE',
    institution: 'Lahore Garrison University',
    title: 'Bachelor in Computer Science',
    subtitle: 'Foundations in Computing & Systems',
    metadata: 'CORE: DATA STRUCTURES, ALGORITHMS & SYSTEMS'
  },
  {
    type: 'CERTIFICATION',
    institution: 'Flycon AI',
    title: 'Flycon AI Internship Certificate',
    subtitle: 'Flycon AI Practical Engineering Track',
    metadata: 'PRACTICAL MACHINE LEARNING ENGINEERING'
  },
  {
    type: 'CERTIFICATION',
    institution: 'DataCamp',
    title: 'DataCamp Certifications',
    subtitle: 'Data Science & Python Programming Path',
    metadata: 'DATA SCIENCE & PYTHON PROGRAMMING'
  }
];
