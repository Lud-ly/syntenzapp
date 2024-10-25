// src/app/page.tsx
import { getDictionary } from "./dictionaries";
import { Dictionary } from '../../types';
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import Image from "next/image";

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
    <div className="min-h-screen flex flex-col">
      {/* Header fixe avec fond flouté */}
      <header className="fixed top-0 w-full  z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2 bg-teal-950 hover:bg-teal-900 
                 text-white px-4 py-4 rounded-lg ">
              <Image
                src="/images/logo.webp"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </header>

      {/* Hero Section avec image de couverture */}
      <div className="relative pt-16 pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/inside.webp"
            alt="Interior"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </div>

        {/* Contenu superposé sur l'image hero */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t.home.title}
          </h1>
          <p className="text-xl text-white/90">
            {t.home.language}
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t.home.title}
          </h1>
          <div className="prose dark:prose-invert max-w-none text-lg font-bold">
           
            <blockquote>
              <p>{t.home.paragraph}</p>
            </blockquote>
            <ul>
              <li>{t.home.paragraph2}</li>
              <li>{t.home.paragraph3}</li>
              <li>{t.home.paragraph4}</li>
            </ul>
            <p>{t.home.paragraph5}</p>
            <p>{t.home.paragraph6}</p>
          </div>

          {/* Image extérieure avec container responsive */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="/images/outside.webp"
              alt="Exterior"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Conclusion */}
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg font-bold">{t.home.paragraph7}</p>
            <p className="text-lg font-bold">{t.home.conclusion}</p>
          </div>
           {/* Image extérieure avec container responsive */}
           <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="/images/inside.webp"
              alt="Exterior"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </article>
      </main>
    </div>
  );
}