import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPlayer, updatePlayer, deletePlayer } from '@/services/playersApi';
import { playerKeys } from '@/lib/query/queryKeys';
import type { PlayerCreate, PlayerUpdate } from '@/types/player';

export function useCreatePlayerMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PlayerCreate) => createPlayer(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: playerKeys.lists() }),
  });
}

export function useUpdatePlayerMutation(id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: PlayerUpdate) => updatePlayer(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: playerKeys.lists() }),
  });
}

export function useDeletePlayerMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deletePlayer(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: playerKeys.lists() }),
  });
}
