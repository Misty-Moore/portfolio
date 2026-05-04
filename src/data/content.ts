// Site branding (used in header, footer, metadata)
export const site = {
  name: "Misty Moore",
  initials: "PJ",
};

// Tech skill name -> local icon filename in /icons/tech/ (same as template)
export const techIconFile: Record<string, string> = {
  Java: "java.svg",
  "Spring Boot": "spring.svg",
  Python: "python.svg",
  Django: "django.svg",
  Flask: "flask-dark.svg",
  FastAPI: "fast-api.svg",
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  React: "reactjs.svg",
  NextJS: "nextjs.svg",
  Vue: "vuejs.svg",
  Angular: "angular.svg",
  "Node.js": "nodejs.svg",
  MySQL: "mysql.svg",
  PostgreSQL: "postgresql.svg",
  MongoDB: "mongodb.svg",
  Docker: "docker.svg",
  AWS: "aws.svg",
  Kubernetes: "kubernetes.svg",
  Kafka: "kafka.svg",
  Git: "git.svg",
  GitHub: "github-dark.svg",
  "CI/CD": "ci-cd.svg",
  Rust: "rust.svg",
  NestJS: "nestjs.svg",
  "Next.js": "nextjs.svg",
  "Microsoft Azure": "azure.svg",
};

// Fallback: Simple Icons slug (cdn.simpleicons.org/slug) when local file missing
export const techSkillIcons: Record<string, string> = {
  Java: "openjdk",
  "Spring Boot": "springboot",
  Python: "python",
  Django: "django",
  Flask: "flask",
  FastAPI: "fastapi",
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  NextJS: "nextdotjs",
  Vue: "vuedotjs",
  Angular: "angular",
  "Node.js": "nodedotjs",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Docker: "docker",
  AWS: "amazonaws",
  Kubernetes: "kubernetes",
  Kafka: "apachekafka",
  Git: "git",
  GitHub: "github",
  "CI/CD": "cicd",
  Jenkins: "jenkins",
  GitLab: "gitlab",
  Rust: "rust",
  NestJS: "nestjs",
  "Microsoft Azure": "microsoftazure",
};

export const papers = [
  "/papers/paper1.png",
  "/papers/paper1-original.jpg",
  "/papers/paper2.png",
  "/papers/paper2-original.jpg",
  "/papers/paper3.png",
  "/papers/paper3-original.jpg",
];

export const hero = {
  title: "Hi, I'm Misty 👋",
  paragraphs: [
    "Systems architect and software professional with 16+ years of experience designing, supporting, and improving CRM-based operational systems, including long-term work on the DHS TRIP Redress Management System. Skilled in business analysis, software engineering, requirements development, dashboard creation, functionality testing, SOP development, user training, backlog consolidation, and AI quality assurance.",
    "Experienced in working directly with developers, stakeholders, and end users to translate complex operational needs into clear technical requirements and usable systems. Strong background in the intersection of systems, data, and human behavior, with a focus on improving performance, usability, and real-world adoption.",
  ],
};

export const funFacts: { text: string; icon: string }[] = [
  // { text: "Conekta", icon: "building" },
  { text: "B.S. Computer Science, Business Administration and Management, Genera — Western Governors University", icon: "graduation" },
  { text: "M.S. General Psychology— Capella", icon: "graduation" },
  { text: "Prince Frederick, Maryland, United States", icon: "mapPin" },
  { text: "English · Spanish", icon: "globe" },
  { text: "Senior Software Engineer", icon: "briefcase" },
  { text: "Lead System Architect", icon: "briefcase" },
  { text: "Rust & Java backend", icon: "book" },
  { text: "Payment & fraud systems", icon: "glasses" },
  { text: "Team mentoring & Leadership", icon: "skiing" },
];

export const techSkills = [
  "Java",
  "Spring Boot",
  "Rust",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Vue",
  "NestJS",
  "PostgreSQL",
  "Docker",
  "Microsoft Azure",
  "Git",
  "GitHub",
  "CI/CD",
  "Jenkins",
];

// Company slug and logo: logoUrl = local /work/ file (same as template), else Clearbit via logoDomain
export const workExperience = [
  {
    company: "Human Systems Integration and Infrastructure — HSII™",
    role: "Lead Systems Architect | AI Quality Assurance | Backlog Consolidation",
    period: "Jul 2025 – Apr 2026",
    location: "Lusby, Maryland",
    description:
      "Led systems architecture, AI quality assurance, and backlog consolidation efforts for operational software environments by reviewing system requirements, organizing technical priorities, validating functionality, supporting developers and stakeholders, improving workflow clarity, documenting user-facing processes, and helping transform complex business needs into practical software improvements that increased usability, reduced confusion, strengthened delivery planning, and supported more reliable system performance across real-world operational teams.",
    slug: "hsii",
    logoDomain: "HSII.com",
  },
  {
    company: "Human Systems Integration and Infrastructure — HSII™",
    role: "Senior Software Engineer",
    period: "Sep 2024 – Jul 2025",
    location: "Lusby, Maryland",
    description:
      "Served as a Senior Software Engineer supporting CRM-based system enhancements, technical analysis, dashboard improvements, feature testing, requirements refinement, and stakeholder communication by working closely with developers, business users, and operational teams to identify system gaps, improve reporting visibility, validate software behavior, maintain documentation, support user workflows, and deliver practical improvements that made complex operational processes clearer, more consistent, and easier to manage.",
    slug: "hsii",
    logoDomain: "HSII.com",
  },
  {
    company: "Human Systems Integration and Infrastructure — HSII™",
    role: "Software Engineer",
    period: "Oct 2018 – Sep 2024",
    location: "Lusby, Maryland",
    description:
      "Worked as a Software Engineer on the development, support, testing, and long-term operation of a CRM-based Redress Management System for DHS TRIP by collaborating directly with developers, writing and refining requirements, building dashboards, testing functionality, troubleshooting issues, creating SOPs and training materials, supporting end users, documenting workflows, and helping ensure the system successfully met real operational needs while improving usability, reporting, consistency, and day-to-day case management performance.",
    slug: "hsii",
    logoDomain: "HSII.com",
  },
  {
    company: "Transportation Security Administration — TSA",
    role: "Program Specialist",
    period: "Feb 2009 – Oct 2018",
    location: "Arlington, Virginia",
    description:
      "Supported Transportation Security Administration program operations as a Program Specialist by assisting with documentation, reporting, case-related workflows, stakeholder coordination, process tracking, administrative support, and operational communication, while building strong experience in federal security processes, redress-related program needs, data handling, workflow consistency, and the practical challenges that later informed software requirements, user training, system design, and business analysis work within CRM-based government systems.",
    slug: "tsa",
    logoDomain: "TSA.com",
  }
];

export const education=
[
  {
    eduTitle:"Master of Science, Data Engineering",
    period:"2026 – 2027",
    college:"Western Governors University",
  },
  {
    eduTitle:"Master of Science, General Psychology",
    period:"2024 – 2025",
    college:"Capella University",
  },
  {
    eduTitle:"Bachelor of Science, Computer Science & Business Administration and Management",
    period:"2018 – 2023",
    college:"Western Governors University",
  },
]

export type ProjectGalleryItem = { title: string; date: string; image?: string; cardStyle?: "award" };
export type ProjectDetail = {
  title: string;
  description: string;
  slug: string;
  image: string;
  teamSize?: number;
  role?: string;
  duration?: string;
  techStack?: string[];
  gallery?: ProjectGalleryItem[];
  introduction?: string;
  keyFeatures?: string[];
  technicalInsights?: string[];
  challengesSolutions?: string[];
  outcome?: string[];
};

export const projects: ProjectDetail[] = [
  {
    title: "Payment Processing & Fraud Detection Systems",
    description: "Scalable backend systems for payments and fraud at HSII™",
    slug: "project-a",
    image: "/work/First-work.png",
    teamSize: 4,
    role: "Senior Software Engineer",
    duration: "Oct 2024 - Present",
    techStack: ["Java", "Spring Boot", "Rust", "Docker", "CI/CD", "Jenkins", "Git"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/first-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/first-pro/2.webp" },
    ],
    introduction:
      "At HSII™ I lead the design and development of scalable backend systems for payment processing and fraud detection. I introduced Rust for internal tooling and CLI scripts (repository health checks, data automation) and pilot Rust for new backend experiments to evaluate performance and memory safety in high-throughput tasks.",
    keyFeatures: [
      "Scalable backend systems for payment processing and fraud detection",
      "Rust-based internal tooling and CLI scripts for repo health checks and data automation",
      "Rust pilots for new backend experiments (performance and memory safety)",
      "Architectural improvements and legacy-to-microservices modernization",
      "Java/Spring Boot L2+/L3 production support on Tomcat; Sev-1/Sev-2 triage, GC and HikariCP tuning",
      "CloudWatch dashboards and alarms for JVM and API SLAs; runbooks, bash utilities, health checks",
      "Hotfix and change windows via Git/Jenkins with backout plans",
    ],
    technicalInsights: [
      "Java + Spring Boot payment APIs on Tomcat; reduced p95 latency and MTTR through tuning",
      "Rust for internal tooling: repository health checks, CLI scripts, and data automation",
      "Evaluated Rust for high-throughput backend experiments (performance, memory safety)",
      "SRE/operations: CloudWatch, runbooks, log parsing, post-deploy smoke tests",
      "CI/CD and change management with Git/Jenkins and backout plans",
    ],
    challengesSolutions: [
      "Production incidents and latency: Triage Sev-1/Sev-2, analyze thread/heap dumps, tune GC and HikariCP to reduce p95 latency and MTTR.",
      "Observability and reliability: Implemented CloudWatch dashboards/alarms for JVM and API SLAs; authored runbooks and bash utilities for log parsing and health checks.",
      "Legacy systems: Driving architectural improvements and modernizing legacy services into microservices.",
      "Internal efficiency: Introduced Rust for tooling and automation to improve repo health and data workflows.",
    ],
    outcome: [
      "Reduced p95 latency and MTTR for Java payment APIs through targeted tuning",
      "Improved operational visibility with CloudWatch and runbooks",
      "Introduced Rust for internal tooling and backend experiments",
      "Ongoing modernization of legacy services into microservices",
    ],
  },
  {
    title: "Multilingual Education Platform",
    description: "Education platform for thousands of learners at HSII™",
    slug: "project-b",
    image: "/work/second-work.png",
    teamSize: 8,
    role: "Software Engineer",
    duration: "Mar 2021 - Dec 2024",
    techStack: ["Java", "Spring Boot", "Rust", "PostgreSQL", "React", "CI/CD"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/sec-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/sec-pro/2.webp" },
    ],
    introduction:
      "At HSII™ I designed and implemented key modules in a multilingual education platform used by thousands of learners. I prototyped Rust microservices for student analytics and used Rust for CLI utilities (data parsing, local environment validation). I championed CI/CD, automated testing, and performance monitoring.",
    keyFeatures: [
      "Key modules in a multilingual education platform for thousands of learners",
      "Rust microservice prototypes for student analytics processing",
      "Rust CLI utilities for data parsing and local environment validation",
      "Agile ceremonies and close work with product on user stories",
      "CI/CD, automated testing, and performance monitoring for mission-critical services",
      "Java/Struts and Spring MVC support; JDBC, thread contention, classloader fixes",
      "PostgreSQL/DB2 query and index tuning; Autosys/crontab monitors with alert deduplication",
    ],
    technicalInsights: [
      "Java/Struts and Spring MVC in production on Tomcat/WebSphere; resolved connection leaks and classloader conflicts",
      "Database tuning: PostgreSQL/DB2 queries and indexes to shrink batch windows",
      "Scheduling and monitoring: Autosys/crontab with alert deduplication; JVM flags and SSL/keystore renewals",
      "Rust for analytics processing and CLI tooling",
      "CI/CD and performance monitoring practices",
    ],
    challengesSolutions: [
      "Production stability: Resolved JDBC connection leaks, thread contention, and classloader conflicts in Java services.",
      "Batch and performance: Tuned PostgreSQL/DB2 queries and indexes to reduce batch windows.",
      "Operational reliability: Implemented Autosys/crontab monitors with alert deduplication; standardized JVM flags and SSL/keystore renewals to prevent handshake issues.",
      "Data and tooling: Used Rust for analytics prototypes and CLI utilities.",
    ],
    outcome: [
      "Delivered key modules used by thousands of learners on the education platform",
      "Improved production stability and batch performance through tuning and monitoring",
      "Introduced Rust for analytics and internal tooling",
      "Strengthened CI/CD and performance monitoring for mission-critical services",
    ],
  },
  {
    title: "Internal Business Applications & Dashboards",
    description: "Inventory, sales, and customer service apps at HSII™",
    slug: "project-c",
    image: "/work/third-work.png",
    teamSize: 5,
    role: "Software Developer",
    duration: "Jul 2018 - Mar 2021",
    techStack: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/thi-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/thi-pro/2.webp" },
    ],
    introduction:
      "At HSII™ I developed and maintained internal business applications for inventory, sales, and customer service workflows. I implemented reporting dashboards and back-office automation tools and collaborated with designers and stakeholders on UI/UX and functionality.",
    keyFeatures: [
      "Internal business applications for inventory, sales, and customer service",
      "Reporting dashboards and back-office automation",
      "Iteration on UI/UX and functionality with designers and stakeholders",
      "Operational efficiency improvements",
    ],
    technicalInsights: [
      "Full-stack development for internal workflows",
      "Dashboard and reporting tooling",
      "Stakeholder and designer collaboration",
    ],
    challengesSolutions: [
      "Manual and fragmented workflows: Built applications and automation to centralize and streamline operations.",
      "Visibility into operations: Implemented reporting dashboards for better decision-making.",
      "Evolving requirements: Collaborated with designers and stakeholders to iterate on UI/UX and features.",
    ],
    outcome: [
      "Improved operational efficiency with automation and dashboards",
      "Supported inventory, sales, and customer service workflows",
      "Delivered tools aligned with stakeholder and design feedback",
    ],
  },
  {
    title: "Custom Full-Stack Solutions for Startups",
    description: "Web apps, CRM, and automation for small businesses",
    slug: "project-d",
    image: "/work/fourth-work.png",
    teamSize: 6,
    role: "Software Developer",
    duration: "Jan 2015 - May 2018",
    techStack: ["React", "Express.js", "PostgreSQL", "DigitalOcean"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/for-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/for-pro/2.webp" },
    ],
    introduction:
      "I delivered custom software solutions to small businesses and startups across industries. I built full-stack web applications, CRM tools, and automation scripts and managed the full lifecycle from client consultation to deployment and maintenance using React, Express.js, PostgreSQL, and DigitalOcean.",
    keyFeatures: [
      "Custom software for small businesses and startups across industries",
      "Full-stack web applications, CRM tools, and automation scripts",
      "End-to-end lifecycle: consultation, development, deployment, maintenance",
      "React, Express.js, PostgreSQL, DigitalOcean",
    ],
    technicalInsights: [
      "React and Express.js for full-stack web applications",
      "PostgreSQL for data persistence",
      "DigitalOcean for deployment and hosting",
      "Client-facing delivery and maintenance",
    ],
    challengesSolutions: [
      "Diverse client needs: Tailored solutions per industry and use case.",
      "Resource constraints: Used modern, cost-effective stack (React, Express, PostgreSQL, DigitalOcean) for reliable delivery.",
      "Ongoing support: Managed deployment and maintenance to keep solutions running.",
    ],
    outcome: [
      "Delivered custom solutions across multiple industries",
      "Strengthened client delivery and long-term support.",
      "Built and maintained full-stack web apps, CRMs, and automation",
      "Managed full lifecycle from consultation to deployment and maintenance",
    ],
  },
];
