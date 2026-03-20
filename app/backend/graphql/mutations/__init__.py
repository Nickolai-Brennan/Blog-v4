import strawberry
from typing import Optional
from app.backend.graphql.types import PlayerType, TeamType


@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_player(self, name: str, position: str, team_id: Optional[int] = None) -> PlayerType:
        from app.backend.db.session import SessionLocal
        from app.backend.repositories.player_repository import PlayerRepository
        from app.backend.schemas.player import PlayerCreate

        db = SessionLocal()
        try:
            repo = PlayerRepository(db)
            p = repo.create(PlayerCreate(name=name, position=position, team_id=team_id))
            return PlayerType(id=p.id, name=p.name, position=p.position, team_id=p.team_id)
        finally:
            db.close()

    @strawberry.mutation
    def delete_player(self, player_id: int) -> bool:
        from app.backend.db.session import SessionLocal
        from app.backend.repositories.player_repository import PlayerRepository

        db = SessionLocal()
        try:
            repo = PlayerRepository(db)
            player = repo.get_by_id(player_id)
            if not player:
                return False
            repo.delete(player)
            return True
        finally:
            db.close()

    @strawberry.mutation
    def create_team(self, name: str, city: str) -> TeamType:
        from app.backend.db.session import SessionLocal
        from app.backend.repositories.team_repository import TeamRepository
        from app.backend.schemas.team import TeamCreate

        db = SessionLocal()
        try:
            repo = TeamRepository(db)
            t = repo.create(TeamCreate(name=name, city=city))
            return TeamType(id=t.id, name=t.name, city=t.city)
        finally:
            db.close()

    @strawberry.mutation
    def delete_team(self, team_id: int) -> bool:
        from app.backend.db.session import SessionLocal
        from app.backend.repositories.team_repository import TeamRepository

        db = SessionLocal()
        try:
            repo = TeamRepository(db)
            team = repo.get_by_id(team_id)
            if not team:
                return False
            repo.delete(team)
            return True
        finally:
            db.close()
