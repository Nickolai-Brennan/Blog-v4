import { apiClient } from './apiClient';
import type { Team, TeamCreate, TeamUpdate } from '@/types/team';

const BASE = '/api/v1/teams';

export async function getTeams(): Promise<Team[]> {
  const { data } = await apiClient.get<Team[]>(`${BASE}/`);
  return data;
}

export async function getTeam(id: number): Promise<Team> {
  const { data } = await apiClient.get<Team>(`${BASE}/${id}`);
  return data;
}

export async function createTeam(payload: TeamCreate): Promise<Team> {
  const { data } = await apiClient.post<Team>(`${BASE}/`, payload);
  return data;
}

export async function updateTeam(id: number, payload: TeamUpdate): Promise<Team> {
  const { data } = await apiClient.patch<Team>(`${BASE}/${id}`, payload);
  return data;
}

export async function deleteTeam(id: number): Promise<void> {
  await apiClient.delete(`${BASE}/${id}`);
}
