# Deepak Keshav Warude — Portfolio

Personal portfolio site for Deepak Keshav Warude, a Computer Engineering student building AI/ML-powered software — from a healthcare platform used by 500+ people to an offline HRMS deployed with the 14 Jat Regiment of the Indian Army.

**Live site:** _add your Vercel URL here after deploying_

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Base UI primitives)
- [Framer Motion](https://www.framer.com/motion/) for restrained, reduced-motion-aware animation
- [next-themes](https://github.com/pacocoursey/next-themes) for the dark/light toggle (dark by default)

## Features

- Single-page, section-based layout: About, Experience, Projects, Skills, Education, Achievements, Contact
- Sticky header with scroll-spy navigation and a resume download button
- Project case studies with stack, period, and outcome-focused highlights
- Dark-mode-first design tuned for contrast and readability (no pure black/white)
- Fully responsive, keyboard-accessible, and respects `prefers-reduced-motion`
- Content lives in a single typed file ([`src/lib/data.ts`](src/lib/data.ts)) for easy updates — no need to touch components to add a new project or role

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

All personal content (bio, experience, projects, skills, education, achievements, links) lives in [`src/lib/data.ts`](src/lib/data.ts). Edit that file to update the site — no component changes needed for routine updates.

The resume PDF is served from [`public/resume.pdf`](public/resume.pdf); replace that file to update the downloadable resume.

## Build & deploy

```bash
npm run build
npm run start
```

Deployed on [Vercel](https://vercel.com/) — pushes to `main` auto-deploy.

## License

Personal project — all rights reserved.
