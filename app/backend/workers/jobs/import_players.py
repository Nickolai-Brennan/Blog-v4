import csv
import io
from app.backend.workers import celery_app
from app.backend.core.logging import get_logger

logger = get_logger(__name__)


@celery_app.task(bind=True, name="workers.import_players")
def import_players_from_csv(self, csv_content: str) -> dict:
    """Import players from a CSV string. Expected columns: name, position, team_id."""
    logger.info("Starting player CSV import task %s", self.request.id)
    reader = csv.DictReader(io.StringIO(csv_content))
    imported = 0
    errors = []

    from app.backend.db.session import SessionLocal
    from app.backend.repositories.player_repository import PlayerRepository
    from app.backend.schemas.player import PlayerCreate

    db = SessionLocal()
    try:
        repo = PlayerRepository(db)
        for row in reader:
            try:
                data = PlayerCreate(
                    name=row["name"],
                    position=row["position"],
                    team_id=int(row["team_id"]) if row.get("team_id") else None,
                )
                repo.create(data)
                imported += 1
            except Exception as exc:
                db.rollback()
                errors.append({"row": row, "error": str(exc)})
    finally:
        db.close()

    logger.info("Import complete: %d imported, %d errors", imported, len(errors))
    return {"imported": imported, "errors": errors}
