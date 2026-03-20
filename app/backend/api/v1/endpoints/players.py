from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.backend.db.session import get_db
from app.backend.schemas.player import PlayerCreate, PlayerUpdate, PlayerResponse
from app.backend.services.player_service import PlayerService

router = APIRouter(prefix="/players", tags=["players"])


def get_player_service(db: Session = Depends(get_db)) -> PlayerService:
    return PlayerService(db)


@router.get("/", response_model=list[PlayerResponse])
def list_players(
    skip: int = 0,
    limit: int = 100,
    service: PlayerService = Depends(get_player_service),
):
    return service.list_players(skip=skip, limit=limit)


@router.get("/{player_id}", response_model=PlayerResponse)
def get_player(
    player_id: int,
    service: PlayerService = Depends(get_player_service),
):
    return service.get_player(player_id)


@router.post("/", response_model=PlayerResponse, status_code=status.HTTP_201_CREATED)
def create_player(
    data: PlayerCreate,
    service: PlayerService = Depends(get_player_service),
):
    return service.create_player(data)


@router.patch("/{player_id}", response_model=PlayerResponse)
def update_player(
    player_id: int,
    data: PlayerUpdate,
    service: PlayerService = Depends(get_player_service),
):
    return service.update_player(player_id, data)


@router.delete("/{player_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_player(
    player_id: int,
    service: PlayerService = Depends(get_player_service),
):
    service.delete_player(player_id)
