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

export interface NewsArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  category:string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}