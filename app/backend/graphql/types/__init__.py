import strawberry
from typing import Optional


@strawberry.type
class PlayerType:
    id: int
    name: str
    position: str
    team_id: Optional[int] = None


@strawberry.type
class TeamType:
    id: int
    name: str
    city: str
