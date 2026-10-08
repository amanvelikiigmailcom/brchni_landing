# Borchani landing

## Repository and deployment

- Working directory: `/home/myuser/projects/borchani_landing`.
- GitHub source: `https://github.com/amanvelikiigmailcom/brchni_landing`, branch `main`.
- Production: `https://borchani.com`, deployed by Cloudflare Pages project `celestial-cluster` from this GitHub repository. The Cloudflare project name is historical; do not switch back to `aman-tiger/celestial-cluster`.
- App: `https://app.borchani.com`. This repository contains the public website and blog, not application code.
- `prod` is a read-only reference to the old `aman-tiger/celestial-cluster` repository for recovering historical content. Never push this landing work there.

## Important files

- English homepage: `src/pages/index.astro`; English hero: `src/components/widgets/PromptHero.astro`.
- Localized homepage sections: `src/components/HomepageSections.astro`; Russian entry: `src/pages/ru/index.astro`.
- Russian pages: `src/pages/ru/`; Russian articles: `src/data/post/ru/`.
- Content IDs and article routing: `src/content/config.ts`, `src/utils/blog.ts`.
- Locale-aware header and footer: `src/navigation.ts`; translations: `src/i18n/`.
- Legal pages: `src/pages/privacy.md`, `src/pages/terms.md`.
- Crawlers: `public/robots.txt`; Astro generates `dist/sitemap-index.xml` during build.
- Workspace illustration: `src/assets/images/borchani-workspace-concept.png`; label it as an illustration, not a product screenshot.

## Content and quality rules

- Keep the existing visual design and homepage section structure. Change copy within existing sections when positioning needs improvement.
- English H1 must read `AI-Native Software Engineering & Full-Stack Workspace`. Position Borchani as a developer-focused, specification-driven full-stack workspace. Describe only product capabilities that can be demonstrated.
- Keep visible customer reviews and the user-provided `4.9/5` rating from `127` reviews in both visible copy and JSON-LD. Do not use unrelated stock photos as customer portraits. Before an external application, obtain internal evidence and permission to publish each attributed testimonial and the aggregate rating.
- Founder: Amanay Yessen; LinkedIn: `https://www.linkedin.com/in/amanay-yessen-1a1a26188/?locale=en`. Public website repository: `https://github.com/amanvelikiigmailcom/brchni_landing`. User-supplied founding date and place: April 5, 2026, remote-first. Verify legal entity name and registration before using `Inc.` or asserting legal incorporation.
- Public contact email: `support@borchani.com`. Ensure it is prominently visible in the `body` (e.g. PromptHero, Founder, CTA) of both English and Russian landing pages for AEO/Crawler verification. Confirm mailbox delivery and that the Claude Console applicant email uses `@borchani.com`.
- Do not delete historical Russian pages or articles. Avoid changing old case studies without preserving their substance. Keep Russian pricing consistent with English pricing and the live app checkout.

## Verification and remaining work

1. Run `npm run build`, `npm run check:astro`, `npm run check:eslint`, and `git diff --check`; fix failures.
2. Check the built and production URLs: `/`, `/ru`, `/ru/about`, `/ru/services`, `/ru/pricing`, `/ru/case-studies`, `/ru/contact`, `/ru/blog`, all ten `/ru/<article>` routes, `/privacy`, `/terms`, `/robots.txt`, and `/sitemap-index.xml`.
3. Compare displayed plans, features, founder/location, customer cases, review count, and rating against the live app and the founder's source records. The old Russian case studies contain specific customer outcomes that still require supporting evidence.
4. Verify `support@borchani.com` receives mail and that the applicant's Claude Console organization exists. The website cannot verify either account or mailbox access.
5. Use current official terms at `https://claude.com/programs/startups`: bootstrapped companies may apply; matching company email, Claude Console account, website, and product description are required. Approval is discretionary. Do not assert automatic approval, mandatory deposit, or a guaranteed review time.
6. After each push to `main`, wait for the Cloudflare Pages deployment and check the **production** domain `borchani.com`, including the Russian pages and crawler routes. Check Cloudflare AI bot policy and analytics in the account dashboard; `robots.txt` alone does not prove that Cloudflare allows bot requests.
