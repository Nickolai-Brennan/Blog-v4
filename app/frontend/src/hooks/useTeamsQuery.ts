import { useQuery } from '@tanstack/react-query';
import { getTeams } from '@/services/teamsApi';
import { teamKeys } from '@/lib/query/queryKeys';

export function useTeamsQuery() {
  return useQuery({
    queryKey: teamKeys.list(),
    queryFn: getTeams,
  });
}
