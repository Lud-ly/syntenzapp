// components/NewsFilter.tsx
'use client';

interface NewsFilterProps {
  country: string;
  category: string;
  onCountryChange: (country: string) => void;
  onCategoryChange: (category: string) => void;
}

export function NewsFilter({
    country,
    category,
    onCountryChange,
    onCategoryChange,
  }: NewsFilterProps) {
    const countries = [
      { code: 'us', name: 'USA' },
      { code: 'gb', name: 'UK' },
      { code: 'fr', name: 'France' },
      // Ajoutez d'autres pays selon vos besoins
    ];
  
    const categories = [
      'business',
      'technology',
      'sports',
      'entertainment',
      'health',
      'science',
    ];
  
    return (
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
  
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </div>
    );
  }
  