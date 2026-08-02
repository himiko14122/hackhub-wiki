import { routing, type Locale } from '@/i18n/routing';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hackhub.wiki';
export const SITE_NAME = 'HackHub Wiki';
export const HERO_IMAGE = '/images/hero.webp';
export const LOGO_IMAGE = '/favicon.svg';
export const TWITTER_HANDLE = 'gdevscom1';
export const GA_TRACKING_ID = 'G-5C70VYZG4T';
export const SLUG_PREFIX = 'HackHub-';

export const EXTERNAL_LINKS = {
  steam: 'https://store.steampowered.com/app/2980270/HackHub__Ultimate_Hacker_Simulator/',
  discord: 'https://discord.gg/U7pZFXXtcn',
  youtube: 'https://www.youtube.com/channel/UCz1v5ix2zR6Uxi-58pm-IXw',
  reddit: '',
  twitter: 'https://x.com/gdevscom1',
  website: 'https://g-devs.com',
} as const;

export function absoluteUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedPath(locale: Locale | string, path = '/') {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === routing.defaultLocale) {
    return normalized === '/' ? '/' : normalized;
  }
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}
