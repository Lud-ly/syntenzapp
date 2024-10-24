// components/NewsList.tsx
import { NewsArticle } from '@/types';
import { NewsCard } from './NewsCard';

export function NewsList({ articles }: { articles: NewsArticle[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} langPrefix={''} />
      ))}
    </div>
  );
}