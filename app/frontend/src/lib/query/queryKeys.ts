export const playerKeys = {
  all: ['players'] as const,
  lists: () => [...playerKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown> = {}) =>
    [...playerKeys.lists(), filters] as const,
  details: () => [...playerKeys.all, 'detail'] as const,
  detail: (id: number) => [...playerKeys.details(), id] as const,
};

export const teamKeys = {
  all: ['teams'] as const,
  lists: () => [...teamKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown> = {}) =>
    [...teamKeys.lists(), filters] as const,
  details: () => [...teamKeys.all, 'detail'] as const,
  detail: (id: number) => [...teamKeys.details(), id] as const,
};
