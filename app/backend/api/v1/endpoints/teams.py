from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.backend.db.session import get_db
from app.backend.schemas.team import TeamCreate, TeamUpdate, TeamResponse
from app.backend.services.team_service import TeamService

router = APIRouter(prefix="/teams", tags=["teams"])


def get_team_service(db: Session = Depends(get_db)) -> TeamService:
    return TeamService(db)


@router.get("/", response_model=list[TeamResponse])
def list_teams(
    skip: int = 0,
    limit: int = 100,
    service: TeamService = Depends(get_team_service),
):
    return service.list_teams(skip=skip, limit=limit)


@router.get("/{team_id}", response_model=TeamResponse)
def get_team(
    team_id: int,
    service: TeamService = Depends(get_team_service),
):
    return service.get_team(team_id)


@router.post("/", response_model=TeamResponse, status_code=status.HTTP_201_CREATED)
def create_team(
    data: TeamCreate,
    service: TeamService = Depends(get_team_service),
):
    return service.create_team(data)


@router.patch("/{team_id}", response_model=TeamResponse)
def update_team(
    team_id: int,
    data: TeamUpdate,
    service: TeamService = Depends(get_team_service),
):
    return service.update_team(team_id, data)


@router.delete("/{team_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_team(
    team_id: int,
    service: TeamService = Depends(get_team_service),
):
    service.delete_team(team_id)
