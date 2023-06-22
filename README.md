# Inflabudget

## Description
L'application permet de retracer son activité financière.
Un utilisateur est censé pouvoir se connecter, ajouter des transactions faites et planifier un budget mensuel.

## Visuels
Vous pouvez voir les maquettes de l'application sur [notre figma](https://www.figma.com/file/4VXhYpTNAilBTjuTyA8zNF/Projet-Informatique?type=design&node-id=14%3A656&mode=design&t=oysUCJ67MVPNyyvj-1)

## Installation
### Pour le front
Il faut juste avoir  node installé sur sa machine

### Pour le back
Il faut d'abord s'occuper de la base de données. Vous devez créer une base de données sur MySQL et la nommer comme vous voulez.
Vous verrez dans le dossier InflationManagementBackEnd/src/main/resources/database, les fichiers nécessaires pour créer les tables et ajouter des données de base pour les tests.
Si vous souhaitez tester avec ces données, deux utilisateurs ont été créés : 
- Eren Jager, eren.jager@maria.com, password123
- Jane Smith, jane.smith@outlook.com, secret456 


Pour exécuter le code, vous devez configurer votre éditeur et ajouter des variables d'environnement :
- DB_URL (l'url de votre base de données) sous le format jdbc:mysql://localhost:3306/nom_de_votre_base_de_données
- DB_USERNAME, le nom d'utilisateur pour vous connecter à votre base de données
- DB_PASSWD, le mot de passe pour vous connecter à votre base de données


## Auteurs
 - MBOUP Issa
 - COLY François Xavier
 - NDIAYE Antoine Latgrand
 - SONKO Ndeye Fatou
 - EL HABCHAOUI Nawfal