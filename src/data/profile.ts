export const profile = {
  name: "SK Sameer Salam",
  brand: "dampdigits",
  title: "Full Stack Developer & UI/UX Designer",
  location: "Kolkata, India",
  phone: "+91 82729 27693",
  phoneHref: "tel:+918272927693",
  email: "sksameersalam@gmail.com",
  emailHref: "mailto:sksameersalam@gmail.com",
  website: "https://dampdigits.dev/",
  tagline:
    "I design and ship production web products — from CRM dashboards to PWAs — that businesses can hire me to build.",
  summary:
    "Full stack developer, UI/UX designer, and competitive programmer. I blend clean engineering with purposeful design to deliver end-to-end products that solve real business problems.",
  links: [
    { label: "GitHub", href: "https://github.com/dampdigits" },
    { label: "GitLab", href: "https://gitlab.com/dampdigits" },
    { label: "LinkedIn", href: "https://linkedin.com/in/dampdigits" },
    { label: "LeetCode", href: "https://leetcode.com/u/dampdigits" },
  ],
  about: [
    "Builds complete web applications that function seamlessly and look intentional.",
    "Designs UI/UX in Figma and has a background in digital art and comics.",
    "Competitive programmer — DSA daily, with wins in hackathons and CP tournaments.",
    "GNU/Linux enthusiast and open-source advocate.",
    "Former Marketing Lead of GDSC Brainware University.",
    "Exploring AI/ML while tutoring computer science part-time.",
  ],
  roles: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Competitive Programmer",
    "Freelance Engineer",
  ],
}

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "Lua", "Nix", "Bash"],
  frameworks: ["Django & DRF", "Flask", "Next.js & React", "Tailwind CSS", "Bootstrap"],
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
    "SQLAlchemy",
    "Postman",
    "Figma",
    "HTML",
    "Jinja",
    "CSS",
  ],
}

export const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    detail: "CGPA 8.11",
    place: "Brainware University, Kolkata",
    period: "2022 – 2026",
  },
  {
    title: "12th Standard (ISC)",
    detail: "93%",
    place: "Young Horizons School, Kolkata",
    period: "2021",
  },
  {
    title: "10th Standard (ICSE)",
    detail: "93%",
    place: "Young Horizons School, Kolkata",
    period: "2019",
  },
]

export type ExperienceClient = {
  name: string
  url?: string
  stack: string[]
  points: string[]
}

export const experience = {
  role: "Software Engineer & UI/UX Designer",
  type: "Freelance",
  company: "Curators Mark — Freessentia Pvt. Ltd.",
  location: "Kolkata, India",
  period: "Dec 2024 – Present",
  clients: [
    {
      name: "Ad-Aqua",
      url: "https://analytics.adaqua.co.in/analytics-demo",
      stack: [
        "MongoDB",
        "TanStack Query",
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "Figma",
        "Tailwind CSS",
      ],
      points: [
        "Engineered dynamic QR code generation with consumer data tracking before redirection to client ads.",
        "Built an analytics dashboard with charts and metrics to deliver consumer insights to clients.",
      ],
    },
    {
      name: "CareGrow",
      url: "https://www.caregrow.org",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Sanity",
        "Tailwind CSS",
        "Figma",
        "Drizzle",
        "Stripe",
        "Cloudflare R2",
        "PostgreSQL",
      ],
      points: [
        "Built a CRM integrated with existing workflows to manage applications and donations, plus a Sanity-powered blog and CMS.",
        "Integrated Stripe for secure donations and shipped a responsive PWA with automated email receipts.",
      ],
    },
    {
      name: "Desi Elegance",
      url: "https://www.desielegance.in",
      stack: ["Next.js", "React", "TypeScript", "CSS", "Figma", "Canva", "Vercel"],
      points: [
        "Redesigned the storefront with a mobile-first UI, optimised imagery to cut load time by ~90%, and added CTAs for product discovery.",
        "Integrated Vercel Analytics & Speed Insights and improved SEO via structured metadata and sitemap.",
      ],
    },
    {
      name: "Other client work",
      urls: [
        { label: "anpfaculty.com", href: "https://anpfaculty.com" },
        { label: "curatorsmark.com", href: "https://curatorsmark.com" },
        { label: "atomcare.life", href: "https://atomcare.life" },
      ],
      stack: ["Next.js", "React", "TypeScript", "Figma", "Tailwind", "Vercel", "Redis"],
      points: [
        "Delivered client projects end-to-end — requirements, UI/UX, development, testing, deployment, and maintenance.",
        "Shipped portfolio sites with application workflows, SMTP automation, rate-limiting, and production infrastructure.",
      ],
    },
  ] as Array<
    ExperienceClient & {
      urls?: { label: string; href: string }[]
    }
  >,
}

export const projects = [
  {
    name: "Binge Watch",
    url: "https://binge-watch.dampdigits.dev",
    repos: [
      {
        label: "Backend",
        href: "https://gitlab.com/dampdigits/binge-watch-backend",
      },
      {
        label: "Frontend",
        href: "https://gitlab.com/dampdigits/binge-watch-frontend",
      },
    ],
    stack: [
      "Django",
      "DRF",
      "Docker",
      "React",
      "JavaScript",
      "Vite",
      "Gunicorn",
      "Render",
      "Vercel",
    ],
    points: [
      "Netflix-inspired PWA for movie/TV discovery, playback, and continue-watching.",
      "Containerised Django REST backend with Docker/Gunicorn and a maintainable feature-oriented frontend.",
    ],
  },
  {
    name: "Whisp Media Processor",
    url: "https://github.com/dampdigits/whisp-media-processor",
    repos: [
      {
        label: "Repository",
        href: "https://github.com/dampdigits/whisp-media-processor",
      },
    ],
    stack: ["Flask", "Python", "FFmpeg", "OpenAI Whisper", "Cloudflare R2", "boto3"],
    points: [
      "Async pipeline converting WebM to H.264 MP4 with synced audio and soft subtitles via Whisper.",
      "Cloudflare R2 integration for chunk storage, lifecycle management, REST APIs, and error recovery.",
    ],
  },
  {
    name: "Event-Buddy",
    url: "https://github.com/orgs/EventBuddy-org/repositories",
    repos: [
      {
        label: "Repositories",
        href: "https://github.com/orgs/EventBuddy-org/repositories",
      },
    ],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Flask",
      "Streamlit",
      "Telegram Bot API",
      "Cloudflare AI",
    ],
    points: [
      "Event platform that generates AI promotional posters.",
      "Automated Telegram organiser updates through a Flask API and Streamlit bot interface.",
    ],
  },
  {
    name: "Stockplay",
    url: "https://github.com/dampdigits/stockplay",
    repos: [
      { label: "Repository", href: "https://github.com/dampdigits/stockplay" },
    ],
    stack: ["Flask", "Jinja", "SQLite", "Bootstrap", "Yahoo Finance API"],
    points: [
      "Stock-trading simulator with live market data.",
      "Portfolio and performance tracking for risk-free trading analysis.",
    ],
  },
]

export const achievements = [
  {
    title: "Two-time Winner — Bluster DSA Tournament",
    detail: "Texibition, Brainware University",
    links: [
      { label: "2025", href: "https://lnkd.in/p/dGJdUCmF" },
      { label: "2024", href: "https://lnkd.in/p/d2dbaaUm" },
    ],
  },
  {
    title: "Winner — 48hr Hackathon",
    detail: "Dev Innov8+ 2024, Brainware University",
    links: [{ label: "Link", href: "https://lnkd.in/p/dyQDUeaZ" }],
  },
  {
    title: "2nd Runner Up — Competitive Programming",
    detail: "Yuktikala 2024, Nirdesh, RMVC College",
    links: [{ label: "Link", href: "https://lnkd.in/p/dyQDUeaZ" }],
  },
  {
    title: "District Award — Community Service",
    detail: "Rotary Club of Calcutta Presidency, 2020",
    links: [],
  },
]

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]
