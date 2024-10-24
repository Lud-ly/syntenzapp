// components/LanguageSwitcher.tsx
'use client';

import Link from "next/link";
import Image from "next/image";

interface LanguageFlag {
  code: string;
  alt: string;
}

const languages: LanguageFlag[] = [
  { code: 'en', alt: 'English' },
  { code: 'zh', alt: 'Chinese' },
  { code: 'fr', alt: 'Français' },
  { code: 'es', alt: 'Español' },
  { code: 'de', alt: 'Deutsch' },
  { code: 'pt', alt: 'Português' },
  { code: 'ja', alt: '日本語' }
];

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  return (
    <div className="flex items-center bg-teal-950 p-3 rounded">
      {languages.map((lang, index) => (
        <>
          <Link 
            href={`/${lang.code}`} 
            key={lang.code}
            className={`transition-transform duration-200 hover:scale-110 ${
              currentLang === lang.code 
                ? 'ring-4 ring-teal-500 rounded-full transform scale-110' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={`/flags/${lang.code}.svg`}
              alt={lang.alt}
              width={48}
              height={48}
              className="inline-block mx-4"
            />
          </Link>
          {index < languages.length - 1 && <span className="text-gray-400">|</span>}
        </>
      ))}
    </div>
  );
}