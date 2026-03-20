import strawberry
from typing import Optional
from app.backend.graphql.types import PlayerType, TeamType


@strawberry.type
class Query:
    @strawberry.field
    def players(self) -> list[PlayerType]:
        from app.backend.db.session import SessionLocal
        from app.backend.repositories.player_repository import PlayerRepository

        db = SessionLocal()
        try:
            repo = PlayerRepository(db)
            return [
                PlayerType(id=p.id, name=p.name, position=p.position, team_id=p.team_id)
                for p in repo.list_all()
            ]
        finally:
            db.close()

    @strawberry.field
    def player(self, player_id: int) -> Optional[PlayerType]:
        from app.backend.db.session import SessionLocal
        from app.backend.repositories.player_repository import PlayerRepository

        db = SessionLocal()
        try:
            repo = PlayerRepository(db)
            p = repo.get_by_id(player_id)
            if not p:
                return None
            return PlayerType(id=p.id, name=p.name, position=p.position, team_id=p.team_id)
        finally:
            db.close()

    @strawberry.field
    def teams(self) -> list[TeamType]:
        from app.backend.db.session import SessionLocal
        from app.backend.repositories.team_repository import TeamRepository

        db = SessionLocal()
        try:
            repo = TeamRepository(db)
            return [TeamType(id=t.id, name=t.name, city=t.city) for t in repo.list_all()]
        finally:
            db.close()

    @strawberry.field
    def team(self, team_id: int) -> Optional[TeamType]:
        from app.backend.db.session import SessionLocal
        from app.backend.repositories.team_repository import TeamRepository

        db = SessionLocal()
        try:
            repo = TeamRepository(db)
            t = repo.get_by_id(team_id)
            if not t:
                return None
            return TeamType(id=t.id, name=t.name, city=t.city)
        finally:
            db.close()
