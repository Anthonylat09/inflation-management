USE budgetbd; #mettre le nom de votre bd

INSERT INTO User (nom, prenom, email, password, budget, role)
VALUES ('John', 'Doe', 'john.doe@example.com', '$2a$12$f/JEL0SNp2gkYOkBwZOGGeci4tlcEqcJDNyGWEb10Ej2R.NOKA462', 1000.0, 'USER');

INSERT INTO User (nom, prenom, email, password, budget, role)
VALUES ('Jane', 'Smith', 'jane.smith@example.com', '$2a$12$cugZO8.wqMFbHtSw44ai3uKlKpOzvDqLft/6ZK/hOP1c7wJ45vgSK', 2000.0, 'ADMIN');
