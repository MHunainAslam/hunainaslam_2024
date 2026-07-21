export const profile = {
  name: "Hunain Aslam",
  role: "Sr. Frontend Engineer",
  location: "Karachi, Pakistan",
  phone: "+923352653956",
  phoneDisplay: "+92 335 2653956",
  email: "hunainaslam.ha@gmail.com",
  tagline: "I build high-performance, SEO-friendly web apps that feel effortless.",
  summary:
    "Results-driven Frontend Developer with 3 years of experience building high-performance, SEO-friendly web apps using React.js and Next.js. Skilled in modern UI frameworks like Tailwind CSS and Bootstrap, with expertise in SSR/SSG and deploying apps via Vercel. Experienced in ERP systems and business dashboards.",
  links: {
    linkedin: "https://www.linkedin.com/in/hunain-aslam/",
    github: "https://github.com/hunainaslam-adalat",
    portfolio: "https://hunainaslam.vercel.app/",
  },
};

export const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Shipped", value: 7, suffix: "+" },
  { label: "Companies", value: 3, suffix: "" },
  { label: "Core Stack", value: 15, suffix: "+" },
];

// Companies worked with — shown as a credibility strip in the hero
export const companies = [
  "Adalat Group",
  "Chroma Solution",
  "Eliteblue Technology",
];

export type SkillGroup = {
  title: string;
  icon: "braces" | "palette" | "server" | "creditCard" | "wrench";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    icon: "braces",
    skills: ["JavaScript", "ReactJS", "NextJS", "Redux", "TypeScript"],
  },
  {
    title: "UI/UX & Styling",
    icon: "palette",
    skills: ["HTML", "JSX", "CSS", "Bootstrap", "Tailwind CSS", "Ant Design"],
  },
  {
    title: "API & Data Handling",
    icon: "server",
    skills: ["Axios", "REST APIs", "Pusher"],
  },
  {
    title: "Payment Gateways",
    icon: "creditCard",
    skills: ["Stripe", "PayPal"],
  },
  {
    title: "Tools & Workflow",
    icon: "wrench",
    skills: ["GitHub", "Jira", "Scrum", "Agile", "Vercel", "DigitalOcean"],
  },
];

// Featured proficiencies for animated bars
export const proficiencies = [
  { name: "React.js / Next.js", level: 95 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Redux / State Mgmt", level: 85 },
  { name: "REST APIs & Axios", level: 90 },
  { name: "SSR / SSG & SEO", level: 88 },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Sr. Frontend Engineer",
    company: "Dentalzorg / Adalat Group",
    period: "Jun 2024 – Present",
    current: true,
    points: [
      "Lead and execute key product development tasks within a product-based ERP system.",
      "Solve complex challenges and deliver high-impact, production-ready solutions.",
      "Oversee development and continuous enhancement of core ERP features.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Confined Technologies / Chroma Solution",
    period: "Nov 2023 – May 2024",
    points: [
      "Advanced frontend engineering skills and mastered React.js and Next.js.",
      "Contributed actively across a range of development projects and team efforts.",
    ],
  },
  {
    role: "Jr. Frontend Engineer",
    company: "Eliteblue Technology",
    period: "Jul 2022 – Oct 2023",
    points: [
      "Started as an intern and transitioned into a full-time Junior Frontend Developer.",
      "Gained hands-on experience across modern frontend practices and workflows.",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    degree: "Bachelors in Computer Science",
    institution: "Dadabhoy University",
    period: "2020 – 2023",
  },
  {
    degree: "Certification in Web Development",
    institution: "Aptech",
    period: "2021 – 2022",
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  link: string;
  image?: string;
  featured?: boolean;
  accent: "cyan" | "blue" | "indigo";
};

export const projects: Project[] = [
  {
    title: "Dentalzorg ERP System",
    category: "ERP Platform",
    description:
      "An end-to-end ERP platform for managing dental clinic operations — scheduling, billing, patient records, and real-time updates.",
    stack: ["Next.js", "Tailwind CSS", "Redux", "Pusher", "REST APIs"],
    link: "#",
    image: "/projects/dentalzorg-erp.png",
    featured: true,
    accent: "cyan",
  },
  {
    title: "Dentalzorg Dental Clinic",
    category: "Marketing Website",
    description:
      "An SEO-friendly clinic website with online appointment booking and server-side rendering for fast, discoverable pages.",
    stack: ["Next.js", "Bootstrap", "REST APIs", "SSR"],
    link: "#",
    image: "/projects/dentalzorg-clinic.png",
    featured: true,
    accent: "blue",
  },
  {
    title: "Tijwaal eSIM",
    category: "Telecom / E-commerce",
    description:
      "A corporate website for an international eSIM telecom provider with integrated PayPal and Stripe checkout flows.",
    stack: ["Next.js", "Bootstrap", "REST APIs", "PayPal", "Stripe"],
    link: "#",
    image: "/projects/tijwaal-esim.png",
    featured: true,
    accent: "indigo",
  },
  {
    title: "Eobusiness Club",
    category: "Networking Platform",
    description:
      "A business networking platform with paid memberships and full event management, powered by Stripe payments.",
    stack: ["Next.js", "Bootstrap", "Stripe"],
    link: "#",
    image: "/projects/eobusiness-club.png",
    accent: "cyan",
  },
  {
    title: "Mythya Game",
    category: "Realtime Multiplayer",
    description:
      "A multiplayer online game featuring real-time player interactions and a responsive, playful interface.",
    stack: ["Next.js", "Bootstrap"],
    link: "#",
    image: "/projects/mythya.png",
    accent: "indigo",
  },
  {
    title: "Eobusiness Dashboard",
    category: "Admin Dashboard",
    description:
      "An admin dashboard for managing memberships, vendors, event registrations, and users at a glance.",
    stack: ["React.js", "Bootstrap"],
    link: "#",
    accent: "blue",
  },
  {
    title: "Samurai Dogg — Meme Coin",
    category: "Crypto Landing",
    description:
      "A bold, animated landing page for a meme-based cryptocurrency project with strong visual identity.",
    stack: ["Next.js", "TypeScript", "Bootstrap"],
    link: "#",
    accent: "cyan",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
