'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Check } from "lucide-react";

interface LanguageFlag {
  code: string;
  alt: string;
  label: string;
}

const languages: LanguageFlag[] = [
  { code: 'en', alt: 'English', label: 'English' },
  { code: 'zh', alt: 'Chinese', label: '中文' },
  { code: 'fr', alt: 'Français', label: 'Français' },
  { code: 'es', alt: 'Español', label: 'Español' },
  { code: 'de', alt: 'Deutsch', label: 'Deutsch' },
  { code: 'pt', alt: 'Português', label: 'Português' },
  { code: 'ja', alt: '日本語', label: '日本語' }
];

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative">
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-teal-950 hover:bg-teal-900 
                 text-white px-4 py-2 rounded-lg transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-teal-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <Image
          src={`/flags/${currentLanguage?.code}.svg`}
          alt={currentLanguage?.alt || ''}
          width={24}
          height={24}
          className="rounded-full"
        />
        {/* <span className="hidden sm:inline ml-2">{currentLanguage?.label}</span> */}
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-1 
                   border border-gray-200 z-50"
          role="menu"
        >
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className={`flex items-center px-4 py-2 hover:bg-gray-100 
                       transition-colors duration-150 ${
                         currentLang === lang.code ? 'bg-gray-50' : ''
                       }`}
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center flex-1">
                <Image
                  src={`/flags/${lang.code}.svg`}
                  alt={lang.alt}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <span className="ml-3 text-gray-700">{lang.label}</span>
              </div>
              {currentLang === lang.code && (
                <Check className="w-4 h-4 text-teal-600" />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}