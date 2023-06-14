USE budgetbd; #mettre le nom de votre bd
DROP TABLE IF EXISTS Transaction;
CREATE TABLE Transaction (
                             id_transaction BIGINT PRIMARY KEY AUTO_INCREMENT,
                             nom_transaction VARCHAR(255) NOT NULL,
                             est_revenu TINYINT(1) NOT NULL,
                             montant DOUBLE NOT NULL,
                             categorie BIGINT NOT NULL,
                             date_transaction DATE NOT NULL,
                             FOREIGN KEY (categorie) REFERENCES Category(id_categorie)
);


