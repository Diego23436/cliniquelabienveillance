-- Make seeded phone contacts available in every public area that consumes them.
UPDATE contacts SET placement = 'footer,home_strip,appointments' WHERE id = 'main-phone';
UPDATE contacts SET placement = 'footer,home_strip' WHERE id = 'emergency-phone';
