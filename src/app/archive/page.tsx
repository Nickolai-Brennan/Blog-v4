'use client';

import { useState, Suspense } from 'react';
import { mockPosts } from '@/lib/mock-data';
import PostGrid from '@/components/blog/PostGrid';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { Search } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { getUniqueCategories } from '@/lib/utils';

const POSTS_PER_PAGE = 6;

function ArchiveContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [page, setPage] = useState(1);

  const publishedPosts = mockPosts.filter(p => p.published);
  const categories = ['All', ...getUniqueCategories(publishedPosts)];

  const filtered = publishedPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = search === '' || post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase()) || post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginatedPosts = filtered.slice(0, page * POSTS_PER_PAGE);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setPage(1); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-green-800 text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50 hover:border-green-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <p className="text-gray-500 text-sm mb-6">{filtered.length} article{filtered.length !== 1 ? 's' : ''} found</p>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-4xl mb-4">⛳</p>
          <p className="text-gray-500">No articles found. Try a different search or category.</p>
        </div>
      ) : (
        <PostGrid posts={paginatedPosts} columns={3} />
      )}

      {/* Load More */}
      {page < totalPages && (
        <div className="mt-10 text-center">
          <Button variant="outline" onClick={() => setPage(p => p + 1)}>
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  );
}

export default function ArchivePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeader
        title="The Archive"
        subtitle="Every article, every story — all in one place"
      />
      <Suspense fallback={<div className="py-12 text-center text-gray-400">Loading...</div>}>
        <ArchiveContent />
      </Suspense>
    </div>
  );
}
