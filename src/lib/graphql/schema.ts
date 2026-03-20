import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Post {
    id: ID!
    slug: String!
    title: String!
    excerpt: String!
    content: String!
    coverImage: String
    category: String!
    tags: [String!]!
    author: String!
    publishedAt: String!
    updatedAt: String!
    featured: Boolean!
    published: Boolean!
  }

  type GolfStat {
    id: ID!
    playerId: String!
    playerName: String!
    holes: Int!
    score: Int!
    par: Int!
    handicap: Float!
    course: String!
    roundDate: String!
  }

  type WeatherData {
    id: ID!
    location: String!
    temperature: Float!
    windSpeed: Float!
    windDir: String!
    humidity: Float!
    conditions: String!
    forecast: String!
    recordedAt: String!
  }

  type VipMember {
    id: ID!
    name: String!
    email: String!
    handicap: Float
    joinedAt: String!
    active: Boolean!
  }

  type LeagueRound {
    id: ID!
    leagueName: String!
    playerId: String!
    playerName: String!
    score: Int!
    points: Int!
    roundDate: String!
    course: String!
  }

  type Query {
    posts(limit: Int, offset: Int): [Post!]!
    featuredPosts: [Post!]!
    post(slug: String!): Post
    postsByCategory(category: String!): [Post!]!
    golfStats(limit: Int): [GolfStat!]!
    latestWeather(location: String): WeatherData
    vipLeaderboard: [LeagueRound!]!
    vipMembers: [VipMember!]!
  }

  type Mutation {
    createPost(
      slug: String!
      title: String!
      excerpt: String!
      content: String!
      coverImage: String
      category: String!
      tags: [String!]!
      author: String!
      featured: Boolean
      published: Boolean
    ): Post!
  }
`;
