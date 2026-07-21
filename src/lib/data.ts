// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Hunain Aslam",
  role: "Frontend Engineer",
  location: "Karachi, Pakistan",
  email: "hunainaslam.ha@gmail.com",
  phoneDisplay: "+92 335 2653956",
  phoneRaw: "923352653956",
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
    "I started as an intern at Eliteblue back in 2022 and worked my way up to senior. These days I lead the frontend on Dentalzorg's ERP — the kind of product with a hundred screens, real-time updates, and edge cases hiding everywhere. That's honestly the work I enjoy most: taking a messy business problem and turning it into something that feels simple to use.",
    "I'm most at home in React and Next.js. I've shipped SSR marketing sites, admin dashboards, payment flows with Stripe and PayPal, and real-time features with Pusher. I read the docs, I test on real devices, and I don't ship things I wouldn't want to use myself.",
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
      "Deepened my React.js and Next.js expertise across multiple client projects.",
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
      "The product I spend most of my days on. A dental-industry ERP with scheduling, billing and inventory — dozens of interconnected screens kept in sync in real time.",
    tags: ["Next.js", "Tailwind CSS", "Redux", "Pusher", "REST APIs"],
    image: "/assets/images/projects/dentalzorg-dashboard.png",
    featured: true,
  },
  {
    name: "Dentalzorg Clinic Site",
    description:
      "The public clinic website — server-rendered so it loads fast and ranks well, with online appointment booking wired to the backend.",
    tags: ["Next.js", "Bootstrap", "REST APIs", "SSR"],
    image: "/assets/images/projects/dentalzorg.png",
    link: "https://dentalzorg.com",
    featured: true,
  },
  {
    name: "Etijwaal eSIM",
    description:
      "Marketing and checkout site for an international eSIM provider. I handled the frontend and the Stripe + PayPal payment flows.",
    tags: ["Next.js", "Bootstrap", "REST APIs", "PayPal", "Stripe"],
    image: "/assets/images/projects/etijwaal.png",
    link: "https://etijwaal.com",
    featured: true,
  },
  {
    name: "EO Business Club",
    description:
      "A networking platform with paid memberships and event sign-ups. Built the member-facing site and the Stripe billing around it.",
    tags: ["Next.js", "Bootstrap", "Stripe"],
    image: "/assets/images/projects/eoscl.png",
    link: "https://eobusinessclub.com",
  },
  {
    name: "Mythya",
    description:
      "A multiplayer browser game — the fun one. Real-time player interaction and matchmaking, all in the browser.",
    tags: ["Next.js", "Bootstrap", "Real-time"],
    image: "/assets/images/projects/myhtya.png",
    link: "https://mythya.vercel.app",
  },
  {
    name: "EO Business Dashboard",
    description:
      "The admin side of EO Business Club — managing members, vendors, event registrations and users from one place.",
    tags: ["React.js", "Bootstrap", "REST APIs"],
  },
  {
    name: "Samurai Dogg",
    description:
      "A one-page site for a crypto meme-coin. Loud on purpose — lots of motion and personality.",
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
