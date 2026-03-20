from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.backend.repositories.team_repository import TeamRepository
from app.backend.schemas.team import TeamCreate, TeamUpdate
from app.backend.models.team import Team


class TeamService:
    def __init__(self, db: Session) -> None:
        self.repo = TeamRepository(db)

    def list_teams(self, skip: int = 0, limit: int = 100) -> list[Team]:
        return self.repo.list_all(skip=skip, limit=limit)

    def get_team(self, team_id: int) -> Team:
        team = self.repo.get_by_id(team_id)
        if not team:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Team {team_id} not found",
            )
        return team

    def create_team(self, data: TeamCreate) -> Team:
        return self.repo.create(data)

    def update_team(self, team_id: int, data: TeamUpdate) -> Team:
        team = self.get_team(team_id)
        return self.repo.update(team, data)

    def delete_team(self, team_id: int) -> None:
        team = self.get_team(team_id)
        self.repo.delete(team)
