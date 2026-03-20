import { createColumnHelper } from '@tanstack/react-table';
import type { Player } from '@/types/player';
import type { Team } from '@/types/team';

export const playerColumnHelper = createColumnHelper<Player>();
export const teamColumnHelper = createColumnHelper<Team>();

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString();
}
