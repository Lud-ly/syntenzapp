// src/types.ts

export type Locale = 'en' | 'zh'| 'de'| 'es'| 'fr'| 'ja'| 'pt';

export interface PageDictionary {
  language: string;
  title: string;
  desc: string;
}

export interface HomeDictionary {
  language: string;
  title: string;
  desc: string;
}

export interface Dictionary {
  page: PageDictionary;
  home: HomeDictionary;
}