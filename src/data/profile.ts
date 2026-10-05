import adaquaThumb from "../assets/projects/adaqua-thumbnail.webp"
import caregrowThumb from "../assets/projects/caregrow-thumbnail.webp"
import desiThumb from "../assets/projects/desielegance-thumbnail.webp"
import anpThumb from "../assets/projects/anp-thumbnail.webp"
import curatorsThumb from "../assets/projects/curators-mark.webp"
import atomcareThumb from "../assets/projects/atomcare-thumbnail.webp"
import bingeThumb from "../assets/projects/binge-watch.webp"
import whispThumb from "../assets/projects/whisp.webp"
import eventBuddyThumb from "../assets/projects/event-buddy.webp"
import stockplayThumb from "../assets/projects/stock-play.webp"
import resumePdf from "../assets/sksameersalam-resume.pdf"

import ayman from "../assets/clients/ayman-tailakh.webp"
import mdadil from "../assets/clients/mdadil.webp"
import pranay from "../assets/clients/pranaychhibber.webp"
import sakia from "../assets/clients/sakia-jamal.webp"

import bluster2025 from "../assets/achievements/bluster2025.jpeg"
import bluster2024 from "../assets/achievements/bluster2024.webp"
import samPic1 from "../assets/sameer/sam-pic1.webp"
import devInnov8 from "../assets/achievements/dev-innov8.jpeg"
import yuktikala from "../assets/achievements/yuktikala2024.webp"

export const profile = {
  name: "Sk Sameer Salam",
  brand: "dampdigits",
  title: "Full Stack Developer",
  location: "Kolkata, India",
  phone: "+91 82729 27693",
  phoneHref: "tel:+918272927693",
  email: "sksameersalam@gmail.com",
  emailHref: "mailto:sksameersalam@gmail.com",
  website: "https://dampdigits.dev/",
  resume: resumePdf,
  tagline:
    "I ship production web products for businesses — CRMs, ERPs, CMSs, PWAs, storefronts, & analytics — end to end.",
  summary:
    "Freelance software engineer & UI/UX designer. Blend of clean engineering, purposeful design, and competitive-programming rigor.",
  links: [
    { label: "GitHub", href: "https://github.com/dampdigits" },
    { label: "GitLab", href: "https://gitlab.com/dampdigits" },
    { label: "LinkedIn", href: "https://linkedin.com/in/dampdigits" },
    { label: "LeetCode", href: "https://leetcode.com/u/dampdigits" },
  ],
}

export const highlights = [
  { label: "LeetCode", value: "600+" },
  { label: "Contest", value: "1578" },
  { label: "Streak", value: "275d" },
  { label: "Freelance", value: "Dec'24+" },
]

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "Lua", "Nix", "Bash"],
  frameworks: ["Django & DRF", "Flask", "Next.js", "React", "Tailwind CSS", "Bootstrap"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  patterns: ["MVT", "MVC", "REST", "SOLID"],
  tools: [
    "Docker",
    "Redis",
    "Celery",
    "Gunicorn",
    "Git",
    "JWT",
    "Vite",
    "GNU/Linux",
    "Postman",
    "Figma",
    "Prisma",
    "SQLAlchemy"
  ],
}

export const experience = {
  role: "Software Engineer & UI/UX Designer",
  type: "Freelance",
  company: "Curators Mark — Freessentia Ventures Pvt. Ltd.",
  location: "Kolkata, India",
  period: "Dec 2024 – Present",
  clients: [
    {
      name: "Ad-Aqua",
      url: "https://analytics.adaqua.co.in/analytics-demo",
      image: adaquaThumb,
      stack: ["Next.js", "TypeScript", "MongoDB", "Prisma", "TanStack Query", "Tailwind"],
      blurb:
        "Dynamic QR generation with consumer tracking and an analytics dashboard for client insights.",
    },
    {
      name: "CareGrow",
      url: "https://www.caregrow.org",
      image: caregrowThumb,
      stack: ["Next.js", "Sanity", "Stripe", "PostgreSQL", "Drizzle", "Cloudflare R2"],
      blurb:
        "CRM for applications & donations, Sanity CMS/blog, Stripe donations, and a responsive PWA.",
    },
    {
      name: "Desi Elegance",
      url: "https://www.desielegance.in",
      image: desiThumb,
      stack: ["Next.js", "TypeScript", "Figma", "Vercel"],
      blurb:
        "Mobile-first redesign; ~90% faster imagery; SEO + Vercel Analytics & Speed Insights.",
    },
    {
      name: "ANP Faculty",
      url: "https://anpfaculty.com",
      image: anpThumb,
      stack: ["Next.js", "React", "Tailwind", "Vercel"],
      blurb: "End-to-end client site with workflows, SMTP automation, and production infra.",
    },
    {
      name: "Curators Mark",
      url: "https://curatorsmark.com",
      image: curatorsThumb,
      stack: ["Next.js", "TypeScript", "Figma", "Redis"],
      blurb: "Agency presence with application flows, rate-limiting, and deployment ops.",
    },
    {
      name: "AtomCare",
      url: "https://atomcare.life",
      image: atomcareThumb,
      stack: ["Next.js", "React", "Tailwind", "Vercel"],
      blurb: "Care-focused platform — design through launch and ongoing maintenance.",
    },
  ],
}

export const projects = [
  {
    name: "Binge Watch",
    url: "https://binge-watch.dampdigits.dev",
    image: bingeThumb,
    stack: ["Django", "DRF", "Docker", "React", "Vite"],
    blurb: "Netflix-inspired PWA for discovery, playback, and continue-watching.",
    repos: [
      { label: "Backend", href: "https://gitlab.com/dampdigits/binge-watch-backend" },
      { label: "Frontend", href: "https://gitlab.com/dampdigits/binge-watch-frontend" },
    ],
  },
  {
    name: "Whisp Media Processor",
    url: "https://github.com/dampdigits/whisp-media-processor",
    image: whispThumb,
    stack: ["Flask", "FFmpeg", "Whisper", "Cloudflare R2"],
    blurb: "Async WebM→MP4 pipeline with soft subtitles and R2 chunk lifecycle.",
    repos: [
      { label: "Repo", href: "https://github.com/dampdigits/whisp-media-processor" },
    ],
  },
  {
    name: "Event-Buddy",
    url: "https://github.com/orgs/EventBuddy-org/repositories",
    image: eventBuddyThumb,
    // imageFit: "contain" as const,
    stack: ["Next.js", "Flask", "Telegram", "Cloudflare AI"],
    blurb: "AI poster generation and Telegram organiser updates via Flask + Streamlit.",
    repos: [
      { label: "Repos", href: "https://github.com/orgs/EventBuddy-org/repositories" },
    ],
  },
  {
    name: "Stockplay",
    url: "https://github.com/dampdigits/stockplay",
    image: stockplayThumb,
    stack: ["Flask", "SQLite", "Yahoo Finance"],
    blurb: "Live-market stock trading simulator with portfolio tracking.",
    repos: [{ label: "Repo", href: "https://github.com/dampdigits/stockplay" }],
  },
]

export const testimonials = [
  {
    quote:
      "Delivered beyond expectations with attention to even the smallest details — something that had been missing in my prior experiences.",
    name: "Dr. Ayman Tailakh",
    title: "Executive Director",
    company: "Academic Nursing Partners",
    initials: "AT",
    avatar: ayman,
  },
  {
    quote:
      "Our vision was transformed into a complete digital ecosystem... seamless execution have empowered CareGrow to better serve & reach our community.",
    name: "Mohammed Adil Hussain",
    title: "Founder",
    company: "CareGrow NGO",
    initials: "MA",
    avatar: mdadil,
  },
  {
    quote:
      "Transformed our vision into a professional, user-friendly platform that reflects the compassion and quality of care we provide.",
    name: "Pranay Chhibber",
    title: "Operations Lead",
    company: "AtomCare",
    initials: "PC",
    avatar: pranay,
  },
  {
    quote:
      "Not everybody dedicates themselves to someone else’s work even though they get paid, however Sameer's development service is upto date, smooth, and eye-catching. Just love the work he does, coz it’s splendid truly.",
    name: "Sakia Jamal",
    title: "Founder",
    company: "Desi-Elegance",
    initials: "SJ",
    avatar: sakia,
  },
]

export const education = [
  {
    title: "B.Tech CSE",
    detail: "CGPA 8.11 · Brainware University",
    period: "2022 – 2026",
  },
  {
    title: "ISC · ICSE",
    detail: "93% · 93% · Young Horizons School",
    period: "2021 · 2019",
  },
]

export const achievements = [
  {
    title: "Bluster DSA — Winner 2025",
    detail: "Texibition, Brainware University",
    image: bluster2025,
    links: [{ label: "Link", href: "https://lnkd.in/p/dGJdUCmF" }],
  },
  {
    title: "Bluster DSA — Winner 2024",
    detail: "Texibition, Brainware University",
    image: bluster2024,
    links: [{ label: "Link", href: "https://lnkd.in/p/d2dbaaUm" }],
  },
  {
    title: "48hr Hackathon — Winner",
    detail: "Dev Innov8+ 2024",
    image: devInnov8,
    links: [{ label: "Link", href: "https://lnkd.in/p/dyQDUeaZ" }],
  },
  {
    title: "Yuktikala CP — 2nd Runner Up",
    detail: "Nirdesh, RMVC College 2024",
    image: yuktikala,
    links: [{ label: "Link", href: "https://lnkd.in/p/dyQDUeaZ" }],
  },
  {
    title: "Rotary District Award",
    detail: "Community Service, 2020",
    image: samPic1,
    links: [],
  },
]

export const organizations = [
  {
    name: "Tech Club, Brainware University",
    role: "Core Member",
    period: "2024 – 2026",
    points: [
      "Organized tech fests, hackathons, DSA sessions, and open-source collabs.",
      "Conducted algorithm workshops and peer mentorship.",
    ],
  },
  {
    name: "GDSC, Brainware University",
    role: "Outreach & Marketing Lead",
    period: "Aug 2022 – Jul 2023",
    points: [
      "Scaled community to 800+ members; coordinated webinars and speakers.",
      "Managed sponsorships and event engagement.",
    ],
  },
  {
    name: "YHS Interact Club (Rotary D3291)",
    role: "President",
    period: "2019 – 2021",
    points: [
      "Led donation drives, NGO partnerships, and COVID-awareness campaigns.",
      "Coordinated fundraising and prosthetic limb fitting camps.",
    ],
  },
  {
    name: "Young Horizons School",
    role: "Head Boy",
    period: "2020 – 2021",
    points: [
      "Led student council and represented the school publicly.",
      "Planned intra & inter-school events and competitions.",
    ],
  },
]

export const leetcode = [
  { label: "Contest rating", value: "1578", note: "Global 2347 / 34958" },
  { label: "Problems solved", value: "600+", note: "Beats 99.5%" },
  { label: "Daily streak", value: "275", note: "Day challenge" },
]

export const navItems = [
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
]
