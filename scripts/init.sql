DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id_user BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    budget DOUBLE,
    role VARCHAR(255) NOT NULL DEFAULT 'USER'
);

DROP TABLE IF EXISTS section;
CREATE TABLE section (
    id_section BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom_section VARCHAR(255),
    couleur_section VARCHAR(255)
);

DROP TABLE IF EXISTS category;
CREATE TABLE category (
    id_categorie BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom_categorie VARCHAR(255) NOT NULL,
    budget_categorie DOUBLE,
    couleur_categorie VARCHAR(255),
    section_id BIGINT,
    user_id BIGINT,
    FOREIGN KEY (section_id) REFERENCES section(id_section),
    FOREIGN KEY (user_id) REFERENCES user(id_user)
);

DROP TABLE IF EXISTS transaction;
CREATE TABLE transaction (
    id_transaction BIGINT PRIMARY KEY AUTO_INCREMENT,
    nom_transaction VARCHAR(255) NOT NULL,
    est_revenu TINYINT(1) NOT NULL,
    montant DOUBLE NOT NULL,
    id_categorie BIGINT NOT NULL,
    id_user BIGINT NOT NULL,
    date_transaction DATE NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES category(id_categorie),
    FOREIGN KEY (id_user) REFERENCES user(id_user)
);

INSERT INTO user (nom, prenom, email, password, budget, role)
VALUES ('Eren', 'Jager', 'eren.jager@maria.com', '$2a$12$f/JEL0SNp2gkYOkBwZOGGeci4tlcEqcJDNyGWEb10Ej2R.NOKA462', 1000.0, 'USER'),
       ('Jane', 'Smith', 'jane.smith@outlook.com', '$2a$12$cugZO8.wqMFbHtSw44ai3uKlKpOzvDqLft/6ZK/hOP1c7wJ45vgSK', 2000.0, 'USER');

INSERT INTO section (id_section, nom_section, couleur_section)
VALUES (1, 'Nourriture', '#24C35A'),
       (2, 'Logement', '#FF0000FF'),
       (3, 'Style de vie', '#2476C3'),
       (4, 'Economies', '#FF7300'),
       (5, 'Revenus', '#ffffff');

INSERT INTO category (id_categorie, nom_categorie, budget_categorie, couleur_categorie, section_id, user_id)
VALUES (1, 'Course', 14.5, '#ff7f00', 1, 1),
       (2, 'Waste', 1.00, '#808080', 1, 1),
       (3, 'Loyer', 550, '#008000', 2, 1),
       (4, 'Divertissement', 100, '#0000ff', 3, 1),
       (5, 'Epargne', 500, '#ff0000', 4, 1),
       (6, 'Bourse', 650, '#FFFF00', 5, 1);

INSERT INTO transaction (id_transaction, nom_transaction, est_revenu, montant, id_user, id_categorie, date_transaction)
VALUES (1, 'Leclerc', FALSE, 14.5, 2, 1, '2023-06-01'),
       (2, 'MaxiCoffee', FALSE, 1.00, 2, 2, '2023-06-02'),
       (3, 'Bourse Juin', TRUE, 599, 1, 6, '2023-06-03');
