export const SITE = {
  name: "Vaibhav Srivastava",
  shortName: "VS",
  role: "Frontend Developer & SDE",
  tagline:
    "Pre-final year CS student shipping production React, REST APIs and full-stack systems — currently interning at Infosys Springboard, solving 700+ DSA problems on the side.",
  email: "srvvaibhav8@gmail.com",
  phone: "+91 96703 43201",
  location: "India · Open to Remote",
  since: 2023,
  socials: [
    { label: "GitHub",    href: "https://github.com/vaibhavsrv" },
    { label: "LinkedIn",  href: "https://linkedin.com/in/vaisrv" },
    { label: "LeetCode",  href: "https://leetcode.com/u/vaibhavsrv" },
    { label: "Instagram", href: "https://instagram.com/srvvaibhav" },
  ],
};

export const NAV = [
  { to: "/",        label: "Home",    index: "01" },
  { to: "/works",   label: "Works",   index: "02" },
  { to: "/about",   label: "About",   index: "03" },
  { to: "/contact", label: "Contact", index: "04" },
];

export const PROJECTS = [
  {
    slug: "cura",
    title: "Cura",
    year: "2025",
    category: "Full-Stack",
    summary:
      "Unified patient health portal with multi-role JWT auth (patients, doctors, pharmacists), normalized PostgreSQL schema and role-specific React dashboards.",
    tags: ["React", "Node.js", "PostgreSQL", "JWT"],
    accent: "from-primary/40 to-accent/20",
    live: "https://cura-your-caring-companion.vercel.app/",
    github: "https://github.com/vaibhavsrv/cura", // update if different
  },
  {
    slug: "authflow",
    title: "AuthFlow",
    year: "2025",
    category: "Backend",
    summary:
      "Secure JWT authentication REST API with access/refresh token rotation, middleware-based role authorization, and clean route → controller → service → repository layering.",
    tags: ["Node.js", "Express", "JWT", "PostgreSQL"],
    accent: "from-accent/40 to-primary/20",
    href: "https://github.com/vaibhavsrv",
  },
  {
    slug: "devfolio",
    title: "DevFolio",
    year: "2024",
    category: "Frontend",
    summary:
      "Fully responsive single-page developer portfolio with dark/light theme toggle, reusable component architecture, and CSS-driven transitions.",
    tags: ["React", "JavaScript", "CSS"],
    accent: "from-primary/30 to-primary-glow/20",
    live: "https://devfolio-three-mu.vercel.app/",
    github: "https://github.com/vaibhavsrv",
  },
  {
    slug: "ai-code-review",
    title: "AI Code Review Tool",
    year: "2025",
    category: "Hackathon",
    summary:
      "Built in 24 hours during a hackathon — an AI-assisted code review tool demonstrating rapid prototyping and engineering under pressure.",
    tags: ["AI", "React", "Node.js", "Prototype"],
    accent: "from-primary/20 to-accent/30",
    href: "https://github.com/vaibhavsrv",
  },
  {
    slug: "infosys-kyc",
    title: "Infosys KYC Dashboards",
    year: "2025",
    category: "Internship Work",
    summary:
      "Production React components for KYC verification dashboards and document upload flows, integrated with REST APIs under Agile sprints at Infosys Springboard.",
    tags: ["React", "REST APIs", "Agile"],
    accent: "from-accent/30 to-primary/20",
    href: "#",
  },
];

export const SERVICES = [
  { n: "01", title: "Frontend Engineering", desc: "Production React.js — clean components, accessible UI, and responsive layouts that hold up across devices." },
  { n: "02", title: "Full-Stack Development", desc: "End-to-end features with Node.js, Express, and PostgreSQL — from schema design to deployed REST APIs." },
  { n: "03", title: "Auth & Security",        desc: "JWT access/refresh flows, role-based middleware, and protected routing done the boring, correct way." },
  { n: "04", title: "DSA & Problem Solving",  desc: "700+ problems solved across LeetCode & HackerRank (4★). Comfortable reasoning about systems and complexity." },
];

export const SKILLS = [
  "JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL",
  "React.js", "Node.js", "Express.js",
  "PostgreSQL", "MySQL", "MongoDB",
  "REST APIs", "JWT", "Git & GitHub", "Postman",
  "DSA", "OOP", "DBMS", "Operating Systems", "System Design", "Agile / Scrum",
];

export const EXPERIENCE = [
  { year: "Oct 2025 — Dec 2025", role: "Frontend Developer Intern", company: "Infosys Springboard", place: "Remote" },
  { year: "Oct 2023 — Present",  role: "B.Tech, Computer Science (CGPA 8.45)", company: "Galgotias University", place: "Greater Noida" },
  { year: "Jun 2025",            role: "Foundations of AI & ML — Certification", company: "Infosys Springboard", place: "Online" },
  { year: "Jan 2024",            role: "Database Programming with SQL — Certification", company: "Oracle", place: "Online" },
];

export const TESTIMONIALS = [
  {
    quote:
      "700+ DSA problems solved across LeetCode and HackerRank (4★) — a daily practice in pattern-recognition and clean problem decomposition.",
    name: "DSA Practice",
    role: "LeetCode · HackerRank",
  },
  {
    quote:
      "Shipped production React components for KYC dashboards under Agile sprints, contributing to code reviews alongside senior engineers.",
    name: "Infosys Springboard",
    role: "Frontend Internship · 2025",
  },
  {
    quote:
      "Built an AI-assisted code review tool in 24 hours — rapid prototyping and engineering under real time pressure.",
    name: "Hackathon",
    role: "24-hour build",
  },
];
