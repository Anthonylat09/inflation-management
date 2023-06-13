USE budgetbd; #mettre le nom de votre bd

INSERT INTO Transaction (nom_transaction, est_revenu, montant, categorie, date)
VALUES
    ('Transaction 1', TRUE, 100.00, 1, '2023-06-01'),
    ('Transaction 2', FALSE, 50.00, 2, '2023-06-02'),
    ('Transaction 3', TRUE, 200.00, 1, '2023-06-03');
