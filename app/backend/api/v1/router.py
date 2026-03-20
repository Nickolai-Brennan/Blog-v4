from fastapi import APIRouter
from app.backend.api.v1.endpoints import players, teams, auth

api_router = APIRouter()

api_router.include_router(players.router)
api_router.include_router(teams.router)
api_router.include_router(auth.router)
