import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-950 text-green-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-green-900 font-bold text-lg">⛳</div>
              <div>
                <span className="text-xl font-bold text-white">The Fairway</span>
                <span className="block text-xs text-amber-300 tracking-widest uppercase">Golf Magazine</span>
              </div>
            </div>
            <p className="text-green-300 text-sm leading-relaxed max-w-md">
              Your premier destination for golf instruction, course reviews, equipment guides, and the stories that make this game great.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/archive', label: 'Archive' },
                { href: '/forecast', label: 'Fore!cast' },
                { href: '/vip-league', label: 'VIP League' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-green-300 hover:text-amber-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Categories</h3>
            <ul className="space-y-2 text-sm">
              {['Instruction', 'Equipment', 'Course Review', 'Travel', 'Mental Game', 'History', 'Fitness'].map(cat => (
                <li key={cat}>
                  <Link href={`/archive?category=${cat}`} className="text-green-300 hover:text-amber-300 transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-green-500">
          <p>&copy; {new Date().getFullYear()} The Fairway Golf Magazine. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ for golfers everywhere</p>
        </div>
      </div>
    </footer>
  );
}
