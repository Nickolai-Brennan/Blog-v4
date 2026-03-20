from typing import Optional
from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.backend.repositories.player_repository import PlayerRepository
from app.backend.schemas.player import PlayerCreate, PlayerUpdate, PlayerResponse
from app.backend.models.player import Player


class PlayerService:
    def __init__(self, db: Session) -> None:
        self.repo = PlayerRepository(db)

    def list_players(self, skip: int = 0, limit: int = 100) -> list[Player]:
        return self.repo.list_all(skip=skip, limit=limit)

    def get_player(self, player_id: int) -> Player:
        player = self.repo.get_by_id(player_id)
        if not player:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Player {player_id} not found",
            )
        return player

    def create_player(self, data: PlayerCreate) -> Player:
        return self.repo.create(data)

    def update_player(self, player_id: int, data: PlayerUpdate) -> Player:
        player = self.get_player(player_id)
        return self.repo.update(player, data)

    def delete_player(self, player_id: int) -> None:
        player = self.get_player(player_id)
        self.repo.delete(player)
