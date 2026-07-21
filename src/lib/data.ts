// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Hunain Aslam",
  role: "Senior Frontend Engineer",
  location: "Karachi, Pakistan",
  email: "hunainaslam.ha@gmail.com",
  phoneDisplay: "+92 335 2653956",
  phoneRaw: "923352653956", // for wa.me links
  github: "https://github.com/mhunainaslam",
  linkedin: "https://www.linkedin.com/in/hunain-aslam",
  resume: "/resume.pdf",
  photo: "/assets/images/hunain.png",
};

export const whatsapp = `https://wa.me/${profile.phoneRaw}?text=${encodeURIComponent(
  "Hey Hunain, I came across your site — got a minute to chat?"
)}`;
export const mailto = `mailto:${profile.email}`;

export const heroIntro =
  "I'm a frontend engineer. For the last 3 years I've been building React and Next.js apps — right now, a full ERP system for a dental company. I like fast load times, code I'm not embarrassed by, and interfaces people actually enjoy using.";

export const stats = [
  { value: "3+", label: "Years building for the web" },
  { value: "7+", label: "Apps running in production" },
  { value: "20+", label: "Projects shipped" },
];

export const about = {
  bio: [
    "I began as an intern at Eliteblue in 2022 and grew into a senior role over the following two years. Today I lead frontend development on Dentalzorg's ERP — a large product with dozens of interconnected screens, real-time data, and no shortage of edge cases. I enjoy taking involved business requirements and turning them into interfaces that feel straightforward to use.",
    "I work primarily in React and Next.js. I've delivered server-rendered marketing sites, admin dashboards, payment integrations with Stripe and PayPal, and real-time features with Pusher. I care about performance, test on real devices, and hold my work to a standard I'd be comfortable shipping myself.",
  ],
  highlights: [
    "Leading frontend on a dental ERP, end to end",
    "Comfortable with SSR/SSG and Core Web Vitals",
    "Went from intern to senior in ~2 years",
  ],
  education: [
    {
      title: "Bachelor's in Computer Science",
      org: "Dadabhoy University",
      period: "2020 – 2023",
    },
    {
      title: "Web Development Certification",
      org: "Aptech",
      period: "2021 – 2022",
    },
  ],
};

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages & Frameworks",
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Redux"],
  },
  {
    title: "UI / Styling",
    items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "Ant Design"],
  },
  {
    title: "API & Data",
    items: ["Axios", "REST APIs", "TanStack Query", "Pusher (real-time)"],
  },
  {
    title: "Payments",
    items: ["Stripe", "PayPal"],
  },
  {
    title: "Tools / Workflow",
    items: ["Git / GitHub", "Jira", "Agile / Scrum", "Vercel", "DigitalOcean"],
  },
];

export const experience = [
  {
    role: "Sr. Frontend Engineer",
    company: "Dentalzorg / Adalat Group",
    period: "Jun 2024 – Present",
    points: [
      "Leading development on a product-based ERP system for the dental industry.",
      "Solving complex domain challenges and owning feature delivery end-to-end.",
      "Driving performance, real-time updates, and a scalable component architecture.",
    ],
    current: true,
  },
  {
    role: "Frontend Engineer",
    company: "Confined Technologies / Chroma Solution",
    period: "Nov 2023 – May 2024",
    points: [
      "Deepened React.js and Next.js expertise across multiple client projects.",
      "Delivered responsive, conversion-focused marketing and product sites.",
    ],
    current: false,
  },
  {
    role: "Jr. Frontend Engineer",
    company: "Eliteblue Technology",
    period: "Jul 2022 – Oct 2023",
    points: [
      "Started as an intern and was promoted to full-time.",
      "Built strong frontend fundamentals and shipped production features.",
    ],
    current: false,
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Dentalzorg ERP",
    description:
      "A dental-industry ERP covering scheduling, billing and inventory, with dozens of interconnected screens kept in sync in real time. The product I work on day to day.",
    tags: ["Next.js", "Tailwind CSS", "Redux", "Pusher", "REST APIs"],
    image: "/assets/images/projects/dentalzorg-dashboard.png",
    featured: true,
  },
  {
    name: "Dentalzorg Clinic Site",
    description:
      "The public clinic website — server-rendered for fast load times and SEO, with online appointment booking connected to the backend.",
    tags: ["Next.js", "Bootstrap", "REST APIs", "SSR"],
    image: "/assets/images/projects/dentalzorg.png",
    link: "https://dentalzorg.com",
    featured: true,
  },
  {
    name: "Etijwaal eSIM",
    description:
      "Marketing and checkout site for an international eSIM provider. I built the frontend and integrated the Stripe and PayPal payment flows.",
    tags: ["Next.js", "Bootstrap", "REST APIs", "PayPal", "Stripe"],
    image: "/assets/images/projects/etijwaal.png",
    link: "https://etijwaal.com",
    featured: true,
  },
  {
    name: "EO Business Club",
    description:
      "A professional networking platform with paid memberships and event registration. I built the member-facing site and its Stripe billing.",
    tags: ["Next.js", "Bootstrap", "Stripe"],
    image: "/assets/images/projects/eoscl.png",
    link: "https://eobusinessclub.com",
  },
  {
    name: "Mythya",
    description:
      "A multiplayer browser game with real-time player interaction and matchmaking.",
    tags: ["Next.js", "Bootstrap", "Real-time"],
    image: "/assets/images/projects/myhtya.png",
    link: "https://mythya.vercel.app",
  },
  {
    name: "EO Business Dashboard",
    description:
      "The administrative side of EO Business Club — managing members, vendors, event registrations and users.",
    tags: ["React.js", "Bootstrap", "REST APIs"],
  },
  {
    name: "Samurai Dogg",
    description:
      "A single-page site for a crypto project, with a bold, motion-led landing experience.",
    tags: ["Next.js", "TypeScript", "Bootstrap"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
