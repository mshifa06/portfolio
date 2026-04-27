# Personal Portfolio

A modern, minimal personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark-first aesthetic, smooth animations, and Vercel Analytics integration for tracking user interactions.

## Features

- **Dark/Light Theme** — Toggle between themes with system preference support
- **Smooth Animations** — Scroll-triggered reveals, typing effects, and micro-interactions
- **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- **Vercel Analytics** — Tracks page views and user interactions
- **Accessible** — Respects reduced-motion preferences
- **SEO Ready** — Open Graph and Twitter Card meta tags included

## Sections

- Hero with typing animation
- About / Bio
- Experience timeline
- Projects showcase
- Resume download
- Contact information
- Social links footer

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Analytics:** Vercel Analytics
- **Icons:** Lucide React
- **Routing:** Wouter

## Getting Started

### Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5000`.

### Build

```bash
npx vite build
```

Output will be in `dist/public`.

## Customization

### Personal Information

Update the following files with your information:

| File | Content |
|------|---------|
| `client/src/components/Hero.tsx` | Name and tagline |
| `client/src/components/About.tsx` | Bio and technologies |
| `client/src/components/Experience.tsx` | Work history |
| `client/src/components/Projects.tsx` | Project showcase |
| `client/src/components/Contact.tsx` | Email and location |
| `client/src/components/Footer.tsx` | Social media links |
| `client/index.html` | Page title and meta tags |

### Resume

Place your resume PDF in `client/public/resume.pdf`. Update the download filename in `client/src/components/Resume.tsx` if needed.

### Theme Colors

Edit the CSS variables in `client/src/index.css` under `:root` (light) and `.dark` (dark) sections.

### Fonts

The site uses:
- **Playfair Display** — Display headings
- **Inter** — Body text
- **JetBrains Mono** — Code/monospace

Change fonts in `client/index.html` (Google Fonts link) and `client/src/index.css` (font variables).

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository at [vercel.com](https://vercel.com)
3. Deploy — Vercel will auto-detect settings from `vercel.json`
4. (Optional) Add a custom domain in Settings → Domains

### Analytics

After deploying to Vercel:
1. Go to your project → Analytics tab
2. Enable Web Analytics
3. View page views, referrers, and demographics

**Note:** Custom event tracking (clicks, interactions) requires Vercel Pro plan.

## Project Structure

```
├── client/
│   ├── public/          # Static assets (favicon, resume)
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── hooks/       # Custom hooks (useReveal, useTypewriter)
│   │   ├── lib/         # Utilities (analytics, utils)
│   │   ├── pages/       # Page components
│   │   ├── App.tsx      # Main app component
│   │   └── index.css    # Global styles and theme
│   └── index.html       # HTML template
├── vercel.json          # Vercel deployment config
└── README.md
```

## Analytics Events Tracked

| Event | Description |
|-------|-------------|
| Page views | Automatic on every visit |
| Navigation clicks | Header nav, mobile menu |
| CTA buttons | "View my work", "Get in touch" |
| Project links | GitHub link clicks |
| Resume actions | View and download |
| Contact clicks | Email, send message |
| Social links | GitHub, LinkedIn, Twitter |
| Theme toggle | Light/dark switch |

## License

MIT
