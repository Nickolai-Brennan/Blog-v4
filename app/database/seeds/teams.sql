-- Sample team seed data
INSERT INTO teams (name, city) VALUES
    ('City United',   'New York'),
    ('River FC',      'Los Angeles'),
    ('Harbor Hawks',  'Seattle')
ON CONFLICT DO NOTHING;
