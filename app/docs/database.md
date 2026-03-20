# Database Documentation

## Overview

Blog-v4 uses **PostgreSQL** as the primary database, managed via **SQLAlchemy ORM** and **Alembic** for migrations.

---

## Schema

### `users`

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PK |
| username | VARCHAR(150) | NOT NULL, UNIQUE |
| email | VARCHAR(255) | NOT NULL, UNIQUE |
| password | VARCHAR(255) | NOT NULL (bcrypt hash) |
| is_active | BOOLEAN | DEFAULT TRUE |
| created_at | TIMESTAMP | DEFAULT NOW() |

### `teams`

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PK |
| name | VARCHAR(255) | NOT NULL, UNIQUE |
| city | VARCHAR(255) | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |

### `players`

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PK |
| name | VARCHAR(255) | NOT NULL |
| position | VARCHAR(50) | NOT NULL |
| team_id | INTEGER | FK → teams.id, ON DELETE SET NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |

---

## Relationships

- A **Team** has many **Players** (one-to-many)
- A **Player** belongs to at most one **Team** (nullable FK)

---

## Migrations

Migrations are stored in `app/backend/db/migrations/` and managed by **Alembic**.

```bash
# Create a new migration
alembic revision --autogenerate -m "description"

# Apply migrations
alembic upgrade head

# Rollback one step
alembic downgrade -1
```

---

## Seeds

Run seeds directly via psql:

```bash
psql $DATABASE_URL -f app/database/schema/001_initial.sql
psql $DATABASE_URL -f app/database/seeds/teams.sql
psql $DATABASE_URL -f app/database/seeds/players.sql
```

---

## Query Guidelines

- **Always use ORM / parameterized queries** — never f-string SQL
- Use `Session.query()` or SQLAlchemy 2 `select()` statements
- Repository layer is the only layer that touches the DB session
