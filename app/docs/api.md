# API Documentation

## REST API (FastAPI)

Base URL: `http://localhost:8000/api/v1`

Interactive docs available at `/docs` (Swagger UI) and `/redoc`.

---

### Authentication

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/login` | OAuth2 password flow — returns JWT |
| POST | `/auth/logout` | Invalidate session |
| GET  | `/auth/me` | Returns current user info |

**Login example:**
```bash
curl -X POST http://localhost:8000/api/v1/auth/login \
  -F username=admin -F password=secret
# → {"access_token": "...", "token_type": "bearer"}
```

---

### Players

| Method | Path | Description |
|--------|------|-------------|
| GET    | `/players/`          | List all players |
| GET    | `/players/{id}`      | Get player by ID |
| POST   | `/players/`          | Create a player |
| PATCH  | `/players/{id}`      | Update a player |
| DELETE | `/players/{id}`      | Delete a player |

**Create player body:**
```json
{ "name": "Alice", "position": "Forward", "team_id": 1 }
```

---

### Teams

| Method | Path | Description |
|--------|------|-------------|
| GET    | `/teams/`       | List all teams |
| GET    | `/teams/{id}`   | Get team by ID |
| POST   | `/teams/`       | Create a team |
| PATCH  | `/teams/{id}`   | Update a team |
| DELETE | `/teams/{id}`   | Delete a team |

---

## GraphQL API (Strawberry)

Endpoint: `http://localhost:8000/graphql`

### Queries

```graphql
query {
  players { id name position teamId }
  player(playerId: 1) { id name position }
  teams { id name city }
  team(teamId: 1) { id name city }
}
```

### Mutations

```graphql
mutation {
  createPlayer(name: "Bob", position: "Midfielder", teamId: 1) { id name }
  deletePlayer(playerId: 1)
  createTeam(name: "City United", city: "New York") { id name }
  deleteTeam(teamId: 1)
}
```
