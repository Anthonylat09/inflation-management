USE budgetbd; #mettre le nom de votre bd

INSERT INTO Transaction (nom_transaction, est_revenu, montant, categorie, date)
VALUES ('Transaction 1', 1, 100.0, 1, '2023-06-10');

INSERT INTO Transaction (nom_transaction, est_revenu, montant, categorie, date)
VALUES ('Transaction 2', 0, 50.0, 2, '2023-06-11');

INSERT INTO Transaction (nom_transaction, est_revenu, montant, categorie, date)
VALUES ('Transaction 3', 1, 200.0, 1, '2023-06-12');
