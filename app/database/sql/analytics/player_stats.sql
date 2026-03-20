-- player_stats.sql
-- Analytics view: player count and distribution by position per team

CREATE OR REPLACE VIEW v_player_stats AS
SELECT
    t.id           AS team_id,
    t.name         AS team_name,
    p.position,
    COUNT(p.id)    AS player_count,
    MIN(p.created_at) AS earliest_signing,
    MAX(p.created_at) AS latest_signing
FROM teams t
LEFT JOIN players p ON p.team_id = t.id
GROUP BY t.id, t.name, p.position
ORDER BY t.name, player_count DESC;

-- Query: top positions across all teams
SELECT
    position,
    COUNT(*) AS total_players
FROM players
GROUP BY position
ORDER BY total_players DESC;
