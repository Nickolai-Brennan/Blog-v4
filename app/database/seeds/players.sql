-- Sample player seed data
INSERT INTO players (name, position, team_id) VALUES
    ('Alice Striker',   'Forward',    1),
    ('Bob Keeper',      'Goalkeeper', 1),
    ('Carol Defender',  'Defender',   2),
    ('Dave Playmaker',  'Midfielder', 2),
    ('Eve Winger',      'Winger',     3),
    ('Frank Sweeper',   'Defender',   NULL)
ON CONFLICT DO NOTHING;
