import { usePlayersQuery } from '@/hooks/usePlayersQuery';
import { PlayersTable } from '@/components/players/PlayersTable';

export function PlayersPage() {
  const { data, isLoading, isError } = usePlayersQuery();

  if (isLoading) return <p>Loading players…</p>;
  if (isError) return <p style={{ color: 'red' }}>Failed to load players.</p>;

  return (
    <div>
      <h1>Players</h1>
      <PlayersTable data={data ?? []} />
    </div>
  );
}
