// src/app/page.tsx
import { getDictionary } from "./dictionaries";
import { Dictionary } from '../../types';
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export async function generateMetadata(
  props: {
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;
  const { lang } = params;

  const t: Dictionary = await getDictionary(lang as 'en' | 'zh' | 'de' | 'es' | 'fr' | 'ja' | 'pt');

  return {
    language: t.page.language,
    title: t.page.title,
    description: t.page.subtitle,
  };
}

export default async function Home(
  props: {
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;
  const { lang } = params;

  const t: Dictionary = await getDictionary(lang as 'en' | 'zh' | 'es' | 'de' | 'fr' | 'ja' | 'pt');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LanguageSwitcher currentLang={lang} />
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {t.home.title}
      </p>
      <p>{t.home.language}</p>
      <p>{t.home.subtitle}</p>
    </main>
  );
}