# Frontend Documentation

## Overview

The frontend is a **React 18 + TypeScript** single-page application built with **Vite**.

---

## Technology Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Build tool & dev server |
| TanStack Router | Type-safe client-side routing |
| TanStack Query | Server-state management (caching, refetching) |
| TanStack Table | Headless, composable data tables |
| Axios | HTTP client |

---

## Directory Structure

```
src/
├── app/
│   ├── router.tsx       # Route tree definition
│   └── providers.tsx    # QueryClient + RouterProvider wrapper
├── pages/
│   ├── PlayersPage.tsx  # /players route component
│   └── TeamsPage.tsx    # /teams route component
├── components/
│   ├── layout/          # Layout, Navbar
│   ├── players/         # PlayersTable
│   └── teams/           # TeamsTable
├── hooks/
│   ├── usePlayersQuery.ts   # useQuery for players list
│   ├── usePlayerMutation.ts # useMutation for CRUD
│   └── useTeamsQuery.ts     # useQuery for teams list
├── services/
│   ├── apiClient.ts     # Axios instance + interceptors
│   ├── playersApi.ts    # Player API functions
│   └── teamsApi.ts      # Team API functions
├── lib/
│   ├── query/queryKeys.ts   # Centralized query key factories
│   └── table/columnHelpers.ts # TanStack Table helpers
├── types/
│   ├── player.ts        # Player interface
│   └── team.ts          # Team interface
└── tests/
    └── players.test.tsx
```

---

## Data Flow

```
Page → useQuery hook → API service fn → apiClient (Axios) → Backend
              ↓
        TanStack Query cache
              ↓
        Component re-renders
```

---

## Query Key Conventions

Query keys are centralized in `src/lib/query/queryKeys.ts` and follow the factory pattern:

```ts
playerKeys.list()    // ['players', 'list', {}]
playerKeys.detail(1) // ['players', 'detail', 1]
```

---

## Authentication

The `apiClient` reads `localStorage.getItem('access_token')` and injects it as `Authorization: Bearer <token>` on every request. On 401 responses, the token is cleared.

---

## Running Locally

```bash
cd app/frontend
npm install
npm run dev      # starts on http://localhost:5173
npm test         # run Vitest tests
npm run build    # production build
```

The Vite dev server proxies `/api` and `/graphql` to `http://localhost:8000`.
