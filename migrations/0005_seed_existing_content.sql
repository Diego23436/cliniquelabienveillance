-- Promote the current public content into admin-managed records.
-- INSERT OR IGNORE keeps this migration safe to run once on an existing database.

INSERT OR IGNORE INTO events (id, title_fr, title_en, description_fr, description_en, image_url, published, sort_order, created_at, updated_at)
VALUES
('minister-representative-visit', 'La clinique recoit la representante du Ministre de la Sante', 'Our clinic welcomes the Minister of Health representative', 'Une visite placee sous le signe de l ecoute, de la proximite et du renforcement des soins pour notre communaute.', 'A visit centered on listening, proximity, and stronger healthcare support for our community.', '/event1.jpg', 1, 1, datetime('now'), datetime('now')),
('minister-representative-team', 'Un echange avec nos equipes de terrain', 'A conversation with our care teams', 'Cette rencontre a permis de partager le travail quotidien de nos equipes et les besoins concrets de nos patients.', 'The meeting highlighted our teams daily work and the practical needs of the patients we serve.', '/event2.jpg', 1, 2, datetime('now'), datetime('now')),
('minister-representative-community', 'Construire ensemble une sante plus accessible', 'Building more accessible healthcare together', 'La Clinique La Bienveillance poursuit son engagement pour des soins humains, accessibles et disponibles a Douala.', 'Clinique La Bienveillance continues its commitment to human, accessible care in Douala.', '/event3.jpg', 1, 3, datetime('now'), datetime('now')),
('minister-representative-commitment', 'Une visite qui encourage notre engagement', 'A visit that strengthens our commitment', 'Nous remercions nos invites et partenaires pour ce temps de dialogue autour de l avenir de notre centre de sante.', 'We thank our guests and partners for this dialogue about the future of our health center.', '/event4.jpg', 1, 4, datetime('now'), datetime('now'));

INSERT OR IGNORE INTO team (id, name, role_fr, role_en, bio_fr, bio_en, department, phone, photo_url, published, sort_order, created_at, updated_at)
VALUES
('team-dr-soh', 'Dr. Soh', 'Medecin Generaliste', 'General Practitioner', 'Accompagnement global en medecine generale, avec une specialisation en sante reproductive et perinatale.', 'Comprehensive general practice care with a focus on reproductive and perinatal health.', 'medecine', '+237677609056', '/imgteam1.jpg', 1, 1, datetime('now'), datetime('now')),
('team-negou-liliane', 'Dr. Negou Liliane', 'Medecin Generaliste', 'General Practitioner', 'Suivi des adultes et consultations de garde en soiree.', 'Adult follow-up care and evening on-call consultations.', 'medecine', '+237650128282', '/pathologies/imgteam2.jpg', 1, 2, datetime('now'), datetime('now')),
('team-flaure-tchopda', 'Dr Flaure Tchopda Epse Kamdoum', 'Biologiste Medicale', 'Medical Biologist', 'Analyses de routine et remise des resultats sous 24h.', 'Routine analyses with results delivered within 24 hours.', 'labo', '+237697791411', '/pathologies/imgteam3.jpg', 1, 3, datetime('now'), datetime('now')),
('team-tene-soh', 'Dr Tene Soh Dylan Parfait', 'Medecin Generaliste', 'General Practitioner', 'Suivi des adultes et consultations de garde en soiree.', 'Adult follow-up care and evening on-call consultations.', 'medecine', '+237677609056', '/pathologies/imgteam4.png', 1, 4, datetime('now'), datetime('now')),
('team-hameni-romario', 'Hameni Romario', 'Sage-femme', 'Midwife', 'Accompagnement obstetrical complet et suivi prenatal pour les patientes et leurs familles.', 'Complete obstetric support and prenatal follow-up for patients and their families.', 'medecine', '+237696641068', '/pathologies/imgteam5.png', 1, 5, datetime('now'), datetime('now')),
('team-fotso-valerie', 'Mme Fotso Valerie', 'Preparatrice en Pharmacie', 'Pharmacy Assistant', 'Coordination des preparations pharmaceutiques et suivi des stocks essentiels.', 'Coordinates pharmaceutical preparation and manages essential stock levels.', 'pharmacie', '+237699157869', '/pathologies/imgteam6.png', 1, 6, datetime('now'), datetime('now')),
('team-samen-ornella', 'Samen Ornella', 'Technicienne de Laboratoire', 'Lab Technician', 'Assure le lien entre le laboratoire et la pharmacie pour la preparation des traitements.', 'Bridges the laboratory and pharmacy for treatment preparation.', 'pharmacie', '+237674299039', '/pathologies/imgteam7.png', 1, 7, datetime('now'), datetime('now')),
('team-tchassi-danielle', 'Tchassi Tsinkou Danielle', 'Technicien de Laboratoire', 'Lab Technician', 'Specialiste des prelevements biologiques et du support technique en pharmacie principale.', 'Specializes in biological sampling and technical support for the main pharmacy.', 'pharmacie', '+237693953876', '/pathologies/imgteam8.png', 1, 8, datetime('now'), datetime('now'));

INSERT OR IGNORE INTO gallery (id, title_fr, title_en, type, image_url, category, published, sort_order, created_at, updated_at)
VALUES
('clinic-reception', 'Accueil de la Clinique La Bienveillance', 'Clinique La Bienveillance reception', 'image', '/team-hero.png', 'clinic', 1, 1, datetime('now'), datetime('now')),
('services-overview', 'Services coordonnes', 'Coordinated services', 'image', '/service-banner.png', 'services', 1, 2, datetime('now'), datetime('now')),
('clinic-entry-photo', 'Entree de la clinique', 'Clinic entrance', 'image', '/img1.png', 'clinic', 1, 3, datetime('now'), datetime('now')),
('clinic-care-photo', 'Espace de soins', 'Care area', 'image', '/img2.png', 'clinic', 1, 4, datetime('now'), datetime('now')),
('clinic-detail-photo', 'Detail du site', 'Site detail', 'image', '/img3.png', 'clinic', 1, 5, datetime('now'), datetime('now')),
('prevention-program', 'Prevention et depistage', 'Prevention and screening', 'image', '/prevention-banner.png', 'prevention', 1, 6, datetime('now'), datetime('now')),
('pathology-care', 'Pathologies prises en charge', 'Conditions treated', 'image', '/pathology-banner.png', 'services', 1, 7, datetime('now'), datetime('now')),
('respiratory-care', 'Sante respiratoire', 'Respiratory health', 'image', '/pathologies/respiratory.png', 'services', 1, 8, datetime('now'), datetime('now')),
('cardio-screening', 'Suivi cardiovasculaire', 'Cardiovascular follow-up', 'image', '/pathologies/cardiovascular.png', 'prevention', 1, 9, datetime('now'), datetime('now')),
('infection-care', 'Infections courantes', 'Common infections', 'image', '/pathologies/infectious.jpeg', 'services', 1, 10, datetime('now'), datetime('now'));
