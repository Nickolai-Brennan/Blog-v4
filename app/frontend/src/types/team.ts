export interface Team {
  id: number;
  name: string;
  city: string;
  created_at: string;
}

export interface TeamCreate {
  name: string;
  city: string;
}

export interface TeamUpdate {
  name?: string;
  city?: string;
}
