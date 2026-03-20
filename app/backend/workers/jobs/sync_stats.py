from app.backend.workers import celery_app
from app.backend.core.logging import get_logger

logger = get_logger(__name__)


@celery_app.task(bind=True, name="workers.sync_stats")
def sync_player_stats(self) -> dict:
    """Sync player statistics from an external source (stub implementation)."""
    logger.info("Starting stats sync task %s", self.request.id)

    from app.backend.db.session import SessionLocal
    from app.backend.repositories.player_repository import PlayerRepository

    db = SessionLocal()
    synced = 0
    try:
        repo = PlayerRepository(db)
        players = repo.list_all()
        for player in players:
            # TODO: replace with real external API call
            logger.debug("Syncing stats for player %d: %s", player.id, player.name)
            synced += 1
    finally:
        db.close()

    logger.info("Stats sync complete: %d players synced", synced)
    return {"synced": synced}
