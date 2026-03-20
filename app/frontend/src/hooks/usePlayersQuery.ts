import { useQuery } from '@tanstack/react-query';
import { getPlayers } from '@/services/playersApi';
import { playerKeys } from '@/lib/query/queryKeys';

export function usePlayersQuery() {
  return useQuery({
    queryKey: playerKeys.list(),
    queryFn: getPlayers,
  });
}
