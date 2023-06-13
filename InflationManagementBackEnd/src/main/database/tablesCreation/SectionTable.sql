USE budgetDB; #mettre le nom de votre bd;
CREATE TABLE Section (
                          id_section BIGINT AUTO_INCREMENT PRIMARY KEY,
                          nom_section VARCHAR(255),
                          couleur_section VARCHAR(255)
);
