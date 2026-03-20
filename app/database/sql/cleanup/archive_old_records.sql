-- archive_old_records.sql
-- Cleanup: archive players and teams older than a configurable cutoff date.
-- Replace :cutoff_date with the target date (e.g., NOW() - INTERVAL '2 years').

BEGIN;

-- Archive players to archive table (create if not exists)
CREATE TABLE IF NOT EXISTS players_archive (LIKE players INCLUDING ALL);

INSERT INTO players_archive
SELECT * FROM players
WHERE created_at < :cutoff_date;

-- Remove archived players from live table
DELETE FROM players
WHERE created_at < :cutoff_date;

-- Archive teams with no remaining players
CREATE TABLE IF NOT EXISTS teams_archive (LIKE teams INCLUDING ALL);

INSERT INTO teams_archive
SELECT t.* FROM teams t
LEFT JOIN players p ON p.team_id = t.id
WHERE p.id IS NULL
  AND t.created_at < :cutoff_date;

DELETE FROM teams
WHERE id IN (SELECT id FROM teams_archive);

COMMIT;
