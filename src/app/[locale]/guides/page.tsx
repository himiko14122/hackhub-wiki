import CategoryPage from '@/components/CategoryPage';
import { getAllContent } from '@/lib/content';
import { setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GuidesPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = routing.locales.includes(locale as Locale) ? (locale as Locale) : routing.defaultLocale;
  setRequestLocale(validLocale);
  const allContent = await getAllContent('guides', validLocale);
  const articles = allContent.map(({ slug, metadata, path }) => ({ slug, metadata, path }));
  return <CategoryPage catKey="guides" articles={articles} />;
}
