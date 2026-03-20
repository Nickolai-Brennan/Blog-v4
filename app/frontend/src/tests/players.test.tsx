import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PlayersTable } from '@/components/players/PlayersTable';
import type { Player } from '@/types/player';

const SAMPLE_PLAYERS: Player[] = [
  { id: 1, name: 'Alice Smith', position: 'Forward', team_id: 1, created_at: '2024-01-01T00:00:00Z' },
  { id: 2, name: 'Bob Jones', position: 'Midfielder', team_id: null, created_at: '2024-02-15T00:00:00Z' },
];

describe('PlayersTable', () => {
  it('renders player rows', () => {
    render(<PlayersTable data={SAMPLE_PLAYERS} />);
    expect(screen.getByText('Alice Smith')).toBeTruthy();
    expect(screen.getByText('Bob Jones')).toBeTruthy();
  });

  it('renders empty state', () => {
    render(<PlayersTable data={[]} />);
    expect(screen.queryByText('Alice Smith')).toBeNull();
  });
});
