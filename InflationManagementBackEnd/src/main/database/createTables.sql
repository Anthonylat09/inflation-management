DROP TABLE IF EXISTS User;
CREATE TABLE User (
                      id_user BIGINT PRIMARY KEY AUTO_INCREMENT,
                      nom VARCHAR(255) NOT NULL,
                      prenom VARCHAR(255) NOT NULL,
                      email VARCHAR(255) NOT NULL UNIQUE,
                      password VARCHAR(255) NOT NULL,
                      budget DOUBLE,
                      role VARCHAR(255) NOT NULL DEFAULT 'USER'
);

CREATE TABLE Section (
                         id_section BIGINT AUTO_INCREMENT PRIMARY KEY,
                         nom_section VARCHAR(255),
                         couleur_section VARCHAR(255)
);

DROP TABLE IF EXISTS Category;
CREATE TABLE Category (
                          id_categorie BIGINT PRIMARY KEY AUTO_INCREMENT,
                          nom_categorie VARCHAR(255) NOT NULL,
                          budget_categorie DOUBLE,
                          couleur_categorie VARCHAR(255),
                          section_id bigint,
                          foreign key (section_id) references Section(id_section)
);

DROP TABLE IF EXISTS Transaction;
CREATE TABLE Transaction (
                             id_transaction BIGINT PRIMARY KEY AUTO_INCREMENT,
                             nom_transaction VARCHAR(255) NOT NULL,
                             est_revenu TINYINT(1) NOT NULL,
                             montant DOUBLE NOT NULL,
                             id_categorie BIGINT NOT NULL,
                             id_user BIGINT NOT NULL,
                             date DATE NOT NULL,
                             FOREIGN KEY (id_categorie) REFERENCES Category(id_categorie),
                             FOREIGN KEY  (id_user) REFERENCES User(id_user)
);
