from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class PlayerBase(BaseModel):
    name: str
    position: str
    team_id: Optional[int] = None


class PlayerCreate(PlayerBase):
    pass


class PlayerUpdate(BaseModel):
    name: Optional[str] = None
    position: Optional[str] = None
    team_id: Optional[int] = None


class PlayerResponse(PlayerBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}
