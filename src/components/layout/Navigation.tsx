'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/archive', label: 'Archive' },
  { href: '/forecast', label: 'Fore!cast' },
  { href: '/vip-league', label: 'VIP League' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150',
            pathname === link.href
              ? 'text-amber-300 bg-green-900'
              : 'text-green-100 hover:text-amber-200 hover:bg-green-800'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
