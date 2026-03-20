from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class TeamBase(BaseModel):
    name: str
    city: str


class TeamCreate(TeamBase):
    pass


class TeamUpdate(BaseModel):
    name: Optional[str] = None
    city: Optional[str] = None


class TeamResponse(TeamBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}
