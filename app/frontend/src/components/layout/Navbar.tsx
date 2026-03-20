import { Link } from '@tanstack/react-router';

export function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0.75rem 2rem',
        background: '#1e293b',
        color: '#f8fafc',
      }}
    >
      <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Blog v4</span>
      <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/players" style={{ color: '#94a3b8', textDecoration: 'none' }}>
        Players
      </Link>
      <Link to="/teams" style={{ color: '#94a3b8', textDecoration: 'none' }}>
        Teams
      </Link>
    </nav>
  );
}
