import { useTeamsQuery } from '@/hooks/useTeamsQuery';
import { TeamsTable } from '@/components/teams/TeamsTable';

export function TeamsPage() {
  const { data, isLoading, isError } = useTeamsQuery();

  if (isLoading) return <p>Loading teams…</p>;
  if (isError) return <p style={{ color: 'red' }}>Failed to load teams.</p>;

  return (
    <div>
      <h1>Teams</h1>
      <TeamsTable data={data ?? []} />
    </div>
  );
}
