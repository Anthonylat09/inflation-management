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
                          section_id bigint,
                          user_id bigint,
                          foreign key (section_id) references section(id_section),
                          foreign key (user_id) references user(id_user)
);

DROP TABLE IF EXISTS transaction;
CREATE TABLE transaction (
                             id_transaction BIGINT PRIMARY KEY AUTO_INCREMENT,
                             nom_transaction VARCHAR(255) NOT NULL,
                             est_revenu TINYINT(1) NOT NULL,
                             montant DOUBLE NOT NULL,
                             id_categorie BIGINT NOT NULL,
                             id_user BIGINT NOT NULL,
                             date DATE NOT NULL,
                             FOREIGN KEY (id_categorie) REFERENCES category(id_categorie),
                             FOREIGN KEY  (id_user) REFERENCES user(id_user)
);
