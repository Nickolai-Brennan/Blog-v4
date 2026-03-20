from typing import Optional
from sqlalchemy.orm import Session

from app.backend.models.player import Player
from app.backend.models.team import Team


def get_player_or_none(db: Session, player_id: int) -> Optional[Player]:
    return db.query(Player).filter(Player.id == player_id).first()


def get_team_or_none(db: Session, team_id: int) -> Optional[Team]:
    return db.query(Team).filter(Team.id == team_id).first()
