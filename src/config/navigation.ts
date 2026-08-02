import {
  BookOpen, Terminal, Target, Crown, Wifi, KeyRound, Eye, Sparkles, Code2,
  Home, Info, ScrollText, type LucideIcon,
} from 'lucide-react';

export const NAVIGATION_CONFIG = [
  { key: 'home', labelKey: 'nav_home', path: '/', icon: Home, showInHeader: false, showInSidebar: true, showInFooter: false, sitemap: true, priority: 1, changeFrequency: 'daily' },
  { key: 'guides', labelKey: 'nav_guides', path: '/guides', icon: BookOpen, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'tools', labelKey: 'nav_tools', path: '/tools', icon: Terminal, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'missions', labelKey: 'nav_missions', path: '/missions', icon: Target, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'tools-tier-list', labelKey: 'nav_toolsTierList', path: '/tools-tier-list', icon: Crown, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.9, changeFrequency: 'weekly' },
  { key: 'network-hacking', labelKey: 'nav_networkHacking', path: '/network-hacking', icon: Wifi, isContentType: true, showInHeader: true, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'password-hacking', labelKey: 'nav_passwordHacking', path: '/password-hacking', icon: KeyRound, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'stealth-strategy', labelKey: 'nav_stealthStrategy', path: '/stealth-strategy', icon: Eye, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'updates', labelKey: 'nav_updates', path: '/updates', icon: Sparkles, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.8, changeFrequency: 'weekly' },
  { key: 'developer', labelKey: 'nav_developer', path: '/developer', icon: Code2, isContentType: true, showInHeader: false, showInSidebar: true, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'about', labelKey: 'nav_about', path: '/about', icon: Info, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.7, changeFrequency: 'monthly' },
  { key: 'sitemap', labelKey: 'nav_sitemap', path: '/sitemap', icon: ScrollText, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: false, priority: 0.5, changeFrequency: 'monthly' },
  { key: 'privacy-policy', labelKey: 'nav_privacyPolicy', path: '/privacy-policy', icon: ScrollText, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
  { key: 'terms-of-service', labelKey: 'nav_termsOfService', path: '/terms-of-service', icon: ScrollText, showInHeader: false, showInSidebar: false, showInFooter: true, sitemap: true, priority: 0.4, changeFrequency: 'yearly' },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => 'isContentType' in item && item.isContentType).map((item) => item.key);

export const CONTENT_TYPES_WITH_DEDICATED_PAGES = new Set(CONTENT_TYPES);

export type NavigationItem = (typeof NAVIGATION_CONFIG)[number];
export type ContentType = (typeof CONTENT_TYPES)[number];

export function isContentType(value: string): value is ContentType {
  return CONTENT_TYPES.includes(value as ContentType);
}

export function getNavigationItem(path: string) {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return NAVIGATION_CONFIG.find((item) => item.path === normalized || item.key === path);
}

export const CONTENT_DIR_NAMES: Record<ContentType | string, string> = {
  guides: 'guides',
  tools: 'tools',
  missions: 'missions',
  'tools-tier-list': 'tools-tier-list',
  'network-hacking': 'network-hacking',
  'password-hacking': 'password-hacking',
  'stealth-strategy': 'stealth-strategy',
  updates: 'updates',
  developer: 'developer',
} as Record<ContentType, string>;

export function getContentDir(contentType: ContentType): string {
  return CONTENT_DIR_NAMES[contentType] || contentType;
}

export const GUIDE_CATEGORIES: Record<string, { emoji: string; order: number }> = {
  guides:            { emoji: '🚀', order: 1 },
  tools:             { emoji: '💻', order: 2 },
  missions:          { emoji: '🎯', order: 3 },
  'tools-tier-list': { emoji: '👑', order: 4 },
  'network-hacking': { emoji: '📶', order: 5 },
  'password-hacking':{ emoji: '🔑', order: 6 },
  'stealth-strategy':{ emoji: '👁️', order: 7 },
  updates:           { emoji: '✨', order: 8 },
  developer:         { emoji: '🛠️', order: 9 },
};

export const CATEGORY_ORDER = Object.entries(GUIDE_CATEGORIES)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([key]) => key);

export const CATEGORY_AFFINITY: Record<string, string[]> = {
  guides:             ['tools', 'missions', 'stealth-strategy'],
  tools:              ['tools-tier-list', 'guides', 'network-hacking'],
  missions:           ['guides', 'tools', 'stealth-strategy'],
  'tools-tier-list':  ['tools', 'guides', 'network-hacking'],
  'network-hacking':  ['tools', 'password-hacking', 'stealth-strategy'],
  'password-hacking': ['network-hacking', 'tools', 'stealth-strategy'],
  'stealth-strategy': ['guides', 'network-hacking', 'missions'],
  updates:            ['guides', 'tools', 'developer'],
  developer:          ['updates', 'guides', 'tools'],
};
