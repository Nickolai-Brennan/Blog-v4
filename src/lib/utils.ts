import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Post } from './mock-data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUniqueCategories(posts: Post[]): string[] {
  return Array.from(new Set(posts.map(p => p.category)));
}
