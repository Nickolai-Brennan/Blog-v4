import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ApolloProvider from '@/components/ApolloProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'The Fairway | Golf Magazine',
  description: 'Your premier destination for golf instruction, course reviews, equipment guides, and the stories that make this game great.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans bg-gray-50 min-h-screen flex flex-col`}>
        <ApolloProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
