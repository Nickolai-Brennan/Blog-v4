import { Outlet } from '@tanstack/react-router';
import { Navbar } from './Navbar';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ padding: '1rem 2rem' }}>
        {children ?? <Outlet />}
      </main>
    </div>
  );
}
