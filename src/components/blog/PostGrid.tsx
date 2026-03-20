import PostCard from './PostCard';
import { Post } from '@/lib/mock-data';

interface PostGridProps {
  posts: Post[];
  columns?: 2 | 3 | 4;
}

export default function PostGrid({ posts, columns = 3 }: PostGridProps) {
  const gridClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
