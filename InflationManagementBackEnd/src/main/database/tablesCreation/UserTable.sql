USE budgetDB; #mettre le nom de votre bd
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