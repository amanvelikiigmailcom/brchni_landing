# Borchani website

This repository contains the public website for [Borchani](https://borchani.com), an AI-native software engineering and full-stack workspace. The application itself is available at [app.borchani.com](https://app.borchani.com). This repository maintains the public website and blog; application code lives separately.

Borchani was founded by [Amanay Yessen](https://www.linkedin.com/in/amanay-yessen-1a1a26188/?locale=en) on April 5, 2026 as a remote-first company.

## Local development

The site uses Astro 5 and Tailwind CSS. Product pages, navigation, localization, and blog content are maintained in this repository.

```bash
npm install
npm run dev
```

Open `http://localhost:4321`. To create the static build:

```bash
npm run build
npm run preview
```

## Project structure

- `src/pages/` — the homepage, product and legal pages, and localized routes.
- `src/components/` — shared layouts, widgets, and the homepage hero.
- `src/data/post/` — blog content.
- `src/navigation.ts` — header and footer links.
- `src/config.yaml` — site metadata and blog settings.
- `src/assets/images/` — locally served website imagery.

The workspace image on the homepage is an illustration, labeled as such on the page. Product work happens in the separate Borchani application.

## Contact

Product and account questions: [support@borchani.com](mailto:support@borchani.com).
