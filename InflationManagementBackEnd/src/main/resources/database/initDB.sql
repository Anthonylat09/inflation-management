-- USER
INSERT INTO user (nom, prenom, email, password, budget, role)
VALUES ('Eren', 'Jager', 'eren.jager@maria.com', '$2a$12$f/JEL0SNp2gkYOkBwZOGGeci4tlcEqcJDNyGWEb10Ej2R.NOKA462', 1000.0,
        'USER'),
       ('Jane', 'Smith', 'jane.smith@outlook.com', '$2a$12$cugZO8.wqMFbHtSw44ai3uKlKpOzvDqLft/6ZK/hOP1c7wJ45vgSK',
        2000.0, 'USER');


-- SECTION
INSERT INTO section (id_section, nom_section, couleur_section)
VALUES (1, 'Nourriture', '#24C35A'),
       (2, 'Logement', '#FF0000FF'),
       (3, 'Style de vie', '#2476C3'),
       (4, 'Economies', '#FF7300'),
       (5, 'Revenus', '#ffffff');


-- CATEGORY
INSERT INTO category (id_categorie, nom_categorie, budget_categorie, couleur_categorie, section_id, user_id)
VALUES (1, 'Course', 14.5, '#ff7f00', 1, 1),
       (2, 'Waste', 1.00, '#808080', 1, 1),
       (3, 'Loyer', 550, '#008000', 2, 1),
       (4, 'Divertissement', 100, '#0000ff', 3, 1),
       (5, 'Epargne', 500, '#ff0000', 4, 1),
       (6, 'Bourse', 650, '#FFFF00', 5, 1);


-- TRANSACTION
INSERT INTO transaction (id_transaction, nom_transaction, est_revenu, montant, id_user, id_categorie, date_transaction)
VALUES (1, 'Leclerc', FALSE, 14.5, 2, 1, '2023-06-01'),
       (2, 'MaxiCoffee', FALSE, 1.00, 2, 2, '2023-06-02'),
       (3, 'Bourse Juin', TRUE, 599, 1, 6, '2023-06-03');