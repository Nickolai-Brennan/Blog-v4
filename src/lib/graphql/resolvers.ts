import { mockPosts, mockGolfStats, mockWeather, mockLeagueRounds, mockVipMembers } from '../mock-data';

export const resolvers = {
  Query: {
    posts: (_: unknown, { limit = 10, offset = 0 }: { limit?: number; offset?: number }) => {
      return mockPosts.filter(p => p.published).slice(offset, offset + limit);
    },
    featuredPosts: () => {
      return mockPosts.filter(p => p.published && p.featured);
    },
    post: (_: unknown, { slug }: { slug: string }) => {
      return mockPosts.find(p => p.slug === slug && p.published) ?? null;
    },
    postsByCategory: (_: unknown, { category }: { category: string }) => {
      return mockPosts.filter(p => p.published && p.category.toLowerCase() === category.toLowerCase());
    },
    golfStats: (_: unknown, { limit = 10 }: { limit?: number }) => {
      return mockGolfStats.slice(0, limit);
    },
    latestWeather: (_: unknown, { location = 'Pebble Beach' }: { location?: string }) => {
      return mockWeather.find(w => w.location === location) ?? mockWeather[0];
    },
    vipLeaderboard: () => mockLeagueRounds,
    vipMembers: () => mockVipMembers,
  },
};
