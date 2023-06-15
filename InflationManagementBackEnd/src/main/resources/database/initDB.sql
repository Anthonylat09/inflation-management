
-- USER
INSERT INTO user (nom, prenom, email, password, budget, role)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '$2a$12$f/JEL0SNp2gkYOkBwZOGGeci4tlcEqcJDNyGWEb10Ej2R.NOKA462', 1000.0, 'USER'),
    ('Jane', 'Smith', 'jane.smith@example.com', '$2a$12$cugZO8.wqMFbHtSw44ai3uKlKpOzvDqLft/6ZK/hOP1c7wJ45vgSK', 2000.0, 'ADMIN');


-- SECTION
INSERT INTO section (nom_section, couleur_section)
VALUES
    ('Section 1', 'Rouge'),
    ('Section 2', 'Jaune'),
    ('Section 3', 'Orange');


-- CATEGORY
INSERT INTO category (nom_categorie, budget_categorie, couleur_categorie, section_id)
VALUES
    ('Category 1', 1000.00, 'Rouge', 1),
    ('Category 2', 2000.00, 'Rouge', 2),
    ('Category 3', 3000.00, 'Vert', 3);


-- TRANSACTION
INSERT INTO transaction (nom_transaction, est_revenu, montant, id_user, id_categorie, date)
VALUES
    ('Transaction 1', TRUE, 100.00, 2, 1, '2023-06-01'),
    ('Transaction 2', FALSE, 50.00, 2, 2, '2023-06-02'),
    ('Transaction 3', TRUE, 200.00, 1, 1, '2023-06-03');