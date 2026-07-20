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
  "Hi Hunain, I saw your portfolio and I'd like to talk about a project."
)}`;
export const mailto = `mailto:${profile.email}`;

export const heroHeadlines = [
  "Senior Frontend Engineer",
  "React & Next.js Specialist",
  "I build fast, SEO-friendly web apps.",
];

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "7+", label: "Production Apps Shipped" },
];

export const about = {
  bio: [
    "I'm a meticulous frontend engineer who turns complex business requirements — ERP systems, dashboards, payments — into clean, fast, user-friendly products.",
    "Quick learner and reliable team player. I ship production code that scales, and I care as much about performance and SEO as I do about pixel-perfect UI.",
  ],
  highlights: [
    "Currently building a dental-industry ERP end-to-end",
    "SSR / SSG, performance & Core Web Vitals focus",
    "From requirement to production, feature-complete",
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
    name: "Dentalzorg ERP System",
    description:
      "End-to-end ERP platform for dental clinic operations — scheduling, billing, inventory and real-time updates.",
    tags: ["Next.js", "Tailwind CSS", "Redux", "Pusher", "REST APIs"],
    image: "/assets/images/projects/dentalzorg-dashboard.png",
    featured: true,
  },
  {
    name: "Dentalzorg Dental Clinic",
    description:
      "SEO-friendly clinic website with online appointment booking and server-side rendering.",
    tags: ["Next.js", "Bootstrap", "REST APIs", "SSR"],
    image: "/assets/images/projects/dentalzorg.png",
    link: "https://dentalzorg.com",
    featured: true,
  },
  {
    name: "Etijwaal eSIM",
    description:
      "Corporate site for an international eSIM telecom provider with integrated payments.",
    tags: ["Next.js", "Bootstrap", "REST APIs", "PayPal", "Stripe"],
    image: "/assets/images/projects/etijwaal.png",
    link: "https://etijwaal.com",
    featured: true,
  },
  {
    name: "Eobusiness Club",
    description:
      "Business networking platform with memberships and event management.",
    tags: ["Next.js", "Bootstrap", "Stripe"],
    image: "/assets/images/projects/eoscl.png",
    link: "https://eobusinessclub.com",
  },
  {
    name: "Mythya Game",
    description:
      "Multiplayer online game with real-time player interaction and matchmaking.",
    tags: ["Next.js", "Bootstrap", "Real-time"],
    image: "/assets/images/projects/myhtya.png",
    link: "https://mythya.vercel.app",
  },
  {
    name: "Eobusiness Dashboard",
    description:
      "Admin dashboard for memberships, vendors, event registrations and users.",
    tags: ["React.js", "Bootstrap", "REST APIs"],
  },
  {
    name: "Samurai Dogg",
    description:
      "High-impact landing page for a crypto meme-coin project with bold motion.",
    tags: ["Next.js", "TypeScript", "Bootstrap"],
  },
];

export const testimonials = [
  {
    quote:
      "Hunain takes ownership from requirement to production. He ships fast without cutting corners on quality.",
    name: "Engineering Manager",
    title: "Adalat Group",
  },
  {
    quote:
      "One of the most reliable frontend engineers I've worked with — great eye for UI and serious about performance.",
    name: "Product Lead",
    title: "Client Project",
  },
  {
    quote:
      "Turned a complex ERP spec into a clean, intuitive interface our whole team could use on day one.",
    name: "Operations Head",
    title: "Dentalzorg",
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
