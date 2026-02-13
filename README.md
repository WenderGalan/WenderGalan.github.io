# Wender Galan Portfolio

Modern personal portfolio built with Vue 3, Vite, and Tailwind CSS. The site showcases professional experience, highlighted projects, and contact channels with bilingual support (PT/EN) and dark mode.

## Overview

This portfolio is a single-page experience designed to be clean, fast, and easy to navigate. It emphasizes clarity and a professional tone, with sections that tell a complete story about the developer profile.

### Sections

- Hero: intro, quick links, and resume CTA
- About: short professional summary
- Skills: technical stack and language proficiency
- Experience: timeline of roles and responsibilities
- Projects: featured work and GitHub references
- Contact: email, WhatsApp, location, and social links

## Highlights

- Single-page layout with smooth navigation
- Dark mode with persistent theme
- Internationalization (PT/EN)
- Responsive, mobile-first design
- Subtle animations and hover states

## Customization

### Content

- Texts and translations: `src/i18n/pt.json`, `src/i18n/en.json`
- Projects: `src/data/projects.ts`
- Skills and languages: `src/data/skills.ts` and `src/sections/SkillsSection.vue`
- Experience: `src/data/experience.ts`

### Media

- Profile image: `public/wender.jpeg`
- Project images: URLs inside `src/data/projects.ts`

### Links

- Social links and ordering: `src/components/SocialLinks.vue`
- Resume URLs: `src/i18n/pt.json` and `src/i18n/en.json` (`hero.resumeUrl`)
- WhatsApp message: `src/i18n/pt.json` and `src/i18n/en.json` (`contact.whatsappMessage`)

## Deployment

GitHub Pages deploys via GitHub Actions. Make sure Pages is set to **GitHub Actions** in repository settings, and the custom domain is configured in the `CNAME` file.

## Developer Setup

### Requirements

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```
