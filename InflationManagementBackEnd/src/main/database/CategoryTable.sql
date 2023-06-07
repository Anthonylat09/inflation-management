USE budgetbd; #mettre le nom de votre bd
CREATE TABLE Category (
                          id_categorie BIGINT PRIMARY KEY AUTO_INCREMENT,
                          nom_categorie VARCHAR(255),
                          budget_categorie DOUBLE
);