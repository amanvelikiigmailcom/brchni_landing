import type { Translations } from './schema';
import en from './en';
import ru from './ru';

const translations: Record<string, Translations> = { en, ru };

export function useTranslations(locale: string | undefined): Translations {
  return translations[locale ?? 'en'] ?? translations['en'];
}

export const SUPPORTED_LOCALES = ['en', 'ru'] as const;
export type SupportedLocale = typeof SUPPORTED_LOCALES[number];

export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  en: 'English',
  ru: 'Русский',
};
