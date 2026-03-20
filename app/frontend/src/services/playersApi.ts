import { apiClient } from './apiClient';
import type { Player, PlayerCreate, PlayerUpdate } from '@/types/player';

const BASE = '/api/v1/players';

export async function getPlayers(): Promise<Player[]> {
  const { data } = await apiClient.get<Player[]>(`${BASE}/`);
  return data;
}

export async function getPlayer(id: number): Promise<Player> {
  const { data } = await apiClient.get<Player>(`${BASE}/${id}`);
  return data;
}

export async function createPlayer(payload: PlayerCreate): Promise<Player> {
  const { data } = await apiClient.post<Player>(`${BASE}/`, payload);
  return data;
}

export async function updatePlayer(id: number, payload: PlayerUpdate): Promise<Player> {
  const { data } = await apiClient.patch<Player>(`${BASE}/${id}`, payload);
  return data;
}

export async function deletePlayer(id: number): Promise<void> {
  await apiClient.delete(`${BASE}/${id}`);
}
