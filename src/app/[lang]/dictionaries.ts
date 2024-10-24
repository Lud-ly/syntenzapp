// src/app/i18n/dictionaries.ts
import "server-only";
import { Dictionary } from '../../types'; // Assure-toi d'importer le type Dictionary

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
  fr: () => import('./dictionaries/fr.json').then(module => module.default),
  es: () => import('./dictionaries/es.json').then(module => module.default),
  pt: () => import('./dictionaries/pt.json').then(module => module.default),
  de: () => import('./dictionaries/de.json').then(module => module.default),
  ja: () => import('./dictionaries/ja.json').then(module => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const dictionaryFunction = dictionaries[locale];
  if (!dictionaryFunction) {
    throw new Error(`Dictionary for locale "${locale}" not found.`);
  }
  return dictionaryFunction(); // Renvoie un type Dictionary
};
