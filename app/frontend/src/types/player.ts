export interface Player {
  id: number;
  name: string;
  position: string;
  team_id: number | null;
  created_at: string;
}

export interface PlayerCreate {
  name: string;
  position: string;
  team_id?: number | null;
}

export interface PlayerUpdate {
  name?: string;
  position?: string;
  team_id?: number | null;
}
