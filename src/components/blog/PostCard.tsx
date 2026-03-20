import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Post } from '@/lib/mock-data';
import { Calendar, User } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <Link href={`/posts/${post.slug}`} className="block overflow-hidden">
        <div className="relative h-48 bg-gray-200 overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center text-white text-4xl">
              ⛳
            </div>
          )}
        </div>
      </Link>
      <CardContent className="flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="category" category={post.category}>{post.category}</Badge>
        </div>
        <Link href={`/posts/${post.slug}`} className="group/title">
          <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover/title:text-green-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
          <span className="flex items-center gap-1">
            <User size={12} />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
