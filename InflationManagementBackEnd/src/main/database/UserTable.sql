USE budgetbd; #mettre le nom de votre bd
CREATE TABLE User (
                      id_user BIGINT PRIMARY KEY AUTO_INCREMENT,
                      nom VARCHAR(255),
                      prenom VARCHAR(255),
                      budget DOUBLE
);