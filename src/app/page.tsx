import FeaturedPostCard from '@/components/blog/FeaturedPostCard';
import PostGrid from '@/components/blog/PostGrid';
import PlaceholderCard from '@/components/ui/PlaceholderCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { mockPosts } from '@/lib/mock-data';
import { getUniqueCategories } from '@/lib/utils';
import { ArrowRight, Trophy, Cloud, Users } from 'lucide-react';

export default function HomePage() {
  const publishedPosts = mockPosts.filter(p => p.published);
  const featuredPosts = publishedPosts.filter(p => p.featured);
  const mainFeatured = featuredPosts[0];
  const latestPosts = publishedPosts.filter(p => !p.featured || p.id !== mainFeatured?.id).slice(0, 3);
  const categories = getUniqueCategories(publishedPosts);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {mainFeatured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FeaturedPostCard post={mainFeatured} />
        </section>
      )}

      {/* Quick Links Bar */}
      <section className="bg-green-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/forecast" className="flex items-center gap-2 text-green-200 hover:text-amber-300 transition-colors">
              <Cloud size={16} />
              <span>Today&apos;s Playing Conditions</span>
            </Link>
            <span className="text-green-700">|</span>
            <Link href="/vip-league" className="flex items-center gap-2 text-green-200 hover:text-amber-300 transition-colors">
              <Trophy size={16} />
              <span>VIP League Standings</span>
            </Link>
            <span className="text-green-700">|</span>
            <Link href="/contact" className="flex items-center gap-2 text-green-200 hover:text-amber-300 transition-colors">
              <Users size={16} />
              <span>Join Our Community</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="Latest from The Fairway" subtitle="Fresh takes on the game we love" />
          <Link href="/archive" className="hidden sm:block">
            <Button variant="outline" size="sm">
              View All <ArrowRight size={14} className="ml-1" />
            </Button>
          </Link>
        </div>
        <PostGrid posts={latestPosts} columns={3} />
        <div className="mt-8 text-center sm:hidden">
          <Link href="/archive">
            <Button variant="outline">View All Articles</Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-green-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Browse by Category"
            subtitle="Find exactly what you&apos;re looking for"
            align="center"
            className="text-white [&_h2]:text-white [&_p]:text-green-300 [&_span]:text-amber-300"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {categories.map(category => (
              <Link key={category} href={`/archive?category=${category}`}>
                <div className="bg-green-900 hover:bg-green-800 rounded-lg p-4 text-center transition-colors group">
                  <span className="text-2xl mb-2 block">
                    {category === 'Instruction' ? '🏌️' : category === 'Equipment' ? '⛳' : category === 'Travel' ? '✈️' : category === 'Course Review' ? '🗺️' : category === 'Mental Game' ? '🧠' : category === 'History' ? '📚' : '💪'}
                  </span>
                  <span className="text-green-100 text-sm font-medium group-hover:text-amber-300 transition-colors">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon / Placeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-8">
          <SectionHeader
            title="Coming Soon"
            subtitle="Exciting new content is on the way — stay tuned!"
            accent={false}
          />
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            In Progress
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
        </div>
      </section>

      {/* More Featured Posts */}
      {featuredPosts.length > 1 && (
        <section className="bg-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Editor&apos;s Picks" subtitle="Stories our team loves most" />
            <PostGrid posts={featuredPosts.slice(1, 4)} columns={3} />
          </div>
        </section>
      )}
    </div>
  );
}
