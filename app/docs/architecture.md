# Architecture Overview

## Summary

Blog-v4 is a full-stack application built with a strict layered architecture:

```
Frontend (React + TanStack)
        ↕  HTTP / GraphQL
Backend (FastAPI)
  Routes → Services → Repositories → SQLAlchemy ORM
        ↕
  PostgreSQL Database
        ↕
  Celery Workers (async tasks via Redis)
```

---

## Backend Layers

| Layer | Location | Responsibility |
|---|---|---|
| **Routes** | `api/v1/endpoints/` | Parse HTTP requests, validate input, return responses |
| **Services** | `services/` | Business logic, orchestration, HTTP exceptions |
| **Repositories** | `repositories/` | Database queries via ORM — never raw SQL |
| **Models** | `models/` | SQLAlchemy ORM table definitions |
| **Schemas** | `schemas/` | Pydantic request/response models |

### Rule: Routes never touch the DB directly

Routes receive a `Service` via `Depends()`. Services call `Repository` methods. Repositories call the `Session`.

---

## Frontend Layers

| Layer | Location | Responsibility |
|---|---|---|
| **Pages** | `pages/` | Route-level components, data fetching via hooks |
| **Components** | `components/` | Reusable UI (tables, forms, layout) |
| **Hooks** | `hooks/` | TanStack Query wrappers (`useQuery`, `useMutation`) |
| **Services** | `services/` | Axios API call functions |
| **Types** | `types/` | TypeScript interfaces mirroring backend Pydantic schemas |

---

## Key Technologies

- **FastAPI** — REST API with automatic OpenAPI docs
- **Strawberry** — Code-first GraphQL schema
- **SQLAlchemy 2** — Async-compatible ORM
- **Alembic** — Database migrations
- **Celery + Redis** — Background task queue
- **React 18 + Vite** — Frontend build tooling
- **TanStack Router** — Type-safe file-based routing
- **TanStack Query** — Server state management
- **TanStack Table** — Headless data tables
