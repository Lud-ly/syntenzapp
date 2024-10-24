// components/NewsCard.tsx
'use client';

import Image from 'next/image';
import { NewsArticle } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

export function NewsCard({ article, langPrefix }: { article: NewsArticle, langPrefix: string }) {
    const imageUrl = article.urlToImage || '/next.svg';
    const [hasError, setHasError] = useState(false);
    const proxyUrl = `/${langPrefix}/api/image-proxy?url=${encodeURIComponent(imageUrl)}`;
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={hasError ? '/placeholder-news.jpg' : proxyUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    onError={() => setHasError(true)}
                />
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 py-1 text-sm rounded-bl">
                    {article.source.name}
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                    {article.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.description}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{article.author || 'Unknown Author'}</span>
                    <span>{formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}</span>
                </div>

                <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                    Read More
                </a>
            </div>
        </div>
    );
}