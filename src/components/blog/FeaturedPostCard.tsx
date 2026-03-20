import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Post } from '@/lib/mock-data';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface FeaturedPostCardProps {
  post: Post;
}

export default function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl group">
      <div className="relative h-[520px] md:h-[600px]">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-600" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="category" category={post.category} className="text-xs font-bold uppercase tracking-wider">
            {post.category}
          </Badge>
          <span className="text-amber-300 text-xs font-semibold tracking-widest uppercase">Featured</span>
        </div>
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
          {post.title}
        </h1>
        <p className="text-gray-200 text-base md:text-lg max-w-2xl mb-6 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center gap-2 text-gray-300 text-sm">
            <User size={14} />
            {post.author}
          </span>
          <span className="text-gray-500">·</span>
          <span className="flex items-center gap-2 text-gray-300 text-sm">
            <Calendar size={14} />
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <Button variant="secondary" className="group/btn">
            Read Full Story
            <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
