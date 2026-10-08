import { getPermalink, getAsset } from './utils/permalinks';
import type { Translations } from './i18n/schema';

export function getHeaderData(t: Translations, locale: string) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return {
    links: [
      {
        text: t.nav.product,
        links: [
          { text: t.nav.features, href: `${prefix}/#features` },
          { text: t.nav.howItWorks, href: `${prefix}/#how-it-works` },
          { text: t.nav.whatWeBuild, href: `${prefix}/services` },
        ],
      },
      {
        text: t.nav.pricing,
        href: `${prefix}/pricing`,
      },
      {
        text: t.nav.resources,
        links: [
          { text: t.nav.blog, href: `${prefix}/blog` },
          { text: t.nav.caseStudies, href: `${prefix}/case-studies` },
          { text: t.nav.about, href: `${prefix}/about` },
          { text: t.nav.contact, href: `${prefix}/contact` },
        ],
      },
    ],
    actions: [{ text: t.nav.getStarted, href: 'https://app.borchani.com/signup', target: '_blank' }],
  };
}

export function getFooterData(t: Translations, locale: string = 'en') {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return {
    links: [
      {
        title: t.footer.productTitle,
        links: [
          { text: t.footer.features, href: `${prefix}/#features` },
          { text: t.footer.howItWorks, href: `${prefix}/#how-it-works` },
          { text: t.footer.pricing, href: `${prefix}/pricing` },
        ],
      },
      {
        title: t.footer.supportTitle,
        links: [
          { text: t.footer.contactUs, href: `${prefix}/contact` },
          { text: 'Email support', href: 'mailto:support@borchani.com' },
          { text: 'Contact founder', href: 'mailto:amanay.yessen@borchani.com' },
        ],
      },
      {
        title: t.footer.companyTitle,
        links: [
          { text: t.footer.about, href: `${prefix}/about` },
          { text: t.footer.blog, href: `${prefix}/blog` },
          { text: t.nav.caseStudies, href: `${prefix}/case-studies` },
          { text: 'Founder on LinkedIn', href: 'https://www.linkedin.com/in/amanay-yessen-1a1a26188/?locale=en' },
          { text: 'Founder on X', href: 'https://x.com/amanvelikii' },
          { text: 'Founder on Instagram', href: 'https://instagram.com/yessen_aman' },
          { text: 'Website on GitHub', href: 'https://github.com/amanvelikiigmailcom/brchni_landing' },
        ],
      },
    ],
    secondaryLinks: [
      { text: t.footer.terms, href: getPermalink('/terms') },
      { text: t.footer.privacyPolicy, href: getPermalink('/privacy') },
    ],
    socialLinks: [
      {
        ariaLabel: 'Founder on LinkedIn',
        icon: 'tabler:brand-linkedin',
        href: 'https://www.linkedin.com/in/amanay-yessen-1a1a26188/?locale=en',
      },
      {
        ariaLabel: 'X (Twitter)',
        icon: 'tabler:brand-x',
        href: 'https://x.com/amanvelikii',
      },
      {
        ariaLabel: 'Instagram',
        icon: 'tabler:brand-instagram',
        href: 'https://instagram.com/yessen_aman',
      },
      {
        ariaLabel: 'Borchani website on GitHub',
        icon: 'tabler:brand-github',
        href: 'https://github.com/amanvelikiigmailcom/brchni_landing',
      },
      { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    ],
    footNote: t.footer.copyright,
  };
}

// Backward-compatible English exports (used by any file that hasn't been updated yet)
import en from './i18n/en';
export const headerData = getHeaderData(en, 'en');
export const footerData = getFooterData(en, 'en');
