import { mockPosts } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import PostGrid from '@/components/blog/PostGrid';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return mockPosts.filter(p => p.published).map(p => ({ slug: p.slug }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = mockPosts.find(p => p.slug === params.slug && p.published);

  if (!post) {
    notFound();
  }

  const relatedPosts = mockPosts
    .filter(p => p.published && p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  function escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  const contentHtml = post.content
    .split('\n')
    .map(line => {
      if (line.startsWith('# ')) return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${escapeHtml(line.slice(2))}</h1>`;
      if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold text-gray-800 mt-6 mb-3">${escapeHtml(line.slice(3))}</h2>`;
      if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">${escapeHtml(line.slice(4))}</h3>`;
      if (line.trim() === '') return '<br />';
      return `<p class="text-gray-700 leading-relaxed mb-4">${escapeHtml(line)}</p>`;
    })
    .join('');

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <div className="relative h-72 md:h-[480px] bg-gray-900">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-600" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <Badge variant="category" category={post.category} className="mb-4">{post.category}</Badge>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <span className="flex items-center gap-2"><User size={14} />{post.author}</span>
            <span>·</span>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/archive">
          <Button variant="ghost" size="sm" className="mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Archive
          </Button>
        </Link>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 flex-wrap">
              <Tag size={16} className="text-gray-400" />
              {post.tags.map(tag => (
                <Badge key={tag} variant="tag">#{tag}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More in {post.category}</h2>
            <PostGrid posts={relatedPosts} columns={3} />
          </div>
        </section>
      )}
    </article>
  );
}
