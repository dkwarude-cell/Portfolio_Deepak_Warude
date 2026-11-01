export const profile = {
  name: "Deepak Keshav Warude",
  shortName: "Deepak Warude",
  role: "Computer Engineering Student",
  tagline: "Computer Engineer building products from idea to deployment.",
  location: "Nashik, India",
  status: "Open to opportunities",
  email: "deepakwarude009@gmail.com",
  github: "https://github.com/dkwarude-cell",
  linkedin: "#",
  resumeUrl: "/resume.pdf",
  bio: "I'm a Computer Engineering student who builds AI/ML-powered software that actually ships — from a 500-user healthcare platform to an offline HRMS currently deployed with an Indian Army regiment. I care most about turning research-grade ideas into systems real people depend on, backed by clean, scalable architecture.",
  avatar: "/images/profile.jpg",
};

export const experience = [
  {
    role: "App Developer",
    company: "Runverve",
    location: "Remote",
    start: "Jun 2025",
    end: "Dec 2025",
    bullets: [
      "Developed the SmartHeal app using React Native and Firebase, building a health analytics system with real-time monitoring and accurate behavioral data analysis.",
      "Improved backend performance through optimized database queries, significantly reducing API latency across the platform.",
      "Led a 5-member Agile team delivering production-ready AI/ML features on schedule for an AI-driven IoT healthcare solution.",
    ],
  },
  {
    role: "Social Media Manager",
    company: "Runverve",
    location: "Remote",
    start: "Dec 2024",
    end: "May 2025",
    bullets: [
      "Executed data-driven campaigns that increased engagement, reach, and follower growth using audience analytics tools.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  summary: string;
  period: string;
  stack: string[];
  bullets: string[];
  badge?: string;
  size?: "lg" | "md";
};

export const projects: Project[] = [
  {
    slug: "swasthyam",
    name: "Swasthyam — AI-Powered IoT Integrated Oil Tracker",
    summary:
      "Full-stack AI/IoT platform that predicts oil quality and usage in real time, built for the Smart India Hackathon 2025 and recognized as a national winner among 1000+ competing teams.",
    period: "Sep 2025 – Dec 2025",
    stack: ["React Native", "Node.js", "MongoDB", "ESP32-Pico", "Microservices"],
    bullets: [
      "Built an AI-powered IoT platform achieving 85% prediction accuracy.",
      "Won Smart India Hackathon 2025 (Software) among 1000+ competing teams.",
      "Deployed ESP32-Pico sensors with cloud integration and a scalable microservices backend achieving 97.5% uptime.",
      "Filed a patent for the AI formula logic and predictive analytics module.",
    ],
    badge: "SIH 2025 Winner",
    size: "lg",
  },
  {
    slug: "rakshak-hrms",
    name: "Rakshak — HRMS Battalion Strength Management System",
    summary:
      "Offline-first desktop HRMS for Indian Army battalion-level personnel management, actively deployed and used in the field.",
    period: "Mar 2026 – Present",
    stack: ["Electron", "React", "TypeScript", "Tailwind CSS"],
    bullets: [
      "Built an offline desktop HRMS for battalion-level personnel management with role-based access and soldier profile management.",
      "Implemented a real-time unit strength tracking dashboard.",
      "Shipped Parade State and Leave Balance exports to Excel and PDF, with secure local authentication.",
      "Actively deployed and in use with the 14 Jat Regiment of the Indian Army.",
    ],
    badge: "Deployed — Indian Army",
    size: "lg",
  },
  {
    slug: "smartheal",
    name: "SmartHeal — AI-Powered Therapeutic Platform",
    summary:
      "Real-time AI health monitoring and therapy platform supporting 500+ users, with personalized dual-mode treatment plans.",
    period: "Mar 2025 – Dec 2025",
    stack: ["React Native", "NestJS", "Firebase", "Docker", "Expo"],
    bullets: [
      "Developed a real-time AI health monitoring system supporting 500+ users with Firebase and NestJS APIs.",
      "Reduced code redundancy by 35% via modular architecture and reusable components.",
      "Designed a dual-mode architecture (Pro & Guided) with multi-profile personalization and voice control.",
      "Automated ITT electrode placement guidance and personalized therapy recommendations.",
    ],
    size: "md",
  },
  {
    slug: "client-dashboard",
    name: "Client Management Dashboard",
    summary:
      "Responsive analytics and therapy-monitoring dashboard with real-time data sync and a type-safe, scalable architecture.",
    period: "Jan 2026 – Apr 2026",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    bullets: [
      "Built a responsive analytics dashboard with real-time communication, data visualization, and a type-safe, scalable architecture.",
      "Built a responsive therapy-monitoring SaaS with real-time data synchronization using Firebase and Tailwind CSS.",
    ],
    size: "md",
  },
];

export const skills = [
  {
    category: "Machine Learning & AI",
    items: ["Supervised & Unsupervised Learning", "Regression & Classification", "XGBoost", "CNN", "TensorFlow", "Scikit-learn"],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "C", "Java"],
  },
  {
    category: "Frameworks & Web",
    items: ["React", "React Native", "Next.js", "Angular", "Node.js", "NestJS", "Express.js", "Electron"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "SQL"],
  },
  {
    category: "Platforms & Tools",
    items: ["Git", "GitHub Actions (CI/CD)", "Docker", "Jupyter Notebook", "Google Colab", "Postman"],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Engineering",
    school: "K. K. Wagh Institute of Engineering Education & Research, Nashik",
    detail: "CGPA: 8.00",
    period: "Expected Jun 2027",
  },
  {
    degree: "BS Foundation, Data Science & Applications",
    school: "IIT Madras, Chennai",
    detail: undefined,
    period: "Jun 2025",
  },
  {
    degree: "HSC — Science",
    school: "Kendriya Vidyalaya No. 1 Devlali, Nashik",
    detail: "83.4%",
    period: "Jul 2023",
  },
  {
    degree: "SSC",
    school: "Kendriya Vidyalaya No. 1 Devlali, Nashik",
    detail: "90%",
    period: "May 2021",
  },
];

export const achievements = [
  {
    title: "Winner — Smart India Hackathon (SIH 2025)",
    period: "Sep 2025 – Dec 2025",
    detail:
      'Built "Swasthyam," a full-stack AI-driven IoT application using React Native with 85% prediction accuracy, among 1000+ competing teams.',
  },
  {
    title: "Finalist — Smart India Hackathon (SIH 2024)",
    period: "Sep 2024 – Dec 2024",
    detail: "Built a cryogenic storage system enhancing efficiency and reliability of medical tube preservation.",
  },
  {
    title: "Filed Copyright",
    period: "Jan 2026 – Apr 2026",
    detail: "Developed a generalized oil formulation model using research papers and mathematics.",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
