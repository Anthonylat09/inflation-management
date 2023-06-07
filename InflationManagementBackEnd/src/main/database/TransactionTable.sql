USE budgetbd; #mettre le nom de votre bd
CREATE TABLE Transaction (
                             id_transaction BIGINT PRIMARY KEY AUTO_INCREMENT,
                             nom_transaction VARCHAR(255),
                             est_revenu TINYINT(1),
                             montant DOUBLE,
                             categorie BIGINT,
                             date DATE,
                             FOREIGN KEY (categorie) REFERENCES Category(id_categorie)
);