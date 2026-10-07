import { getPermalink, getAsset } from './utils/permalinks';
import type { Translations } from './i18n/schema';

export function getHeaderData(t: Translations, _locale: string) {
  return {
    links: [
      {
        text: t.nav.product,
        links: [
          { text: t.nav.features, href: '/#features' },
          { text: t.nav.howItWorks, href: '/#how-it-works' },
          { text: t.nav.whatWeBuild, href: '/services' },
        ],
      },
      {
        text: t.nav.pricing,
        href: '/pricing',
      },
      {
        text: t.nav.resources,
        links: [
          { text: t.nav.blog, href: '/blog' },
          { text: t.nav.caseStudies, href: '/case-studies' },
          { text: t.nav.about, href: '/about' },
          { text: t.nav.contact, href: '/contact' },
        ],
      },
    ],
    actions: [{ text: t.nav.getStarted, href: 'https://app.borchani.com/signup', target: '_blank' }],
  };
}

export function getFooterData(t: Translations, _locale: string = 'en') {
  return {
    links: [
      {
        title: t.footer.productTitle,
        links: [
          { text: t.footer.features, href: '/#features' },
          { text: t.footer.howItWorks, href: '/#how-it-works' },
          { text: t.footer.pricing, href: '/pricing' },
        ],
      },
      {
        title: t.footer.supportTitle,
        links: [
          { text: t.footer.contactUs, href: '/contact' },
          { text: 'Email support', href: 'mailto:support@borchani.com' },
        ],
      },
      {
        title: t.footer.companyTitle,
        links: [
          { text: t.footer.about, href: '/about' },
          { text: t.footer.blog, href: '/blog' },
          { text: t.nav.caseStudies, href: '/case-studies' },
          { text: t.footer.privacyPolicy, href: getPermalink('/privacy') },
          { text: t.footer.termsOfService, href: getPermalink('/terms') },
          { text: 'Founder on LinkedIn', href: 'https://www.linkedin.com/in/amanay-yessen-1a1a26188/?locale=en' },
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
