USE budgetbd; #mettre le nom de votre bd
DROP TABLE IF EXISTS Category;
CREATE TABLE Category (
                          id_categorie BIGINT PRIMARY KEY AUTO_INCREMENT,
                          nom_categorie VARCHAR(255) NOT NULL,
                          budget_categorie DOUBLE
);