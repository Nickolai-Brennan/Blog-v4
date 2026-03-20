from typing import Optional
from sqlalchemy.orm import Session

from app.backend.models.team import Team
from app.backend.schemas.team import TeamCreate, TeamUpdate


class TeamRepository:
    def __init__(self, db: Session) -> None:
        self.db = db

    def list_all(self, skip: int = 0, limit: int = 100) -> list[Team]:
        return self.db.query(Team).offset(skip).limit(limit).all()

    def get_by_id(self, team_id: int) -> Optional[Team]:
        return self.db.query(Team).filter(Team.id == team_id).first()

    def create(self, data: TeamCreate) -> Team:
        team = Team(**data.model_dump())
        self.db.add(team)
        self.db.commit()
        self.db.refresh(team)
        return team

    def update(self, team: Team, data: TeamUpdate) -> Team:
        update_data = data.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(team, field, value)
        self.db.commit()
        self.db.refresh(team)
        return team

    def delete(self, team: Team) -> None:
        self.db.delete(team)
        self.db.commit()
