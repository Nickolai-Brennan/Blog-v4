import pytest
from httpx import AsyncClient
from app.backend.main import app


@pytest.mark.asyncio
async def test_list_players_empty(monkeypatch):
    """GET /api/v1/players/ returns an empty list when no players exist."""
    from app.backend.services.player_service import PlayerService

    monkeypatch.setattr(PlayerService, "list_players", lambda self, **kw: [])

    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/api/v1/players/")
    assert response.status_code == 200
    assert response.json() == []


@pytest.mark.asyncio
async def test_get_player_not_found(monkeypatch):
    """GET /api/v1/players/999 returns 404 when player does not exist."""
    from fastapi import HTTPException
    from app.backend.services.player_service import PlayerService

    def raise_404(self, player_id):
        raise HTTPException(status_code=404, detail="Player 999 not found")

    monkeypatch.setattr(PlayerService, "get_player", raise_404)

    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/api/v1/players/999")
    assert response.status_code == 404


@pytest.mark.asyncio
async def test_health_check():
    """GET /health returns 200 with status ok."""
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
