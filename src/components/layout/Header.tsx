'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/archive', label: 'Archive' },
  { href: '/forecast', label: 'Fore!cast' },
  { href: '/vip-league', label: 'VIP League' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-green-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-green-900 font-bold text-lg">
              ⛳
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">The Fairway</span>
              <span className="block text-xs text-amber-300 tracking-widest uppercase">Golf Magazine</span>
            </div>
          </Link>
          <Navigation />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-green-200 hover:text-white hover:bg-green-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-green-800">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-amber-300 bg-green-800'
                    : 'text-green-100 hover:text-amber-200 hover:bg-green-800'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
