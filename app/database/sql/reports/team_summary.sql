-- team_summary.sql
-- Report: team roster summary with player counts

SELECT
    t.id                          AS team_id,
    t.name                        AS team_name,
    t.city,
    COUNT(p.id)                   AS total_players,
    COUNT(CASE WHEN p.position = 'Forward'    THEN 1 END) AS forwards,
    COUNT(CASE WHEN p.position = 'Midfielder' THEN 1 END) AS midfielders,
    COUNT(CASE WHEN p.position = 'Defender'   THEN 1 END) AS defenders,
    COUNT(CASE WHEN p.position = 'Goalkeeper' THEN 1 END) AS goalkeepers,
    t.created_at                  AS team_created_at
FROM teams t
LEFT JOIN players p ON p.team_id = t.id
GROUP BY t.id, t.name, t.city, t.created_at
ORDER BY total_players DESC, t.name;
