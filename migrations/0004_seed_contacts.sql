INSERT OR IGNORE INTO contacts (id, label_fr, label_en, value, href, placement, published, sort_order, created_at, updated_at)
VALUES ('main-address', 'Site principal', 'Main site', 'Ancienne gare routière, Dakar, Douala', '', 'footer', 1, 1, datetime('now'), datetime('now'));

INSERT OR IGNORE INTO contacts (id, label_fr, label_en, value, href, placement, published, sort_order, created_at, updated_at)
VALUES ('second-address', 'Second site', 'Second site', 'Yassa, centre de santé La Bienveillance', '', 'footer', 1, 2, datetime('now'), datetime('now'));

INSERT OR IGNORE INTO contacts (id, label_fr, label_en, value, href, placement, published, sort_order, created_at, updated_at)
VALUES ('main-phone', 'Téléphone', 'Phone', '+237 670 103 404', 'tel:+237670103404', 'footer,home_strip,appointments', 1, 3, datetime('now'), datetime('now'));

INSERT OR IGNORE INTO contacts (id, label_fr, label_en, value, href, placement, published, sort_order, created_at, updated_at)
VALUES ('emergency-phone', 'Urgences', 'Emergency', '+237 693 32 16 84', 'tel:+237693321684', 'footer,home_strip', 1, 4, datetime('now'), datetime('now'));
